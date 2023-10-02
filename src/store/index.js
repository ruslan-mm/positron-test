import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 0,
        name: 'Вытяжное устройство G2H',
        title: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        descr: 'Артикул: G2H1065',
        img: './img/product1.png',
        price: 12644,
      },
      {
        id: 1,
        name: 'Вытяжное устройство BXC',
        title: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        descr: 'Артикул: G2H1065',
        img: './img/product2.png',
        price: 25288,
      },
      {
        id: 2,
        name: 'Вытяжное устройство GHN',
        title: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        descr: 'Артикул: G2H1065',
        img: './img/product3.png',
        price: 12644,
      }
    ],
    basket: [
      {
        id: 0,
        count: 3,
      },
      {
        id: 1,
        count: 3,
      },
      {
        id: 2,
        count: 3,
      },
    ],
    installation: false
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getSum(state, getters) {
      return state.products.reduce((acc, el) => acc + (el.price * getters.getBasketCountbyId(el.id)), 0)
    },
    getBasketCountbyId: (state) => (id) => {
      return state.basket.find(el => el.id === id)?.count ?? 0
    },
    getTotalCount(state, getters) {
      return state.products.reduce((acc, el) => acc + getters.getBasketCountbyId(el.id), 0)
    },
    getSumById: (state, getters) => (id) => {
      const price = state.products.find(el => el.id === id)?.price
      if (price) {
        return price * getters.getBasketCountbyId(id)
      } else {
        return 0
      }
    }
  },
  mutations: {
    incrementCount(state, id) {
      const ind = state.basket.findIndex(el => el.id === id)
      if (ind >= 0) {
        state.basket[ind].count++
      }
    },
    decrementCount(state, id) {
      const ind = state.basket.findIndex(el => el.id === id)
      if (ind >= 0 && state.basket[ind].count > 0) {
        state.basket[ind].count--
      }
    },
    removeProduct(state, id) {
      const ind = state.products.findIndex(el => el.id === id)
      state.products.splice(ind, 1)
    },
    removeAllProducts(state) {
      state.products.splice(0, state.products.length)
      console.log(state.products);
    },
    changeInst(state, status) {
      state.installation = status
    }
  },
})
