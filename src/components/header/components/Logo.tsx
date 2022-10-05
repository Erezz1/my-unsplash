import { Image } from'@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { setImageList } from '@/redux/url';

const Logo = () => {

    const dispatch = useDispatch();
    const location = useLocation().search;

    const handleGotoHome = () => {
        if ( location !== '' )
            dispatch( setImageList([]) );
    };

    return (
        <NavLink to="/">
            <Image
                src="/my_unsplash_logo.svg"
                alt="Logotipo"
                onClick={ handleGotoHome }
                marginBottom={['1rem', '1rem', '0']}
            />
        </NavLink>
    )
}

export default Logo;
