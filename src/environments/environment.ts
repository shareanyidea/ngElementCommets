// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // add your firebase config below

  firebase : {
    apiKey: "AIzaSyBR0Q6uDFV081elU9A4keBzPOfl-y7oQXo",
    authDomain: "share-any-idea-dev.firebaseapp.com",
    databaseURL: "https://share-any-idea-dev.firebaseio.com",
    projectId: "share-any-idea-dev",
    storageBucket: "share-any-idea-dev.appspot.com",
    messagingSenderId: "16858439726",
    appId: "1:16858439726:web:461c171c428c15a4207fbf"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
