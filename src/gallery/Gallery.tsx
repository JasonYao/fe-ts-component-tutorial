import {GalleryComponentProps, GalleryComponent} from "./GalleryComponent";

export interface GalleryProps {
    components: GalleryComponentProps[];
}

export function Gallery(props: GalleryProps) {
    return (
        <div>
            {
                props.components.map((galleryComponent: GalleryComponentProps) => {
                    return <GalleryComponent kind={galleryComponent.kind} props={galleryComponent.props} />
                })
            }
        </div>
    )
}
