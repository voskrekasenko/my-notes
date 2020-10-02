import firebase from "firebase";

export const state = () => ({
  comments: []
})

export const mutations = {
  setComments(state, comments) {
    state.comments = comments
  }
}

export const actions = {
  async firebaseFetchComments({commit}, noteId) {
    try {
      const comments = (await firebase.database().ref(`/notes/${noteId}/comments`).once('value')).val() || {}
      const commentsModified = Object.keys(comments).map(key => ({...comments[key], id: key}))
      commit('setComments', commentsModified)
      return commentsModified
    } catch (e) {}
  },
  async localStorageFetchComments({commit}, noteId) {
    try {
      const comments = await JSON.parse(window.localStorage.getItem('comments')) || []
      const noteComments = comments.filter(el => el.noteId === noteId)
      commit('setComments', noteComments)
      return comments
    } catch (e) {}
  },

  async firebaseCreateComment({commit}, {...args}) {
    try {
      await firebase.database().ref(`/notes/${args.noteId}/comments`).push({...args})
      return args
    } catch (e) {}
  },
  async localStorageCreateComment({commit, state}, {...args}) {
    try {
      const comments = [...state.comments]
      comments.push(args)
      await window.localStorage.setItem('comments', JSON.stringify(comments))
      commit('setComments', comments)
    } catch (e) {}
  },
}

export const getters = {
  comments: s => s.comments
}
