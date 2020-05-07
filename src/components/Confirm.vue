<template>
  <div class="confirm" v-if="modal.open">
    Confirm {{modal.action}}
    <button @click.prevent="yes">yes</button>
    <button @click.prevent="no">no</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "Confirm",
    props: ['id', 'obj'],
    computed: {
      ...mapGetters([
        'modal'
      ])
    },
    methods: {
      no() {
        this.$store.commit('openModal', {open: false, confirm: false, action: ''});
      },
      yes() {
        console.log(this.id, "yes")
        this.$store.commit('openModal', {open: false, confirm: true, action: this.modal.action});
      }
    },
    watch: {
      modal(next) {
        if (next.confirm) {
          if (next.action === 'delete') {
            console.log('delete watch')
            this.$store.commit('openModal', {open: false, confirm: false, action: ''});
            return this.$store.commit('deleteTask', this.id)
          }
          if (next.action === 'edit') {
            console.log('edit watch')
            let temp = {...this.obj, id:this.id}
            this.$store.dispatch('saveEdit', temp)
            this.$store.commit('openModal', {open: false, confirm: false, action: ''});

          }
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .confirm {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    color: #000;

    button {
      margin-left: 20px;
      padding: 10px 20px;
    }
  }

</style>
