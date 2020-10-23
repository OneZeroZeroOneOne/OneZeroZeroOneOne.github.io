<template>
    <div class="a">
        <div class="b flex color-main">
            <div class="c1 color-main">
                ccc
            </div>
            <div class="c2 color-main">
                vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            </div>
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
}

.c1 {
    flex-grow: 1;
}
</style>