
# Bugs
- clicking on login/logout button will only register click only if the text inside of button is clicked.  This is because button is implemented : <li><a @click="..."></a></li>
    - It was changed from a href, due to another bug, where clicking on logout button also resultd in clicking on login button ( state chage and button click coinsides and seems to click login on mouseup )

# Goals

- [ ] finish ToDo List
    - [x] toggle completed status
    - [ ] update title
    - [ ] implement modal component for adding new todo item
- [ ] focus on username input box when login page is loaded
- [ ] add bootstrap ( https://github.com/bootstrap-vue/bootstrap-vue/issues/145 )