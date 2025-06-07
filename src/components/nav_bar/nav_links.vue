<script setup lang="ts">
import type { PropType } from 'vue';
import { useRoute, type RouteLocationAsRelativeGeneric, type RouteLocationNormalizedLoaded } from 'vue-router'

defineProps({
    to: {
        type: Object as PropType<RouteLocationAsRelativeGeneric | string>,
        default: '/'
    },
    label:{
        default:'HOME'
    }
})
</script>
<template>
    <router-link :to class=" text-white ">
        <slot>
            {{ label }}
        </slot>
    </router-link>


</template>


<style scoped></style>