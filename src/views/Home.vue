<template>
  <section class="home">
    <div class="main-container">
      <div class="home-about">
        <div class="font-serif">
          <div class="text-4xl">
            <p id="metext" class="color-main">Hello, i'm Volodymyr</p>
          </div>
          <div id="medescr" class="text-xl mt-4">
            <p id="medescrtext" class="color-main">
              I'm a backend developer with experience in
            </p>
            <p id="medescrtext" class="color-main">
              creating web-api and a lot of my own projects
            </p>
          </div>
          <div class="mt-8">
              <CategoryHeader class="mt-8"
                v-for="i in links"
                :text="i.title"
                :href="i.route"
                :key="i.title"
              />
          </div>
        </div>
        <div class="item">
          <img class="rounded-3xl border-8 border-color-second" src="../assets/me.jpg" />
        </div>
      </div>
      <div>
        <SkillContainer class="skill-container"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
//creating web-api and a lot of my own projects
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

  ];
}
</script>

<style lang="scss" scoped>
.main-container {
  margin: 0 calc(5vw + 2.5%);
  display: flex;
  flex-direction: column;
}
.home {
  width: 100vw;

  &-about {
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

  }
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
}


.skill-container {
  margin: 4rem;
}
</style>
