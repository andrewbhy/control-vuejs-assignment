

# Goals
- [x] Bug : fix bug with login/logout button ( click not registering outside of button text )
- [x] finish ToDo List minimum functinal version
    - [x] toggle completed status
    - [x] implement modal component for adding new todo item
- [x] add bootstrap ( https://github.com/bootstrap-vue/bootstrap-vue/issues/145 )


# Nice-To-Have

- [ ] update to-do item's title
- [ ] focus on username input box when login page is loaded
- [ ] improve form validation & submition code
    - [ ] fix "double post" bug

# What I Learned 

- modal component. emit, slot ( just concept )
    - couldn't use created or mount event to reset the state of the modal component whenver it is opened.  Had to reset on close/submit
- used vue transition for the first time.  At this point it is unclear how css classes are generated.