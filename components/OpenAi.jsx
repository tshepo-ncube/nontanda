// OpenAIIntegration.js
import OpenAI from "@openai/sdk";

class OpenAIIntegration {
  constructor(apiKey) {
    this.openai = new OpenAI(apiKey);
  }

  async createAssistant(name, instructions) {
    const assistant = await this.openai.beta.assistants.create({
      name,
      instructions,
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview",
    });
    return assistant.id;
  }

  async sendMessage(assistantId, message) {
    const thread = await this.openai.beta.threads.create();
    await this.openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });
    const run = await this.openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantId,
    });
    return { threadId: thread.id, runId: run.id };
  }

  async getResponse(threadId, runId) {
    let runStatus = await this.openai.beta.threads.runs.retrieve(
      threadId,
      runId
    );
    if (runStatus.status === "completed") {
      let messages = await this.openai.beta.threads.messages.list(threadId);
      return messages.data.map((msg) => msg.content[0].text.value).join("\n");
    } else {
      return "Waiting for response...";
    }
  }
}

export default OpenAIIntegration;
