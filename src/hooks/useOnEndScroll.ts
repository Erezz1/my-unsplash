import { useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { get } from 'lodash';

/**
 * Custom hook para detectar cuando el scroll este al final
 * @param onEnd Funcion que se ejecuta al llegar al final del scroll
 * @param disabled Switch para ejecutar la funcion onEnd
 */
export const useOnEndScroll = ( onEnd: () => void, disabled: boolean = false ) => {

    const { body, documentElement } = document;
    const isTracking = useRef<boolean>( true ); // To avoid repeated requests
    const offsetFromBottom = 100;

    useScrollPosition(
        ({ currPos }) => {
            if ( disabled )
                return;

            const scrollHeight = Math.max(
                get( body,            'scrollHeight' ), // get is not necessary, using it to avoid Flow problems
                get( body,            'offsetHeight' ),
                get( body,            'clientHeight' ),
                get( documentElement, 'scrollHeight' ),
                get( documentElement, 'offsetHeight' ),
                get( documentElement, 'clientHeight' ),
            )

            const windowHeight = window.innerHeight || get( documentElement, 'offsetHeight')
            const offset = -currPos.y + windowHeight + offsetFromBottom

            if ( offset >= scrollHeight ) {
                if ( isTracking.current ) {
                    onEnd()
                    isTracking.current = false
                }
            } else if ( !isTracking.current ) {
                isTracking.current = true
            }
        },
        [ onEnd, disabled ],
    )
}
