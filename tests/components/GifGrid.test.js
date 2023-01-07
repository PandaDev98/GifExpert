import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/Hooks/useFetchGifs'


jest.mock('../../src/Hooks/useFetchGifs');

describe('Tests on GifGrid', () => {
    const category = 'One Punch'

    test('should show the loading ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        screen.debug();
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    });
    test('should show images from the getuseFetchGifs ', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.png'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://localhost/saitama.png'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});