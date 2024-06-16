export const state = () => ({
  timeCategory: [],
  valueCategory: []
})

export const mutations = {
  setTimeCategory (state, listTime) {
    // state.timeCategory = []
    state.timeCategory = listTime
  },
  setValueCategory (state, listvalue) {
    // state.valueCategory = []
    state.valueCategory = listvalue
  }
}

// export const getters = {
//   getUniversity (state) {
//     return state.university_id
//   }
// }
