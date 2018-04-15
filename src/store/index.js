import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
    post: {}
  },
  actions: {
    getPosts ({commit}) {
      return api.getPosts()
        .then(response => {
          const posts = response.data
          commit('ALL_POSTS', posts)
        })
        .catch(error => console.log(error))
    }
  },
  mutations: {
    'ALL_POSTS' (state, posts) {
      state.posts = posts
    }
  },
  getters: {
    allPosts (state) {
      return state.posts
    }
  }
})

export default store
