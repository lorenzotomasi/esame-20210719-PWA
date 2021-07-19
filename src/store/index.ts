import { ILocation } from '@/interface/ILocation';
import axios from 'axios'
import { createStore } from 'vuex'

const BaseUrl = "http://localhost:3000/";

export default createStore({
  state: {
    location: [] as ILocation[],
    filterLocation: [] as ILocation[],
  },
  getters: {
    locationGetters(state) {
      return state.location;
    },
    locationFilterGetters(state) {
      return state.filterLocation;
    },
    // exampleComplexGetters: (state) => (studentId: string) => {
    //   return studentId;
    // }
  },
  mutations: {
    fillLocation(state, result: ILocation[]){
      state.location = result;
    },
    fillLocationFilter(state, result: ILocation[]){
      state.filterLocation = result;
    }
  },
  actions: {
    async getPopularLocation({commit}){
      const res = await (await axios.get(`${BaseUrl}popular-location/`));
      commit("fillLocation", res.data);
    },
    async getLocationFilter({commit}, seachString: string){
      const res = await (await axios.get(`${BaseUrl}location?q=${seachString}`));
      console.log(res.data);
      commit("fillLocationFilter", res.data);
    }
  }
})
