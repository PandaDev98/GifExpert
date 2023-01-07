import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test on GifItem', () => {

    const title = 'Saitama';
    const url = 'https://test.com/'

    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the rigth url and alt', () => {
        render(<GifItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('should show the title onthe app', () => {
        render(<GifItem title={title} url={url} />)        
        expect( screen.getByText(title)).toBeTruthy();
        

    });
});