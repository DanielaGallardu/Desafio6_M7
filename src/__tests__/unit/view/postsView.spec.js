import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import PostsView from '@/views/PostsView.vue'

// Datos simulados para post
const postsDummy = [
    { id: 1, name: 'Post 1' },
    { id: 2, name: 'Post 2' },
    { id: 3, name: 'Post 3' },
    { id: 4, name: 'Post 4' }
]

describe('PostsView.vue', () => {

    it('Probando la existencia del componente PostsView', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })

        router.push('/posts')
        await router.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })

        // Verifica PostsView existe
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    })

    it('Renderiza lista de posts correctamente', async () => {
        const wrapper = mount(PostsView)

        // Actualiza la variable de estado 
        wrapper.vm.posts = postsDummy

        // Espera que el DOM se actualice
        await wrapper.vm.$nextTick()

        expect(wrapper.findAll('li')).toHaveLength(4)
    })
})
