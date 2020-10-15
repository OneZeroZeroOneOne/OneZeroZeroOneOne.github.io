<template>
    <div class="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
})


export default class Home extends Vue {
    constructor() {
        super();
    }
}
</script>

<style lang="scss">
.grid {
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 2vw;
}

.grid > div {
  font-size: 5vw;
  padding: .5em;
  background: gold;
  text-align: center;
}
</style>