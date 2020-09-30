<template>
  <section>
    <h1>{{ title }}</h1>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="name" aria-label="Name" aria-describedby="basic-addon1" v-model="name">
    </div>
    <div class="input-group mb-3">
      <textarea class="form-control" aria-label="With textarea" placeholder="content" v-model="content"></textarea>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-dark"
        @click="createNote()"
      >Add
      </button>
      <button
        type="button"
        class="btn btn-light"
        @click="clearFields()"
      >
        Clear
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Note',
  props: {
    title: {
      type: String,
      default: 'New Note'
    },
    name: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
  },
  methods: {
    createNote() {

    },
    clearFields() {
      this.name = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>

</style>
