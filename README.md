[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![react](https://badges.aleen42.com/src/react.svg) ![redux](https://badges.aleen42.com/src/redux.svg)

# REACT FIREBASE STARTER KIT
A React JS and Firebase project you can use as a skeleton of your new React Firebase Application.

The project's goal is to allow developers to focus more on development and less on settings and configuration.

This project is for developers who already have atleast beginner to intermediate knowledge on ReactJS (Redux, React Hooks, etc) and Firebase (Firestore, Hosting, Authentications, etc).

## What's included
This project is an SPA (Single Page Application) with Prerendering capabilites for SEO using **react-snap**. We also use **redux** for application state management and **redux-thunk** for more advance async logic.

- Homepage
- Login Page
- Sign up Page
- Forgot Password Page
- Client Dashboard
- Admin Dashboard

## Project dependencies
- react
- react-dom
- react-router-dom
- react-bootstrap
- react-redux
- redux-thunk
- react-snap
- firebase
- firebase-admin

See the complete list of dependencies in **package.json** file

## Installation

### Install the dependencies
Clone this repository then install dependecies via npm

```
npm install
```
### Create a Firebase Project
Go to the Firebase website then create a new project for your web application and then setup the necessary configs (Authentication, Firestore, Functions, Hosting). You can also do it in command line assuming you install firebase cli tools.

### Setup Firebase Configuration
Create an .env.local file and add your firebase configuration

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

### NPM scripts
create-react-app already gives us command to start, build, test our projects

```
npm start
```

```
npm build
```

```
npm test
```

### Firebase cli tools also allow as to deploy our projects on Firebase ( You may need to run 'firebase login' first)

```
firebase deploy
```

#### Or deploy individually
```
firebase deploy --only functions
```

```
firebase deploy --only hosting
```

```
firebase deploy --only firestore:rules
```


## Setup admin account for our application

Generate private key for your [Service Account](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) on Firebase.

Update the service account path on **createAdminAccount.js**

Update admin email and your desired password

Then run 

```
node createAdminAccount.js
```

## Updating Firestore rules

Create a file in firestore-rules directory (user.rules) then run

```
build-firestore-rules
```

It will consolidate all your rules in that directory.

> :warning: **Note**: Make sure you have a secure firestore security rules and firebase functions before deploying it on your firebase production environment
