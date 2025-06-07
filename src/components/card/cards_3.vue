<script setup lang="ts">
import data from '../../data.json'
import cards_3_1 from './cards_3_1.vue';
</script>
<template>
    <div class=" w-full flex flex-col sm:flex-row sm:justify-between gap-5">
        <cards_3_1 class=" self-stretch justify-self-stretch w-[32%]" :product="data[2]" />
        <cards_3_1 class=" self-stretch justify-self-stretch  w-[32%] " :product="data[5]" />
        <cards_3_1 class=" self-stretch justify-self-stretch  w-[32%] " :product="data[0]" />
    </div>

    
</template>



<style scoped></style>