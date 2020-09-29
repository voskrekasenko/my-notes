<template>
  <section>
    <Note :name="singleNote.name" :content="singleNote.content" :title="'Edit Note'"/>
  </section>
</template>

<script>
import Note from '@/components/Note'

export default {
  name: 'editNote',
  components: {
    Note
  },
  computed: {
    singleNote() {
      return this.$store.getters['notes/notes'].find(e => e.id)
    }
  }
}
</script>

<style scoped>

</style>
