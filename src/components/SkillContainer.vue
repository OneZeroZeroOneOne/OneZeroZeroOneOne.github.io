<template>
    <section class="skill_container font-serif">
        <section class="skill_section ">
            <h3 class="skill_title text-left text-2xl color-third">Languages</h3>
            <section class="skill_list border-2 rounded">
                <div class="skill_img_div color-main px-1 py-1" v-for="(s, i)  in skills.languages" :key="i">
                    <SkillIcon :name="s"/>
                    <p class="text-left">{{s}}</p>
                </div>
            </section>
        </section>
        <section class="skill_section">
            <h3 class="skill_title text-left text-2xl color-third">Frameworks</h3>
            <section class="skill_list border-2 rounded">
                <div class="skill_img_div color-main px-1 py-1" v-for="(s, i)  in skills.frameworks" :key="i">
                    <SkillIcon :name="s"/>
                    <p class="text-left">{{s}}</p>
                </div>
            </section>
        </section>
        <section class="skill_section">
            <h3 class="skill_title text-left text-2xl color-third">Tools</h3>
            <section class="skill_list border-2 rounded">
                <div class="skill_img_div color-main px-1 py-1" v-for="(s, i)  in skills.tools" :key="i">
                    <SkillIcon :name="s"/>
                    <p class="text-left">{{s}}</p>
                </div>
            </section>
        </section>
    </section>
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
    gap: .75rem;
    grid-gap: .75rem;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    border-color: $colorthird;
}

.skill_container { 
  display: grid;
  grid-template-rows: 1fr;

  grid-gap: 1.5vw;
  
  }
.skill_img_div:hover {
    transition: all 0.5s ease;
    color: $colorthird;
    
}
</style>