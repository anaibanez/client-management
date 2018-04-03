# Client Management React frontend

This project is the frontend of the Client management application implemented with React

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ES6 via Babel                  	 	     | ES6 support using Babel.  |
| Reusable components with React                 	 	     | Structure based on components using React - a JavaScript library for building user interfaces  |
| State management via Redux       | Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently                     |
| Code Linting               			       | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Uses ESLint with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which tries to follow the Airbnb JavaScript style guide.                                                                                                |
| Code Coverage via Jest and Enzyme|  Unit Testing and component testing is done using Jest and Enzyme - Jest is a complete and easy to set up JavaScript testing solution. In fact, Jest works out of the box for any React project. - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.                                                                                                                                                                         |
| Next generation css        | Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.                         |
| Easy to manage complex side effects via redux-saga | redux-saga is a library to manage side effects in your application. It works beautifully for data fetching, concurrent computations and a lot more.  |


## Getting Started

Install dependencies:
```sh
npm install

```

Launch development server:
```sh
npm start

```

Navigate to http://localhost:3000/.

The app will automatically reload if you change any of the source files.

The webpackDevServer config (webpackDevServer.config.js file) has been configured to stablish a proxy to the default backend host and port (http://localhost:4040) in order to avoid cross-domain issues during the development.

Tests:
```sh
# Run tests 
npm test

```
![](doc/test.PNG)

Lint:
```sh
# Lint code with ESLint
npm run lint
```
