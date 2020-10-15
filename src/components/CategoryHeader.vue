<template>
    <div id="categoryheader">
        <p id="text" class="text-4xl color-second"><a :href="href">{{text}}</a></p>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class CategoryHeader extends Vue {
    @Prop() public text!: string;
    @Prop() public href!: string;
    constructor() {
        super();
    }
}
</script>
<style>
    #categoryheader {
        position: relative;
    }

    #categoryheader:hover {
        animation: moving 1s infinite alternate;
    }
    @keyframes moving {
        from {left: 0px;}
        to {left: 50px;}
    }
</style>