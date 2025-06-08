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
    <router-link :to class=" text-white hover:text-orange font-[600] ">
        <slot>
            {{ label }}
        </slot>
    </router-link>


</template>


<style scoped>
.router-link-exact-active {
    color: #D87D4A;
}
</style>