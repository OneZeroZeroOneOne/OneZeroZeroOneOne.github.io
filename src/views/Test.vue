<template>
    <div class="a">
        <div class="b flex color-main">
            <p>babb</p>
        </div>
        <div class="c color-main">
            ccc
        </div>
    </div>
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
}
</script>

<style lang="scss">
.a {
    width: 40vw;
}
.b {
    height: 40vh;
    align-items: center;
}
</style>