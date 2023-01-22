import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"

export const GifApp = () => {

    const [categories, setCategories] = useState(['Star Wars', 'The Mandalorian'])

    const addCategory = ( newCategory ) => {
        // console.log(newCategory)
        if( categories.includes( newCategory )) return;
        setCategories( [newCategory, ...categories] );
    }

  return (
    <>
        <h1>Gif App</h1>
        <AddCategory 
            // setCategories={ setCategories } 
            newCategory={ event => addCategory( event )}
        />
        <ol>
            { categories.map( ( category ) => {
                return <li key={category}>{category}</li>
            }) }
        </ol>
    </>
  )
}
