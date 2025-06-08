<script setup lang="ts">
import vbutton from '../buttons/vbutton.vue';
import res_img_dmt from '../res_img_dmt.vue';
const props = defineProps({
    product:{
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="flex flex-col items-center justify-center p-4 gap-y-6">
        <res_img_dmt :img-obj="product.image" class=" w-full rounded-xl"/>
        <span>{{ product.name }}</span>
        <router-link :to="{name:'product',params:{name:product.slug}}">
            <vbutton></vbutton>
        </router-link>
    </div>
</template>