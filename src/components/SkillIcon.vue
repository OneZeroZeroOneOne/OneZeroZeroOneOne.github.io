<template>
    <img class="skill_image" :src="`../assets/${name}`">
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
})


export default class Home extends Vue {
    @Prop() name!: string;
    constructor() {
        super();
        console.log(this.name);
    } 
}
</script>

<style lang="scss">
</style>

