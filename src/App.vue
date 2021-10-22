<template>
  <div>
    <h1>チュートリアルToDoリスト</h1>
    <div v-for="(checkState, id) in checkStates" :key="id">
      <label for="index"></label>
      <input type="radio" id="index" :value="id" v-model="current">{{ checkState }}
    </div>
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
            <button @click="changeState(todo)">{{ state[Number(todo.state)] }}</button>
          </td>
          <td>
            <button @click="removeTodo(todo.id)">削除</button>
          </td>
        </tr>
      </tbody>
      <p>※削除する際はコントロールキーを押しながら削除してください。</p>
    </table>
    <form @submit.prevent="addTodo">
      <h2>新しいToDoの追加</h2>
      <label for="comment">コメント</label>
      <input type="text" id="comment" ref="comment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>

import todoStorage from "@/utlis";

export default {
  data() {
    return {
      todos: [],
      state: [
        '作業中',
        '完了'
      ],
      checkStates: [
        '作業中',
        '完了',
        '全て'
      ],
      current: 2
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  },
  watch: {
    todos(newTodos) {
      todoStorage.save(newTodos)
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
    removeTodo(todoId) {
      this.todos.splice(this.todos.indexOf(todoId), 1)
    },
    changeState(todo) {
      todo.state = !todo.state
      todoStorage.save(this.todos)
    }
  },
}
</script>