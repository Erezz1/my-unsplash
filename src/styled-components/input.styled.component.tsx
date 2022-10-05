import { ComponentWithAs, Input, InputProps } from '@chakra-ui/react';

const InputStyle: ComponentWithAs<"input", InputProps> = ({ ...props }) => (
    <Input
        fontSize="sm"
        size="lg"
        marginTop="5px"
        focusBorderColor="gray.600"
        border="2px"
        { ...props }
    />
)

export default InputStyle;
