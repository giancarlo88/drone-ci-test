<template>
  <div class="test">
    <button @click="showMessage = !showMessage">Show message</button>
    <p v-if="showMessage">Test message</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: false,
    }
  },
}
</script>

<style></style>
