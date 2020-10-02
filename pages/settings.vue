<template>
  <section>
    <h1>Save to</h1>
    <hr>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="storage" id="firebase" value="option1" checked>
      <label class="form-check-label" for="firebase">
        Firebase
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="storage" id="localstorage" value="option2">
      <label class="form-check-label" for="localstorage">
        LocalStorage
      </label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'settings'
}
</script>

<style scoped>

</style>
