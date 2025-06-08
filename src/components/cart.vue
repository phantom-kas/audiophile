<script setup>
import { useCartStore } from '@/stores/cart';
import res_img_dmt from './res_img_dmt.vue';
const cartData = useCartStore();
const emit = defineEmits(['close']);

</script>
<template>
    <div @click="emit('close')" class="w-full  flex flex-col items-center justify-start bg-black/50 h-[100vh] z-1000 ">
        <div class=" max1200 flex flex-row justify-end px-7">
            <div @click.stop
                class="cart bg-white rounded-sm p-4 flex flex-col items-center justify-start gap-y-4  mt-6">
                <div class=" w-full flex flex-row justify-between">
                    <h1 class=" text-[15px] font-[600]">CART ({{ cartData.itemsCount }})</h1>

                    <button @click="cartData.removeAllItems" class=" underline opacity-[50%] hover:text-orange hover:opacity-100 text-[15px]">Remove All</button>
                </div>

                <div v-for="item, i in cartData.cartItems" :key="item.id" class=" w-full flex flex-row justify-between">
                    <div class="flex flex-row gap-3 justify-start items-center">
                        <res_img_dmt :img-obj="item.image" class=" w-[64px] rounded-sm"  />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<style scoped>
.cart {
    width: min(100%, 377px);
}
</style>