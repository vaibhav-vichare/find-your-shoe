<template>
  <div class="quiz">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import quizData from '@/assets/data.json';
@Component({
  components: {
  },
})
export default class Quiz extends Vue {

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";
.quiz {
  padding: $building-unit-x10;
  text-align: center;
}
</style>
