<template>
    <div id="categoryheader">
        <p class="category-header text-4xl color-main"><a :href="href">{{text}}</a></p>
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
}
</script>
<style lang='scss'>
#categoryheader {
    position: relative;
}

#categoryheader:hover {
    animation: moving 1s infinite alternate;
}
@keyframes moving {
    from {left: 0px;}
    to {left: 25px;}
}

.category-header:hover {
  transition: all 0.5s ease;
  color: $colorthird;
}

.category-header {
  display: inline;
}


</style>