<template>
  <div class="wrapper">
    <div class="card">
      <div class="logo">
        <span class="logo-heading1">FARMERS</span
        ><span class="logo-heading2">BYTE</span>
      </div>
      <div class="heading">Sign In</div>
      <div class="heading-info">Login to your account to continue</div>
      <div class="social-media-buttons">
        <a href="#" class="social-media-button"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="#" class="social-media-button"
          ><i class="fab fa-google"></i
        ></a>
        <a href="#" class="social-media-button"
          ><i class="fab fa-twitter"></i
        ></a>
      </div>
      <div class="alternative">or login with email</div>
      <form class="form-group">
        <div class="input-email form-group">
          <div class="flex">
            <div class="input-label">User Name</div>
          </div>
          <input
            id="username"
            type="text"
            class="form-control email"
            placeholder="Enter User Name"
            v-model="username"
          />
        </div>
        <div class="input-password form-group">
          <div class="flex">
            <div class="input-label">Password</div>
            <div class="forgot-password pointer">Forgot Password</div>
          </div>

          <input
            type="text"
            class="form-control password"
            placeholder="Enter Password"
            v-model="password"
          />
        </div>
      </form>
      <div class="login-button" v-on:click="login()">Login</div>
      <div class="signup">
        Don't have an account?
        <span class="pointer" v-on:click="signUpRoute()">Sign Up</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: null,
      loading: false,
    };
  },
  methods: {
    login() {
      const details = {
        username: "asdf"
      };
      // this.$router.push("/home/kycs");
      this.$store.dispatch('authLogin',details).then(res => {
        console.log('asdfasdf',this.$store.getters.tokenResponse);
        console.log(res);
        // this.$store.dispatch('')
      })
    },
    signUpRoute() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
input::placeholder {
  color: #7d9eb5;
}

.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: aliceblue;
}

.card {
  height: auto;
  /* width: 400px; */
  padding: 30px;
  background-color: white;
}

.logo {
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  font-family: sans-serif;
}
.logo-heading1 {
  font-weight: 900;
}
.logo-heading2 {
  font-weight: 900;
  color: #42a436;
}
.heading {
  font-size: 35px;
  margin-top: 4vh;
  margin-bottom: 2vh;
  text-align: center;
  font-family: sans-serif;
}
.heading-info {
  color: #7d9eb5;
  font-size: 16px;
  text-align: center;
  font-family: sans-serif;
}
.social-media-buttons {
  display: flex;
  justify-content: space-evenly;
}
.social-media-button {
  background-color: transparent;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  /* color: rgb(0, 0, 0); */
  display: block;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 20px auto;
  cursor: pointer;
}
.alternative {
  color: #7d9eb5;
  font-size: 16px;
  text-align: center;
  font-family: sans-serif;
}
.alternative:before {
  content: "";
  display: block;
  width: 20%;
  height: 2px;
  background: #ccddfd;
  left: 70%;
  top: 10px;
  position: relative;
}
.alternative:after {
  content: "";
  display: block;
  width: 20%;
  height: 2px;
  background: #ccddfd;
  left: 10%;
  top: -10px;
  position: relative;
}
.input-label {
  padding: 5px 0;
  font-family: sans-serif;
}
.input-email {
  margin: 3vh 0px;
  color: #7d9eb5;
  font-size: 14px;
  font-family: sans-serif;
}

.email {
  width: 100%;
  border: 1px solid #bdcfda;
  border-radius: 1px;
  padding: 10px 5px;
  font-family: sans-serif;
}
.name {
  width: 100%;
  border: 1px solid #bdcfda;
  border-radius: 1px;
  padding: 10px 5px;
  font-family: sans-serif;
}

.input-password {
  margin: 3vh 0px;
  color: #7d9eb5;
  font-size: 14px;
  font-family: sans-serif;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.password {
  width: 100%;
  border: 1px solid #bdcfda;
  border-radius: 1px;
  padding: 10px 5px;
  font-family: sans-serif;
}
.forgot-password {
  color: #11a1fd;
}
.login-button {
  background-color: #11a1fd;
  border: 1px solid grey;
  border-radius: 2px;
  color: white;
  display: block;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 20px auto;
  cursor: pointer;
  font-family: sans-serif;
}
.signup-button {
  background-color: #11a1fd;
  border: 1px solid grey;
  border-radius: 2px;
  color: white;
  display: block;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 20px auto;
  cursor: pointer;
  font-family: sans-serif;
}
.signup {
  color: #7d9eb5;
  font-size: 16px;
  text-align: center;
  font-family: sans-serif;
}
.signup span {
  color: #11a1fd;
}
</style>