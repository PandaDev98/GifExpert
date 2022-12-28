import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        const trimValue = inputValue.trim()

        if (trimValue.length <= 1) { return }
        onNewCategory(trimValue)
        setInputValue('');
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <input
                id="categoryInput"
                type="text"
                placeholder="Buscar Gifs de..."
                value={inputValue}
                onChange={event => { setInputValue(event.target.value) }}
            />
        </form>
    )
}
