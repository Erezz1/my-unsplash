import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface IProps {
    children: ReactNode;
}
const Container: FC<IProps> = ({ children }) => (
    <Box
        maxWidth="1200px"
        width="90%"
        margin="0 auto"
    >
        { children }
    </Box>
)

export default Container;
