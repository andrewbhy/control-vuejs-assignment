<template>
    <div class="top-nav">
        <div class="content-container">
            <div class="logo-container">
                <Logo/>
            </div>
            <div style="overflow:hidden">
                <div class="top-nav-menu">
                    <section>
                        <ul>
                            <!--HTML attributes are case-insensitive, so when using non-string templates, camelCased prop names need to use their kebab-case (hyphen-delimited) equivalents -->
                            <li>
                                <UserGreeting v-bind:is-logged-in="getIsLoggedIn" v-bind:fullname="getUserFullname" />
                            </li>
                            <li>
                                <div class="login-btn">
                                    <LoginButton v-bind:is-logged-in="getIsLoggedIn" />
                                </div>
                            </li>

                        </ul>
                    </section>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
//import '@/styles/lib.less'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('Auth');

import Logo from '@/components/Logo.vue' // note that the extension .vue is needed unlike .js files
import LoginButton from './LoginButton.vue'
import UserGreeting from './UserGreeting.vue'



export default {
    name: 'topnav',

    //components are defined at the top level; not inside data() function
    components: { Logo, LoginButton, UserGreeting },

    computed: {
        ...mapGetters(['getUserFullname', 'getIsLoggedIn'])
    }
}
</script>

<style >
.top-nav {
    height: 79px;

    background-color: #14212c;
    
    width: 100%;
    top: 0px;
}

.top-nav ul {
    list-style: none;
}

.top-nav li {
    float: left;
    margin-left: 20px;
    padding-top: 10px;
}

.login-btn {
    top:-6px;
    position:relative;
}

.logo-container {
    position: absolute;
    padding-left: 10px;
    padding-top: 20px;
}

.top-nav-menu {


    padding-right: 10px;
    color: white;

    float: right;
}
</style>
