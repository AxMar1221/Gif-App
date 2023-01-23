import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"

export const GifApp = () => {

    const [categories, setCategories] = useState(['Star Wars'])

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
        {
            categories.map( ( category ) => ( 
                <GifGrid key={ category } category={ category }/>
            ))
        }
    </>
  )
}
