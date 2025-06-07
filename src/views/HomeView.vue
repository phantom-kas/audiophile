<script setup lang="ts">
import product_card_big from '@/components/card/product_card_big.vue';
import cards_3 from '@/components/card/cards_3.vue';
import vbutton1 from '@/components/buttons/vbutton1.vue';
import res_img from '@/components/res_img.vue';
import vbutton2 from '@/components/buttons/vbutton2.vue';
import vbutton3 from '@/components/buttons/vbutton3.vue';

</script>

<template>
  <div class="flex flex-col items-center w-full">
    <product_card_big class="sec1" />

    <div class="max1200 px-7 flex flex-col items-center justify-center">
      <cards_3 class="py-30" />

      <!-- section2 -->
      <div
        class="   py-20 md:pb-0 md:pt-20 w-full flex flex-col  items-center  md:flex-row md:items-start md:justify-center bg-amber-700 md:gap-40 overflow-hidden  text-white text-center md:text-start gap-y-17 rounded-[1rem]">
        <img class="md:w-[30%] b1000:w-[410px] w-[170px] sm:w-[200px] sec2img md:mb-[-2rem]"
          src="/assets/home/desktop/image-speaker-zx9.png" />
        <div class="flex flex-col justify-center items-center md:items-start gap-5">
          <h1 class="   text-[58px] font-[600] leading-none">ZX9<br />SPEAKER</h1>
          <span>
            Upgrade to premium speakers that are <br /> phenomenally built to deliver truly <br class=" sm:hidden" />
            remarkable <br class=" hidden md:block" /> sound.
          </span>
          <vbutton1 class="mb-2 md:mt-0 mt-8" />
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
        <vbutton2 />
      </div>
    </div>
    <!-- section3 -->

    <!-- section4 -->
    <div class=" max1200 flex flex-col sm:flex-row sm:justify-between px-7 gap-y-7 gap-x-7">
      <res_img class=" w-full sm:w-[49%] rounded-[8px]" file-name="image-earphones-yx1.jpg" path="/assets/home" />
      <div
        class="cusw h-[var(--cwidth)] sm:h-[unset] w-full sm:w-[49%] flex flex-col justify-center items-start bg-[#F1F1F1] p-7 rounded-[8px] text-[28px] font-[600] gap-7">
        YX1 EARPHONES
        <vbutton2 />
      </div>
    </div>
    <!-- section4 -->

    <div class=" max1200 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-7 my-30 relative gap-y-7">
      <div class="md:w-[46%] w-full flex flex-col md:justify-center items-start  h-full">
        <h2 class=" text-[40px] font-[600] w-full leading-none mb-5 sm:w-[max(379px)]">
          BRINGING YOU THE  <span class=" text-[#D87D4A]">BEST</span> AUDIO GEAR
        </h2>
        <span class=" opacity-[50%]">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </span>
      </div>
      <res_img class=" w-full md:w-[46%] rounded-[8px]" file-name="image-best-gear.jpg" path="/assets/shared" />

    </div>
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
