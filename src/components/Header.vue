<template>
    <div class="header text-2xl">
        <a href="https://github.com/OneZeroZeroOneOne">GitHub</a>
        <a href="https://github.com/OneZeroZeroOneOne">Resume</a>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
})


export default class Home extends Vue {
}

</script>

<style lang="scss">
.header {
    display: flex;
    min-height: 10vh;
    background: linear-gradient(45deg,$colorsecond, $colorbackground);
    justify-content: space-evenly;
    align-items: center;

    border-bottom: 4px ridge $colormain;
}
</style>