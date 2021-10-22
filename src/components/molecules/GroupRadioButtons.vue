<template>
  <div>
    <div v-for="(checkState, id) in checkStates" :key="id">
      <label for="index"></label>
      <input type="radio" id="index" name="index" :value="id" @input="$emit('input', $event.target.value)">{{ checkState }}
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupRadioButtons",
  model: {
    prop: "current",
    event: "input"
  },
  props: {
    checkStates: {
      type: Array,
      required: false
    },
    current: {
      type: Number,
      required: false
    }
  },
}
</script>

<style scoped>

</style>