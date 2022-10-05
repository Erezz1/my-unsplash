import { ChangeEventHandler, useState } from 'react'

export const useForm = <T>( initialState: T ) => {

    const [ form, setForm ] = useState<T>( initialState );

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setForm( prev => ({
            ...prev,
            [ target.name ]: target.value
        }));
    }

    const reset = () => {
        setForm( prev => initialState );
    }

    return { form, handleChange, reset };
}
