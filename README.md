## Description
- Project uses `ramda` and not `lodash` as an `utility` library, ramda has more support for `fp` then `lodash` 
- Project uses react-final-forms.\
It's not necessary for this project, transforming form components to `controlled` and handling internal state and `error` states would have resulted in a lot of `boilerplate`.\
It's better suited for larger projects with more forms.
- Project uses `apollo` over `redux` for `state` `management`\
 Can easily switch to `graphql` server instead of `rest`.\
 Less boilerplate (action-creators, action, reducer, store), no need for custom middlewares for optimistic updates or to handle async `actions` or extra libs like `thunk`

## Evaluation
- there is still a lot of work remaining
- add tests with `react-testing-library`
- add snapshots
- maybe add visual regression support with via jest for `atomic` components (forms)
- refactor `pages` better separate concerns, `container` components and use `composition` better
- there is room for improvements when it comes to `dry` when rendering the `Fields` in the form we can easily setup a map over a list of `fields` with properties
- haven't used `create-react-app` in years @ my job we have our internal `runtime` and `cli` similar to `create-react-app` but custom for our project needs, and it looks u need to have extra setup required for `postcss` `scss`
- refactor based on postcss the `styling` with better `BEM` support.
- map can be improved a lot added some todo's on what can be improved in the `future`
- design is required :) to have the app look professional.
- add mobile `first` support.
- we can even prepare this for `native as well` so we can share the code 90% if we plan to have the app work on `react-native` as well.
- if this is a public website maybe we should switch to next.js or just add `SSR` support.
- the list is long...
 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


