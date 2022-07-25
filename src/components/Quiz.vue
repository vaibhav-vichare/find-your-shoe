<template>
  <div class="quiz">
    <div class="title">TRY ON QUIZ <br /> 30 DAYS RISK FREE</div>
    <div class="question" v-for="question in currentQuestion" :key="question.id">
      <div>{{question.copy}}</div>
      <div class="answers">
        <div v-for="answer in question.answers" :key="answer.id">
          <button class="primary-button margin-left" @click="storeResponse(answer)">{{answer.copy}}</button>
        </div>
      </div>
      </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import questionData from '@/assets/data.json';
import {IQuiz, IAnswer} from '@/interfaces/QuizInterface';

@Component({
  components: {
  },
})
export default class Quiz extends Vue {
  quizData: IQuiz = JSON.parse(JSON.stringify(questionData));
  currentQuestionId = 0;
  userData: IAnswer[] = [];

  data() {
    return {
      currentQuestionId: 0,
      userData: []
    };
  }

  get currentQuestion() {
      return this.quizData.questions.filter( question => {
        return question.id === this.currentQuestionId;
      })
  }

  storeResponse(response: IAnswer) {
    this.userData.push(response);
    if (response.nextQuestion) {
      this.currentQuestionId = response.nextQuestion;
    } else {
      this.$router.push({ name: 'result'});
    }

  }

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";
.quiz {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  background-color: $background-dark;
  padding-top: 15%;
  width: 100%;
  height: 100%;
  .question {
    display: flex;
    flex-flow: column;
    font-size: $font-size-40;
    color: $white;
    text-align: center;
    margin-top: $building-unit-x20;
    padding: 0 10%;
  }

  .answers {
    display: flex;
    flex-direction: row;
    margin-top: $building-unit-x20;

    .margin-left {
      margin-left: $building-unit-x5;
    }
  }
}

</style>
