<template>
  <div class="wrapper">
    <div class="signup-card">
      <div class="logo">
        <span class="logo-heading1">FARMERS</span
        ><span class="logo-heading2">BYTE</span>
      </div>
      <div class="heading">Sign Up</div>
      <form class="form-group">
        <div class="input-username form-group">
          <div class="flex">
            <div class="input-label">User Name</div>
          </div>
          <input
            type="text"
            class="form-control name"
            id="username"
            v-model="username"
            placeholder="Enter Username"
          />
        </div>
        <div class="input-email form-group">
          <div class="flex">
            <div class="input-label">Email</div>
          </div>
          <input
            type="text"
            class="form-control email"
            id="email"
            v-model="email"
            placeholder="Enter Email"
          />
        </div>
        <div class="input-phoneNumber form-group">
          <div class="flex">
            <div class="input-label">Phone Number</div>
          </div>
          <input
            type="tel"
            class="form-control phoneNumber"
            id="phonenumber"
            v-model="phonenumber"
            placeholder="Enter PhoneNumber"
          />
        </div>
        <div class="input-password form-group">
          <div class="flex">
            <div class="input-label">Password</div>
          </div>

          <input
            type="text"
            class="form-control password"
            id="password"
            v-model="password"
            placeholder="Enter Password"
          />
        </div>
      </form>
      <div class="signup-button" v-on:click="signup()">Signup</div>
      <div class="btn btn-secondary col-12" v-on:click="loginPage()">
        <span>Back to Login Page</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      phonenumber: "",
      email: "",
      error: null,
      loading: false,
    };
  },
  methods: {
    loginPage() {
      this.$router.push("/login");
    },
    signup() {
      this.$router.push("/home/kycs");
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
.signup-card {
  height: auto;
  width: 400px;
  padding: 30px;
  background-color: white;
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
.input-username {
  margin: 3vh 0px;
  color: #7d9eb5;
  font-size: 14px;
  font-family: sans-serif;
}
.input-phoneNumber {
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
.phoneNumber {
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