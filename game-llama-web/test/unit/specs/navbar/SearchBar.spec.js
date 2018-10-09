import Vue from 'vue';
import SearchBar from '@/components/navbar/SearchBar';

describe('SearchBar', () => {
  let vm;
  let Component;
  beforeEach(() => {
    Component = Vue.extend(SearchBar);
    vm = new Component({
      data: {
        searchItems: ['Map Land'],
        type: 'Animations',
        isUpdating: false,
      },
    }).$mount();
  });

  it('check type Result', () => {
    expect(vm.type).toEqual('Animations');
  });

  it('check searchItems Result', () => {
    expect(vm.searchItems).toEqual(['Map Land']);
  });

  it('check isUpdating Result', () => {
    expect(vm.isUpdating).toEqual(false);
  });

  it('has the expected structure', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
