// Import necessary dependencies
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import AddIcon from "@mui/icons-material/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "./Navbar";
import ModalNavbar from "./ModalNavbar";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// GoalView component
const GoalView = ({ data }) => {
  const [messages, setMessages] = useState([]);
  const [msgsLoading, setMsgsLoading] = useState(true);
  const divRef = useRef(null);
  const [value, setValue] = React.useState(2);
  const [newMessage, setNewMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [assistantID, setAssistantID] = useState(null);
  const [threadID, setThreadID] = useState(null);
  const [runID, setRunID] = useState(null);
  const [placeholderText, setPlaceholderText] = useState(
    "In what ways have my habits contributed to or hindered my progress?"
  );
  const [loading, setLoading] = useState(false);
  const placeholderOptions = [
    "Are there any patterns or trends in your behavior that I've noticed?",
    "Have your priorities or values shifted during this process?",
    "How has your mindset evolved since you set this goal?",
    "What strengths or skills have you discovered or developed along the way?",
    "What challenges did you face today, how did you overcome them?",
    "What have you learned about yourself during this journey?",
    "How are you going to approach this goal moving forward?",
  ];
  // Calculate the number of rows based on the length of the text
  const calculateRows = (text) => {
    const newLines = (text.match(/\n/g) || []).length + 1;
    const rows = Math.min(5, newLines + 1); // Limit to 5 rows
    return rows;
  };
  const [timeLeft, setTimeLeft] = useState(12345674323);
  const waitForCompletion = async (threadId, runId) => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    while (runStatus.status !== "completed") {
      await delay(5000); // Wait for 5 seconds before checking again
      runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    }
    return runStatus;
  };

  const checkStatusAndPrintMessages = async (threadId, runId) => {
    await waitForCompletion(threadId, runId);
    let messages = await openai.beta.threads.messages.list(threadId);
    let msgList = messages.data;
    // If you want the messages in reverse chronological order, just sort them as such.
    // Since you're calling reverse() after sorting by created_at descending, it's equivalent to sorting by created_at ascending.
    msgList.sort((a, b) => a.created_at - b.created_at);
    sessionStorage.setItem("messages", JSON.stringify(msgList));
    setMessages(msgList);
    msgList.forEach((msg) => {
      const role = msg.role;
      // Ensure that msg.content[0] and msg.content[0].text exist before trying to access .value
      const content =
        msg.content[0] && msg.content[0].text
          ? msg.content[0].text.value
          : "Content missing";
      console.log(
        `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
      );
      console.log("\n");
    });
    let length = msgList.length;
    if (msgList[length - 1].role !== "user") {
      console.log("loading........");
      checkStatusAndPrintMessages(
        "thread_l8VaqVxLBVDL61e0tf4LEdxq",
        "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
      );
    } else {
      setLoading(false);
    }
    setMsgsLoading(false);
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const scrollToBottom = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  // Format seconds into DD:HH:MM:SS
  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderText(
        placeholderOptions[
          Math.floor(Math.random() * placeholderOptions.length)
        ]
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //scrollToBottom();
    // Example usage
    // if(threadID && runID){
    //   checkStatusAndPrintMessages(threadID, runID);
    // }
    //scrollToBottom();
    checkStatusAndPrintMessages(
      "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
    );
  }, [messages]);
  useEffect(() => {
    const cachedData = sessionStorage.getItem("messages");
    if (false) {
      setMessages(JSON.parse(cachedData));
    } else {
      // fetchData().then((apiData) => {
      //   sessionStorage.setItem("myData", JSON.stringify(apiData));
      //   setData(apiData);
      // });
      // checkStatusAndPrintMessages(
      //   "thread_l8VaqVxLBVDL61e0tf4LEdxq",
      //   "run_XdLBs1DUx2MIDcVkSWhX3SeJ"
      // );
    }
  }, []);
  const createAssistant = async () => {
    const assistant = await openai.beta.assistants.create({
      name: "Relflection Assistant",
      instructions:
        "You are a assistant designed to help people reflect on their journey towards their goal, helping people understand their feelings, help users know where their feelings come from, why they feel the way they feel. ",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview",
    });

    console.log(`assitant id : ${assistant.id}`);
    setAssistantID(assistant.id);
    const thread = await openai.beta.threads.create();
    console.log(`thread id : ${thread.id}`);
    setThreadID(thread.id);
    const message = await openai.beta.threads.messages.create(threadID, {
      role: "user",
      content: newMessage,
    });

    const run = await openai.beta.threads.runs.create(threadID, {
      assistant_id: assistantID,
      instructions: `Please address the user as Tshepo, his goal is '${data.title}', Please have a conversation with the user and answer in a paragraph less than 300 characters`,
    });
    console.log(`run id : ${run.id}`);
    setRunID(run.id);
  };

  const addReflection = () => {};
  return (
    <div className="flex flex-col items-center h-auto w-85 max-w-screen-lg mx-auto overflow-y-auto">
      <ModalNavbar title={data.title} />

      <div style={{ marginTop: 5, userSelect: "none" }}>
        <div className="bg-blue-200 w-full p-4 rounded-lg mb-4">
          <p className="text-black">{data.descr}</p>
        </div>

        <center>
          <Button variant="text" style={{ zIndex: -100 }} onClick={handleOpen}>
            view progress
          </Button>
        </center>

        <div className="bg-white-200 w-full p-2 pt-2 rounded-lg mb-4 border">
          <div class="flex flex-col">
            <div
              style={{ height: 500 }}
              className="flex flex-col max-h-80 h-80 overflow-y-auto mt-2"
              ref={divRef}
            >
              {/* <div className="bg-white p-2">
              <div className="bg-white p-2">
                <div className="bg-white border w-90 p-2 rounded-lg"></div>
              </div>
            </div> */}

              {/* <div className="bg-white p-2"> 
              <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                <p className="text-black" style={{ userSelect: "none" }}>
                  Reaching 1000 users on my app is more than just hitting a
                  number; it's about creating something that genuinely resonates
                  with people. This goal pushes me to dive deep into
                  understanding what users truly need and how my app can make a
                  difference in their lives. Every new user is a validation of
                  the hard work and passion I've poured into this project. It's
                  not just about marketing strategies or features; it's about
                  building connections and trust. As I move closer to this
                  milestone, I'm reminded that success is a blend of
                  persistence, innovation, and the ability to listen and adapt.
                  Each user's feedback is a golden opportunity for improvement,
                  making the journey towards 1000 users a deeply enriching
                  experience that goes beyond numbers.
                </p>
              </div>
            </div> */}

              {msgsLoading ? (
                <>
                  <Skeleton
                    variant="rounded"
                    style={{ marginBottom: 5, zIndex: -100 }}
                    width={"100%"}
                    height={50}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ marginBottom: 5, zIndex: -100 }}
                    width={"100%"}
                    height={50}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ marginBottom: 5, zIndex: -100 }}
                    width={"100%"}
                    height={50}
                  />
                  <Skeleton
                    variant="rounded"
                    style={{ marginBottom: 5, zIndex: -100 }}
                    width={"100%"}
                    height={50}
                  />
                </>
              ) : (
                <>
                  {messages.length === 0 ? (
                    <>
                      <div className="bg-white p-2">
                        <div className="bg-white border w-90 p-2 rounded-lg">
                          <p
                            className="text-black"
                            style={{ userSelect: "none" }}
                          >
                            please type a message...
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {messages.map((msg) =>
                        msg.role === "user" ? (
                          <>
                            <div className="bg-white p-2">
                              <div className=" bg-green-200  border w-90 p-2 rounded-lg mb-2">
                                <p
                                  className="text-black"
                                  style={{ userSelect: "none" }}
                                >
                                  {msg.content[0] && msg.content[0].text
                                    ? msg.content[0].text.value
                                    : "Content missing"}
                                </p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-white p-2">
                              <div className="bg-white border w-90 p-2 rounded-lg">
                                <p
                                  className="text-black"
                                  style={{ userSelect: "none" }}
                                >
                                  {msg.content[0] ? (
                                    msg.content[0].text.value
                                  ) : (
                                    <ThreeDots
                                      visible={true}
                                      height="20"
                                      width="40"
                                      color="#4fa94d"
                                      radius="9"
                                      ariaLabel="three-dots-loading"
                                      wrapperStyle={{}}
                                      wrapperClass=""
                                    />
                                  )}
                                </p>
                              </div>
                            </div>
                          </>
                        )
                      )}
                    </>
                  )}
                </>
              )}
            </div>

            {/* <div className="bg-white p-2"> 
              <div className="bg-white border w-90 p-2 rounded-lg">
                <p className="text-black" style={{ userSelect: "none" }}>
                  As I move closer to this milestone, I'm reminded that success
                  is a blend of persistence, innovation, and the ability to
                  listen and adapt. Each user's feedback is a golden opportunity
                  for improvement, making the journey towards 1000 users a
                  deeply enriching experience that goes beyond numbers.
                </p>
              </div>
            </div> */}

            <center>
              {messages.length > 1 ? (
                <>
                  <div className="flex items-center w-full">
                    <textarea
                      className="flex-1 h-22 p-2 mr-2 resize-none rounded border "
                      placeholder={placeholderText}
                      value={newMessage}
                      rows={calculateRows(newMessage)}
                      onChange={(e) => setNewMessage(e.target.value)}
                      // readOnly
                    />

                    <div className="bg-green-700 hover:bg-green-500 z-0 rounded-full shadow-md">
                      <Fab color="success" size="medium">
                        <SendIcon />
                      </Fab>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              {/* <button className="mt-2 text-black font-bold bg-yellow-400 w-full hover:bg-yellow-600 p-2 rounded-full shadow-md">
                subscribe to respond
              </button> */}
            </center>
            <hr style={{ marginTop: 8 }} />
            {messages.length < 1 ? (
              <>
                <div>
                  <center>
                    <label
                      style={{ marginBottom: -10 }}
                      for="email"
                      className=" block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Reflect on your journey
                    </label>
                  </center>
                  <div className="flex items-center p-[1.5] mt-4 mb-2 w-full">
                    <textarea
                      className="flex-1 p-2 h-80 max-h-120 rounded border "
                      placeholder={placeholderText}
                      value={newMessage}
                      rows={calculateRows(newMessage)}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={addReflection}
                    className="bg-green-700 w-full hover:bg-green-500 p-2 rounded-full shadow-md"
                  >
                    <AddIcon className="justify-center items-center ml-2 mr-2 text-white" />
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}

            <center>
              <Button
                color="success"
                variant="text"
                style={{ backgroundColor: "white" }}
              >
                New Reflection
              </Button>
              <Button variant="text" style={{ backgroundColor: "white" }}>
                Reflection On A New Goal
              </Button>
            </center>
          </div>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2011 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  San Francisco, CA
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Content Marketing for Web, Mobile and Social Media
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Online Course
                </h4>
                <p>Strategy, Social Media</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Agile Development Scrum Master
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Certification
                </h4>
                <p>Creative Direction, User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<AddIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Science in Interactive Digital Media Visual
                  Imaging
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor Degree
                </h4>
                <p>Creative Direction, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<AddIcon />}
              />
            </VerticalTimeline>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default GoalView;
