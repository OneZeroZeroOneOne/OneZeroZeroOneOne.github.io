<template>
  <div id="app">
    <div class="header text-2xl color-main">
        <a class="header-link" href="https://github.com/OneZeroZeroOneOne">GitHub</a>
        <a class="header-link" href="./assets/me.jpg" download>Resume</a>
    </div>
    <router-view/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg,$colorbackground,$colorsecond);
  min-height: 100vh;
}

.header {
    display: flex;
    min-height: 10vh;
    background: linear-gradient(45deg,$colorsecond, $colorbackground);
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 4px ridge $colormain;
    .header-link:hover {
      transition: all 0.5s ease;
      color: $colorthird;
    }
}

</style>

<style lang="scss">
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
</style>
