## Quick Start
---

### RUN FRONTEND SERVER 
:: front-end-code
#### `npm install`
#### `npm start`
##### Open [http://localhost:3000/#/](http://localhost:3000/#/) to view it in the browser.
---

### Code Testing
#### `npm install --dev`
#### `npm test`
---

### Build Code

#### `npm run build`

Builds the app for production to the `build` folder.

---

## WORK FLOW

- Start FrontEnd server : `npm start`
- FrontEnd Server load people's data using `loadPeople()` when it's start.
- When User click on planet link then `loadPlanet()` called and get palnet data asynchronous way using Redux-thunk. User can change people data using pagination.
---