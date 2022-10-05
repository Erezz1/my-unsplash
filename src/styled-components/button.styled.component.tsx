import { Button, ButtonProps, ComponentWithAs } from '@chakra-ui/react';

const StyleButton: ComponentWithAs<"button", ButtonProps> = ({ children, onClick, ...props }) => (
    <Button
        onClick={ onClick }
        colorScheme="green"
        padding="1.5rem 2.5rem"
        justifyContent="center"
        alignItems="center"
        borderRadius="xl"
        { ...props }
    >
        { children }
    </Button>
);

export default StyleButton;
