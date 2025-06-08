<script setup>
import { useCartStore } from '@/stores/cart';
import res_img_dmt from './res_img_dmt.vue';
import vbutton from './buttons/vbutton.vue';
import { formateNumber } from '@/composabels/functions';
import adder from './adder.vue';
import Product from '@/views/product.vue';
import router from '@/router';
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

                    <button @click="cartData.removeAllItems"
                        class=" underline opacity-[50%] hover:text-orange hover:opacity-100 text-[15px]">Remove
                        All</button>
                </div>


                <div v-for="item, i in cartData.cartItems" :key="item.id"
                    class=" w-full flex flex-row justify-between items-center">
                    <div class="flex flex-row gap-3 justify-start items-center">
                        <res_img_dmt :img-obj="item.image" class=" w-[64px] rounded-sm" />
                        <div class="flex flex-col justify-center">
                            <span class=" text-[14px] font-[600]">{{ item.name }}</span>
                            <span class=" text-[14px] opacity-[50%] font-[600]">{{ '$ ' + formateNumber(item.price) }}</span>
                        </div>
                    </div>
                    <adder :value="item.quantity" @increase="cartData.increment(item, 1)"
                        @reduce="cartData.removeItem(item)" w=" w-[98px]" h="h-[32px]" />
                </div>
                <div class=" w-full flex flex-row justify-between items-center ">
                    <span class=" opacity-[50%] text-[15px]">Total</span>
                    <span class=" font-[600] text-[18px]">{{ '$ ' + formateNumber(cartData.total) }}</span>
                </div>
                <vbutton @click="router.push({name:'checkout'}),cartData.cartIsOpen = false" class=" w-full mt-1 rounded-sm">
                    CHECKOUT
                </vbutton>
            </div>
        </div>

    </div>
</template>



<style scoped>
.cart {
    width: min(100%, 377px);
}
</style>