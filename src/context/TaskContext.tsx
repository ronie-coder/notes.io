import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
  const [tasklist, setTaskList] = useState([
    {
      title: "Featured",
      cardtitle: "HomeWork",
      cardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos eius repudiandae. Nihil facere esse hic possimus, obcaecati veritatis temporibus.",
    },
  ]);

  return (
    <TaskContext.Provider value={{ tasklist, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
