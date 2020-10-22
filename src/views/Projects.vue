<template>
    <div class="project-section p-8">
        <p class="font-serif color-main text-3xl">Projects</p>
        <div class="project-list">
            <Project v-for="(s, i) in projectinfo" :key="i" :name="s.name" :url="s.url" :usedskills="s.usedskills" :description="s.description"/>
        </div>
        <BackToMain/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Project from "../components/Project.vue";
import BackToMain from "../components/BackToMain.vue"

@Component({
  components: {
    Project,
    BackToMain,
  },
})

export default class Home extends Vue {
    public projectinfo: {} = {
        proj: {
            url: "https://github.com/OneZeroZeroOneOne/OneZeroZeroOneOne.github.io",
            name: "OneZeroZeroOneOne.github.io",
            description: "This site",
            usedskills: [
                "typescript",
                "vue",
                "git",   
            ]
            
        },
        proj2: {
            url: "https://github.com/OneZeroZeroOneOne/psylogicbot",
            name: "psylogicbot",
            description: "Commercial bot in \"Telegram\" with tests, polls and statistics",
            usedskills: [
                "python",
                "postgres",
            ]
        },
        proj3: {
            url: "https://github.com/OneZeroZeroOneOne/AroundTheWorld",
            name: "AroundTheWorld",
            description: "My term paper about web applications of a travel agency",
            usedskills: [
                "csharp",
                "svelte",
                "javascript",
            ]
        },
        proj7: {
            url: "https://github.com/OneZeroZeroOneOne/QuestionWiktorina",
            name: "QuestionWiktorina",
            description: "Quiz game with questions, guesses and points in \"Telegram\"",
            usedskills: [
                "python",
                "postgres",
            ]
        },
        proj4: {
            url: "https://github.com/OneZeroZeroOneOne/ReferalBot",
            name: "ReferalBot",
            description: "Commercial bot in \"Telegram\" with a referral reward system",
            usedskills: [
                "csharp",
                "svelte",
                "javascript",
            ]
        },
        proj5: {
            url: "https://github.com/OneZeroZeroOneOne/ZNO_BOT",
            name: "ZNO_BOT",
            description: "Bot in \"Telegram\" with tests in mathematics, Ukrainian language, and history to prepare for the sovereign independent assessment",
            usedskills: [
                "python",
                "postgres",
            ]
        },
        proj6: {
            url: "https://github.com/OneZeroZeroOneOne/Sapyor",
            name: "Sapyor",
            description: "Analogue of the famous game \"Minesweeper\" in Telegram",
            usedskills: [
                "python",
                "postgres",
            ]
        },
    }
}
</script>

<style lang="scss">
.project-list {
    display: grid;
    gap: 1rem;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.project-section {
    width: 100vw;
}
</style>