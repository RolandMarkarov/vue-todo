<template>
  <div class="add-todo" :style="{background: bg, color: text}">

    <form action="" @submit.prevent="save">
      <input type="text" placeholder="Task Title" v-model="title" required>
      <input type="text" placeholder="Task goal" v-model="task" required>
      <div class="button-wrapper">
        <button>save</button>
        <button @click="cancel">cancel</button>
      </div>
    </form>


  </div>

</template>

<script>
  import Local from "../module/local"
  export default {
    name: "AddTodo",
    data() {
      return {
        title: '',
        task: '',
        bg: '',
        text: ''
      }
    },
    methods: {
      save() {
       let task =  {title: this.title, task: this.task, done: false, edit: false, id: Date.now()}
        Local.setItemToLocal(task);
        this.$store.commit('newTask', false)
        this.$store.commit('localStorageCheck')
      },
      cancel() {
        this.title ='';
        this.task='';
        this.$store.commit('newTask', false)
      }
    },

  }
</script>

<style scoped lang="scss">
  .add-todo {
    background: #337885;
    height: 100%;
    width: 100%;
    padding: 20px;

    input {
      margin: 20px auto;
      display: block;
      outline: none;
      border: none;
      width: 90%;
      padding: 10px 5px;
      border-bottom: 2px dotted grey;
    }

    .button-wrapper {
      width: fit-content;
      margin: 20px auto 0;

      button {

        background: none;
        border: 1px solid #fff;
        padding: 10px 20px;
        cursor: pointer;
        transition: .2s;
        color: #fff;

        &:first-child {
          margin-right: 20px;
        }

        &:hover {
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
        }
      }
    }
    .bg-title{
      margin-top: 50px;
      display: flex;
      color: white;

      label{
        width: 25px;
        height: 25px;
        background: #000;
        border: white 1px solid;
      }
    }
    #color, #text{
      opacity: 0;
      width: 20px;
      margin: 0;
      border: none;
    }
  }
</style>
