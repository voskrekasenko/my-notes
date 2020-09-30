<template>
  <section>
    <h1>{{ title }}</h1>
    <form @submit.prevent="createNote">
      <div class="input-field mb-3">
        <input
          id="name"
          type="text"
          class="form-control"
          placeholder="name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          v-model="name"
          :class="{'is-invalid': $v.name.$dirty && !$v.name.required}"
        >
        <span
          class="invalid-feedback"
          v-if="$v.name.$dirty && !$v.name.required"
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
          v-model="content"
          :class="{'is-invalid': $v.content.$dirty && !$v.content.required}"
        ></textarea>
        <span
          class="invalid-feedback"
          v-if="$v.content.$dirty && !$v.content.required"
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
    name: {required},
    content: {required}
  },
  methods: {
    createNote() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
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
