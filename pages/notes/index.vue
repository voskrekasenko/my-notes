<template>
  <section>
    <h1>My Notes</h1>

    <ul class="list-group">
      <li class="list-group-item" v-for="note of notes" :key="note.id">
        <a href="#" @click.prevent="openNote(note.id)">{{ note.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({store}){
    if(store.getters['notes/notes'].length === 0) {
      await store.dispatch('notes/fetch')
    }
  },
  methods: {
    openNote(id) {
      this.$router.push('/notes/' + id)
    }
  },
  computed: {
    notes() {
      return this.$store.getters['notes/notes']
    }
  }
}
</script>

<style scoped>

</style>
