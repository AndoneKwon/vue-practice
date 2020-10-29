<template>
  <v-card
      flat
      tile
      align-content-center
  >
    <v-toolbar
        color="cyan"
        dark
    >
      <v-app-bar-nav-icon class="justify-center"></v-app-bar-nav-icon>
        <H1>검색</H1>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-form ref = "form" @submit.prevent="submit">
      <v-row md="2" >
        <v-text-field
          v-model="search"
          label="search"
          id="search"
          outlined
        ></v-text-field>
        <v-btn
          @click="submit"
          color="success"
        >
        submit
        </v-btn>
      </v-row>
    </v-form>
    <v-container>
      <v-row no-gutters>
      <v-col
        v-for="item in items[0]"
        :key="item"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
          @click="gotodetail(item._source.id)"
        >
          {{item._source.title}}
        </v-card>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{item._source.author}}
        </v-card>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img :src="`http://117.17.196.142:8008/images/${item._source.photo}`"/>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
   
  </v-card>
</template>


<style scoped>
    .centered-input input {
  text-align: center
}
</style>
<script>
import axios from "axios"

export default {
  data: () => ({
    items:[],
    from:0,
  }),

  methods: {
    submit(){
      console.log(this.search);
      axios({
          method:'POST',
          url : 'http://localhost:3003/search',
          data:{
              query:this.search,
          },
      })
      .then(res=>{
        console.log(res.data[0]);
        this.items.push(res.data);
      });
      this.reset();          
    },
    gotodetail(id){
      var link= '/detail?id=' + id;
      window.location.href="http://localhost:8080"+link;
    },
    reset(){
      this.$refs.form.reset()  
    },
  },
}
</script>