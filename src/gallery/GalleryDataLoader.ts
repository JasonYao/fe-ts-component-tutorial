import {GalleryProps} from './Gallery';
import * as data from './dummy-data.json';

export class GalleryDataLoader {

    private components: GalleryProps|null;

    constructor() {
        this.components = null;
    }

    load(): void {
        this.components = {
            components: data.components
        };
    }

    getComponents(): GalleryProps|null {
        return this.components;
    }

}
