<script setup lang="ts">
import res_img from './res_img.vue';
</script>
<template>
    <div
        class=" max1200 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-7 my-30 relative gap-y-15">
        <div class="md:w-[46%] w-full flex flex-col justify-center md:justify-center items-center md:items-start  h-full text-center md:text-start gap-y-10 md:gap-y-4">
            <h2 class=" text-[28px] sm:text-[40px] font-[600]  leading-none mb-5  text-center w-full md:text-start">
                BRINGING YOU THE  <span class=" text-[#D87D4A]">BEST</span> <br class= "hidden sm:block  md:hidden"/> AUDIO GEAR
            </h2>
            <span class=" opacity-[50%]">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for
                you to
                browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
                people who
                make Audiophile the best place to buy your portable audio equipment.
            </span>
        </div>
        <res_img class=" w-full md:w-[46%] rounded-[8px]" file-name="image-best-gear.jpg" path="/assets/shared" />

    </div>
</template>