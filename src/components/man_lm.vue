<script setup lang="ts">
import res_img from './res_img.vue';
</script>
<template>
    <div
        class=" max1200 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-7 my-30 relative gap-y-7">
        <div class="md:w-[46%] w-full flex flex-col md:justify-center items-start  h-full">
            <h2 class=" text-[40px] font-[600] w-full leading-none mb-5 sm:w-[max(379px)]">
                BRINGING YOU THE <span class=" text-[#D87D4A]">BEST</span> AUDIO GEAR
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