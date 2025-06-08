<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    imgObj: {
        type: Object as PropType<{ mobile: string, tablet: string, desktop: string }>,
        default: {}
    },
    class: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <img :class class="sm:hidden" :src="imgObj.mobile" />
    <img :class class="hidden sm:block md:hidden" :src="imgObj.tablet" />
    <img :class class="hidden md:block"  :src="imgObj.desktop" />
</template>