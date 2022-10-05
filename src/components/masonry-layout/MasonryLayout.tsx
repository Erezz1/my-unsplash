import Masonry from 'react-masonry-css';
import { Text } from '@chakra-ui/react';

import { Spinner } from '@/components';

import { ImageItem } from './components';
import { useGetImages } from './hooks';

import './styles/masonry.css'

const breakpointCols = {
    default: 3,
    1000: 2,
    500: 1
};

const MasonryLayout = () => {

    const { imagesList, isLoading, hasMoreItems } = useGetImages();

    if ( imagesList.length < 1 )
        return <Text fontSize="2xl" textAlign="center">No more images to show. 😢</Text>

    return (
        <>
        <Masonry
            breakpointCols={ breakpointCols }
            className="my-masonry-grid"
        >
            {
                Array.isArray( imagesList ) && imagesList.map( image => (
                    <ImageItem
                        image={ image }
                        key={ image.id }
                    />
                ))
            }
        </Masonry>

        { isLoading && <Spinner /> }
        { !hasMoreItems &&  <Text margin="2rem 0" fontSize="2xl" textAlign="center">No more images to show. 😢</Text> }
        </>
    )
}

export default MasonryLayout;
