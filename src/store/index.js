import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
    post: {},
    isProperLink: true
  },
  actions: {
    getPosts ({commit}) {
      return api.getPosts()
        .then(response => {
          const posts = response.data
          commit('ALL_POSTS', posts)
        })
        .catch(error => commit('FAILED_REQUEST', error))
    },
    getSinglePost ({commit}, id) {
      return api.getPost(id)
        .then(response => {
          const post = response.data
          commit('SINGLE_POST', post)
        })
        .catch(error => commit('FAILED_REQUEST', error))
    }
  },
  mutations: {
    'ALL_POSTS' (state, posts) {
      state.posts = posts
      state.isProperLink = true
    },
    'SINGLE_POST' (state, post) {
      state.post = post
      state.isProperLink = true
    },
    'FAILED_REQUEST' (state) {
      state.isProperLink = false
    }
  },
  getters: {
    allPosts (state) {
      return state.posts
    },
    singlePost (state) {
      return state.post
    },
    showResults (state) {
      return state.isProperLink
    }
  }
})

export default store
