<template>
  <div>
    쿠팡 Ldap id, pw를 입력하세요.
    <b-form inline>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="ldap id" />
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="ldap pw" />
      <b-button variant="primary" v-on:click="login">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>