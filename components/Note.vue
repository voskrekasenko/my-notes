<template>
  <section>
    <h1>{{ title }}</h1>
    <form @submit.prevent="noteHandler">
      <div class="input-field mb-3">
        <input
          id="name"
          type="text"
          class="form-control"
          placeholder="name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          v-model="noteName"
          :class="{'is-invalid': $v.noteName.$dirty && !$v.noteName.required}"
        >
        <span
          class="invalid-feedback"
          v-if="$v.noteName.$dirty && !$v.noteName.required"
        >
          Enter name
        </span>
      </div>
      <div class="input-field mb-3">
        <textarea
          id="content"
          class="form-control"
          aria-label="With textarea"
          placeholder="content"
          v-model="noteContent"
          :class="{'is-invalid': $v.noteContent.$dirty && !$v.noteContent.required}"
        ></textarea>
        <span
          class="invalid-feedback"
          v-if="$v.noteContent.$dirty && !$v.noteContent.required"
        >
          Enter name
        </span>
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-dark"
        >{{ button }}
        </button>
        <button
          type="button"
          class="btn btn-light"
          @click="clearFields()"
        >
          Clear
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  data: function () {
    return {
      notes: this.$store.getters['notes/notes'],
      storage: this.$store.getters['settings/storage'],
      noteName: this.name,
      noteContent: this.content
    }
  },
  name: 'Note',
  props: {
    title: {
      type: String,
      default: 'New Note'
    },
    button: {
      type: String,
      default: 'Create'
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
  validations: {
    noteName: {required},
    noteContent: {required}
  },
  computed: {
    noteId() {
      return this.$route.params.id || null
    }
  },
  methods: {
    async noteHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      await this.$store.dispatch(`notes/${this.noteId ? `${this.storage}UpdateNote` : `${this.storage}CreateNote`}`, {
          name: this.noteName,
          content: this.noteContent,
          id: this.noteId,
        })
      this.clearFields()
      this.$v.$reset()
      this.$router.push('/notes')
    },
    clearFields() {
      this.noteName = ''
      this.noteContent = ''
    }
  }
}
</script>

<style scoped>

</style>
