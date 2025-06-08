<script setup lang="ts">
import product_card_big from '@/components/card/product_card_big.vue';
import cards_3 from '@/components/card/cards_3.vue';
import vbutton1 from '@/components/buttons/vbutton1.vue';
import res_img from '@/components/res_img.vue';
import vbutton2 from '@/components/buttons/vbutton2.vue';
import man_lm from '@/components/man_lm.vue';
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <product_card_big class="sec1" />

    <div class="max1200 px-7 flex flex-col items-center justify-center">
      <cards_3 class="py-30" />

      <!-- section2 -->
      <div
        class="   py-20 md:pb-0 md:pt-20 w-full flex flex-col  items-center  md:flex-row md:items-start md:justify-center bg-orange md:gap-40 overflow-hidden  text-white text-center md:text-start gap-y-17 rounded-[1rem]">
        <img class="md:w-[30%] b1000:w-[410px] w-[170px] sm:w-[200px] sec2img md:mb-[-2rem]"
          src="/assets/home/desktop/image-speaker-zx9.png" />
        <div class="flex flex-col justify-center items-center md:items-start gap-5">
          <h1 class="   text-[58px] font-[600] leading-none">ZX9<br />SPEAKER</h1>
          <span>
            Upgrade to premium speakers that are <br /> phenomenally built to deliver truly <br class=" sm:hidden" />
            remarkable <br class=" hidden md:block" /> sound.
          </span>

          <router-link :to="{ name: 'product', params: { name: 'zx9-speaker' } }" class="flex justify-center items-center ">
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
        <router-link :to="{ name: 'product', params: { name: 'zx7-speaker' } }" class="flex justify-center items-center">
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

        <router-link :to="{ name: 'product', params: { name: 'yx1-earphones' } }" class="flex justify-center items-center">
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
