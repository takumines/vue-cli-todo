<template>
  <form @submit.prevent="addTodo">
    <h2>新しいToDoの追加</h2>
    <label for="comment">コメント</label>
    <input type="text" id="comment" ref="comment">
    <buttons
        :buttonName="'追加'"
        :type="'submit'"
    ></buttons>
  </form>
</template>

<script>
import todoStorage from "@/utlis";
import Buttons from "@/components/atoms/Buttons";

export default {
  name: "Forms",
  components: {
    Buttons
  },
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