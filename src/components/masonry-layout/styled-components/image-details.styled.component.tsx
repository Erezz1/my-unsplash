import { Box, ChakraComponent } from '@chakra-ui/react';

const ImageDetails: ChakraComponent<"div", {}> = ({ children }) => {
    return (
        <Box
            position="absolute"
            width="100%"
            height="100%"
            backgroundColor="#00000090"
            top="0" left="0"
            opacity="0"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            padding="1rem"
            _hover={{ opacity: '1' }}
        >
            { children }
        </Box>
    )
}

export default ImageDetails;
