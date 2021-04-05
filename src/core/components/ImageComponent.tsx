import React, { FunctionComponent } from 'react';

interface ImageProps {
    src: string;
    alt: string|null;
}

export const Image: FunctionComponent<ImageProps> = ({ src, alt }) => <div>
    <img src={src} alt={alt === null ? "": alt}/>
</div>
