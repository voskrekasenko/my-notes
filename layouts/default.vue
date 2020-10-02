<template>
  <div>
    <Navbar/>

    <main>
      <div class='container custom'>
        <nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>
<style>
 .container.custom  {
   width: auto;
   max-width: 800px;
 }
</style>

