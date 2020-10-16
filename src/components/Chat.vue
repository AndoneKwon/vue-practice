<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 6)">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
      <form>
        <v-text-field
        v-model="chat"
        label="chat"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        ></v-text-field>
        <v-btn
        class="mr-4"
        @click="submit"
        >
        submit
        </v-btn>
        <v-btn @click="clear">
        clear
        </v-btn>
     </form>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { header: 'Today' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='font-weight-bold'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='font-weight-bold'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
      ],
    }),
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.chat = ''
      },
    },
  }
</script>