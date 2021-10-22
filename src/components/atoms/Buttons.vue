<template>
  <button
      @click="onClick"
      :type="type"
  >{{ buttonName }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonName: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }

}
</script>

<style scoped>

</style>