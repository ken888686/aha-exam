<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-primary"
      @click="verifyEmail"
    >
      Login
    </button>
  </div>
</template>
<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from 'firebase/auth';

const actionCodeSettings = {
  url: 'http://localhost:8080/#/done',
  // This must be true.
  handleCodeInApp: true,
};

const email = 'ken666868@hotmail.com';

export default {
  data() {
    return {};
  },
  mounted() {
    // this.registerWithEmail();
  },
  methods: {
    registerWithEmail() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, 'Oi521760')
        .then((userCredential) => {
          // const { user } = userCredential;
          console.dir(userCredential);
        })
        .catch((error) => {
          // const { code, message } = error;
          console.dir(error);
        });
    },
    verifyEmail() {
      const auth = getAuth();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then((res) => {
          // window.localStorage.setItem('emailForSignIn', email);
          console.dir(res);
          console.log(email);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
    google() {},
  },
};
</script>
