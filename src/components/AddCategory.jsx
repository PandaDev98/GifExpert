import { useState } from "react"
import PropTypes from 'prop-types';

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
        <form aria-label="form" action="" onSubmit={onSubmit}>
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}