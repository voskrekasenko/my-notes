<template>
  <section>
    <Note
      :name="singleNote.name"
      :content="singleNote.content"
      :title="'Edit Note'"
      :button="'Edit'"
    />
  </section>
</template>

<script>
import Note from '@/components/Note'

export default {
  name: "_id",
  components: {
    Note
  },
  computed: {
    singleNote() {
      return this.$store.getters['notes/notes'].find(note => note.id === this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
