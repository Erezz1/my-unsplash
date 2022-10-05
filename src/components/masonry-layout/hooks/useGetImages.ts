import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams  } from 'react-router-dom';

import { axiosInstance } from '@/client';
import { Image } from '@/interfaces';
import { useOnEndScroll } from '@/hooks';
import { RootState } from '@/redux';

import { addImageList, setImageList } from '@/redux/url';
import { startLoading, endLoading } from '@/redux/ui';

const controller = new AbortController();

export const useGetImages = () => {

    const [ page, setPage ] = useState<number>(0);
    const [ hasMore, setHasMore ] = useState<boolean>( true );

    const { imagesList } = useSelector(( state: RootState ) => state.url );
    const { isLoading } = useSelector(( state: RootState ) => state.ui );

    const dispatch = useDispatch();
    const [ params ] = useSearchParams ();
    const querySearch = params.get('search');

    const request = useCallback(() => {
        setPage( page => page + 1 );
    }, []);
    useOnEndScroll( request, !hasMore );

    useEffect(() => {
        const getImagesList = async () => {
            dispatch( startLoading() );

            if ( querySearch ) {
                await axiosInstance
                    .get<Image[]>(`/api/url?search=${ querySearch }`)
                    .then(({ data }) => dispatch( setImageList( data ) ))
                    .catch( err => dispatch( endLoading() ));

            } else {
                await axiosInstance
                    .get<Image[]>(`/api/url?offset=${ page * 10 }`)
                    .then(({ data }) => {
                        if ( data.length < 1 )
                            setHasMore( false );

                        dispatch( addImageList( data ) );
                    })
                    .catch( err => dispatch( endLoading() ));
            }

            dispatch( endLoading() );
        }
        getImagesList();

        return () => { controller.abort() }
    }, [ querySearch, page ]);

    return { imagesList, hasMoreItems: hasMore, isLoading };
}
