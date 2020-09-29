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
    <hr>
    <form @submit="submit()">
      <h2>Add comment</h2>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <textarea class="form-control" aria-label="With textarea" placeholder="Edit comment"></textarea>
      </div>
      <div>
        <button type="button" class="btn btn-dark">Add</button>
        <button type="button" class="btn btn-light">Clear</button>
      </div>
    </form>
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
  },
  methods: {
    submit() {

    }
  }
}
</script>

<style scoped>

</style>
