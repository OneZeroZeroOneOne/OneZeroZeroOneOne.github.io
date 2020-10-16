<template>
    <div class="imgdiv">
        <component :is="svg[name]"/>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import PythonIcon from './icon/PythonIcon.vue'
import DotnetIcon from './icon/DotnetIcon.vue'
import TailwindIcon from './icon/TailwindIcon.vue'
import TypescriptIcon from './icon/TypescriptIcon.vue'
import VueIcon from './icon/VueIcon.vue'
import GitIcon from './icon/GitIcon.vue'
import HtmlIcon from './icon/HtmlIcon.vue'
import JavascriptIcon from './icon/JavascriptIcon.vue'
import MysqlIcon from './icon/MysqlIcon.vue'
import NodeIcon from './icon/NodeIcon.vue'
import NpmIcon from './icon/NpmIcon.vue'
import PostgresIcon from './icon/PostgresIcon.vue'
import CsharpIcon from './icon/CsharpIcon.vue'



@Component({
  components: {
      PythonIcon,
  },
})


export default class Home extends Vue {
    public svg = {
                "python": PythonIcon,
                'csharp': CsharpIcon,
                'typescript': TypescriptIcon,
                'javascript': JavascriptIcon,
                'html': HtmlIcon,
                'mysql': MysqlIcon,
                'postgres': PostgresIcon,
                'tailwind': TailwindIcon,
                'dotnet': DotnetIcon,
                'vue': VueIcon,
                'git': GitIcon,
                'npm': NpmIcon,
                'node': NodeIcon,
            };

    @Prop() name!: string;
    constructor() {
        super();
        console.log(this.svg[name]);   
    }   
}
</script>

<style lang="scss">

.svg {
    height: auto;
    width: auto;
    fill: $colorsecond;
}

.svg:hover {
    transition: all 0.5s ease;
    fill: $colorthird;
}
.imgdiv {
    margin: auto;
    height: 50px;
    width: 50px;
}


</style>

