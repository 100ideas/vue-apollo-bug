import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'

import FeedComponent from './components/pages/home/Feed.vue'
import UploadComponent from './components/pages/Upload.vue'
import ProfileComponent from './components/pages/Profile.vue'

import TrackDetailComponent from './components/pages/track/TrackDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: FeedComponent },
    { path: '/upload', component: UploadComponent },
    { path: '/profile/:id', component: ProfileComponent },
    { path: '/tracks/:id', component: TrackDetailComponent },
  ],
})
