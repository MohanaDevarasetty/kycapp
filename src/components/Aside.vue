<template>
  <aside class="aside" style="position: fixed; z-index: 9999">
    <div class="">
      <div class="padding">
        <img style="margin-top: 20px" src="~@/assets/main-logo.png" alt="" />
      </div>
      <nav class="nav-menu">
        <ul>
          <li v-for="menu in menus" :key="menu.id">
            <span class="sidebar-subtitle subtitle">
              {{ menu.title }}
            </span>
            <ul class="mt-2">
              <li
                v-for="subMenu in menu.subMenus"
                :key="subMenu.id"
                class="sidebar-item"
                style="padding-top: 7px"
              >
                <img :src="subMenu.image" alt="Profile" />
                <a class="ml-3 pointer menu-text" v-on:click="navigate(subMenu.url)">
                  {{ subMenu.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
    userAvatar: require('@/assets/home.png'),
      logoUrl: "",
      currentPageUrl: "",
      menus: [
        {
          id: 1,
          title: "Organization",
          subMenus: [
            {
              id: 1,
              title: "Dashboard",
              url: "/dashboard",
              image: require('@/assets/home.png'),
            },
          ],
        },
        {
          id: 2,
          title: "Customers",
          subMenus: [
            {
              id: 1,
              title: "Customers",
              children: [],
              url: "/customers",
              image: require('@/assets/people.png'),
            },
            {
              id: 2,
              title: "KYC",
              children: [],
              url: "/kycs",
              image: require('@/assets/people.png'),
            },
          ],
        }
      ],
    };
  },
  methods: {
    navigate: function(url) {
      this.$router.push(`/home${url}`);
    }
  }
};
</script>

<style scoped>
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

.logo {
  background: url("~@/assets/main-logo.png") no-repeat 0 0;
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

.main-section-padding {
  padding-left: 264px;
}

.main-section {
  height: 100%;
  width: 100%;
  float: right;
  background-color: #f3f7f9;
}

.pointer {
  cursor: pointer;
}

.nav-menu {
  padding: 20px 0;
  margin: 0;
  height: 100vh;
  /* overflow: scroll; */
}

.nav-menu ul {
  padding: 0;
  margin: 0;
}

.nav-menu ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu ul li a:hover,
.nav-menu ul li.active a {
  color: #fff;
  background-color: #3366ff;
}
</style>