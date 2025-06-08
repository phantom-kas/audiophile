<script setup lang="ts">
import nav_links from './nav_links.vue';

defineProps({
    isopen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);
</script>
<template>
    <nav class="manrope">
        <Teleport defer to="#modaloutlet">
            <div @click="emit('close')" v-if="isopen" class=" bg-black/40 h-[100vh] w-full sm:hidden"></div>
        </Teleport>
        <nav_links @click="emit('close')" :to="{ name: 'home' }" />

        
        <nav_links @click="emit('close')" :to="{ name: 'headphones' }" label="HEADPHONES" />
        <nav_links @click="emit('close')" :to="{ name: 'speakers' }" label="SPEAKERS" />
        <nav_links @click="emit('close')" :to="{ name: 'earphones' }" label="EARPHONES" />
        <!-- <div>&nsbp;</div> -->
    </nav>
</template>
<style scoped></style>