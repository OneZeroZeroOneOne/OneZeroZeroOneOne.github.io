<template>
  <section class="font-serif text-left text-xl">
    <div class="home_div flex h-screen">
        <div class="ml-16 mt-8">
          <div id="meheader" class="text-4xl">
            <p id="metext" class="color-main">Привет, я Владимир Прохоренко</p> 
          </div>
          <div id="medescr" class="text-xl mt-4">
            <p id="medescrtext" class="color-main">Я бекенд разработчик с комерческим опытом разработки чат ботов, и множеством собственных проектов</p>
          </div>
        <div class="mt-4">
            <CategoryHeader :text="a1" :href="'/aboutme'">
            </CategoryHeader>
            <br />
            <CategoryHeader :text="a2" :href="'/aboutme'">
            </CategoryHeader>
            <br />
            <CategoryHeader :text="a3" :href="'/aboutme'">
            </CategoryHeader>
        </div>
        </div>
        <div class="mt-10"> 
          <SkillContainer/>
        </div>
        <div>
          ASDASDASDASD
        </div>
    </div>
</section>
</template>

<script lang="ts">
import CategoryHeader from '../components/CategoryHeader.vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import SkillContainer from '../components/SkillContainer.vue';

@Component({
  components: {
    CategoryHeader,
    SkillContainer,
  },
})

export default class Home extends Vue {
  public a1: string = 'Обо мне';
  public a2: string = 'Проекты';
  public a3: string = 'Контакты';
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
            span.classList.add("color-main");
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

}

#medescr{

}


.home_div {
  display: grid;
  gap: .25rem;
  grid-gap: .25rem;
  grid-template-columns: repeat(auto-fill,minmax(500px,1fr));
  
}

</style>


