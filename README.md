# control-frontend

> front end showcase and a learning experience :
> https://control-frontend.herokuapp.com/

# How to run in dev settings

```bash
  npm install
  npm run flow-generate-type 
  npm run dev
```

# Flow-type giving trouble?

created flow-typed branch with flow-typed included.  Try this instead

# Minimum Requirements 

-  [x] Login
    -  [x] Login is validated using the username against data from API ( http://jsonplaceholder.typicode.com/users )
    -  [x] User's name ( first and last ) is displayed at the top-right corner after login
    -  [x] Validation message should show up if invalid username is entered
-  [x] To-Do
    -  [x] User can only see the to-do list once logged in
    -  [x] User must only be able to see to-dos by the current user logged in.
    -  [x] User can toggle the completed status of to-do item
        - [x] One must be able to easily tell if a to-do is completed or not completed. ( added stike-through line )
    -  [x] Create To-Do 
        - [x] One should be able to create to-dos by hitting an Add To-Do button. This should bring up a UI where the user can input a new to-do.
        - [x] User can create new to-do item ( does not save to the server though.. )
        - [x] One must not be able to submit an empty to-do.

# Features not implemented

-  [ ] Add button in To-Do list screen does not switch to "cancel" like the wireframe instructs

# Additional features implemented 

- 404 Not Found Route. Request to non-existing pages will land here.
- Log out


# Libraries used 

- Vuex 
- Form Validation with vee-validator
- lodash ( for debouncing form submit )
- bootstrap 4 
- flow 


# Issues

- [Highest] When logging in as different user after logging out, to-do list from the previous sessions shows up.
    - State is being cleared on logout, biggest suspect is the  vue <transition> storing image of previous screen
    - Another suspect is that state update does not trigger the component to re-render
- Add To-Do item modal control does not autofocus on the input.

# Things to do

- State Management : When logging out, I would like the logout commit to reach every single store modules, so that each can modify their state as they see fit ( much like reducer actions in REDUX ).  Right now, I am calling commit from Auth module to ToDo module manually so that to-do list gets cleared.  I want to find a nice solution, so that statemanagement becomes truly centralized.
- Flow : I'd like to have full coverage of flow ( or typescript ) in the code 
- Unit & E2E Testing
- Rewrite the API calls ( clean up response type structure and standardize them )
- Write server API that can generate new data



## Build Setup

``` bash
# install dependencies ( post-install should generat flow-typed folder and type definitions )
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# serve published app on simple express app server ( run this after build )
npm run start

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# generate flow-typed definitions from locally installe flow-bin/flow-type
npm run flow-generate-type
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
