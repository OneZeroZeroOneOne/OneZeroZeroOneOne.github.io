<template>
  <div class="skill_container mx-auto font-serif">
    <div v-for="(l, k) in skills" :key="k" class="skill_section">
      <h3 class="skill_title text-center text-2xl color-main">{{capitalizeFirstLetter(k)}}</h3>
      <div class="skill_list">
        <div
          class="skill_img_div color-main"
          v-for="(s, i) in l"
          :key="i"
        >
          <SkillIcon :name="s" size="normal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SkillIcon from "./SkillIcon.vue";

@Component({
  components: {
    SkillIcon,
  },
})
export default class Home extends Vue {
  public skills = {
    languages: [
      "python",
      "csharp",
      "typescript",
      "javascript",
      "html",
      "mysql",
      "postgres",
    ],
    frameworks: ["tailwind", "dotnet", "vue", "svelte"],
    tools: ["git", "npm", "node"],
  };
  
  capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
}
</script>

<style lang="scss">
.skill_container {
  display: grid;
  gap: 1.75rem;
  grid-gap: 1.75rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.skill_list {
  display: grid;
  gap: 0.75rem;
  grid-gap: 0.75rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  place-items: center;
}

.skill_img_div {
  width: auto;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

}

</style>
