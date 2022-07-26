<template>
  <div class="result">
    <div class="component-heading">Congratulations!</div>
    <p>Based on your selection we've decided <span v-for="shoe in suggetions" :key="shoe.id">{{ shoe.name }},&nbsp;</span>! Enjoy the 30 day trial.</p>
    <div v-for="shoe in suggetions" :key="shoe.id">
      <div class="shoe-card" >
        <div class="shoe-image">
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
      <button class="primary-button shop-now-button">Shop now</button>
    </div>
    <OtherProfiles :other-profiles="otherProfiles"></OtherProfiles>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Getter} from 'vuex-class';
import {ResultStoreObj} from '@/interfaces/ResultInterface';
import {IShoes} from "@/interfaces/QuizInterface";
import OtherProfiles from "@/components/OtherProfiles.vue";

@Component({
  components: {
    OtherProfiles
  },
})
export default class Result extends Vue {
  @Getter currentObject!: ResultStoreObj;
  suggetions: IShoes[] = [];
  otherProfiles: IShoes[] = [];
  data() {
    return {
      suggetions: [],
      otherProfiles: []
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
      } else {
        this.otherProfiles.push(shoe);
      }
    }
  }


}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";

</style>
