

# Goals

- [x] Improve form validation/submit
- [x] Update all components to adhere to the wireframe ( html/css )
- [ ] rewrite README files, and do a little write up
- [ ] submit

# Gotcha
- flow-typed 2.2.0 has errors on windows machine and had to downgrade


# Bugs
- [fixed] When logging in as different user after logging out, to-do list from the previous sessions shows up.
    - State is being cleared on logout and the computed cache should clear.  Component is destroyed aswell. Possible guesses :
        - computed properties are cached as doesn't get cleared even when state is cleared on logout
        - ~~is the vue <transition> storing image of previous screen? Need to understand how transition works.~~
        - Another suspect is that state update does not trigger the component to re-render
    - State was not cleared properly; 
# Nice to Have 

- [ ] Unit testing
- [ ] improve Flow coverage 
- [ ] clean up code