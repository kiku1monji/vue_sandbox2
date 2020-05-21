<template>
  <div class="counter">
    <div>
      <span>{{ this.name }}</span>
      <span>{{ this.count }}</span>
      <button @click="increment">click!</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Counter',
  props: ['name', 'time'],
  methods: {
    increment () {
      this.$store.dispatch('asyncInc', {name: this.name, time: this.time})
    }
  },
  computed: {
    count () {
      return this.$store.getters.count(this.name)
    },
    ...mapState({
      counter: function (state) { return state.counters[this.name] }
    })
  }
}
</script>

<style scoped>

</style>
