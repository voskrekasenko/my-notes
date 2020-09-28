export const state = () => ({
  notes: []
})

export const mutations = {
  setNotes(state, notes) {
    state.notes = notes
  }
}

export const actions = {
  fetch({commit}) {
    const notes = [
      {
        id: '1',
        name: 'Clean',
        content: 'I need clean my home',
        comments: [
          {
            author: 'Mark East',
            content : 'lol',
            created_at: ''
          },
          {
            author: 'Helen Uro',
            content : 'good luck',
            created_at: ''
          }
        ]
      },
      {
        id: '3',
        name: 'Work',
        content: 'I need write a test task',
        comments: [
          {
            author: 'Joe Cole',
            content : 'ok',
            created_at: ''
          }
        ]
      },
      {
        id: '5',
        name: 'Sleep',
        content: 'Sleep after good day!',
        comments: []
      }
    ]
    commit('setNotes', notes)
  }
}

export const getters = {
  notes: s => s.notes
}
