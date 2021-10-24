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
        :key="todo.id"
        :class="{done:todo.state}"
    >
      <th>{{ todo.id }}</th>
      <td>{{ todo.comment }}</td>
      <td class="state">
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
table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
</style>