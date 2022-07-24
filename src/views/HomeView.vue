<template>
  <div class="homeView">
      <h1 class="heading">Take the quiz <br />
        and try your first pair!</h1>
    <button class="primary-button">Try On Trial</button>
    <div class="additional-label">30 Days risk free</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Quiz from '@/components/Quiz.vue';

@Component({
  components: {
    Quiz,
  },
})
export default class HomeView extends Vue {}
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
