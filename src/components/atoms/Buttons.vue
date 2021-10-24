<template>
  <button
      @click="onClick"
      :type="type"
      class="button"
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
button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}
</style>