# Unhandled Promise Rejection in Asynchronous Express.js App

This repository demonstrates an example of an unhandled promise rejection in a Node.js Express.js application. The application simulates an asynchronous operation (database interaction) that can potentially fail.  Without proper error handling, this failure results in an unhandled promise rejection, causing the application to crash.

## Bug Description

The `bug.js` file contains an Express.js app that simulates an asynchronous database operation. If the simulated operation fails (simulated 50% of the time), an `Error` is thrown.  However, the error is not caught, leading to an unhandled promise rejection and application crash.

## Solution

The `bugSolution.js` file demonstrates a solution using async/await and a try-catch block to properly handle the potential error. This prevents the unhandled promise rejection and allows for graceful error handling.