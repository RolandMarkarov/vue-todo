<template>
  <button @click.prevent="confirm" >DELETE TASK</button>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "DeleteBtn",
    props: ['id'],
    methods: {
      confirm() {
        this.$store.commit('openModal', {open: true, confirm: false, action: 'delete'});
      }
    },

    computed: {
      ...mapGetters([
        "modal"
      ])
    }
  }
</script>

<style scoped>

</style>
