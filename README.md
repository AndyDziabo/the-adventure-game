# The Adventure Game

A top down view adventure game with user login, new game, saved games, key settings and highscore features.

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)

## General Information
- Full-stack project with a React frontend and a Rails backend
- Utilizes Redux for state management
- Single page application with multiple client-side routes using React Router
- Implemented authentication/authorization including password protection using bcrypt
- Validations for new user sign up and existing user login
- Custom CSS for character movement and animation

## Technologies Used
- React
- React Router
- Redux
- Ruby on Rails
- bcrypt


## Features
- Create New game section where a user can start a new game
- Saved Game section where a user and continue a game that they were previously playing
- Settings section where a user can customize which keys they want to use for character movement
- High Scores section where users can view the top ten scores out of all the players and games

For a video demo of the app visit https://andrewdziabo.dev/ and goto the projects section

## Setup
1. Fork/clone this repo to your local environment.
2. In your terminal, run <code>npm install</code>
3. To start the Postgresql service:</br>
  for WSL <code>$ sudo service postgresql start</code></br>
  for OSX <code>$ brew services start postgresql</code>
4. Then to start the server <code>$ rails s</code>
5. Then in a separate terminal, run <code>npm start --prefix client</code>


## Room for Improvement
- Mobile compatibility
- Add AI for the NPC to create battles
- Add more levels
