<template>
<SkillContainer/>
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