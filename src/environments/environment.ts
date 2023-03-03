// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  azure: {
    clientId: '1f732147-329c-4c90-abe9-768f5f6fdf49',
    tenantId: '1f732147-329c-4c90-abe9-768f5f6fdf49',
    subscriptionId: 'bfe170f0-6d0e-41f3-afb5-d9a9aea9a7d5',
    resourceGroup: 'bright-inference_group',
    vmName: 'bright-inference',
    resourceUrl: 'https://management.azure.com'
  }
}; 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
