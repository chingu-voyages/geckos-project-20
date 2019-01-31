# PowerPanel 🏙️

## Table of Contents

* [Project Background](#projectbackground)
* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [API Keys](#apikeys)
* [Create React App](#createreactapp)

## Project Background

This project was made as part of the [Chingu community](https://chingu.io/), giving Developers an opportunity to work with each other in teams to create time limited projects. This was a beta voyage to test the new Chingu system and ran between 19th Nov 2018 and 21st Jan 2019 for a total of 8 weeks. This project was completed in our spare time.

This project was made by:
* [Irene Tomaini](https://github.com/ir3ne)
* [Mario Krstevski](https://github.com/MarioKrstevski)
* [Jen Smith](https://github.com/jennifersmithuk)

Project live link: [PowerPanel](https://power-panel.herokuapp.com/)

We decided to make a clone of [Momentum dashboard](https://momentumdash.com/) as it looks when viewed as a Chrome or Firefox browser extension but creating the app using React.js. 

![](/Screenshot_310119_PowerPanel.png)

The user stories to be completed were:

- [x] I can see a different background image every day.
- [x] I can enter my name and edit my name.
- [x] Once I enter a name, I can see a greeting and the clock.
- [x] I can put my main focus for the day and check it off when done. I get a well doone message when done and I can also enter a new task.
- [x] I can see a random quote every day, 'like' the quote and be able to share on Twitter.
- [x] I can access a search in Google from the app.
- [x] I can see the local weather and click to see a forecast for the next 5 days.
- [x] I can create a Todo list, enter tasks, edit them, move them to different lists and check them off. Once checked off I can see them in a 'done' list.


## Instructions

* Clone the repo to download all files locally.

* Install all project dependencies: 
```bash
npm install
```
* Start the development server: 
```bash
npm start
```

This command runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.<br>

```bash
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. 

The build is minified and the filenames include the hashes.<br>
Your app is then ready to be deployed.
You can use your browser and visit `localhost:5000`.

Please note that the package used to build the site: `create-react-app` means that the site comes with a pre-installed service worker to enable offline use but this only works in production mode.


## Dependencies

* [NodeJs](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

Other resources used were the [react-icons](http://react-icons.netlify.com/) package and [Meteoicons](https://icomoon.io).

## API Keys

For the app to work on your local machine you will need one API key for [OpenWeatherAPI](https://openweathermap.org/api). The rest of the data for quotes and the background image are served via an API URL without needing to use a key.

Once you have the API key you will need to create a .env file in the root directory of your app. In this file it will need to look like this where YOUR_API_KEY is replaced with your new key:

```
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

The code in Weather.jsx will pull this environmental variable from the .env file and you will be able to run the app on your local machine. Please note that if you publish the code with your API keys, anyone using React will still be able to see this API key as they run at build time and are visible within the code.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).


Live project link: PowerPanel [https://power-panel.herokuapp.com/](https://power-panel.herokuapp.com/)