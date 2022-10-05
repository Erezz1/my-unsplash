import { Box, ChakraComponent } from '@chakra-ui/react';

const ImageContainer: ChakraComponent<"div", {}> = ({ children }) => {
    return (
        <Box
            marginTop="2rem"
            borderRadius="1rem"
            overflow="hidden"
            position="relative"
        >
            { children }
        </Box>
    )
}

export default ImageContainer;
