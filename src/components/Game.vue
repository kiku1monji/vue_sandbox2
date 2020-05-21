<template>
  <div class="game">
    <Counter :name="'wood'" time="2000" />
    <Counter :name="'iron'" time="1000" />
  </div>
</template>

<script>
import Counter from '@/components/game/Counter'
export default {
  name: 'Game',
  components: {
    Counter
  }
}
</script>

<style scoped>

</style>
