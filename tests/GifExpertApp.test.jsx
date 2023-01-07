import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('tests on GifExpertApp', () => {

    test('should first', () => {
        render(<GifExpertApp />);
        screen.debug();
        expect(screen.getAllByRole('heading', {level: 3}).length).toBeGreaterThan(1)


    });
});