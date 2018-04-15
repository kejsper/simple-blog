import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/routes/Posts'
import Post from '@/components/routes/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/:id',
      name: 'Post',
      component: Post
    }
  ]
})
