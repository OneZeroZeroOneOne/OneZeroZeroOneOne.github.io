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
.skill_container { 
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  grid-gap: 1.5vw;
  
  }
</style>