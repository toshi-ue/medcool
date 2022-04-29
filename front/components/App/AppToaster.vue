<template>
  <v-snackbar
    v-model="setSnackbar"
    bottom
    :timeout="toast.timeout"
    :color="toast.color"
  >
    <div v-if="typeof toast.msg === 'string'">
      {{ toast.msg }}
    </div>
    <div v-else-if="Array.isArray(toast.msg)">
      <div v-for="(msg, index) in toast.msg" :key="index">
        {{ msg }}
      </div>
    </div>
    <template v-slot:action="{ attrs }">
      <v-btn v-bind="attrs" text @click="resetToast">
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    setSnackbar: {
      get() {
        return !!this.toast.msg
      },
      set(val) {
        return this.resetToast() && val
      },
    },
    toast() {
      return this.$store.state.common.toast
    },
  },
  beforeDestroy() {
    this.resetToast()
  },
  methods: {
    resetToast() {
      return this.$store.dispatch('common/getToast', { msg: null })
    },
  },
}
</script>
