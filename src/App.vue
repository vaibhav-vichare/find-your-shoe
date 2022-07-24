<template>
  <div id="app">
    <header>
      <div class="logo"><img src="./assets/On-logo.png" width="32" /> </div>
    </header>
    <section>
      <router-view/>
    </section>
    <footer>
      On-running
    </footer>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class App extends Vue {
}
</script>
<style lang="scss" scoped>
@import "./assets/styles/common";


</style>