<script setup lang="ts">
import orange_check from './icons/orange_check.vue';
import vbutton from './buttons/vbutton.vue';
import { useCartStore } from '@/stores/cart';
import { formateNumber } from '@/composabels/functions';
import res_img_dmt from './res_img_dmt.vue';
import { ref } from 'vue';
const cartData = useCartStore()

const emit = defineEmits(['close'])

const showMore = ref(false)
</script>
<template>
    <div @click="emit('close')" class="w-full  flex flex-col items-center justify-start bg-black/50 h-[90vh] z-1000 ">
        <div class=" maxset flex flex-row justify-end px-7">
            <div @click.stop
                class="cart w-full bg-white rounded-sm px-10 py-13 flex flex-col items-start justify-start gap-y-7  mt-6">

                <div class=" bg-orange size-[64px] flex justify-center items-center rounded-[50%]">
                    <orange_check />
                </div>

                <h1 class=" text-[32px] font-[600] leading-9">
                    THANK YOU <br />
                    FOR YOUR ORDER
                </h1>

                <div class=" w-full flex sm:flex-row flex-col overflow-hidden rounded-xl">

                    <div class="w-full sm:w-[55%] p-10 flex flex-col items-center justify-center bg-[#F1F1F1] gap-y-3">
                        <template v-for="item, i in cartData.cartItems" :key="item.id">

                            <div v-if="showMore || i == 0" class=" max-w-[200px] flex flex-row justify-between items-center">
                                <div class="flex flex-row gap-3 justify-start items-center">
                                    <res_img_dmt :img-obj="item.image" class=" w-[64px] rounded-sm" />
                                    <div class="flex flex-col justify-center">
                                        <span class=" text-[14px] font-[600]">{{ item.name }}</span>
                                        <span class=" text-[14px] opacity-[50%] font-[600]">{{ '$ ' +
                                            formateNumber(item.price) }}</span>
                                    </div>
                                </div>

                                <span class=" opacity-[50%]">x{{ item.quantity }}</span>
                            </div>
                        </template>
                        <div class=" py-[2px] bg-[#979797] opacity-[8%] w-full mt-5"></div>

                        <button class=" bg-[unset] opacity-[50%] text-[12px] mt-3" @click="showMore = !showMore">{{ !showMore? 'and '+(parseInt(cartData.itemsCount+'') - parseInt(cartData.cartItems[0].quantity+''))+' other item(s)':'Show Less' }}</button>
                    </div>

                    <div class="h-[92px] sm:h-[unset] grow flex flex-col items-center justify-center bg-black text-white">
                        <span class=" font-[600] opacity-[50%] text-[15px]">GRAND TOTAL</span>
                        <span class=" text-white font-[600] text-[16px]">$ 5,446</span>
                    </div>
                </div>

                <span class=" opacity-[50%] text-[15px]">You will receive an email confirmation shortly.</span>

                <vbutton class=" w-full" @click="emit('close')">
                    BACK TO HOME
                </vbutton>
            </div>
        </div>
    </div>

</template>

<style scoped>
.maxset {
    width: min(700px, 100%);
}
</style>