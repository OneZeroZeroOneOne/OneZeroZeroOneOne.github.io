<template>
    <div>
        <p class="text-2xl">{{header}}</p>
        <div class="font-serif" v-for="(s, i)  in list" :key="i">
            <p class="text-xl">s</p> 
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class CategoryHeader extends Vue {
    @Prop() public list!: [];
    @Prop() public header!: [];
    constructor() {
        super();
    }
}
</script>


<style lang="scss" scoped>

</style>>