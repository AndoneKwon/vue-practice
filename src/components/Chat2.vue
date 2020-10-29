<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-virtual-scroll
        :items="items"
        height="600"
        item-height="64"
        >
          <template v-slot:default="{item}">
            <v-list-item>
                <v-list-item-title>
                  <strong>{{ item.nickname + " : "}} </strong>
                  {{item.message}}
                </v-list-item-title>
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
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
  export default {
    data(){
      return{
        items: [],
        nickname:["myname","kwon"]
      }
    },
    created(){
      this.connect();
    },
    methods:{
        reset(){
            this.$refs.form.reset()  
        },
        submit(){
            //console.log(this.chat);
            axios({
                method:'POST',
                url : 'http://localhost:3001/message',
                data:{
                    message:this.chat,
                    user:"1",
                    nickname:"kwon",
                    roomNum:"1"
                },
            });
            this.reset();          
        },
        mount(){
            this.socket.on('message',(data)=>{
                this.message = [...this.message,data];
            });
        },
        connect() {
          const serverURL = "http://localhost:3001/"
          let socket = new SockJS(serverURL);
          console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`);
          var stompClient = Stomp.over(socket);
          stompClient.connect(
            {},
            frame => {
              // 소켓 연결 성공
              this.connected = true;
              console.log('소켓 연결 성공', frame);
              stompClient.subscribe("/topic/1", res => {
            
              console.log('구독으로 받은 메시지 입니다.', res.body);

              // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
              this.items.push(JSON.parse(JSON.parse(res.body)));
            });
          },
          error => {
           // 소켓 연결 실패
            console.log('소켓 연결 실패', error);
            this.connected = false;
          }
        );  
      }
    }
  }
</script>