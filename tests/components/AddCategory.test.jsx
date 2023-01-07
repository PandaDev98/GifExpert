import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test on AddCategory', () => {
    test('should change the box value', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama');
       // screen.debug();
    });
    test('should call onNewCategory when input has value', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    });
    test('shouldn´tcall onNewCategory when input has no value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //screen.debug();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
}) 