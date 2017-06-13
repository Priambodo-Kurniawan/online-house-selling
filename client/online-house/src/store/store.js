import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    viewProducts: true,
    showForm: false,
    viewType: 'thumbnail',
    data: null
  },
  mutations: {
    showForm(state){
      state.showForm = true
      state.viewProducts = false
    },
    showProducts(state){
      state.viewProducts = true
      state.showForm = false
    },
    getData(state){
      axios.get('http://localhost:5000/api/houses')
      .then(houses => {
        state.data = houses.data
      })
      .catch( err => console.log(err))
    }
  },
  actions: {
  },
  getters: {
    viewProducts(state) {
      return state.viewProducts
    },
    showForm(state) {
      return state.showForm
    },
    viewType(state) {
      return state.viewType
    },
    data(state) {
      // console.log(state.data);
      return state.data
    }
  }
})
