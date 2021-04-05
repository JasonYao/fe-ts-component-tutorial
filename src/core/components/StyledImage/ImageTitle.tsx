import React, { FunctionComponent } from "react";

interface ImageTitleProps {
    title: string;
}

export const ImageTitle: FunctionComponent<ImageTitleProps> = ({ title}) => <h2>{ title }</h2>
