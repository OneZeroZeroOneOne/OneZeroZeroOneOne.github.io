<template>
  <div id="app">
    <router-view class="blur"/>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #132743;  
  height: auto;
  width: 100vw;
  background-repeat: repeat;

}


</style>
<style lang="scss">
.color-main {
  color: #70adb5;
}
.color-second {
  color: #ffcbcb;
}
</style>
<style lang="scss">
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
</style>
