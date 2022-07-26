<template>
  <div>
    <div class="component-heading other-profiles">Similar profiles</div>
    <div v-for="shoe in otherProfiles" :key="shoe.id">
      <div class="shoe-card">
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
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IShoes} from "@/interfaces/QuizInterface";

@Component({
  components: {
  },
})
export default class OtherProfiles extends Vue {
  @Prop()
  otherProfiles: IShoes[];

  data() {
    return {
    };
  }


}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common";
.other-profiles {
  margin: $building-unit-x10 0;
  text-align: center !important;
}
</style>
