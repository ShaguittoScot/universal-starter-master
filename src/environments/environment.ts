// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

export const environment = {
  production: false,
  // Replace the following `firebase` object with your Firebase project settings.
  // Get these values from the Firebase Console -> Project settings.
  firebase: {
    apiKey: "AIzaSyBnwezSh28DFRH9zQ9xsdn6rfJg73jzo1Y",
    authDomain: "mi-app-c32e6.firebaseapp.com",
    databaseURL: "__FIREBASE_DATABASE_URL__",
    projectId: "mi-app-c32e6",
    storageBucket: "mi-app-c32e6.firebasestorage.app",
    messagingSenderId: "60564114755",
  }
};
