<template>
    <div class="project-section">
        <p class="font-serif color-main text-3xl">Projects</p>
        <div class="project-container">
            <Project v-for="(s, i) in projectinfo" :key="i" :name="s.name" :url="s.url" :usedskills="s.usedskills" :description="s.description"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Project from "../components/Project.vue";

@Component({
  components: {
    Project,
  },
})

export default class Home extends Vue {
    public projectinfo: {} = {
        testproj: {
            url: "its url",
            name: "NAME",
            description: "descr adasd a das daa s іфв фів в фів фів фв фів фв фів фіцйу йцуцй уйцу йцу цйу цйуйцуйцуйц у йц уцй у",
            usedskills: [
                "python",
                "postgres",   
            ]
            
        },
        testproj2: {
            url: "its url2",
            name: "NAME2",
            description: "descr adasd a das daa s",
            usedskills: [
                "python",
                "postgres",
            ]
        }
    }
}
</script>

<style lang="scss">
.project-container {
    display: grid;
    gap: 0.5rem;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.project-section {
    width: 100vw;
}
</style>