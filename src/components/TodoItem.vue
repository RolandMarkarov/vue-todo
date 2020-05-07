<template>
  <div class="todo-item">
    <div class="item-container" v-if="!item.edit" :class="{done : item.done}" @click="editTask(item.id)">
      <p class="title">{{item.title}}</p>
      <div class="text-wrp">
        <p class="task" v-if="!item.done">{{item.task}} </p>
      </div>
    </div>
    <div class="input-container" v-else>
      <edit :title="title" :task="task" :done="item.done" :id="item.id"/>
    </div>
  </div>
</template>

<script>
  import Edit from "./Edit";

  export default {
    name: "TodoItem",
    components: {Edit},
    props: ['item'],
    data() {
      return {
        title: this.item.title,
        task: this.item.task
      }
    },
    methods: {
      editTask(id) {
        this.$store.commit('edit', id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .todo-item {
    user-select: none;
    padding: 20px;
    border-bottom: 1px solid white;
    color: #fff;

    .item-container {
      display: flex;
      align-items: center;
      font-family: Roboto;
      font-size: 20px;
    }

    .done {
      text-decoration: line-through;
    }

    .title {
      font-weight: bold;
    }

    .task {
      width: 100px;
      padding: 2px 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all .3s;

      &:hover {
        width: 100%;
        overflow: unset;
        text-overflow: unset;
        transition: .3s;
      }
    }
  }
</style>
