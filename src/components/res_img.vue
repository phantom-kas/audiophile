<script setup lang="ts">
defineProps({
    path: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    class: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <img :class class="sm:hidden" :src="path+'/mobile/'+fileName" />
    <img :class class="hidden sm:block md:hidden" :src="path+'/tablet/'+fileName" />
    <img :class class="hidden md:block" :src="path+'/desktop/'+fileName"/>
</template>