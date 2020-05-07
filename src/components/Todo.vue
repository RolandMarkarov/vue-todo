<template>
  <div class="todo">
    <span class="border"></span>
    <div class="container">
      <add-todo v-if="newTask"/>
      <todo-item v-else v-for="item in todos" :key="item.id" :item="item"/>
    </div>

  </div>
</template>

<script>
  import AddTodo from "./AddTodo";
  import {mapGetters} from 'vuex'
  import TodoItem from "./TodoItem";

  export default {
    name: "Todo",
    components: {TodoItem, AddTodo},
    created() {
      this.$store.commit('localStorageCheck')
    },
    data() {
      return {
        todos: this.tasks
      }
    },
    computed: {
      ...mapGetters([
        'newTask',
        'tasks'
      ])
    },
    watch: {
      tasks(next) {
        this.todos = next
      }
    }
  }
</script>

<style scoped lang="scss">
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, rgba(169, 3, 41, 1) 0%, rgba(143, 2, 34, 1) 44%, rgba(109, 0, 25, 1) 100%);;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  .todo {
    height: 70vh;
    background: url('../assets/bg/container.png');
    background-position: center;

    .container {
      height: 100%;
      overflow-y: scroll;
    }

  }

  .border {
    display: block;
    width: 100%;
    height: 5px;
    background: linear-gradient(to bottom, rgba(169, 3, 41, 1) 0%, rgba(143, 2, 34, 1) 44%, rgba(109, 0, 25, 1) 100%);
  }
</style>
