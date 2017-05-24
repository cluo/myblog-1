import Vue from 'vue'

const state = {
  data: {},
  pageInfo: {},
  id: {},
  date: {}
}

const mutations = {
  "setData": function (state, data) {
    if (!data.id) {
      data.data.map(function (v) {
        return v.createDate = Vue.prototype.$utils.formatDate(v.createDate)
      });
      state.data = data.data;
      state.pageInfo = data.pageInfo
      state.date = data.data;
    } else {
      state.id = data.data
    }
  }
}

const actions = {
  "setData": function (store, param) {
    return new Promise(function (resolve, reject) {
      store.commit('setData', param)
    })
  },
}

const getters = {
  getListData: function (state) {
    return state.data
  },
  getPageInfo: function (state) {
    return state.pageInfo
  },
  getId: function (state) {
    return state.id
  },
  getTimeLine: function (state) {
    return state.date
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}