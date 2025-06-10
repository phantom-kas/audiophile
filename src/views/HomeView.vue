<script setup lang="ts">
import product_card_big from '@/components/card/product_card_big.vue';
import cards_3 from '@/components/card/cards_3.vue';
import vbutton1 from '@/components/buttons/vbutton1.vue';
import res_img from '@/components/res_img.vue';
import vbutton2 from '@/components/buttons/vbutton2.vue';
import man_lm from '@/components/man_lm.vue';
import { onMounted, onUnmounted } from 'vue';
import top_line from '@/components/top_line.vue';
onMounted(() => {

  const target = document.getElementById('sec1');
  const elementsToChange = document.querySelectorAll('.header');

  const dd = document.querySelectorAll('.dd');
  dd[0].classList.add('hidden')
  dd.forEach(e => {
    e.classList.remove('bg-black')
  })

  if (!target) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        elementsToChange[0].classList.add('bg-black');
        // elementsToChange[0].classList.remove('hidden');

      } else {
        elementsToChange[0].classList.remove('bg-black');
        // elementsToChange[0].classList.add('hidden');

      }

    });
  }, {
    threshold: 0.8
  });

  observer.observe(target);
})

onUnmounted(() => {
  const dd = document.querySelectorAll('.dd');

  dd.forEach(e => {
    e.classList.remove('hidden')
    e.classList.add('bg-black')
  })

  const elementsToChange = document.querySelectorAll('.header');
  elementsToChange[0].classList.add('bg-black');
  elementsToChange[0].classList.remove('hidden');

})
</script>


<template>
  <div class="flex flex-col items-center w-full">
    <top_line />
    <product_card_big id="sec1" class="sec1" />

    <div class="max1200 px-7 flex flex-col items-center justify-center">
      <cards_3 class="mt-40" />

      <!-- section2 -->
      <div
        class="mt-60  py-20 md:pb-0 md:pt-20 w-full flex flex-col  items-center  md:flex-row md:items-start md:justify-center bg-orange md:gap-40 overflow-hidden  text-white text-center md:text-start gap-y-17 rounded-[1rem] relative">
        


        <div class="flex flex-col sec2img justify-start items-start md:w-[30%]  w-[17#0px] sm:w-[200px] relative" >
          <res_img path="/assets/home/" file-name="image-speaker-zx9.png"
            class="w-full h-full  md:mb-[-2rem] z-20" />

            <span class=" opacity-[30%] absolute size-[400px] rounded-[50%] border-1 border-[#fff] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/3  z-[1]"></span>
            <span class=" opacity-[30%] absolute size-[490px]  md:-translate-y-1/3 rounded-[50%] border-1 border-[#fff] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></span>
            <span class=" opacity-[30%] absolute size-[800px]   rounded-[50%] border-1 border-[#fff] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></span>
        </div>
        <div class="flex flex-col justify-center items-center md:items-start gap-5 z-10">
          <h1 class="   text-[58px] font-[600] leading-none">ZX9<br />SPEAKER</h1>
          <span>
            Upgrade to premium speakers that are <br /> phenomenally built to deliver truly <br class=" sm:hidden" />
            remarkable <br class=" hidden md:block" /> sound.
          </span>

          <router-link :to="{ name: 'product', params: { name: 'zx9-speaker' } }"
            class="flex justify-center items-center ">
            <vbutton1 class="mb-2 md:mt-0 mt-8" />
          </router-link>
        </div>
      </div>
    </div>
    <!-- section2 -->


    <!-- section3 -->
    <div class="flex flex-col items-center justify-center max1200 px-7 my-8 relative">
      <res_img path="/assets/home" file-name="image-speaker-zx7.jpg" class=" w-full rounded-[1rem]" />
      <div class=" absolute flex flex-col gap-6 left-20 h-full justify-center items-start ">
        <span class="text-[28px] font-[600] leading-none">
          ZX7 SPEAKER
        </span>
        <router-link :to="{ name: 'product', params: { name: 'zx7-speaker' } }"
          class="flex justify-center items-center">
          <vbutton2 />
        </router-link>
      </div>
    </div>
    <!-- section3 -->

    <!-- section4 -->
    <div class=" max1200 flex flex-col sm:flex-row sm:justify-between px-7 gap-y-7 gap-x-7">
      <res_img class=" w-full sm:w-[49%] rounded-[8px]" file-name="image-earphones-yx1.jpg" path="/assets/home" />
      <div
        class="cusw h-[var(--cwidth)] sm:h-[unset] w-full sm:w-[49%] flex flex-col justify-center items-start bg-[#F1F1F1] p-7 rounded-[8px] text-[28px] font-[600] gap-7">
        YX1 EARPHONES

        <router-link :to="{ name: 'product', params: { name: 'yx1-earphones' } }"
          class="flex justify-center items-center">
          <vbutton2 />
        </router-link>
      </div>
    </div>
    <!-- section4 -->

    <man_lm />
    <!-- section5 -->
  </div>

</template>
<style scoped>
.sec1 {
  margin-top: calc(var(--nav-height) * -1);
}

.sec2img {
  /* margin-bottom: -2rem; */
}

.cusw {
  --cwidth: calc(68vw - 2px);
}
</style>
