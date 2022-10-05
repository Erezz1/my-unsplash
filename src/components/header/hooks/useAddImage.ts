import { useDispatch, useSelector } from 'react-redux';

import { axiosInstance } from '@/client';
import { Image } from '@/interfaces';
import { addImage } from '@/redux/url';
import { RootState } from '@/redux';

import { endLoading, startLoading } from '@/redux/ui';

interface INewImage {
    label: string;
    url: string;
}
export const useAddImage = ( newImage: INewImage ) => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector(( state: RootState ) => state.ui )

    const handleAddImage = async () => {
        dispatch( startLoading() );

        await axiosInstance
            .post<Image>('/api/url', newImage )
            .then(({ data }) => dispatch( addImage( data )) )
            .catch( err => { dispatch( endLoading() ) });

        dispatch( endLoading() );
    }

    return { isLoading, handleAddImage };
};
