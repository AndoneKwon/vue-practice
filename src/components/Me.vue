<template>
  <div>
    <h2>Me</h2>
    <div>
      <label>User Info:</label>
      <pre>{%raw%}{{user}}{%endraw%}</pre>
    </div>
    <div>
      <label>Access Log:</label>
      <div v-for="log in accessLog" :key="log">
        {%raw%}{{log.userId}}, {{log.createdAt}}{%endraw%}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      user: null,
      accessLog: [],
    }
  },
  created() {
    axios
        .get("http://localhost:3000/me")
        .then(
            ({ data }) => (
                (this.user = data.user), (this.accessLog = data.accessLog)
            )
        )
  },
}
</script>