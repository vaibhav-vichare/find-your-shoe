<template>
  <div class="result">
    <div class="component-heading">Congratulations!</div>
    <p>Based on your selection we've decided <span v-for="shoe in suggetions" :key="shoe.id">{{ shoe.name }},&nbsp;</span>! Enjoy the 30 day trial.</p>
    <div class="shoeCard" v-for="shoe in suggetions" :key="shoe.id">
      <div class="shoeImage">
        <img :src="require('../assets/images/' + shoe.name + '.png')" width="50%">
      </div>
      <div class="component-heading">
        {{ shoe.name }}
      </div>
      <div class="description">
        Your perfect partner in world's lightest fully-cushioned shoe for running.
<!--        //this could come from shoe object if provided as description-->
      </div>
    </div>
    <button class="primary-button">Shop now</button>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter} from 'vuex-class';
import {ResultStoreObj} from '@/interfaces/ResultInterface';
import {IShoes} from "@/interfaces/QuizInterface";

@Component({
  components: {
  },
})
export default class Result extends Vue {
  @Getter currentObject!: ResultStoreObj;
  suggetions: IShoes[] = [];
  data() {
    return {
      suggetions: []
    };
  }

  created() {
    this.getResult();
  }

  getResult() {
    let ratings: number[] = [];
    let maxRating = 0;
    for (const shoe of this.currentObject.shoes) {
      ratings.push(shoe.rating);
    }
    maxRating = Math.max(...ratings);
    for (const shoe of this.currentObject.shoes) {
      if (shoe.rating === maxRating) {
        this.suggetions.push(shoe);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";
.result {
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  background-color: $background-light;
  color: $black;
  padding: 30% 10% 20% 10%;
  text-align: left;
  height: 100%;
  .component-heading {
    font-size: $font-size-20;
    font-weight: bold;
    color: $black;
    text-align: left;
  }

  .shoeCard {
    background-color: $card-color;
    padding: 2%;
    display: flex;
    flex-flow: column;
    margin-bottom: $building-unit-x5;
    .shoeImage {
      padding: 10%;
      text-align: center;
    }
     .description {
       font-size: $font-size-16;
     }
  }
}
</style>
