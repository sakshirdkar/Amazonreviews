// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://server:8080' || 'http://127.0.0.1:8080',
  apiUrl2: 'http://broker2:8081' || 'http://127.0.0.1:8081',
  apiUrl3: 'http://broker3:8082' || 'http://127.0.0.1:8082'
  // apiUrl:'http://127.0.0.1:8080',
  // apiUrl2:'http://127.0.0.1:8081',
  // apiUrl3:'http://127.0.0.1:8082'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
