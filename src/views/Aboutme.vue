<template>
  <div>
    <p>Hello!!! I'm Volodymyr, i'm 19's guid from Kuiv. Since childhood I was interested in computer science. It all started with learning trivial language Pascal ​​in high school. As I got older, I became more immersed in computer science.</p>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import SkillContainer from '../components/SkillContainer.vue';

@Component({
  components: {
    SkillContainer,
  },
})


export default class Home extends Vue {
    constructor() {
        super();
    }
}
</script>


<style lang="scss">

</style>