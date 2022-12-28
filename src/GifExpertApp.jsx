import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            // const categoriesList = Array.from(document.getElementById('categoriesList').childNodes);
            // const listItems = Array.from(categoriesList);
            // const index = listItems.map(item => item.textContent).indexOf(newCategory);

            // categoriesList[index].classList.add('exists')
            // setTimeout(() => { categoriesList[index].classList.remove('exists') }, 300);
            return;
        };
        setCategories([ newCategory,...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Category Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* <ol id="categoriesList"> */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
            {/* </ol> */}

        </>
    )

}
