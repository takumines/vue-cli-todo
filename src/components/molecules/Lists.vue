<template>
  <table>
    <thead>
    <tr>
      <th class="id">ID</th>
      <th class="comment">コメント</th>
      <th class="state">状態</th>
      <th class="button">-</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in filteredTodo"
        :key="todo.id">
      <th>{{ todo.id }}</th>
      <td>{{ todo.comment }}</td>
      <td>
        <buttons
          :buttonName="state[Number(todo.state)]"
          @click="changeState(todo)"
        ></buttons>
      </td>
      <td>
        <buttons
            :buttonName="'削除'"
            @click="removeTodo(todo.id)"
        ></buttons>
      </td>
    </tr>
    </tbody>
    <p>※削除する際はコントロールキーを押しながら削除してください。</p>
  </table>
</template>

<script>
import todoStorage from "@/utlis";
import Buttons from "@/components/atoms/Buttons";

export default {
  name: "lists",
  components: {
    Buttons
  },
  props: {
    todos: {
      type: Array,
      required: false
    },
    state: {
      type: Array,
      required: false
    },
    current: {
      type: Number,
      required: false
    }
  },
  computed: {
    filteredTodo() {
      return this.todos.filter(function (el) {
        return this.current === 2 ? true : this.current === Number(el.state)
      }, this)
    }
  },
  methods: {
    removeTodo(todoId) {
      this.todos.splice(this.todos.indexOf(todoId), 1)
    },
    changeState(todo) {
      todo.state = !todo.state
      todoStorage.save(this.todos)
    }
  }
}
</script>

<style scoped>

</style>