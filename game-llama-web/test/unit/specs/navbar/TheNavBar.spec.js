import Vue from 'vue';
import TheNavBar from '@/components/navbar/TheNavBar';

describe('TheNavBar.vue', () => {
  let vm;
  let Component;
  beforeEach(() => {
    Component = Vue.extend(TheNavBar);
    vm = new Component().$mount();
  });

  it('has the expected structure', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
