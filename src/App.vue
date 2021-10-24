<template>
  <div id="id">
    <headers></headers>
    <group-radio-buttons
        v-model.number="current"
        :checkStates="checkStates"
        :todos="todos"
    ></group-radio-buttons>
    <lists
        :todos="todos"
        :state="state"
        :current="current"
    ></lists>
    <forms
      :todos="todos"
    ></forms>
  </div>
</template>

<script>

import todoStorage from "@/utlis";
import Headers from "@/components/molecules/Headers"
import GroupRadioButtons from "@/components/molecules/GroupRadioButtons"
import Lists from "@/components/molecules/Lists";
import Forms from "@/components/molecules/Forms";

export default {
  components: {
    Headers,
    GroupRadioButtons,
    Lists,
    Forms
  },
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
}
</script>

<style scoped>
#app {
  max-width: 640px;
  margin: 0 auto;
}
</style>