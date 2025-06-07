<script setup lang="ts">
import audiop_svg from '../nav_bar/audiop_svg.vue';
import foot_nav from './foot_nav.vue';
import footer_sos from './footer_sos.vue';
</script>
<template>
    <div class="w-full bg-[#101010] text-white flex flex-row justify-center">
        <div class="max1200 px-7 flex flex-row gap-7 bg-[#101010] text-white py-10">
            <div class="w-full md:w-[47%] flex flex-col gap-y-10 sm:items-start items-center">
                <audiop_svg />
                <foot_nav class="md:hidden md:max-w-full w-full" />

                <span class=" opacity-[50%]">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and
                    sound specialists who are devoted to helping you get the most out of personal audio. Come and visit
                    our
                    demo facility - we're open 7 days a week.
                </span>

                <div class="w-full flex sm:flex-row sm:justify-between flex-col items-center gap-y-9">
                    <span class="opacity-[50%]">Copyright 2021. All Rights Reserved </span>
                    <footer_sos class=" md:hidden" />
                </div>
            </div>
            <div class=" w-[47%]  flex-col gap-y-20 items-end md:flex hidden">
                <foot_nav class="  max-w-full" />
                <footer_sos class=" " />
            </div>
        </div>
    </div>

</template>

<style lang="css" scoped></style>