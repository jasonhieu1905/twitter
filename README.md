# Twitter
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.
A simple project built with Angular5 in following features : 
 + display a list of Tweets with different searching options and we will provide an API for interacting with Twitter
 + Responsive UI, can run in multiple device.

# Set up
 + Clone this project https://github.com/artenepo/twitter_scrape to your local environment and follow instruction to set up data
 + Move to folder 'twitter' and go to command line :
    - 1. 'npm install'
    - 2. Go to 'environment.ts' and point to server that u set up. Could be local or running live server  
    - 3. 'ng serve' will automatically start on port 4200. Enter URL 'http://localhost:4200'
    ( Note that, current Backend sources restrict to call api since they dont set allow-origin: *). I tried to pass by this step by 'enable cross origin sharing' (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

# Limitation
    http://localhost:5000/hashtags/Python?pages_limit=10&wait=0
    http://localhost:5000/users/Twitter?pages_limit=10&wait=0
  + API seems does not support with param 'tag' or 'user'. So the fir st time I load with 
  page_limit = 10 and wait = 0. Change these values in 'constant.ts'.
  + The next time when user search with hashtags. I do pagination as client side base on full records.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
