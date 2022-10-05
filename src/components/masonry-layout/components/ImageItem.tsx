import { FC, ReactEventHandler } from 'react';
import { Image, Text, Button } from '@chakra-ui/react';

import { Image as IImage } from '@/interfaces';

import { ImageContainer, ImageDetails } from '../styled-components';
import { useRemoveImage } from '../hooks';

interface IProps {
    image: IImage;
}
const ImageItem: FC<IProps> = ({ image }) => {

    const { isLoading, handleDeleteImage } = useRemoveImage( image );

    const handleError: ReactEventHandler<HTMLImageElement> = ({ target }: any ) => {
        target.setAttribute('src', 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    }

    return (
        <ImageContainer>
            <Image
                src={ image.url }
                width="100%"
                loading="lazy"
                onError={ handleError }
            />

            <ImageDetails>
                <Button
                    alignSelf="flex-end"
                    size="sm"
                    colorScheme="red"
                    variant="outline"
                    rounded="full"
                    onClick={ handleDeleteImage }
                    isLoading={ isLoading }
                >
                    Delete
                </Button>
                <Text
                    color="#fff"
                    fontSize="lg"
                >
                    { image.label }
                </Text>
            </ImageDetails>
        </ImageContainer>
    )
}

export default ImageItem;
