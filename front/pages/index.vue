<template>
  <div>
    <button type="button" name="button" @click="getMsg">
      RailsからAPIを取得する
    </button>
    <div v-for="(msg, i) in msgs" :key="i">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesIndex',
  data() {
    return {
      msgs: [],
    }
  },
  methods: {
    async getMsg() {
      await this.$axios.$get('api/v1/users').then((res) => {
        this.msgs.push(res)
      })
    },
  },
}
</script>
