<script setup lang="ts">
import right_arrow from '../icons/right_arrow.vue';
</script>
<template>
    <button class=" flex items-center justify-center gap-3 ">
        <slot>
            <span class="opacity-[50%] text-black">SHOP</span> <right_arrow/>
        </slot>
    </button>
</template>