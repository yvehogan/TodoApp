import React, { useContext, useState, useEffect } from 'react';
import { TaskListContex } from './Context/TaskListContex';
import { CategoryListContext } from './Context/CategoryListContext';

const TaskInputForm = () => {
    const { addTask, editTask, editItem } = useContext(TaskListContex)
    const { categories } = useContext(CategoryListContext)
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(title, category, new Date().toLocaleString())
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }

    const handleChange = e => {
        setTitle(e.target.value)
    };

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="pt-5 max-w-lg m-auto">
            <select required className='bg-bgMain p-1 text-white font-semibold outline-none rounded w-2/3 mb-5' value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories?.map(item => (
                    <option key={item.id} value={item.id}>{item.title}</option>
                ))}
            </select>

            <div className='flex justify-between w-full'>
                <input
                    type="text"
                    placeholder="Add Task..."
                    value={title}
                    onChange={(e) => handleChange(e)}
                    required
                    className="bg-gray-200 outline-none p-4 rounded w-2/3 mb-5"
                />

                <div className="">
                    <button type="submit" className="bg-bgColor text-white p-2 rounded mb-5">
                        {editItem ? 'Edit Task' : 'Add Task'}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TaskInputForm;