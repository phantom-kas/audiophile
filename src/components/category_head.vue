<script setup lang="ts">
import top_line from './top_line.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
    <top_line/>
    <div class=" w-full h-[200px] bg-black flex justify-center items-center">
        <slot>
            <span class=" text-white font-[600] text-[40px] uppercase">{{route.name}}</span>
        </slot>
    </div>
</template>