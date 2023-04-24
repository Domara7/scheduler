# Interview Scheduler

The Interview Schedule is a single page application that lets you book, edit, and delete appointments with mentors.

Scheduler is built using React and makes requests to an api server to get and save appointments!

## Project Showcase

!["Scheduler_Screenshot"](https://github.com/Domara7/scheduler/blob/master/Docs/photo3.png)
!["Scheduler_Screenshot"](https://github.com/Domara7/scheduler/blob/master/Docs/photo1.png)
!["Scheduler_Screenshot"](https://github.com/Domara7/scheduler/blob/master/Docs/photo2.png)

## Setup

- Fork and clone this repository
- Install dependencies with npm install.
- Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api)
- Follow steps in the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) README file in order to set up a proper database for the app
- Open up 2 terminal windows, 1 for the scheduler webpack server and 1 for the scheduler-api
- In both terminal windows just use "npm start" and you will be up and running!
- If you would like to run tests for the scheduler app you can use the Jest framework "npm test"

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

### Dependencies

- axios
- class-names
- normalize.css
- react
- react-dom
- react-scripts
- react-hooks-testing-library
