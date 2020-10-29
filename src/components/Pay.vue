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

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">구매가 완료되었습니다.</h3>
      <span slot="footer" @click="showModal = false">
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>

  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  data(){
    return{
      showModal : false,
      user:"",
      price:0,
    }
  },

  methods : {
    purchase(){
      this.showModal = !this.showModal;
    }
  },

  components : {
    Modal : Modal
  }


}
</script>

<style scoped>

</style>