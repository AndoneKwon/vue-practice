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
            <v-form ref = "form">
              <v-text-field  v-model="email" id="email" label="email" type="text"></v-text-field>
              <v-text-field  v-model="pwd" id="pwd" label="비밀번호" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <h4 v-show="400==status">ID 또는 비밀번호를 확인해 주세요.</h4>
            <v-btn color="primary" @click="signIn">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
      status:200
    }
  },
  methods: {
    signIn () {
      axios({
        method:'POST',
        url : 'http://localhost:3000/auth/login',
        data:{
            email:this.email,
            password:this.pwd
        },
      })
      .then(res=>{
        console.log(res.data);
        if(res.data.code==400)
          this.status=res.data.code
        else{
          localStorage.setItem("authorization",res.data.token);
          localStorage.setItem("refreshtoken",res.data.refreshtoken);
          window.location.href="http://localhost:8080"
        }
      });
    },

    redirect() {
      // 리다이렉트 처리
      this.$router.push("/home")
    },

  }
}
</script>