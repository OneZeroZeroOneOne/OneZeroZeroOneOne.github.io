<template>
  <div class="maintext px-16 py-8">
    <p class="color-main text-2xl font-serif">
      Hello! I'm Volodymyr, i'm 19's, i from Kyiv. Since childhood I was interested in computer science. It all started with learning trivial language Pascal ​​in high school. As I got older, I became more immersed in computer science. After school I entered the Kiev National University of Trade and Economics at the Faculty of Information Technologies. For some time I worked as a freelancer, developing chat bots. That's when I got acquainted with a lot of programming paradigms.
    </p>
    <BackToMain/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SkillContainer from "../components/SkillContainer.vue";
import BackToMain from "../components/BackToMain.vue"

@Component({
  components: {
    SkillContainer,
    BackToMain,
  },
})
export default class AboutMe extends Vue {}
</script>

<style lang="scss">
.maintext {
  justify-content: start;
}
</style>