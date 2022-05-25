import { createStore } from 'vuex'

export default createStore({
  state: {
    urlBack: "http://comments.hectoracosta.site/api", 
    id_delete: 0, 
    id_parent: 0, 
    id_edit: 0, 
    usernameReply: ''
  },
  getters: {
  },
  mutations: {
    
    setUsernameReply(state, val) {
      state.usernameReply = val
  },

    setIdDelete(state, val) {
      state.id_delete = val
  },

  setIdEdit(state, val) {
    state.id_edit = val
}, 

setIdParent(state, val) {
  state.id_parent = val
}
  },
  actions: {
  },
  modules: {
  }
})
