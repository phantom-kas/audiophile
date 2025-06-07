<script setup lang="ts">
import data from '../../data.json'
import vbutton from '../buttons/vbutton.vue';

</script>
<template>
    <div class="flex manrope flex-row items-center justify-center  md:max-b952:items-end  b952:items-center   gap-7 text-white  relative w-full">


        <div class="w-full absolute flex items-center justify-center ">
            <div class=" h-full w-full  md:w-[max(1200px)] md:px-7 flex flex-col items-center md:items-start">
                <div class="w-full gap-6 flex flex-col items-center justify-center md:items-start  lg:gap-4 xl:gap-10  sm:w-[max(379px)] md:gap-3 md:pb-7">
                    <span class=" font-[100] text-[14px] opacity-[49.66%]">NEW PRODUCT</span>
                    <h1 class=" w-[max(379px)] font-[600] md:text-5xl text-4xl  lg:text-6xl uppercase b952:text-5xl text-center md:text-start w-fut">
                       {{ data[3]['name'] }}
                    </h1>
                    <span class="opacity-[75%] text-[15px] text-center md:text-start">
                        Experience natural, lifelike audio and exceptional <br class="md:hidden"> build quality made for the passionate music <br class="md:hidden">
                        enthusiast.
                    </span>
                    <vbutton />
                </div>
            </div>
        </div>



        <img class="md:block hidden w-full left-0 right-0 -z-10 relative" src="/assets/home/desktop/image-hero.jpg" alt="">
        <img class="md:hidden sm:block hidden  w-full left-0 right-0 -z-10 relative" src="/assets/home/tablet/image-header.jpg" alt="">
        <img class="md:hidden sm:hidden w-full left-0 right-0 -z-10 relative" src="/assets/home/mobile/image-header.jpg" alt="">
    </div>
</template>


<style scoped></style>