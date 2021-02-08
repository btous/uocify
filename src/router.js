import Home from '@/views/Home.vue'
import SearchResults from '@/views/SearchResults.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Playlist from '@/views/Playlist.vue'
import NotFound from '@/views/NotFound.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/search/:query', name: 'search', component: SearchResults},
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register},
    { path: '/playlist/:id', name: 'playlist', component: Playlist},
    { path: '*', component: NotFound }
];