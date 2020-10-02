<template>
  <section>
    <h1>Save to</h1>
    <hr>
    <div class="form-check" v-for="(item, name) in storageValues" :key="item">
      <input
        class="form-check-input"
        type="radio"
        name="storage"
        id="firebase"
        :value="item"
        v-model="storage"
        @change="updateStorage(item)"
      >
      <label class="form-check-label" for="firebase">
        {{ name }}
      </label>
    </div>
  </section>
</template>

<script>
import {LOCAL_STORAGE, FIREBASE} from '~/helpers/constants'

export default {
  data: function() {
    return {
      storage: this.$store.getters['settings/storage'],
      storageValues: {
        localStorage: LOCAL_STORAGE,
        firebase: FIREBASE
      }
    }
  },
  async mounted() {
    await this.storage;
  },
  methods: {
    async updateStorage(val) {
      await this.$store.dispatch('settings/updateStorage', val)
    }
  },
}
</script>

<style scoped>

</style>
