import React, { FunctionComponent } from 'react';
import { ImageTitle } from './ImageTitle';

interface StyledImageProps {
    src: string;
    title: string;
    backgroundColor: string;
    alt: string|null;
}

export const StyledImage: FunctionComponent<StyledImageProps> = ({ src, title, backgroundColor, alt }) => <div>
    <ImageTitle title={title} />
    <img src={src} color={backgroundColor} alt={alt === null ? "": alt}/>
</div>
