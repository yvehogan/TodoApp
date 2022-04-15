import React, { useContext } from 'react';
import { CategoryListContext } from './Context/CategoryListContext';
import { TaskListContex } from './Context/TaskListContex';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContex);
  const { findEditItem } = useContext(CategoryListContext);

  const groupTaskByCategory = () => {
    const list = [];
    const sortedTask = tasks?.sort((a, b) => a.category > b.category ? 1 : -1);

    let temp = [];
    for (let i = 0; i < sortedTask.length; i += 1) {
      if (sortedTask[i]?.category !== sortedTask[i - 1]?.category && temp.length > 0) {
        list.push(temp);
        temp = [];
        temp.push(sortedTask[i]);
      } else {
        temp.push(sortedTask[i]);
      }
    }
    if (temp.length > 0) list.push(temp);
    return list;
  };

  return (
    <div className='max-w-lg m-auto'>
      {tasks.length ? (
        <ul className="">
          {groupTaskByCategory().map(group => (
            <ul className="border border-gray-200 p-2 mb-5" key={group?.[0]?.category}>
              {findEditItem(group?.[0]?.category)?.title}
              {group?.map((item) => (
                <Task key={item?.id} task={item} />
              ))}
            </ul>
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;