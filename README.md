# F1 World Championship Driver Results

We will use http://ergast.com/mrd/ to create a single page application that presents a list that shows the F1 world champions starting from 2005 until 2015. Clicking on an item shows the list of the winners for every race for the selected year. We also highlight the row when the winner has been the world champion in the same season.

## Project Specs

### Language

Typescript used as main language.

------

### Tests

Jest + Enzyme (+ react-test-renderer for snapshots) is used.

------

### Component Structure

React components are beside their SASS css modules and their test files. like:

- Component.tsx
- Component.module.sass
- Component.test.sass

and \_\_snapshots\_\_ folder is automatically created (by test framework) in each folder.

------

### Directory Structure

To separate concerns of "UI representation" and "logic" components and for the sake of reusability, there are two folders:

- containers: to store logic components
- presentationalComponents: to keep presentational components

Inside "presentationalComponents" something like [Fractal Structure](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) is used to maintain files in scale.

We can decide how to structure "containers" folder later when we had more components.

In case of app growth, we can use namespaces on top of these folders, each namespace can have different "containers" and "presentationalComponents" but namespaces should not have dependencies to each other.

Also API folder is very simple right now, later, with more API's we can decide best way to organize it.

------

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

------

## TODO

- better view on mobile phones (responsive)
- add router
