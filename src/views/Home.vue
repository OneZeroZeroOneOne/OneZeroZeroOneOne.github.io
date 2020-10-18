<template>
  <section class="w-screen font-serif text-left text-xl">
    <div class="flex flex-wrap ml-32 mt-8">
      <div class="main-text">
        <div id="meheader" class="text-4xl">
          <p id="metext" class="color-main">Hello, i'm Volodymyr</p> 
        </div>
        <div id="medescr" class="text-xl mt-4">
          <p id="medescrtext" class="color-main">I'm a backend developer with experience in creating web-api and a lot of my own projects</p>
        </div>
        <div class="flex flex-wrap mt-8">
          <div class="mt-4">
            <CategoryHeader :text="a1" :href="'/aboutme'"/>
            <br />
            <CategoryHeader :text="a2" :href="'/aboutme'"/>
            <br />
            <CategoryHeader :text="a3" :href="'/aboutme'"/>
          </div>
        </div>
      </div>
      <div class="flex ml-16">
        <div>
          <img class="rounded-lg border-2 border-color-third" src="../assets/me.jpg">
        </div>
        <div class="ml-4">
            <img class="rounded-lg border-2 border-color-third" src="../assets/me.jpg">
        </div>
      </div>
    </div>
    <div class="mt-8"> 
      <SkillContainer/>
    </div>
  </section>
</template>

<script lang="ts">
import CategoryHeader from '../components/CategoryHeader.vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import SkillContainer from '../components/SkillContainer.vue';

@Component({
  components: {
    CategoryHeader,
    SkillContainer,
  },
})

export default class Home extends Vue {
  public a1: string = 'About me';
  public a2: string = 'Projects';
  public a3: string = 'Git';
  constructor() {
    super();
    }
}
</script>

<style lang="scss" scoped>
.main-text {
  min-width: 35%;
  max-width: 35%;
}
</style>


