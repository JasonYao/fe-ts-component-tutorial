# Notes
- For anybody wondering, I'm using `StyledImage`
  as an example component where you may require additional
  self-contained files, such as styling or sub-components.
- Just a reminder that JS's module and import system has weak
  accesses- there's no real encapsulation mechanism, so even
  though we don't export `ImageTitle.tsx` in our `index.ts`,
  it's still possible to import `ImageTitle`. The real gain for
  encapsulation lies in our ability to quickly see all files related
  to a given component, and only need to make our changes there.
- You'll note that here we have an `index.ts` file that exports
  a component- this is done deliberately, so we can simply do
  `import {StyledImage} from 'core/StyledImage'`, rather than `import {StyledImage} from 'core/StyledImage/StyledImage'`
