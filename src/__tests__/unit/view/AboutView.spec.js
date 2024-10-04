import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

describe('AboutView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(AboutView)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Se muestra la vista About al llegar a través de la ruta', async () => {
    /**
     * Definimos configuración base para la prueba
     */
    const routerPrueba = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about',
          name: 'about',
          component: AboutView
        }
      ]
    })

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })

    routerPrueba.push({ name: 'about' })

    await routerPrueba.isReady()

    expect(wrapper.findComponent(AboutView).exists()).toBeTruthy()
  })
})
