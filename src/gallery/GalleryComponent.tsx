import React, {ReactNode} from 'react';

export interface GalleryComponentProps {
    kind: string;
    props: object; /* Note: technically speaking, we could have per-component types, and create a mapping, but going to keep this simple since it's an example app */
}

/**
 * This is pretty much the "meat" of our dispatch logic, which will
 *   dynamically take a string name of a component, import it,
 *   create an instance of the component and hydrate it with
 *   properties from our dummy file.
 *
 * Whether this _actually_ works, I have absolutely no idea,
 *   but you get the idea behind what I'm trying to do here.
 *
 * For additional reading: https://mariusschulz.com/blog/dynamic-import-expressions-in-typescript
 */
function dynamicallyRenderComponent(kind: string, props: object): ReactNode  {
    return import(kind).then((widget) => {
        widget.render(props);
    });
}

export function GalleryComponent(galleryComponentProps: GalleryComponentProps): JSX.Element {
    const {kind, props} = galleryComponentProps;

    return (
        <div className="gallery-item">
            {dynamicallyRenderComponent(kind, props)}
        </div>
    )
}
