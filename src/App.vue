<template>
  <div id="app">
    <h1>チュートリアルToDoリスト</h1>
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
        <tr v-for="todo in todos"
        :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.comment }}</td>
          <td>{{ todo.state }}</td>
          <td>削除</td>
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
      todos: []
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  },
  methods: {
    addTodo() {
      let comment = this.$ref.commnet.value
      if(comment === '') {
        return
      }
      let todo = {
        id: todoStorage.uid,
        comment: comment,
        state: 0
      }
      this.todos.push(todo)

      comment.value = ''
    }
  },
}

<style>

</style>