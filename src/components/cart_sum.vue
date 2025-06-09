<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import res_img_dmt from './res_img_dmt.vue';
import vbutton from './buttons/vbutton.vue';
import { formateNumber } from '@/composabels/functions';
import { onMounted, ref } from 'vue';
const cartData = useCartStore();
// const emit = defineEmits(['checkout']);


const vat =ref(0)
const gTotal = ref(0)

onMounted(()=>{
    [gTotal.value,vat.value] = cartData.calculateGTotalAndVat()
})
</script>
<template>
    
            <div 
                class="cart bg-white rounded-sm p-4 flex flex-col items-center justify-start gap-y-4">
                <div class=" w-full flex flex-row justify-between">
                    <h1 class=" text-[15px] font-[600]">SUMMARY</h1>

                    
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
                    <span>x{{item.quantity}}</span>
                </div>
                <div class=" w-full flex flex-row justify-between items-center ">
                    <span class=" opacity-[50%] text-[15px]">Total</span>
                    <span class=" font-[600] text-[18px]">{{ '$ ' + formateNumber(cartData.total) }}</span>
                </div>
                <div class=" w-full flex flex-row justify-between items-center ">
                    <span class=" opacity-[50%] text-[15px]">SHIPPING</span>
                    <span class=" font-[600] text-[18px]">{{ '$ ' + formateNumber(50) }}</span>
                </div>
                <div class=" w-full flex flex-row justify-between items-center ">
                    <span class=" opacity-[50%] text-[15px]">VAT (INCLUDED)</span>
                    <span class=" font-[600] text-[18px]">{{ '$ ' + formateNumber(vat) }}</span>
                </div>
                <div class=" w-full flex flex-row justify-between items-center ">
                    <span class=" opacity-[50%] text-[15px]">GRAND TOTAL</span>
                    <span class=" font-[600] text-[18px] text-orange">{{ '$ ' + formateNumber(gTotal) }}</span>
                </div>
                <vbutton  class=" w-full mt-1 rounded-sm">
                    CONTINUE & PAY
                </vbutton>
            </div>
      
</template>



<style scoped>

</style>