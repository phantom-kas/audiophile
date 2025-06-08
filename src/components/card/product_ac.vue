<script lang="ts" setup>
import vbutton from '../buttons/vbutton.vue';
import res_img_dmt from '../res_img_dmt.vue';
import adder from '../adder.vue';
import { formateNumber } from '@/composabels/functions';
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';

const cart = useCartStore();
let quantiy = ref(1)
defineProps({
    product: {
        type: Object,
        default: {}
    }
})
</script>
<template>
    <div
        class=" max1200 flex flex-col-reverse sm:flex-row-reverse  items-center justify-center sm:justify-between px-7  relative sm:gap-y-4 gap-y-2">
        <div
            class="sm:w-[46%] w-full flex flex-col sm:justify-center sm:items-start  h-full sm:gap-y-10 gap-y-5 sm:text-start">
            <h2 v-if="product.new"
                class=" text-[14px]  w-full leading-none mb-5 sm:w-[max(379px)] text-orange font-stretch-100%">
                NEW PRODUCT
            </h2>
            <h3 class=" text-[40px] uppercase sm:w-[70%] leading-none w-full">
                {{ product.name }}
            </h3>
            <span class=" opacity-[50%] w-full sm:w-[70%]">
                {{ product.description }}
            </span>
            <span class=" text-[18px] font-[600]" v-html="'$ '+formateNumber(product.price)"></span>
            <div class=" flex flex-row gap-4 px ">
                <adder :value="1"  @change="e=>quantiy = e" />
                    <!-- {{ cart.itemsCount }} -->
                <vbutton @click="cart.increment(product,quantiy),console.log(cart.cartItems)" >
                    ADD TO CART
                </vbutton >
            </div>
        </div>
        <!-- <res_img file-name="image-best-gear.jpg" path="/assets/shared" /> -->

        <res_img_dmt class=" w-full sm:w-[50%] rounded-[8px]" :img-obj="product.image" />
    </div>
</template>