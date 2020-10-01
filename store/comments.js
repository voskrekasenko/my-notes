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
  async fetchComments({commit}, noteId) {
    try {
      const comments = (await firebase.database().ref(`/notes/${noteId}/comments`).once('value')).val() || {}
      const commentsModified = Object.keys(comments).map(key => ({...comments[key], id: key}))
      commit('setNotes', commentsModified)
      return commentsModified
    } catch (e) {}
  },

  async createComment({commit}, {...args}) {
    try {
      await firebase.database().ref(`/notes/${args.noteId}/comments`).push({...args})
      return {...args}
    } catch (e) {}
  },
}

export const getters = {
  comments: s => s.comments
}
