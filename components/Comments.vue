<template>
  <section>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="comment of comments"
        :key="comment.id"
      >
        <span class="badge badge-secondary">{{ comment.author }}</span>
        <span class="badge badge-warning">{{ comment.created_at | formatDate }}</span>
        <p>{{ comment.content }}</p>
      </li>
    </ul>
    <hr>
    <form @submit.prevent="commentHandler">
      <h2>Add comment</h2>
      <div class="input-field mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Your name"
          v-model="author"
          :class="{'is-invalid': $v.author.$dirty && (!$v.author.required || !$v.author.twoWordsCapitalise)}"
        >
        <span
          class="invalid-feedback"
          v-if="$v.author.$dirty && !$v.author.twoWordsCapitalise"
        >
          Must be two words with a capital letter
        </span>
        <span
          class="invalid-feedback"
          v-if="$v.author.$dirty && !$v.author.required"
        >
          Enter your name and surname
        </span>
      </div>
      <div class="input-field mb-3">
        <textarea
          class="form-control"
          placeholder="Edit comment"
          v-model="content"
          :class="{'is-invalid': $v.content.$dirty && !$v.content.required}"
        ></textarea>
        <span
          class="invalid-feedback"
          v-if="$v.content.$dirty && !$v.content.required"
        >
          Enter comment
        </span>
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-dark"
        >
          Add
        </button>
        <button
          type="button"
          class="btn btn-light"
          @click="clearFields"
        >
          Clear
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import {required, helpers} from 'vuelidate/lib/validators'
import {regexTwoWordCapitalise} from '@/helpers/constants'

const twoWordsCapitalise = helpers.regex('twoWordsCapitalise', regexTwoWordCapitalise)

export default {
  data: function() {
    return {
      author: '',
      content: ''
    }
  },
  name: "Comments",
  props: {
    comments: {
      type: Array,
      required: false
    },
    noteId: {
      type: String,
      required: true
    }
  },
  validations: {
    author: {required, twoWordsCapitalise},
    content: {required}
  },
  methods: {
    async commentHandler() {
      const created_at = Date.now().toString()

      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      await this.$store.dispatch('comments/createComment', {
        author: this.author,
        content: this.content,
        created_at,
        noteId: this.noteId
      })
      this.clearFields()
      this.$v.$reset()
    },
    clearFields() {
      this.author = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>

</style>
