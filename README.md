# Fix My Boredom

## Project Summary

This App will be designed for those that are looking for something to do, but aren't sure of what they want to do.

## Technical Summary
Javascripts React library will predominately be used throughout this project

APIs that will be used: 
Bored API https://www.boredapi.com/
Google Search API https://rapidapi.com/apigeek/api/google-search3/endpoints A Google Search API with a limitation of 10 endpoint calls per day
Picsum Photos https://picsum.photos/


	
## Features
The user will be able to retreive suggestions for what activity to pursue.

The user will also be able to filter the suggestions based on activity type, price, how accessible the activity is and how many participants the activity requires.

The user then will be prompted if they would like to learn more about the activiy suggested and the app will preform a search for them using SerpAPI.

## Milestones
1. Creating the main directory, complete with a randomizer button and filter suggestions
2. Returns will be implemented as a dropbox, with links (when available) to the suggested activity as well as prompt which will allow the user to search the web about the acitiviy.
3. Final touch ups will include cleaning up code and the overall presentation of the App

## Project Requirements
The given APIs are free, except for the Google Search API.

One will need to sign up for an account on https://rapidapi.com/ and select the Basic plan under the pricing section in the givin API link above(https://rapidapi.com/apigeek/api/google-search3/endpoints). Once one is done signing up, one will need to input their API key into the Seach.js file:

    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "your-key"
      }
    })

npm install, npm install axios and npm start will be need to be ran in the command line in your editor to run this App on your local machine.
