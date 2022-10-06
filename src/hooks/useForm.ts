import { ChangeEventHandler, useState } from 'react'

/**
 * Custom hook para el manejo de formularios
 * @param initialState Estado inicial del formulario
 */
export const useForm = <T>( initialState: T ) => {

    const [ form, setForm ] = useState<T>( initialState );

    /**
     * Evento para cambiar el estado del formulario
     */
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setForm( prev => ({
            ...prev,
            [ target.name ]: target.value
        }));
    }

    /**
     * Volver el estado del formulario a su estado inicial
     */
    const reset = () => {
        setForm( prev => initialState );
    }

    return { form, handleChange, reset };
}
