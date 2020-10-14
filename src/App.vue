<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand v-bind:to="'/home'">메뉴</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-bind:to="'/login'">로그인</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- navbar-1.vue -->
    <img src="./assets/logo.png">
    <!--<router-link v-bind:to="'rara'">testsssss</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>