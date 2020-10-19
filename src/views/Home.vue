<template>
  <section class="home">
    <div class="home-about">
      <div class="item">
        <div class="text-4xl">
          <p id="metext" class="color-main">Hello, i'm Volodymyr</p>
        </div>
        <div id="medescr" class="text-xl mt-4">
          <p id="medescrtext" class="color-main">
            I'm a backend developer with experience in creating web-api and a
            lot of my own projects
          </p>
        </div>
        <div class="flex flex-wrap mt-8">
          <div class="mt-4">
            <CategoryHeader
              v-for="i in links"
              :text="i.title"
              :href="i.route"
              :key="i.title"
            />
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/me.jpg" />
      </div>
    </div>
    <SkillContainer class="skill-container"/>
  </section>
</template>

<script lang="ts">
import CategoryHeader from "../components/CategoryHeader.vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SkillContainer from "../components/SkillContainer.vue";
import IStepLink from "../models/IStepLink";

@Component({
  components: {
    CategoryHeader,
    SkillContainer,
  },
})
export default class Home extends Vue {
  public links: IStepLink[] = [
    {
      title: "About Me",
      route: "about",
    },
    {
      title: "Projects",
      route: "projects",
    },
    {
      title: "GitHub",
      route: "https://github.com/Forevka",
    },
  ];
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;

  &-about {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    .item {
      padding: 5rem;
    }

    img {
      height: auto;
      max-width: 100%;
      width: 20rem;
    }
  }
}

.skill-container {
  margin: 4rem;
}
</style>
