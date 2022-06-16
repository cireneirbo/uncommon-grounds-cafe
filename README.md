# uncommon-grounds-cafe
A fictional coffee shop's website.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
* Clone or fork this repo.
* Open in your IDE of choice and install dependents with `npm install` in the command line.
* Run the program in the command line with `npm start`.

## Routing Explanation
GitHub Pages allows for React pages to be hosted as frontend web apps.\
The package [gh-pages](https://www.npmjs.com/package/gh-pages) lets us accomplish this.\
Normally, it seems, gh-pages is intended for use with single-page apps and doesn't account for advanced routing.\
Using the format shown below, however, gh-pages will work with advanced routing.\
To achieve this, I have also combined [react-router-dom](https://www.npmjs.com/package/react-router-dom) to work in tandem with gh-pages.\
This makes it possible for complicated routing to take place using GitHub Pages.

Typically, routes are listed with a `/` as the base path like:
```js
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} >
          <Route exact path="" element={<Home />} />
          <Route exact path="menu" element={<Menu />} />
          {/* <Route path="menu/:menuItem" element={<MenuItem />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hiring" element={<Hiring />} />
          <Route
            path="*"
            element={<Error />} 
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
```

But this can be updated to show the project's name that will be added by GitHub Pages normally like:
```js
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="uncommon-grounds-cafe/" element={<App />} >
          <Route exact path="" element={<Home />} />
          <Route exact path="menu" element={<Menu />} />
          {/* <Route path="menu/:menuItem" element={<MenuItem />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hiring" element={<Hiring />} />
          <Route
            path="*"
            element={<Error />} 
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
``` 

And, to use internal links, the navigation routes with slashes should be changed from:
```js
<nav className="App-link"> 
  <Link to="/" className="App-link">Home</Link> |{" "}
  <Link to="/menu" className="App-link">Menu</Link> |{" "}
  <Link to="/about" className="App-link">About</Link> |{" "}
  <Link to="/contact" className="App-link">Contact</Link>
</nav>
```

To not having slashes:
```js
<nav className="App-link"> 
  <Link to="" className="App-link">Home</Link> |{" "}
  <Link to="menu" className="App-link">Menu</Link> |{" "}
  <Link to="about" className="App-link">About</Link> |{" "}
  <Link to="contact" className="App-link">Contact</Link>
</nav>
```

## Dependencies
* [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) - Custom jest matchers to test the state of the DOM.
* [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) - Simple and complete React DOM testing utilities that encourage good testing practices.
* [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) - Fire events the same way the user does.
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js.
* [gh-pages](https://www.npmjs.com/package/gh-pages) - Publish files to a gh-pages branch on GitHub (or any other branch anywhere else).
* [react](https://www.npmjs.com/package/react) - React is a JavaScript library for creating user interfaces.
* [react-dom](https://www.npmjs.com/package/react-dom) - This package serves as the entry point to the DOM and server renderers for React.
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - The react-router-dom package contains bindings for using React Router in web applications.
* [react-scripts](https://www.npmjs.com/package/react-scripts) - This package includes scripts and configuration used by Create React App.

## Available Scripts
In the project directory, you can run:
### `npm run predeploy`
Prepares the app to be deployed. Does a generic `build` without needing to know specific `build` commands.

### `npm run deploy`
Deploys the app to GitHub Pages using the library [gh-pages](https://github.com/tschaub/gh-pages).\
If needed, it will run `build` as `predeploy` would have.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
