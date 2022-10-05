import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { axiosInstance } from '@/client';
import { RootState } from '@/redux';
import { startLoading, endLoading } from '@/redux/ui';
import { removeImage } from '@/redux/url';
import { Image as IImage } from '@/interfaces';

export const useRemoveImage = ( image: IImage ) => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector(( state: RootState ) => state.ui );

    const handleDeleteImage = async () => {
        const { isConfirmed } = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want delete this image?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if ( !isConfirmed )
            return;

        dispatch( startLoading() );

        await axiosInstance
            .delete(`/api/url/${ image.id }`)
            .catch( err => dispatch( endLoading()));

        dispatch( removeImage( image ) );
        dispatch( endLoading() );
    }

    return { isLoading, handleDeleteImage };
}
