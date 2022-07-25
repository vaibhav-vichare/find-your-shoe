<template>
  <div class="quiz">
    <div class="title">TRY ON QUIZ <br /> 30 DAYS RISK FREE</div>
    <div class="question" v-for="question in currentQuestion" :key="question.id">
      <Transition name="fade" :duration="550" appear>
          <div v-if="currentQuestionId > -1">{{question.copy}}</div>
      </Transition>
          <div class="answers">
            <div v-for="answer in question.answers" :key="answer.id">
              <button class="primary-button margin-left" @click="storeResponse(answer)">{{answer.copy}}</button>
            </div>
          </div>
      </div>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import questionData from '@/assets/data.json';
import {IAnswer, IQuiz} from '@/interfaces/QuizInterface';
import {ResultStoreObj} from '@/interfaces/ResultInterface';
import {Getter} from 'vuex-class';

@Component({
  components: {
  },
})
export default class Quiz extends Vue {
  @Getter currentObject!: ResultStoreObj;
  quizData: IQuiz = JSON.parse(JSON.stringify(questionData));
  currentQuestionId = 0;
  userData: IAnswer[] = [];

  data() {
    return {
      currentQuestionId: 0,
      userData: []
    };
  }

  created() {
    this.currentObject.shoes = this.quizData.shoes;
  }

  get currentQuestion() {
      return this.quizData.questions.filter( question => {
        return question.id === this.currentQuestionId;
      })
  }

  storeResponse(response: IAnswer) {
    this.userData.push(response);
    this.updateRating(response.ratingIncrease);
    if (response.nextQuestion) {
      this.currentQuestionId = response.nextQuestion;
    } else {
      this.currentObject.userSelections = this.userData;
      this.$router.push({ name: 'result'});
    }
  }

  updateRating(ratings) {
    for (const each of this.currentObject.shoes) {
      for (const ratingtype in ratings) {
        if (each.id === ratingtype) {
          each.rating = each.rating + ratings[ratingtype];
        }
      }
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
    justify-content: center;
    .margin-left {
      margin-left: $building-unit-x5;
    }
  }
}

</style>
