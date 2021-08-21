<template>
  <div>
    <Header @updateLeftNavigation="updateLeftNavigation" />
    <main
      :class="isLeftNavigatorOpen ? 'main-section-padding' : ''"
      class="main-section"
    >
      <section class="container-fluid">
        <div class="form-row">
          <div class="col-12">
            <router-view></router-view>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      isLeftNavigatorOpen: true,
      isSession: this.checkSession(),
    };
  },

  methods: {
    updateLeftNavigation: function (value) {
      this.isLeftNavigatorOpen = value;
    },
    checkSession() {
      const isLoggedIn = sessionStorage.getItem("isLoggedIn")
        ? JSON.parse(sessionStorage.getItem("isLoggedIn"))
        : false;
      if (isLoggedIn === true) {
        this.$store.dispatch("authTokenSuccess", "asdfasdfasdf");
      }
    },
  },
};
</script>

<style scoped>
.main-section {
  height: 100%;
  width: 100%;
  float: right;
  background-color: #f3f7f9;
  margin-top: 55px;
}
.main-section-padding {
  padding-left: 264px;
}
</style>