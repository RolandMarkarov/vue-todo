<template>
  <div class="header">
    <div class=''>
      <button class="add-task btn" @click="addTask">
        <img src="@/assets/icon/add.png" alt="">
      </button>
      <h1 class="header-title">todo scheduler</h1>
    </div>
    <div class="info">
      <p>total: {{total}}</p>
      <p>complete: {{completed}}</p>
      <p>left: {{left}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "HeaderTitle",
    methods: {
      addTask() {
        this.$store.commit('newTask', true)
      }
    },
    computed: {
      ...mapGetters([
        'tasks'
      ]),
      total() {
        return this.tasks.length
      },
      completed() {
        return this.tasks.filter(el => el.done).length
      },
      left() {
        return this.tasks.filter(el => !el.done).length
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    margin: auto;
    width: 30vw;
    height: 200px;
    font-family: Roboto;
    background: radial-gradient(ellipse at center, rgba(147, 206, 222, 1) 0%, rgba(117, 189, 209, .5) 41%, rgba(73, 165, 191, .5) 100%), url('../assets/bg/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: relative;
    top: 0;
    left: 0;

    .info {
      height: 100%;
      background: rgba(255, 255, 255, 0.48);
      width: 150px;
      color: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      align-items: center;
      padding: 20px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      p{
        width: 100%;
      }
    }

    &-title {
      color: #fff;
      text-transform: capitalize;
      width: 100%;
      text-align: center;
      font-weight: 300;
      user-select: none;

    }

    .add-task {
      height: 40px;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      margin: 10px;
      transition: .5s;

      &:hover {
        margin-left: 20px;
      }

      img {
        height: inherit;
      }
    }
  }
</style>
