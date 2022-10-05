import { CSSProperties, FormEventHandler } from 'react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/styled-components';
import { useForm } from '@/hooks';

const iconStyle: CSSProperties = {
    fontSize: '1.5rem',
    marginTop: '1.2rem',
    marginLeft: '0.5rem',
    color: '#BDBDBD'
}

interface IForm {
    search: string;
}

const Search = () => {

    const navigate = useNavigate();
    const { form, handleChange, reset } = useForm<IForm>({ search: '' });

    const handleSearch: FormEventHandler<HTMLDivElement> = ( event ) => {
        event.preventDefault();
        navigate(`?search=${ form.search }`);
        reset();
    }

    return (
        <InputGroup
            as="form"
            display="flex"
            alignItems="center"
            onSubmit={ handleSearch }
        >
            <InputLeftElement
                pointerEvents="none"
                children={<span className="material-icons" style={ iconStyle } >search</span>}
            />
            <Input
                type="tel"
                placeholder="Search by name"
                padding="0 2.5rem"
                onChange={ handleChange }
                name="search"
                value={ form.search }
            />
        </InputGroup>
    )
}

export default Search;
