import firebase from 'firebase';

export const state = () => ({
  notes: []
})

export const mutations = {
  setNotes(state, notes) {
    state.notes = notes
  }
}

export const actions = {
  async firebaseFetchNotes({commit}) {
    try {
      const notes = (await firebase.database().ref('/notes').once('value')).val() || {}
      const notesModified = Object.keys(notes).map(key => ({...notes[key], id: key}))
      commit('setNotes', notesModified)
      return notesModified
    } catch (e) {}
  },
  async localStorageFetchNotes({commit}) {
    try {
      let notes = JSON.parse(window.localStorage.getItem('notes')) || []
      commit('setNotes', notes)
      return {}
    } catch (e) {}
  },

  async firebaseCreateNote({commit}, {name, content}) {
    try {
      const note = await firebase.database().ref('/notes').push({name, content})
      return {...note, id: note.getKey()}
    } catch (e) {}
  },
  async localStorageCreateNote({commit, state}, ...args) {
    try {
      const note = Object.assign( ...args, {id: Math.floor(Date.now() / 1000).toString()})
      const notes = state.notes
      notes.push(note)
      window.localStorage.setItem('notes', JSON.stringify(notes))
      commit('setNotes', notes)
    } catch (e) {}
  },

  async firebaseUpdateNote({commit}, {name, content, id}) {
    try {
      await firebase.database().ref(`/notes`).child(id).update({name, content})
    } catch (e) {}
  },
  async localStorageUpdateNote({commit, state}, {...args}) {
    try {
      let note = args
      let notes = state.notes
      let i = notes.findIndex(o => o.id === note.id);
      notes[i] ? notes[i] = note : notes.push(note)
      window.localStorage.setItem('notes', JSON.stringify(notes))
      commit('setNotes', notes)
    } catch (e) {}
  }
}

export const getters = {
  notes: s => s.notes
}
