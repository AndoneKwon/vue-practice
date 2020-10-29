<template>
  <v-app>
    <v-main>
    <form method="post" action="upload" id="upload" enctype="multipart/form-data">
        <div class="form-group files text-center" ref="fileform">
            <input type="file" name="photo" id="photo" multiple="multiple">
            <input type="text" id="title" placeholder="title">
            <input type="text" id="content" placeholder="content">
            <input type="text" id="price" placeholder="price">
            <span id='val'></span>
            <a class="btn"  @click="upload()" id='button'>Upload Photo</a>
        </div>
    </form>
    </v-main>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {

  data: () => ({
    files: [],
  }),
  methods: {
    async upload() {
      let formData = new FormData();
        var photofile = document.getElementById("photo");
        formData.append("photo",photofile.files[0]);
        var title = document.getElementById("title").value;
        var content = document.getElementById("content").value;
        var price = document.getElementById("price").value;
        console.log(title);
        formData.append("title",title);
        formData.append("content",content);
        formData.append("price",price);
        console.log(formData);
        axios.post('http://localhost:8008/posts/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "authorization":localStorage.getItem('authorization')
            },
        }
        ).then(function(){
            window.location.href="http://localhost:8080"
        })
        .catch(function(){
        });
    }
  }
};
</script>