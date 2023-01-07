import { httpRequest } from "../../src/Handlers/handler";



describe('test on httpRequest', () => {

    const category = 'Gumball'

    test('should return a gis array', async () => {
        const gifs = await httpRequest(category);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });
});