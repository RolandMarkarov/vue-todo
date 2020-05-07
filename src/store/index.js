import Vue from 'vue'
import Vuex from 'vuex'
import Local from "@/module/local"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    newTask: false,
    confirm: false,
    modal: {}
  },
  mutations: {
    openModal(state, payload) {
      state.modal = payload
    },
    newTask(state, payload) {
      state.newTask = payload
    },
    localStorageCheck(state) {
      state.tasks = Local.getItemFromLocal()
    },
    edit(state, payload) {
      state.tasks = state.tasks.map(el => el.id === payload ? {...el, edit: !el.edit} : {...el, edit: false})
    },
    saveEdit(state, payload) {
      state.tasks = payload
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(el => el.id !== payload);
      Local.patchLocal(state.tasks)
    }
  },
  actions: {
    saveEdit({commit, state}, payload) {
      let tmp = state.tasks.map(el => el.id === payload.id ? {
        ...el,
        title: payload.title,
        task: payload.task,
        edit: payload.open,
        done: payload.done
      } : el);
      commit('saveEdit', tmp)
      Local.patchLocal(tmp)
    }
  },
  modules: {},
  getters: {
    newTask: state => state.newTask,
    tasks: state => state.tasks,
    modal: state => state.modal
  }
})
