<template>
    <a class="back-to-main text-4xl font-serif color-main" href="javascript:history.back()">Back</a>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class CategoryHeader extends Vue {
}
</script>


<style lang="scss" scoped>
.back-to-main:hover {
    transition: all 0.5s ease;
    color: $colorthird;
}
</style>