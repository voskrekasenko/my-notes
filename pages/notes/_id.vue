<template>
  <section>
    <h1>{{ note.name }}</h1>
    <p>{{ note.content }}</p>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="comment of note.comments" :key="comment.id">
        <span class="badge badge-secondary">{{ comment.author }}</span>
        <span class="badge badge-warning">{{ comment.created_at }}</span>
        <p>{{ comment.content }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: '_id',
  validate({store, params}) {
    return store.getters['notes/notes'].find(note => note.id == params.id)
  },
  async asyncData({store, params}) {
    const note = store.getters['notes/notes'].find(note => note.id == params.id)
    return {note}
  }
}
</script>

<style scoped>

</style>
