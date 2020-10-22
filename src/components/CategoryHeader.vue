<template>
    <div id="categoryheader">
        <p class="category-header text-4xl color-main">
          <router-link :to="href" v-if="!href.startsWith('http')">{{text}}</router-link>
          <a :href="href" v-else target="_blank" rel="noopener">{{text}}</a></p>
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