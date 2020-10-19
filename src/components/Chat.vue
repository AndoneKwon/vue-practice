<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-virtual-scroll
        :bench="benched"
        :items="items"
        height="500"
        item-height="64"
      >
        <template v-slot="{ item }">
          <v-list-item :key="item">
            <v-list-item-ID>
              <v-list-item-title>
                <strong>{{ item.ID + " : "}} </strong>
                {{item.content}}
              </v-list-item-title>
            </v-list-item-ID>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
      </v-card>
      <v-form ref = "form" v-model="valid" @submit.prevent="submit">
        <v-text-field
        v-model="chat"
        label="chat"
        id="chat"
        ></v-text-field>
        <v-btn
        class="mr-4"
        @click="submit"
        color="success"
        >
        submit
        </v-btn>
        
        <v-btn @click="reset" color="warning">
            clear
        </v-btn>
     </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios"
import io from "socket.io-client"
  export default {
    data(){
      return{
        message: [],
        socket:io('localhost:3001')
      }
    },
    methods:{
        reset(){
            this.$refs.form.reset()  
        },
        submit(){
            console.log(this.chat);
            axios({
                method:'POST',
                url : 'http://localhost:3001/message',
                data:{
                    message:this.chat    
                },
            });          
        },
        mount(){
            this.socket.on('message',(data)=>{
                this.message = [...this.message,data];
            });
        }
    }
  }
</script>