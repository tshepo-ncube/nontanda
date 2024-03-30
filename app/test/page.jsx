"use client";
import React, { useState, useEffect } from "react";
import OpenAI from "openai"; // Assuming OpenAI library is available

const OpenAIAssistantComponent = () => {
  const [threadId, setThreadId] = useState(null);
  const [runId, setRunId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const initializeAssistant = async () => {
      const openai = new OpenAI({
        apiKey: "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",
      });

      // Create assistant
      const assistant = await openai.beta.assistants.create({
        name: "Math Tutor",
        instructions:
          "You are a reflection assistant, helping people understand their feelings",
        tools: [{ type: "code_interpreter" }],
        model: "gpt-4-1106-preview",
      });

      // Create thread
      const thread = await openai.beta.threads.create();

      // Set thread and assistant IDs
      setThreadId(thread.id);
      setRunId(
        (
          await openai.beta.threads.runs.create(thread.id, {
            assistant_id: assistant.id,
            instructions: "Please address the user as Tshepo Ncube.",
          })
        ).id
      );
    };

    initializeAssistant();
  }, []);

  const sendMessage = async () => {
    console.log("Message sent");
    if (inputMessage.trim() !== "") {
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: inputMessage,
      });
      setInputMessage("");
    }
  };

  const checkStatusAndPrintMessages = async () => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    if (runStatus.status === "completed") {
      let messagesData = await openai.beta.threads.messages.list(threadId);
      setMessages(messagesData.data);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkStatusAndPrintMessages();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [threadId, runId]);

  return (
    <div style={{ marginTop: 100, padding: 100 }}>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.role.charAt(0).toUpperCase() + msg.role.slice(1)}:{" "}
            {msg.content[0].text.value}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          placeholder="Type a messageee..."
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default OpenAIAssistantComponent;
