import React from 'react';

import SVGStarFull from 'app/assets/icons/star-full.svg';
import SVGStarHalf from 'app/assets/icons/star-half.svg';
import SVGStarEmpty from 'app/assets/icons/star-empty.svg';

export default function StarIcon({ type }: { type: 'full' | 'half' | 'empty' }) {
    return (
        <>
            {type === 'full' && <SVGStarFull />}
            {type === 'half' && <SVGStarHalf />}
            {type === 'empty' && <SVGStarEmpty />}
        </>
    );
}
