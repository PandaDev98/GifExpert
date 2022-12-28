import { useEffect, useState } from 'react';
import { httpRequest } from '../Handlers/handler'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await httpRequest(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}