import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

// Simulamos el componente PostsView
const PostsViewMock = {
  template: '<div class="posts-view-mock">Mock de PostsView</div>',
};

describe('HomeView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(HomeView, {
      global: {
        components: {
          PostsView: PostsViewMock,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
