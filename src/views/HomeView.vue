<template>
  <div class="homeView">
      <h1 class="heading">Take the quiz <br />
        and try your first pair!</h1>
    <button class="primary-button" @click="navigateToQuiz()">Try On Trial</button>
    <div class="additional-label">30 Days risk free</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class HomeView extends Vue {
  navigateToQuiz() {
    this.$router.push({ name: 'quiz'});
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";
.additional-label {
  font-size: $font-size-16;
  color: $label-colors;
  font-weight: bold;
  margin-top: $building-unit-x5;
}
</style>
