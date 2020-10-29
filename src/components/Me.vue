<template>
  <div>
    <h2>Me</h2>
    <div>
      <label>User Info:</label>
      <br>
      email : {{item[0].email}}
      <br>
      nickname : {{item[0].nickname}}
      <br>
      amount : {{item[0].amount}}
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      item:[]
    }
  },
  created() {
    axios.get("http://localhost:3000/auth/myinfo",{headers:{"authorization":localStorage.getItem('authorization')}})
        .then(
            ({ data }) => (
                this.item.push(data)
            )
        );
  },
}
</script>