// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStatisticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyA2AMF0E5noqy4tgI0eSImC92jBCbB4p5s',
    authDomain: 'pokemon-pokedex-wa-sw2023.firebaseapp.com',
    projectId: 'pokemon-pokedex-wa-sw2023',
    storageBucket: 'pokemon-pokedex-wa-sw2023.appspot.com',
    messagingSenderId: '635283562190',
    appId: '1:635283562190:web:6763afe7039efb907e3a9f',
    measurementId: 'G-24ELBS7GTY',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
