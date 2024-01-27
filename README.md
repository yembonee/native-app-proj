# Native Mobile Chat App

## Overview

- This is a Chat app that is designed for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

<br>
<p align="center"><sub>Chat App Gif</sub></p>
<br>

<p align="center"><img src="" alt="gif of the app's functionality"></p>

<br>

## Features

- Choice for User to change name and background for chat UI.
- Chat page for displaying conversation, including input field and sumbit button
- Chat with provide user with two additional features:
  - Sending Images
  - Location Data
- Data will be stored for Online and Offline viewing

## Dependencies

- Expo
- React Native
- React Navigation
- Google Firebase and it's Storage element
- Async Storage
- The Gifted Chat Library

## How to Setup App

- Install Node.js onto the device you wish to use for the app
- Install Expo globally through the terminal: `npm install -g expo-cli`
  - Make sure you have an Expo account, and login through the terminal <a href="https://expo.dev/">Expo Account Setup Here</a>
- Clone this repository to your device
- Go to project folder and run: `npm install` in the terminal
- Get and use a Firebase authentication code
  - Sign up or Sign in using google authentication <a href="https://firebase.google.com/">Sign in Here</a>
  - Create a Project (Uncheck the Google Analytics)
  - Navigate to the Build Folder on the left and Create a Firestore Database
    - The default region should be your closest region, if not change it to whatever is closest
    - Create database in production mode
    - Navigate to the rules tab at the top, and change the `allow read, write: if false;` to `allow read, write: if true;`
  - Navigate to the Project Settings by visiting the Gear next to Project Overview at the top left
    - Select the **</>** icon at the bottom
  - Register app, and use the given code to input in terminal to setup firebase in your directory -`npm install firebase`
    - Copy and replace the given code, into the App.js file from the cloned repository
- Download Android Studio or an IOS Emulator online
- Finally Run `npx expo start` in the terminal of your repository
  - From there you should be able to access the Expo app via your personal device or from the device via the emulator
  - Make sure you are connected to the same network that you are running the app from
  - Select the default one it shows, or use the phones camera to scan the QR code in the terminal to start the app
