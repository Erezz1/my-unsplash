import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface IProps {
    children: ReactNode;
}
const HeaderContainer: FC<IProps> = ({ children }) => (
    <Box
        as="header"
        padding={["3rem 0"]}
        display={["block", "block", "flex"]}
        justifyContent="space-between"
    >
        { children }
    </Box>
)

export default HeaderContainer;
