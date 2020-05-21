import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

class Counter {
  constructor (name) {
    this.name = name
    this.count = 0
  }
  increment () {
    this.count++
  }
}

export default new Vuex.Store({
  state: {
    counters: {
      wood: new Counter('wood'),
      iron: new Counter('iron')
    }
  },
  mutations: {
    clicked (state, name) {
      console.log(`${name} clicked`)
      state.counters[name].increment()
    }
  },
  getters: {
    count: (state) => (name) => {
      return state.counters[name].count
    }
  },
  actions: {
    asyncInc({commit}, {name, time}) {
      setTimeout(() => { commit('clicked', name) },time )
    }
  }
})
