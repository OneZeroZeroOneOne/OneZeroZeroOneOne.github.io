<template>
    <div class="skill_container mx-auto font-serif px-16">
        <div class="skill_section border-r-2 border-l-2 border-color-third">
            <h3 class="skill_title text-center text-2xl color-third">Languages</h3>
            <div class="skill_list">
                <div class="skill_img_div color-main px-1 py-1" v-for="(s, i)  in skills.languages" :key="i">
                    <SkillIcon :name="s"/>
                    <p class="text-left text-center">{{s}}</p>
                </div>
            </div>
        </div>
        <div class="skill_section border-r-2 border-l-2 border-color-third">
            <h3 class="skill_title text-center text-2xl color-third">Frameworks</h3>
            <div class="skill_list">
                <div class="skill_img_div color-main px-1 py-1" v-for="(s, i)  in skills.frameworks" :key="i">
                    <SkillIcon :name="s"/>
                    <p class="text-left text-center">{{s}}</p>
                </div>
            </div>
        </div>
        <div class="skill_section border-r-2 border-l-2 border-color-third">
            <h3 class="skill_title text-center text-2xl color-third">Tools</h3>
            <div class="skill_list">
                <div class="skill_img_div color-main px-1 py-1" v-for="(s, i)  in skills.tools" :key="i">
                    <SkillIcon :name="s"/>
                    <p class="text-left text-center">{{s}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import SkillIcon from './SkillIcon.vue'

@Component({
  components: {
    SkillIcon,
  },
})


export default class Home extends Vue {
    public skills = {
				languages: [
					'python', 
					'csharp', 'typescript', 
					'javascript',
					'html', 'mysql', 
					'postgres', 
				],
				frameworks: [
					'tailwind', 'dotnet',
					'vue',
				],
				tools: [
					'git', 'npm', 'node',
				]
            }
    constructor() {
        super();
    }

}
</script>

<style lang="scss">


.skill_list {
    display: grid;
    gap: .25rem;
    grid-gap: .25rem;
    grid-template-columns: 1fr 1fr 1fr;
    //grid-template-columns: repeat(auto-fill,minmax(100px,1fr));

}

.skill_container { 
  display: grid;
  gap: 1.75rem;
  grid-gap: 1.75rem;
  grid-template-columns: 1fr 1fr 1fr;
  }

.skill_img_div {
    width: auto;
    height: auto;
}
.skill_img_div:hover {
    transition: all 0.5s ease;
    color: $colorthird;
    .svg {
        transition: all 0.5s ease;
        fill: $colorthird;
    }
    
}
</style>