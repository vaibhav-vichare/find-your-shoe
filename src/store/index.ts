import Vue from 'vue';
import Vuex from 'vuex';
import {ResultStoreObj} from '@/interfaces/ResultInterface';
import {resultState} from '@/store/resultState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result_object: {
      shoes: [],
      userSelections: []
    }
  },
  getters: {
    currentObject(state: resultState): ResultStoreObj {
      return state.result_object;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {}
});
