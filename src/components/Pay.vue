<template>
  <div>
    <div>
      <p>결제하시겠습니까? 내역을 확인해주세요</p>
        <span v-bind:key="user">파는 사람 : {{user}}</span>
      <p></p>
      <span v-bind:key="price">가격 : {{price}}</span>
    </div>
    <span class="checkBtn" type="button" @click="purchase">
      <i class="checkBtn fa fa-check" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal&&success" @close="showModal = false">
      <h3 slot="header">구매가 완료되었습니다.</h3>
      <span slot="footer" @click="redirect()">
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>
    <modal v-else-if="showModal&&!success" @close="showModal = false">
      <h3 slot="header">이미 판매가 완료된 상품입니다.</h3>
      <span slot="footer" @click="redirect()">
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>

  </div>
</template>

<script>
import axios from 'axios';
import Modal from './common/Modal'

export default {
  data(){
    return{
      showModal : false,
      success:true,
      user:"kwon",
      price:10000,
      id:null,
      authorId:null
    }
  },
  created(){
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    axios.get("http://localhost:8008/posts/"+params.get("id"),{headers:{"authorization":localStorage.getItem('authorization')}})
    .then(
        ({ data }) => (
            this.user=data.author,
            this.price=data.price,
            this.id=data.id,
            this.authorId=data.authorId
        )
    );
  },
  methods : {
    purchase(){
      this.showModal = !this.showModal;
      let formData = {};
      formData["productId"]=this.id;
      formData["price"]=this.price;
      formData["sellerId"]=this.authorId;
      axios.post("http://localhost:8093/trade",formData,
      {headers:{
        "authorization":localStorage.getItem('authorization')
        }
        })
        .then(
            ({ data }) => (
                console.log(data),
                this.success=data.success
            )
        );
    },
    redirect(){
      window.location.href="http://localhost:8080";
    }
  },

  components : {
    Modal : Modal
  }


}
</script>

<style scoped>

</style>