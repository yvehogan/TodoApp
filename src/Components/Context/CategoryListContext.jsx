import React, { createContext, useState } from 'react';
import { v1 as uuid } from "uuid";

export const CategoryListContext = createContext()

const CategoryListContextProvider = props => {
    const [categories, setCategories] = useState([]);

    const addCategory = title => {
        setCategories([...categories, { title, id: uuid() }])
    }

    const removeCategory = id => {
        setCategories(categories.filter(category => category.id !== id))
    }

    const findEditItem = id => {
        const item = categories.find(category => category.id === id)
        return item;
    }

    return (
        <CategoryListContext.Provider
            value={{
                categories,
                addCategory,
                removeCategory,
                findEditItem
            }}
        >
            {props.children}
        </CategoryListContext.Provider>
    )
}

export default CategoryListContextProvider;