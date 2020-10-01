<template>
  <section>
    <h1>My Notes</h1>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="note of notes" :key="note.id">
        <a href="#" @click.prevent="openNote(note.id)">{{ note.name }}</a>
        <a href="#" @click.prevent="editNote(note.id)">
          <img class="icon-edit ml-2" src="~/assets/edit-ico.svg" alt="edit ico">
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      storage: this.$store.getters['settings/storage']
    }
  },
  async mounted() {
    await this.$store.dispatch(`notes/${this.storage}FetchNotes`)
  },
  methods: {
    openNote(id) {
      this.$router.push('/notes/' + id)
    },
    editNote(id) {
      this.$router.push('/notes/edit/' + id)
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
  .icon-edit {
    max-width: 16px;
  }
</style>
