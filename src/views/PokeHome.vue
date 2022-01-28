<template>
  <div class="home">
    <Pokedex test="" msg="Welcome to Your Vue.js + TypeScript App" />
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
export default class PokeHome extends Vue {}
</script>
