import React, { useContext, useState, useEffect } from 'react';
import { CategoryListContext } from './Context/CategoryListContext';

const CategoryInputForm = () => {
    const { addCategory, editCategory, editItem } = useContext(CategoryListContext)
    const [title, setTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addCategory(title, new Date().toLocaleString())
            setTitle('')
        } else {
            editCategory(title, editItem.id)
        }
    }

    const handleChange = e => {
        setTitle(e.target.value)
    };

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
            console.log(editItem)
        } else {
            setTitle('')
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="pt-10  max-w-lg  m-auto">
            <div className='flex justify-between w-full'>
            <input
                type="text"
                placeholder="Add Category..."
                value={title}
                onChange={(e) => handleChange(e)}
                required
                className="bg-gray-200 outline-none p-4 rounded w-2/3"
            />
            <div className="">
                <button type="submit" className="bg-bgColor text-white p-2 rounded">
                    {editItem ? 'Edit Category' : 'Add Category'}
                </button>
            </div>

            </div>
        </form>
    )
}

export default CategoryInputForm;