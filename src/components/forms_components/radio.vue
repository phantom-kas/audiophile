<script setup lang="ts">
defineProps({
    value: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="flex items-center ps-4 rounded-lg   border-gray-700 border-1 has-checked:border-2 has-checked:border-orange">
        <input :id="id" type="radio" :value name="bordered-radio"
            class="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange focus:orange  focus:ring-2 ">
        <label :for="id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
            <slot>Default radio</slot>
        </label>
    </div>
</template>