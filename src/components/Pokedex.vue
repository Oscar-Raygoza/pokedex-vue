<template>
  <div class="pokedex">
    <div class="pokedex-left">
      <div class="pokedex-left-top">
        <div class="light is-sky is-big in-animated" />
        <div class="light is-red" />
        <div class="light is-yellow" />
        <div class="light is-green" />
      </div>
      <div class="pokedex-screen-container">
        <pokedex-screen />
      </div>
      <div class="pokedex-left-bottom">
        <div class="pokedex-left-bottom-lights">
          <div class="light is-blue is-medium" />
          <div class="light is-green is-large" />
          <div class="light is-orange is-large" />
        </div>
        <pokedex-form />
      </div>
    </div>
    <div class="pokedex-right-front" />
    <div class="pokedex-right-back" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Pokedex extends Vue {
  @Prop() private msg!: string;
  @Prop() private test!: string;

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
