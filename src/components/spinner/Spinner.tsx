import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import HashLoader from "react-spinners/HashLoader";

interface IProps {
    message?: string;
}
const Spinner: FC<IProps> = ({ message }) => {
    return (
        <Box
            margin="2rem auto"
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <HashLoader
                size={ 100 }
                color="#38A169"
            />
            <Text
                marginTop={ message ? '2rem' : '0' }
                fontSize="lg"
                color="gray.500"
            >{ message }</Text>
        </Box>
    )
}

export default Spinner;
