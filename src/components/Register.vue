<template>
  <validation-observer
      ref="observer"
      v-slot=""
  >
    <form>
      <validation-provider
          v-slot="{ errors }"
          name="nickname"
          rules="required|max:10"
      >
        <v-text-field
            v-model="nickname"
            :counter="10"
            :error-messages="errors"
            label="nickname"
            id="nickname"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
      >
        <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
            id="email"
        ></v-text-field>
      </validation-provider>
      <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required"
      >
        <v-text-field
            v-model="pwd"
            :error-messages="errors"
            label="password"
            type="password"
            id="pwd"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required"
      >
        <v-text-field
            v-model="phoneNum"
            :error-messages="errors"
            label="phoneNum"
            id="phoneNum"
            required
        ></v-text-field>
      </validation-provider>
      <v-btn
          class="mr-4"
          @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import axios from 'axios'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: '',
    email: '',
    select: null,
    errors: null,
    checkbox: null,
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
      axios({
        method:'POST',
        url : 'http://localhost:3000/auth/join',
        data:{
            email:this.email,
            password:this.pwd,
            phone_num:this.phoneNum,
            nickname:this.nickname
        },
      })
      .then(res=>{
        if(res.data.code==200)
        window.location.href="http://localhost:8080"
      })
    },
    clear () {
      this.name = ''
      this.email = ''
      this.password = null
      this.$refs.observer.reset()
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