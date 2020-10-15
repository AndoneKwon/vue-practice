<!--<template>-->
<!--  <div>-->
<!--    <h2>Login</h2>-->
<!--    <form @submit.prevent="onSubmit(email, password)">-->
<!--      <input type="text" v-model="email" placeholder="Email Address" />-->
<!--      <input type="password" v-model="password" placeholder="Password" />-->
<!--      <input type="submit" value="Login" />-->
<!--    </form>-->
<!--    <p><i>{{msg}}</i></p>-->
<!--  </div>-->
<!--</template>-->



<template>
<div id="app">
<v-container>
  <v-layout row class="text-xs-center">
    <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
      <v-card height="500px"></v-card>
    </v-flex>
    <v-flex xs4 class="grey lighten-4">
      <v-container style="position: relative;top: 13%;" class="text-xs-center">
        <v-card flat>
          <v-card-title primary-title>
            <h4>Login</h4>
          </v-card-title>
          <v-form>
            <v-text-field prepend-icon="person" name="Username" label="Username" v-model="email" placeholder="Email Address"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="password" placeholder="Password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block type="submit" value="Login">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</v-container>
</div>
</template>


<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
    }
  },
  methods: {
    onSubmit(email, password) {
      // LOGIN 액션 실행
      this.$store
          .dispatch("LOGIN", { email, password })
          .then(() => this.redirect())
          .catch(({ message }) => (this.msg = message))
    },
    redirect() {
      const { search } = window.location
      const tokens = search.replace(/^\?/, "").split("&")
      const { returnPath } = tokens.reduce((qs, tkn) => {
        const pair = tkn.split("=")
        qs[pair[0]] = decodeURIComponent(pair[1])
        return qs
      }, {})

      // 리다이렉트 처리
      this.$router.push(returnPath)
    },
  },
}
</script>