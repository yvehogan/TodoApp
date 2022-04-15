import React, { useContext } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { TaskListContex } from './Context/TaskListContex';
import MoreOptions from './layouts/MoreOptions';

const Task = ({ task }) => {
  const { removeTask, findEditItem } = useContext(TaskListContex)


  return (
    <>
      <div className=" flex justify-between mt-5">
        <div>
          <span>{task.title}</span>
          <div className='text-amber-500'>{task.dateCreated}</div>
        </div>
        <MoreOptions
          actions={[
            { label: 'Edit', onClick: () => { findEditItem(task.id) } },
            { label: 'Delete', onClick: () => { removeTask(task.id) } }
          ]}
        >
          <HiOutlineDotsHorizontal className="w-8 h-auto p-2 rounded-md hover:bg-bgColor hover:bg-opacity-10" />
        </MoreOptions>


      </div>
    </>
  )
}

export default Task;