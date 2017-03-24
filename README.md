# Ionic 2 Interceptors Application

This is purely a example of implementation interceptors from scratch in Ionic 2 with TypeScript.


## Table of Contents
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)
 - [Build with versions](#build-with-versions)


## Getting Started

* Clone this repository: `git clone https://github.com/appwebhouse/ionic2-interceptors-app.git`.
* Run `npm install` from the project root.
* Install the ionic CLI (`npm install -g ionic`)
* Run `ionic serve` in a terminal from the project root.

**Note:** Is your build slow? Update `npm` to 3.x: `npm install -g npm`.


## File Structure of App

```
ionic2-interceptors-app/
├── .github/                            * GitHub files
│
├── resources/
│
├── src/
│    ├── app/
│    │    ├── app.component.ts
│    │    ├── app.module.ts
│    │    ├── app.html
│    │    ├── app.scss
│    │    └── main.ts
│    │
│    ├── assets/
│    │    └── icon/
│    │         └── favicon.ico
│    │
│    ├── pages/                         * Contains all of our pages
│    │    ├── home/                     * Home page
│    │    │    ├── home.html            * HomePage template
│    │    │    ├── home.ts              * HomePage code
│    │    │    └── home.scss            * HomePage stylesheet
│    │    │
│    │    └── login/                    * Login page
│    │         ├── login.html           * LoginPage template
│    │         ├── login.ts             * LoginPage code
│    │         └── login.scss           * LoginPage stylesheet
│    │
│    ├── services/                      * Contains all Injectables
│    │     ├── exampleService.ts        * HomeService code
│    │     └── httpService.ts           * httpService code
│    │
│    ├── theme/                         * App theme files
│    │     └── variables.scss           * App Shared Sass Variables
│    │
│    └── index.html
│
│
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * Example git ignore file
├── LICENSE                             * Apache License
├── README.md                           * This file
├── config.xml                          * Cordova configuration file
├── ionic.config.json                   * Ionic configuration file
├── package.json                        * Defines our JavaScript dependencies
├── tsconfig.json                       * Defines the root files and the compiler options
└── tslint.json                         * Defines the rules for the TypeScript linter
```


## Build with versions
```
$ ionic info

Your system information:

Cordova CLI: 6.5.0 
Ionic Framework Version: 2.2.0
Ionic CLI Version: 2.2.1
Ionic App Lib Version: 2.2.0
Ionic App Scripts Version: 1.1.4
ios-deploy version: Not installed
ios-sim version: Not installed
OS: Linux 4.4
Node Version: v6.5.0
Xcode version: Not installed
```

