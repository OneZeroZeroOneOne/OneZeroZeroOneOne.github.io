<template>
    <div class="font-serif justify-center border-2 border-color-third rounded-xl">
        <p class="text-center color-main text-xl">{{this.name}}</p>
        <p class="project-description text-xl text-center p-4 color-third">{{this.description}}</p>
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
    constructor() {
        super();
    }
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
    min-height: 6rem;
}
</style>