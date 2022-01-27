<template>
  <div class="home">
    <Pokedex test="teztss" msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pokedex from "@/components/Pokedex.vue"; // @ is an alias to /src

@Component({
  components: {
    Pokedex,
  },
})
export default class Home extends Vue {}
</script>
