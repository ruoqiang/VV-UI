import AutoComplete from './src/auto-complete.vue';

AutoComplete.install = function(Vue) {
  Vue.component(AutoComplete.name, AutoComplete);
};

export default AutoComplete;
