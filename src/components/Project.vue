<template>
    <div class="project-container font-serif border-2 border-color-third rounded-xl">
        <p class="text-center color-main text-xl">{{this.name}}</p>
        <div class="project-description">
            <p class="text-xl text-center p-4 color-third">{{this.description}}</p>
        </div>
        <div class="skills-and-github p-2">
            <div class="usedskills" >
                <SkillIcon v-for="(s,i) in usedskills" :key="i" :name="s" size="little"/>
            </div>
            <div class="githublink-cont">
                <a class="githublink text-right text-xl" :href="url">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import SkillIcon from "./SkillIcon.vue"

@Component({
  components: {
    SkillIcon,
  },
})

export default class Home extends Vue {
    @Prop() public url!:string;
    @Prop() public name!:string;
    @Prop() public usedskills!:[];
    @Prop() public description!:string;
}
</script>

<style lang="scss">
.usedskills {
    display: flex;
}

.githublink {
    color: $colormain;
    
    &:hover {
        transition: all 0.15s ease;
        color: $colorthird;
    }
} 

.githublink-cont {
    width: 30%;
    text-align: right;
}

.skills-and-github {
    display: flex;
    justify-content: space-between;
    
    align-items: flex-start;
}

.project-description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}

.project-container {
    display: flex;
    flex-direction: column;
}

</style>