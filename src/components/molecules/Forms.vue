<template>
  <form @submit.prevent="addTodo">
    <h2>新しいToDoの追加</h2>
    <label for="comment">コメント</label>
    <input type="text" id="comment" ref="comment">
    <button type="submit">追加</button>
  </form>
</template>

<script>
import todoStorage from "@/utlis";

export default {
  name: "Forms",
  props: {
    todos: {
      type: Array,
      required: false
    }
  },
  methods: {
    addTodo() {
      let comment = this.$refs.comment
      if(comment.value === '') {
        return
      }
      let todo = {
        id: todoStorage.uid++,
        comment: comment.value,
        state: false
      }
      this.todos.push(todo)

      comment.value = ''
    },
  }
}
</script>

<style scoped>

</style>