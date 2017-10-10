

# Goals for Day2 ( Oct 7 )

- complete top nav bar ( carried over from yesterday )
    - [x] Build user login widget component ( dipslays login button when not logged in, display logged in user after logging in)
    - [x] Finish html/css layout
- implement login api 
    - [x] use Axios http client library which is often recommended for use in vuejs projects ( https://alligator.io/vuejs/rest-api-axios/ )
    - [x] get user list from  https://jsonplaceholder.typicode.com/users
    - [x] validate input username
    - [ ] nice to have : define common api response signature
- Implement authorization filter
    - [ ] use the provided api endpoint to verify user name
    - [ ] lean how to impelemnt authentication using vue-router ( or any other modules needed? )
- Learn Vue.js 
    - [x] Create component(s) with props
    - [x] Learn how to manage state in large and complex SPA ( https://vuejs.org/v2/guide/state-management.html, https://css-tricks.com/intro-to-vue-4-vuex/ ,http://pksunkara.com/posts/complex-vuejs-app-structure/)
    - [x] Read tutorials on Building Large Scale App with vue.js ( https://medium.com/@thomasmarciniak/building-large-scale-apps-with-vuejs-2-part-1-structure-c27ae42dacd0 )
    - Actions vs Mutations & dispatch vs commit
        - actions can be async, whereas mutations are synchronous
        - dipatch triggers action vs commit triggers mutation
        - compared to react/redux, actions are practically identical and mutations remind me of reducers ( except state being immutable in react/redux )
- [x] implement not found 404 page ( helped debugging routing issue ) 


# Gotchas

- Vue-Router was not loading routes ( ex. /login ); Had to enable history mode

# Thoughts

- Decided to introduce state management ( vuex ) early, so that I can benefit from it when constructing the login button widget
- came across destructuring assignment example ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment,http://exploringjs.com/es6/ch_destructuring.html)
- I am trying to learn how vuex works and trying to understand by identifying similarities with react/redux.  
- decided to use flow for type checking;  It will be benefitical when implementing the to-do list model
- eslintc : setting env flags ( node, es6 ) is needed in order to recognize 'require' or 'Promise'
- karma+mocha+ES6-Promise+axios : wanted to use unit-testing to develop login api function, but I have been struggling trying to make this work.  I will have to wire the api call to ui and test there first then figure out how to set this up.
- vue-router go api didn't work, probably because history mode is on.  Had to use push instead
- Binding actions and states are simpler than the "connect" function in redux


# Retrospective & Decisions
- implementing proper authentication that is temper-proof is outside of this project scope, I and decided not to implement it.  
- intially was thinking of handling the to-do list inside app state ( and come up with my own design for the to-do list ), but I may just use the provided json api for minimum viable version
- Initial attempt at unit test failed;  The configuration proved to be the biggest challenge with axios & Promise
- I found myself confusing the use of computed & methods;  Also, how the getter function automatically resolve&return values in components is still unfamiliar.  I will need a lot more practice for these to become 2nd nature
