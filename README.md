# Fix My Boredom

## Project Summary

This App will be designed for those that are looking for something to do, but aren't sure of what they want to do. The user can find activities at random or through selected categories, search for the activity they want to do and either learn about the activity before pursuing it, or go on with pursuing it.

## Technical Summary
Javascripts React library will predominately be used throughout this project

APIs that will be used: 
Bored API https://www.boredapi.com/
Google Search API https://rapidapi.com/apigeek/api/google-search3/endpoints A Google Search API with a limitation of 10 endpoint calls per day
Picsum Photos https://picsum.photos/


	
## Features
The user will be able to retreive suggestions for what activity to pursue.

The user will also be able to filter the suggestions based on activity type.

The user will also be able to learn more about the activiy suggested if they so desire. If so, the user can input their desired activity into a search bar and see results returned onto the screen as links.

## Milestones
1. Creating the main directory, complete with a randomizer button and filter suggestions
2. Returns will be implemented as a simple html element.
3. Search feature will be implemented and finalized
4. Final touch ups will include cleaning up code and the overall presentation of the App

## Project Requirements
The given APIs are free, except for the Google Search API.

One will need to sign up for an account on https://rapidapi.com/ and select the Basic plan under the pricing section in the givin API link above(https://rapidapi.com/apigeek/api/google-search3/endpoints). Once one is done signing up, one will need to input their API key into the Seach.js file:

    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "your-key-here" <<<
      }
    })


Run "npm install", "npm install axios" and "npm start in the command line in your editor to run this App on your local machine.