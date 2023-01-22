import { useState } from "react"

export const AddCategory = ({ newCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = (event) => {
        setInputValue( event.target.value )
        // console.log( event.target.value )
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        setInputValue('');
        newCategory( inputValue.trim());
    }

  return (
    <form onSubmit={  onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs..."
            value={ inputValue }
            onChange={ inputChange }>
        </input>
    </form>
  )
}
