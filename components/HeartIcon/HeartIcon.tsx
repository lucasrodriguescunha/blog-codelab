'use client';

import {useState} from 'react';
import Image from 'next/image';

interface HeartIconProps {
    onToggle?: (isFilled: boolean) => void;
}

export default function HeartIcon({onToggle}: HeartIconProps) {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        const newState = !isFilled;
        setIsFilled(newState);
        onToggle?.(newState);
    };

    return (
        <Image
            src={isFilled ? '/heart-2.svg' : '/heart-1.svg'}
            alt={isFilled ? 'Coração preenchido' : 'Coração não preenchido'}
            width={28}
            height={24}
            onClick={handleClick}
            style={{cursor: 'pointer'}}
        />
    );
}
