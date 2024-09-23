import React, { useContext, useState } from "react";
import { motion, animate } from "framer-motion";
import { Bold, Pointer } from "lucide-react";
import { TaskContext } from "../context/TaskContext";
const CreatePost = ({ isCreateTaskOpen, setIsCreateTaskOpen }) => {
  const { tasklist, setTaskList } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [cardtitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const newTask = {
    title: title,
    cardtitle: cardtitle,
    cardDescription:
      cardDescription,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...tasklist, newTask]);
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0, borderRadius: 100 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute z-[99] w-full   flex justify-center min-h-screen items-center  antialiased"
    >
      <div className="flex opacity-1 flex-col w-9/12 sm:w-4/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div className="flex flex-row justify-between p-6 dark:bg-gray-800 dark:border-gray-700 border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-white">Add a task</p>
          <motion.svg
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{
              rotate: 90,
              scale: 1.3,
              fontStyle: Bold,
              backgroundColor: "white",
              color: "black",
              font: "bold",
              borderRadius: 5,
            }}
            onClick={() => setIsCreateTaskOpen(false)}
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </motion.svg>
        </div>
        <div className="flex flex-col px-6 py-5 dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-2 font-semibold text-white">Title</p>
          <textarea
          value={title}
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            name=""
            placeholder="Type message..."
            className="p-5 mb-5 bg-zinc-200 border border-gray-200 rounded shadow-sm h-36 text-black"
            id=""
          ></textarea>
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
          <p className="mb-2 font-semibold text-white">Card Title</p>
            <textarea
            onChange={(e)=>setCardTitle(e.target.value)}
            value={cardtitle}
              type="text"
              name=""
              placeholder="Type message..."
              className="p-5 mb-5 bg-zinc-200 border border-gray-200 rounded shadow-sm h-36 text-black"
              id=""
            ></textarea>
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-200">Card Description</p>
              <textarea
              onChange={(e)=>setCardDescription(e.target.value)}
              value={cardDescription}
              type="text"
              name=""
              placeholder="Type message..."
              className="p-5 mb-5 bg-zinc-200 border border-gray-200 rounded shadow-sm h-36 text-black"
              id=""
            ></textarea>
            </div>
          </div>
          <hr />

          <div className="flex items-center mt-5 mb-3 space-x-4">
            <input
              className="inline-flex rounded-full bg-zinc-400"
              type="checkbox"
              id="check1"
              name="check1"
            />
            <label
              className="inline-flex font-semibold text-gray-400"
              for="check1"
            >
              Add a crew
            </label>
            <br />
            <input
              className="inline-flex"
              type="checkbox"
              id="check2"
              name="check2"
              checked
            />
            <label
              className="inline-flex font-semibold text-blue-500"
              for="check2"
            >
              Add a specific agent
            </label>
            <br />
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm">
            <div className="flex flex-row items-center">
              <img
                className="w-10 h-10 mr-3 rounded-full"
                src="https://randomuser.me/api/portraits/lego/7.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">Xu Lin Bashir</p>
                <p className="text-gray-400">table.co</p>
              </div>
            </div>
            <h1 className="font-semibold text-red-400">Remove</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-5 dark:bg-gray-800 dark:border-gray-700 border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p className="font-semibold text-gray-200">Cancel</p>
          <button
            onClick={() => {
              setTaskList([...tasklist, newTask]);
              setIsCreateTaskOpen(false);
            }}
            className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default CreatePost;
