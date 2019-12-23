Had some troubles using Mapbox gl (javascript) with react-new-window, as the map was rendered on the original page and that caused a bunch of nasty errors. I solved this problem by using React-routing to have newWindow point to an url with the map component, instead of the map component being a child of newWindow. Then i used broadcastChannel API to send messages back and forth between the two windows. 


Dependencies:
- react-new-window https://www.npmjs.com/package/react-new-window?activeTab=readme
- broadcastChannel https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
- react-map-gl https://uber.github.io/react-map-gl/#/
- react-routing 



To test clone the project


```
npm install
npm start
```







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


