<template>
  <div class="dynamic-component">
    User {{ this.id }}
    <router-link :to="{name: 'setting', params: {id: this.id}}">to_setting</router-link>
    <router-link :to="{name: 'account', params: {id: this.id}}">to_account</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created () {
    console.log('created!')
    console.log(this.$route.params)
  },
  watch: {
    $route (value) {
      console.log('changed route!')
      console.log(value)
      this.$router.go()
    }
  }
}
</script>

<style scoped>

</style>
