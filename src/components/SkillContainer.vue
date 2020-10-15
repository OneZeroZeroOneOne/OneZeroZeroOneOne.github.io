<template>
    <section class="skill_container">
        <section class="skill_section">
            <h3 class="skill_title text-left">Languages</h3>
            <section class="skill_list">
                <div v-for="(s, i)  in skills.frameworks" :key="i">
                    <SkillIcon :name="s"/>
                    <p>{{s}}</p>
                </div>
            </section>
        </section>
        <section class="skill_section">
            <h3 class="skill_title text-left">Frameworks</h3>
            <section class="skill_list">
                <div v-for="(s, i)  in skills.frameworks" :key="i">
                    <SkillIcon :name="s"/>
                    <p>{{s}}</p>
                </div>
            </section>
        </section>
        <section class="skill_section">
            <h3 class="skill_title text-left">Tools</h3>
            <section class="skill_list">
                <div v-for="(s, i)  in skills.tools" :key="i">
                    <SkillIcon :name="s"/>
                    <p>{{s}}</p>
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
.skill_container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
}

.skill_list {
    display: grid;
    gap: .75rem;
    grid-gap: .75rem;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
}
</style>