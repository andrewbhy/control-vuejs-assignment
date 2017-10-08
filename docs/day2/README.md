

# Goals for Day2 ( Oct 7 )

- complete top nav bar ( carried over from yesterday )
    - [x] Build user login widget component ( dipslays login button when not logged in, display logged in user after logging in)
    - [x] Finish html/css layout
- implement login api 
    - [ ] learn Axios http client library which is often recommended for use in vuejs projects
    - [ ] get user list from  https://jsonplaceholder.typicode.com/users
    - [ ] validate input username
    - [ ] nice to have : define common api response signature
- Implement authorization filter
    - [ ] use the provided api endpoint to verify user name
    - [ ] lean how to impelemnt authentication using vue-router ( or any other modules needed? )
- Learn Vue.js 
    - [x] Create component(s) with props
    - [x] Learn how to manage state in large and complex SPA ( https://vuejs.org/v2/guide/state-management.html, https://css-tricks.com/intro-to-vue-4-vuex/ ,http://pksunkara.com/posts/complex-vuejs-app-structure/)
    - [x] Read tutorials on Building Large Scale App with vue.js ( https://medium.com/@thomasmarciniak/building-large-scale-apps-with-vuejs-2-part-1-structure-c27ae42dacd0 )

# Thoughts & Findings & Gotchas

- Vue-Router was not loading routes ( ex. /login ); Had to enable history mode
- Decided to introduce state management ( vuex ) early, so that I can benefit from it when constructing the login button widget
- came across destructuring assignment example ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment,http://exploringjs.com/es6/ch_destructuring.html)
- trying to learn how vuex can be implemented in SPA project.  Trying to find similarities between react/redux.
- decided to use flow for type checking;  It will be benefitical when implementing the to-do list model