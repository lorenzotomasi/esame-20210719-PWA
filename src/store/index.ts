import axios from 'axios'
import { createStore } from 'vuex'

const BaseUrl = "http://localhost:3000/";

export default createStore({
  state: {
    exampleObject: {},
  },
  getters: {
    exampleGetters(state) {
      return state.exampleObject;
    },
    exampleComplexGetters: (state) => (studentId: string) => {
      return studentId;
    }
  },
  mutations: {
    ExampleFillRequest(state, exampleResul){
      state.exampleObject = exampleResul;
    }
  },
  actions: {
    async ExampleCall({commit}, requiredId: number){
      const res = await (await axios.get(`${BaseUrl}example/${requiredId}`));
      commit("ExampleFillRequest", res.data);
    }
  }
})
