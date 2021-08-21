<template>
  <div>
    <header
      class="header header-background"
      style="position: fixed; z-index: 9999"
    >
      <div v-click-outside="closeDropDowns" class="container-fluid">
        <div class="">
          <div class="col-md-12">
            <div id="hamburgermenu" class="col-6">
              <div
                class="icon-menu"
                v-on:click="leftNavigator()"
                :class="
                  openLeftNavigator
                    ? 'hamburgermenu-margin-left'
                    : 'nohamburgermenu-margin-left'
                "
              ></div>
            </div>
            <div class="float-right" style="padding-right: 0px">
              <div class="notification">
                <a v-on:click="notificationDropMenu">
                  <img src="~@/assets/icon_bell.png" alt="" />
                  <span class="badge badge-danger">{{
                    notificationCount > 0 ? notificationCount : ""
                  }}</span>
                </a>
                <div
                  v-if="openNotificationNav"
                  class="dropdown-menu dropdown-notification"
                  :class="openNotificationNav ? 'show' : ''"
                >
                  <PushNotifications />
                </div>
              </div>
              <div class="settings" style="cursor: pointer">
                <img src="~@/assets/settings.png" alt="" />
              </div>
              <div class="language" style="cursor: pointer">
                <a>
                  <img src="~@/assets/oval.png" alt="" />
                </a>
              </div>
              <div class="profile">
                <a class="pointer" v-on:click="profileDropMenu">
                  <div
                    class="row"
                    style="align-items: center; margin-left: 0px"
                  >
                    <div class="col-3">
                      <img
                        src="~@/assets/profile-icon.png"
                        alt="Profile"
                        style="height: 40px; width: 40px"
                      />
                    </div>
                    <div class="col-9">
                      <h6 class="user_name">
                        {{ getUserName }}
                      </h6>
                    </div>
                  </div>
                </a>
                <ul
                  v-if="openProfile"
                  class="dropdown-menu"
                  id="profile-submenu"
                  :class="openProfile ? 'show' : ''"
                >
                  <li class="dropdown-item pointer">
                    <a>Change Password</a>
                  </li>
                  <li class="dropdown-item pointer" v-on:click="signOut">
                    <a>Sign Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div v-if="openLeftNavigator">
      <Aside />
    </div>
  </div>
</template>


<script>
import Aside from "./Aside.vue";
import PushNotifications from "./PushNotifications.vue";
export default {
  name: "Header",
  components: {
    Aside,
    PushNotifications,
  },
  data() {
    return {
      openProfile: false,
      openLeftNavigator: true,
      openNotificationNav: false,
      notificationCount: 0,
      userName: "",
    };
  },
  computed: {
    getUserName() {
      return this.$store.getters.userName;
    }
  },
  methods: {
    leftNavigator: function () {
      this.openLeftNavigator = !this.openLeftNavigator;
      this.$emit("updateLeftNavigation", this.openLeftNavigator);
    },
    signOut: function () {
      this.$store.dispatch('authLogout');
    },
    closeDropDowns: function () {
      this.openProfile = false;
      this.openNotificationNav = false;
    },
    notificationDropMenu: function () {
      this.openNotificationNav = !this.openNotificationNav;
      this.openProfile = false;
    },
    profileDropMenu: function () {
      this.openProfile = !this.openProfile;
      this.openNotificationNav = false;
    },
  },
};
</script>


<style scoped>
a {
  color: #222b45;
}

a,
a:hover {
  text-decoration: none;
  outline: none;
}

.header {
  margin-top: -9px;
  height: 64px;
  width: 100%;
}

.header-background {
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(133, 157, 177, 0.1);
}

.header .container-fluid {
  padding-left: 24px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 20px;
}

.notification {
  height: 24px;
  width: 24px;
  float: left;
  cursor: pointer;
  margin-right: 20px;
}

.profile {
  height: 40px;
  margin-top: -10px;
  display: inline-block;
}

.flex {
  display: flex;
}

.settings {
  height: 24px;
  width: 24px;
  float: left;
  margin-right: 20px;
}

.language {
  height: 24px;
  width: 24px;
  float: left;
  margin-right: 20px;
}

.float-right {
  float: right;
}

.user_name {
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  color: black;
  margin-bottom: 3px;
  font-size: 13px;
  font-weight: 200;
}

.dropdown {
  cursor: pointer;
}

aside {
  width: 264px;
  height: 100%;
  padding: 0;
  background-color: #222b45;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  border-right: 1px solid #d8d8d8;
}

@media (max-width: 648px) {
  aside {
    overflow: scroll;
  }
}
aside .padding {
  padding-left: 27px;
  padding-right: 28px;
}

.pasted-image {
  height: 31.83px;
  width: 211px;
}

.sidebar-item {
  height: 39.78px;
  opacity: 0.6;
  color: white;
  font-size: 14px;
  background-color: #222b45;
}

.hamburgermenu-margin-left {
  margin-left: 230px;
}

.nohamburgermenu-margin-left {
  margin-left: -28px;
}

.icon-menu {
  height: 24px;
  width: 50px;
  cursor: pointer;
  float: left;
  background: url("~@/assets/icon-menu.png") no-repeat right center;
}

.dropdown-menu {
  width: 175px;
  top: 65px !important;
  left: inherit !important;
  right: 10px;
  -webkit-transform: inherit !important;
  transform: inherit !important;
  padding: 0px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-notification {
  width: 300px;
  top: 65px !important;
  left: inherit !important;
  right: 40px !important;
  -webkit-transform: inherit !important;
  transform: inherit !important;
  padding: 0px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-item {
  border-bottom: 1px solid lightgrey;
  padding: 8px !important;
  cursor: pointer;
  white-space: normal;
  text-align: center;
  font-size: 14px;
}

.dropdown-menu .dropdown-item a:hover {
  color: #05410d;
}
</style>