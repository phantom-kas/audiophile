<script setup lang="ts">
import right_arrow from '../icons/right_arrow.vue';
</script>
<template>
    <button class=" flex items-center justify-center gap-3 hover:text-orange cursor-pointer text-black">
        <slot>
            <span class="opacity-[50%] hover:opacity-[100%]">SHOP</span> <right_arrow/>
        </slot>
    </button>
</template>