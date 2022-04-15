import React from "react";
import TaskList from "./Components/TaskList";
import TaskListContexProvider from "./Components/Context/TaskListContex";
import TaskInputForm from "./Components/TaskInputForm";
import CategoryListContextProvider from "./Components/Context/CategoryListContext";
import CategoryInputForm from "./Components/CategoryInputForm";

function App() {
  return (
    <CategoryListContextProvider >
      <TaskListContexProvider>
        <div className="bg-bgColor h-screen p-10">
          <div className="bg-white w-full max-w-3xl m-auto p-5">
            <CategoryInputForm />
            <TaskInputForm />
            <TaskList />
          </div>
        </div>
      </TaskListContexProvider>
    </CategoryListContextProvider>
  );
}

export default App;
