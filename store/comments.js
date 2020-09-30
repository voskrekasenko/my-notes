import firebase from "firebase";

export const state = () => ({
  comments: []
})

export const mutations = {
  setNotes(state, comments) {
    state.comments = comments
  }
}

export const actions = {
  async createComment({commit}, {...args}) {
    try {
      const comment = await firebase.database().ref(`/notes/${args.noteId}/comments`).push({...args})
      return {...comment}
    } catch (e) {}
  },
}

export const getters = {
  comments: s => s.comments
}
