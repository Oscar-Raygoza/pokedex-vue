<template>
  <div class="pokedex">
    <div class="pokedex-left">
      <div class="pokedex-screen-container">
        <pokedex-screen
          v-bind:pokemon="pokemon"
          v-bind:loading="loading"
          v-bind:error="error"
        />
      </div>
      <div class="pokedex-left-bottom">
        <pokedex-form v-on:submit="handleSubmit($event)" />
      </div>
    </div>
    <div class="pokedex-right">
      <stats
        v-bind:pokemon="pokemon"
        v-bind:loading="loading"
        v-bind:error="error"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokedexScreen from "@/components/PokedexScreen.vue"; // @ is an alias to /src
import PokedexForm from "@/components/PokedexForm.vue"; // @ is an alias to /src
import Stats from "@/components/Stats.vue"; // @ is an alias
@Component({
  components: {
    PokedexScreen,
    PokedexForm,
    Stats,
  },
})
export default class Pokedex extends Vue {
  private error = false;
  private loading = true;
  private pokemon = [];
  private pokemonId = Math.floor(Math.random() * 806 + 1).toString();
  private errorMessage = [];

  data(): any {
    return {
      error: false,
      loading: true,
      pokemon: null,
      pokemonId: Math.floor(Math.random() * 806 + 1).toString(),
    };
  }

  private async getPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        this.pokemon = data;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = err.message;
      });
  }

  private async handleSubmit(pokemonId: string) {
    if (pokemonId !== "") {
      this.error = false;
      this.loading = true;
      this.pokemonId = pokemonId;
      this.getPokemon();
      return;
    }
    this.error = true;
  }

  created() {
    this.getPokemon();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pokedex {
  background-color: #41ffab;
  padding-top: 70px;
  width: 100%;
  height: 100vh;
}
.pokedex-left {
  background-color: #ff1a55;
  background-image: url("../assets/logo.png");
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: 3% 97%;
  width: 600px;
  height: 850px;
  margin: 0 auto;
  border-radius: 10px;
  text-align: center;
  border: 10px solid #3d0f53;
  box-shadow: 25px 30px #000;
  display: inline-block;
}
.pokedex-right {
  background-color: #ff1a55;
  width: 600px;
  height: 850px;
  margin: -10px;
  border-radius: 10px;
  text-align: center;
  border: 10px solid #3d0f53;
  box-shadow: 25px 30px #000;
  display: inline-block;
  transform: rotate3d(-2, 42, 0, 26deg);
}
.pokedex-screen-container {
  padding-top: 20px;
}
</style>
