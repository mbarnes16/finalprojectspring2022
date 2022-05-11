<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">BookFinder</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/create">Create Review</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/myreviews">My Reviews</b-nav-item>
            <div v-if="authUser">
              <b-img :src="authUser.photoURL" class="avatar" height="50px"></b-img>
            </div>
            <div class="d-md-none col-12">
              <b-collapse id="nav_collapse" is-nav>
              </b-collapse>
            </div>
            <b-nav-item href="#">
              <li v-if="authUser"><a href="#" @click.prevent="logout">Logout</a></li>
              <li v-else><a href="#" @click.prevent="login">Login</a></li>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view :auth-user="authUser"></router-view>
    <footer class="bg-dark text-center text-lg-start">
      <!-- Copyright -->
      <div id="footerText" class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Copyright:
        <a class="text-white" href="https://">BookFinder</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>

import {auth, firebase} from "./firebase";

export default {
  name: 'App',

  data() {
    return {
      authUser: null,
    }
  },
  created: function () {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        // let displayName = user.displayName;
        // let email = user.email;
        // let emailVerified = user.emailVerified;
        // let photoURL = user.photoURL;
        // let isAnonymous = user.isAnonymous;
        // let uid = user.uid;
        // let providerData = user.providerData;

        console.log('Signed in as: ', user);

        // store the user object in my app
        this.authUser = new User(user);
      } else {
        // User is signed out.
        console.log('Not signed in.');

        this.authUser = null;
      }
    });
  },

  // watch: calls the function if the value changes
  watch: {},
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();

      // login with google
      auth.signInWithPopup(provider)
          .catch(error => {
            console.error('Error signing in with Google', error);

          })

    },

    logout() {
      // logout
      auth.signOut();
    },
  },
}

const User = function (firebaseUser) {
  let m = {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
  }

  if (firebaseUser) {
    m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
    m.email = firebaseUser.email ? firebaseUser.email : '';
    m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
    m.uid = firebaseUser.uid ? firebaseUser.uid : '';
  }

  return m;
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
