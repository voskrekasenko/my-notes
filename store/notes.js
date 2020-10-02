import firebase from "firebase";

export const state = () => ({
  notes: []
})

export const mutations = {
  setNotes(state, notes) {
    state.notes = notes
  }
}

export const actions = {
  async fetchNotes({commit}) {
    try {
      const notes = (await firebase.database().ref('/notes').once('value')).val() || {}
      const notesModified = Object.keys(notes).map(key => ({...notes[key], id: key}))
      commit('setNotes', notesModified)
      return Object.keys(notes).map(key => ({...notes[key], id: key}))
    } catch (e) {}
  },
  async createNote({commit, dispatch}, {name, content}) {
    try {
      const note = await firebase.database().ref('/notes').push({name, content})
      return {name, content, id: note.getKey()}
    } catch (e) {}
  },
  async updateNote({commit, dispatch}, {name, content, id}) {
    try {
      await firebase.database().ref(`/notes`).child(id).update({name, content})
    } catch (e) {}
  }
}

export const getters = {
  notes: s => s.notes
}
