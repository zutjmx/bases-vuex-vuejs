<template>
  <h1>Contador :: Vuex</h1>
  <h2>Acceso Directo al Store: {{$store.state.counter.count}}</h2>
  <h2>Computado: {{countComputed}}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <!-- <button @click="incrementRandomInt" :disabled="isLoading">Incrementa de forma aleatoria</button> -->
  <button @click="randomInt" :disabled="isLoading">Incrementa valor aleatorio</button>

  <h1>mapState</h1>
  <h1>mapState: {{count}}</h1>
  <h1>lastMutation: {{lastMutation}}</h1>

  <h2>Getter directo: {{$store.getters['counter/contadorAlCuadrado']}}</h2>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    //computed: mapState(['count'])
     computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count','lastMutation','isLoading'])
        /* ...mapState({
            count: state => state.count
        }) */
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy',5)
        },
        /* incrementRandomInt() {
            this.$store.dispatch('incrementRandomInt')
        } */
        // ...mapActions('counter',['incrementRandomInt'])
        ...mapActions('counter',{
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>

<style>

</style>