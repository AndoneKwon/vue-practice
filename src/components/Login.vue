<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field  v-model="form.email" label="email" type="text"></v-text-field>
              <v-text-field  v-model="form.pwd" label="비밀번호" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signIn">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      form: {
        email: '',
        pwd: ''
      }
    }
  },
  methods: {
    signIn (email, pwd) {
      // LOGIN 액션 실행
      this.$store
          .dispatch("LOGIN", { email, pwd })
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

  }
}
</script>