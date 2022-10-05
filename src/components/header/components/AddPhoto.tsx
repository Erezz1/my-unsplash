import { FormEventHandler, useState } from 'react';
import {
    Alert,
    AlertIcon,
    AlertDescription,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'

import { Input, Button } from '@/styled-components';
import { useForm } from '@/hooks';

import { isValidHttpUrl } from '../helpers';
import { useAddImage } from '../hooks';

interface IForm {
    label: string;
    url: string;
}
const initialState: IForm = {
    label: '',
    url: ''
}

const AddPhoto = () => {

    const { form, handleChange, reset } = useForm<IForm>( initialState );
    const [ alert, setAlert ] = useState<string>('');

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { handleAddImage, isLoading } = useAddImage( form );

    const handleSubmit: FormEventHandler<HTMLElement> = async ( event ) => {
        event.preventDefault();

        if ( form.label.length < 6 )
            return setAlert('Min 6 characters in label');

        if ( !isValidHttpUrl( form.url ) )
            return setAlert('The Url is mandatory');

        await handleAddImage();

        setAlert('');
        onClose();
        reset();
    }

    const handleClose = () => {
        if ( isLoading )
            return;

        onClose();
        reset();
    }

    return (
        <>
            <Button
                onClick={ onOpen }
                display={["none", "none", "flex"]}
            >
                Add a photo
            </Button>
            <Button
                onClick={ onOpen }
                display={["flex", "flex", "none"]}
            >
                <span className="material-icons">add</span>
            </Button>

            <Modal size="xl" isOpen={ isOpen } onClose={ handleClose }>
                <ModalOverlay />

                <ModalContent
                    as="form"
                    onSubmit={ handleSubmit }
                >
                    <ModalHeader>Add a new photo</ModalHeader>

                    <ModalBody>
                        <label htmlFor="label">Label</label>
                        <Input
                            id="label"
                            placeholder="Suspendisse elit massa"
                            marginBottom="1rem"
                            onChange={ handleChange }
                            name="label"
                            value={ form.label }
                            maxLength={ 50 }
                            disabled={ isLoading }
                        />

                        <label htmlFor="url">Photo URL</label>
                        <Input
                            id="url"
                            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                            onChange={ handleChange }
                            name="url"
                            value={ form.url }
                            disabled={ isLoading }
                        />

                        { alert && <Alert marginTop="1rem" status="warning">
                            <AlertIcon />
                            <AlertDescription>{ alert }</AlertDescription>
                        </Alert> }
                    </ModalBody>
        
                    <ModalFooter>
                        <Button
                            variant="ghost"
                            colorScheme="gray"
                            onClick={ handleClose }
                            marginRight="1rem"
                            disabled={ isLoading }
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            isLoading={ isLoading }
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPhoto;
