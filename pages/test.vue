<template>
  <div class="test">
    <button @click="showMessage = !showMessage">Show message</button>
    <button>Another button</button>
    <button>A third button</button>
    <p v-if="showMessage">Test message</p>
    <div class="images">
      <img
        src="https://scatterjar.com/wp-content/uploads/2016/05/www.scatterjar.com-0523-585x878.jpg"
      />
      <img
        src="https://scatterjar.com/wp-content/uploads/2016/09/www.scatterjar.com-3845-585x390.jpg"
      />
      <img
        src="https://images.freeimages.com/images/large-previews/dfa/jungle-1377573.jpg"
      />
    </div>
    <div class="images">
      <img
        src="https://images.freeimages.com/images/large-previews/39a/no-grain-no-pain-1326753.jpg"
      />
      <img
        src="https://images.freeimages.com/images/large-previews/9c3/sunshine-1408040.jpg"
      />
      <img
        src="https://images.freeimages.com/images/large-previews/5b8/starfish-1377326.jpg"
      />
    </div>
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

<style>
.images {
  display: flex;
  flex-direction: row;
  height: 500px;
}
</style>
