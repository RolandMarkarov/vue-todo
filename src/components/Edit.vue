<template>
  <form class="edit">
    <delete-btn :id="id"/>
    <label for="checkbox">Complete Task<input type="checkbox" :checked="done" id="checkbox" v-model="obj.done">
    </label>
    <input type="text" v-model="obj.title" required>
    <input type="text" v-model="obj.task" required>
    <confirm :id="id" :obj="obj"/>
    <div class="button-wrapper">
      <button @click.prevent="save(id)">save</button>
      <button @click.prevent="cancel">cancel</button>
    </div>

  </form>
</template>

<script>
  // import Local from "@/module/local"
  import DeleteBtn from "./DeleteBtn";
  import Confirm from "./Confirm";
  // import {mapGetters} from 'vuex'

  export default {
    name: "Edit",
    components: {Confirm, DeleteBtn},
    props: ['title', 'task', 'done', "id"],
    data() {
      return {
        obj:{ title: this.title,
          task: this.task,
          done: this.done},

      }
    },
    methods: {
      cancel() {
        this.$store.commit("edit", this.id)
      },
      save(id) {
        console.log(id, "save id")
          this.$store.commit('openModal', {open: true, confirm: false, action: 'edit'});
        //
        // let task = {title: this.editTitle, task: this.editTask, edit: false, id, done: this.complete}
        // this.$store.dispatch('saveEdit', task)
      },
    },



  }
</script>

<style scoped lang="scss">
  .edit {
    font-family: Roboto;
    padding: 15px 0;
    box-shadow: 0 0 5px grey;
    border-top: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    input {
      margin: 5% auto 0;
      /*display: block;*/
      outline: none;
      border: none;
      width: 90%;
      padding: 10px 5px;
      border-bottom: 2px dotted grey;
    }

    label {
      background: radial-gradient(ellipse at center, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, 1) 41%, rgba(73, 165, 191, 1) 100%);
      width: 90%;
      display: flex;
      justify-content: space-between;
      padding: 20px;
      align-items: center;
      border-bottom: 1px solid black;
      user-select: none;

      #checkbox {
        margin: 0;
        opacity: 1;
        cursor: pointer;
        width: 25px;
        height: 25px;
      }
    }
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
</style>
