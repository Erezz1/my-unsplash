import { Box } from '@chakra-ui/react';
import { Logo, Search, AddPhoto } from './components';
import { HeaderContainer } from './styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="1rem"
            >
                <Search />
                <AddPhoto />
            </Box>
        </HeaderContainer>
    )
}

export default Header;
