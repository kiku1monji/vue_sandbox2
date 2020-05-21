<template>
  <header>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/user/1">User</router-link></li>
      <li><router-link to="/game">Game</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
header{
  background : #777;
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    li{
      margin: 10px;
      a{
        color: #fff;
      }
    }
  }
}
</style>
