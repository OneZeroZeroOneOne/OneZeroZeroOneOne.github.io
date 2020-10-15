<template>
  <section class="font-serif text-left text-xl">
    <div class="flex h-screen">
        <div class="w-2/6 ml-40 mt-8">
          <div id="meheader" class="text-4xl">
            <p id="metext" class="color-main">Привет, я Владимир Прохоренко</p> 
          </div>
          <div id="medescr" class="text-xl mt-4">
            <p id="medescrtext" class="color-second">Я бекенд разработчик с комерческим опытом разработки чат ботов, и множеством собственных проектов</p>
          </div>
        <div class="infocategoryes mt-4">
            <CategoryHeader :text="a1" :href="'/aboutme'" class=""/>
            <br />
            <CategoryHeader :text="a2" :href="'/aboutme'"/>
            <br />
            <CategoryHeader :text="a3" :href="'/aboutme'"/>
        </div>
        </div>
        <div class="w-3/6 mt-10"> 
          <div class="d_skill_image">
            <img scr="https://s.cdpn.io/3/kiwi.svg" class="i_skill_image">
          </div>
        </div>
    </div>
</section>
</template>

<script lang="ts">
import CategoryHeader from '../components/CategoryHeader.vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {
    CategoryHeader,
  },
})

export default class Home extends Vue {
  public a1: string = 'Обо мне 👉';
  public a2: string = 'Проекты 👉';
  public a3: string = 'Контакты 👉';
  constructor() {
    super();
    setTimeout(() =>{
      let wrapper1: HTMLElement | null = document.getElementById('meheader');
      let text1: HTMLElement | null = document.getElementById('metext');
      let wrapper2: HTMLElement | null = document.getElementById('medescr');
      let text2: HTMLElement | null = document.getElementById('medescrtext');
      if (wrapper1 != null && text1 != null && text1.textContent != null && wrapper2 != null && text2 != null && text2.textContent != null){
        let textCont1 = text1.textContent;
        let textCont2 = text2.textContent;
        text1.style.display = 'none';
        text2.style.display = 'none';
        let prevEl1: HTMLElement | null = null;
        
        for (let i = 0; i < textCont1.length; i++) {
          console.log(textCont1);
          setTimeout(() => {
            if (prevEl1 != null && prevEl1.textContent != null){
              prevEl1.textContent = prevEl1.textContent.replace('_', '');
            }
            let texts = document.createTextNode(textCont1[i] + "_");
            let span = document.createElement('span');
            prevEl1 = span;
            span.appendChild(texts);
            span.classList.add("color-main");
            if (wrapper1 != null) {
                wrapper1.appendChild(span);
            }
            if (i ===  textCont1.length - 1 && prevEl1 != null && prevEl1.textContent != null ){
              prevEl1.textContent = prevEl1.textContent.replace('_', '');
            }
          }, 75 * i);
        }
        let prevEl2: HTMLElement | null = null;
        for (let i = 0; i < textCont2.length; i++) {
          console.log(textCont2);
          setTimeout(() => {
            if (prevEl2 != null && prevEl2.textContent != null){
              prevEl2.textContent = prevEl2.textContent.replace('_', '');
            }

            let texts = document.createTextNode(textCont2[i] + "_");
            let span = document.createElement('span');
            prevEl2 = span;
            span.appendChild(texts);
            span.classList.add("color-second");
            if (wrapper2 != null) {
                wrapper2.appendChild(span);
            }
            if (i ===  textCont2.length - 1 && prevEl2 != null && prevEl2.textContent != null ){
              prevEl2.textContent = prevEl2.textContent.replace('_', '');
            }
          }, 75 * i);
        }
      
      }
      }, 0.1);
    }
}
</script>

<style lang="scss" scoped>
#meheader{
  height: 17%;
  max-height: 17%;
}

$transition: all 0.45s ease;
$color: rgb(255, 123, 0);
$colorhover: rgb(247, 222, 6);

.svg {
  fill: $color;
  transition: all 2s ease;
}

.i_skill_image {
  height: 70px;
  width: 70px;
}

.d_skill_image {
  height: 100px;
  width: 100px;
}

.svg:hover {
		fill: $colorhover;
	} 
#medescr{
  height: 17%;
  max-height: 17%;
}
</style>


