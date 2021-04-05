import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from '../core/reportWebVitals';
import { Gallery } from './Gallery';
import {GalleryDataLoader} from "./GalleryDataLoader";

/**
 * Not all too happy about this manual instantiation to load-
 *   there's definitely a way to get dependency injection
 *   syntax or some analogous form of it so that this
 *   rendering class can become testable, but it's 4am right now
 *   so this can be done later.
 */
const loader = new GalleryDataLoader();
loader.load();
const EmptyComponentList = {components: []}
const loadedComponents = loader.getComponents() ?? EmptyComponentList;

/**
 * God knows if this is the right syntax, but the goal here is to just
 *   get a page up at /gallery that'll show everything (we'll work on
 *   separating things out to only render one component at a time later).
 */
ReactDOM.render(
    <React.StrictMode>
        <Gallery components={loadedComponents.components}/>
    </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
