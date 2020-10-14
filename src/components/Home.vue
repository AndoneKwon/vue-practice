<template>
  <div>
    <h2>Home</h2>
    <div>{%raw%}{{greeting}}{%endraw%}</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      greeting: "",
    }
  },
  created() {
    axios
        .get("http://localhost:3000/home")
        .then(result => (this.greeting = result.data.greeting))
  },
}
</script>