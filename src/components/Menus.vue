<template>
  <div>
    <router-link to="/">Home</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="" v-if="isAuthenticated()" @click.prevent="onClickLogout">Logout</a>
    <router-link to="/login" v-else>Login</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link v-if="isAuthenticated()" to="/me">Me</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link v-if="!isAuthenticated()" to="/register">Register</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/contents">Contents</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/create">Create</router-link>

  </div>
</template>

<script>
var isEmpty = function (value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
      return true
    } else {
      return false
    }
  };

export default {
  computed: {
  },
  methods: {
    onClickLogout() {
      localStorage.removeItem("authorization");
      localStorage.removeItem("refreshtoken");
      window.location.href="http://localhost:8080"
    },
    isAuthenticated() {
      return !isEmpty(localStorage.getItem('authorization'));
    }
  },
  created(){
    console.log(!isEmpty(localStorage.getItem('authorization')));
  }
}
</script>