# sample-mf-project
Use to test out and do POC on MF using module federation

This project comprise 3 sub projects and an extra host (webpack host):
- Host
- Remote 1
- Remote 2

It is a micro-frontend project done originally with vite module federation plugin with a particular requirement to load the remote / children applications into the host / container app dynamically such that if there is an increase or decrease in the number of remote apps, the host will not need to have its config update and rebuilt to reflect the changes.


## Problem
The  vite module federation as well as webpack's were by default designed to load details of remote apps at build time, so the host must know all remote application and include them in its config file at build time. 


## Proposed Solution

1.  In the App.js, fetch a config file (that contains info about all remote app: app name, url) through a fetch call on initial render, then the config file is iterated through and use to get the exposed composed component on the remote with dynamic import

#### Challenges

-   React hooks are not being loaded


#### Todos

-   import other components and files into exposed component
-   use external libraries 




# Installation
To run the host application, the remote application should also be running:

### Remote 1

-   `yarn` to install
-   `yarn build && yarn dev` to build and run

### Remote 2
-   `yarn` to install
-   `yarn build && yarn dev` to build and run

### Host
-   `pnpm install` to install
-   `pnpm run dev`
