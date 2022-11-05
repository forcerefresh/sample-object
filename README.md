# Sample object

This repository is a boilerplate for creating **Objects** for [Web Slider](https://webslider.io).  
This is a recommended way to start Object development.

## Prerequest

Install following tools:

- [NodeJs](https://nodejs.org) 16.15.0 or newest
- [Yarn](https://yarnpkg.com/) 1.22.19 or newest
- [Gulp](https://gulpjs.com/) 2.3.0 or newest `npm install --global gulp-cli`

## Install dependencies

Clone repo and install dependencies:

`git clone git@github.com:forcerefresh/sample-object.git` 

`yarn`

## Run

To run development server:

`yarn start`

## Add object in app

During development, in order to test your Object, you can add it to Web Slider app and get realtime preview.

To connect follow these steps:

- `yarn start`
- It will open browser and show development configuration page.
- In Web Slider App go to `Settings > App Settings` and enable `Developer mode`
- Go to `Library > Development` and click `+ Add Object`.
- Fill out form with data from development configuration page and click `Start monitoring`.

## Build

To build Object for production:

`yarn build`

Bundle is located in `dist/bundle/sample-object.zip` folder.
Upload bundle file in `Library > Local Extensions` and Object is ready for use in Web Slider app.

It contains following files:

- object-meta.json
- sample-object-app.js
- sample-object-player.js
- sample-object.logo.svg

## Analyze

To optimize or check what is inside animation bundle use analyze commands.

- Run `yarn build`
- Run `yarn run analyze-app` and `yarn run analyze-player` to analyze app or player build.

## License

This repo is licensed under **EULA for Web Slider Extensions** license

In short, it's allowed to clone/fork, to edit/modify, create new Animation and use it Web Slider app.

Read LICENSE.txt file for more details.