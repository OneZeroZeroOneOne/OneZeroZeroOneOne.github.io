<template>
    <SkillIcon name='python'/>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import SkillIcon from '../components/SkillIcon.vue';

@Component({
  components: {
      SkillIcon,
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