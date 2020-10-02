<template>
  <section>
    <h1>{{ note.name }}</h1>
    <p>{{ note.content }}</p>
    <hr>
    <Comments
      :note-id="noteId"
    />
  </section>
</template>

<script>
import Comments from '~/components/Comments'
export default {
  validate({store, params}) {
    return store.getters['notes/notes'].find(note => note.id === params.id)
  },
  async asyncData({store, params}) {
    const note = store.getters['notes/notes'].find(note => note.id === params.id)
    return {note}
  },
  components: {
    Comments
  },
  computed: {
    noteId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
