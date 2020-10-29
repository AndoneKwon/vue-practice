<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-carousel style="width : 100%;">
                        <v-carousel-item
                            v-for="(item,i) in photos[0]"
                            :key="i"
                            :src="`http://117.17.196.142:8008/images/${item}`"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                        />
                    </v-carousel>
                    <v-row>
                        <v-col>
                        </v-col>
                        <v-col>
                        </v-col>
                        <v-col>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card style="height : 100%;">
                    <v-card-title>
                        {{items[0].title}}
                    </v-card-title>
                    <v-card-subtitle class="text-left">
                        {{items[0].author}}
                    </v-card-subtitle>
                    <v-card-text style="height : 75%;">
                        {{items[0].contents}}
                        <br>
                        가격 : {{items[0].price}} 원
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn  @click="gotopay()">
                            구매
                        </v-btn>
                        <v-btn @click="gotochat()">
                            채팅
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        items: [
        
        ],
        photos:[]
    }
  },
  created() {
        let uri = window.location.search.substring(1); 
        let params = new URLSearchParams(uri);
        axios.get("http://localhost:8008/posts/"+params.get("id"),{headers:{"authorization":localStorage.getItem('authorization')}})
        .then(
            ({ data }) => (
                console.log(data),
                this.items.push(data),
                this.photos.push(data.photos),
                console.log(this.photos[0][0])
            )
        );
  },
  methods:{
    gotopay(){
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    let id = params.get("id");
      var link= '/paymodule?id=' + id;
      window.location.href="http://localhost:8080"+link;
    },
    gotochat(){
      var link= '/chat';
      window.location.href="http://localhost:8080"+link;
    }
  }
}
</script>
<style scoped>
img {
    width : 100%;
}
</style>