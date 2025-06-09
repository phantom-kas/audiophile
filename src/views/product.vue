<script setup lang="ts">
import { onMounted, ref } from 'vue';
import data from '../data.json'
import product_ac from '@/components/card/product_ac.vue';
import { useRouter } from 'vue-router';
import res_img_dmt from '@/components/res_img_dmt.vue';
import suguestion from '@/components/card/suguestion.vue';
import man_lm from '@/components/man_lm.vue';
import cards_3 from '@/components/card/cards_3.vue';



const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: 'none'
    }
});

const router = useRouter()

const hasLoaded = ref(false);
const notFound = ref(false);
const product = ref(null as any);
onMounted(() => {

    product.value = data.find(item => item.slug === props.name);
    if (!product.value) {
        console.error('Product not found');
        return;
    }
    hasLoaded.value = true;
    // document.title = `${product.name} | Audiophile`;
});

</script>
<template>
    <div class="flex flex-col items-center w-full mb-20">
        <div class="max1200 px-7 flex flex-col items-start justify-center py-7 my-5">
            <span @click="router.go(-1)" class=" cursor-pointer hover:text-orange">Go Back</span>
            <!-- {{ route.fullPath }} -->
        </div>




        <template v-if="hasLoaded">
            <product_ac :product="product" />


            <div class="flex md:flex-row flex-col justify-between gap-x-5 items-start max1200 px-7 gap-y-20 mt-15 md:mt-30">

                <div class="flex flex-col items-start md:w-[48%] gap-y-5">
                    <h1 class=" text-[32px] font-[600]">FEATURES</h1>
                    <div class=" opacity-[50%]" v-html="product.features"></div>
                </div>

                <div
                    class="flex gap-y-15 sm:flex-row md:flex-col flex-col md:w-[48%] md:items-start sm:justify-between w-[80%] ">
                    <h2 class=" text-[32px] font-[600]">IN THE BOX</h2>
                    <div class="flex flex-col gap-y-3">
                        <div class="flex flex-row justify-start items-center gap-4" v-for="v, i in product.includes"
                            :key="i">
                            <span class=" text-orange font-[600]" v-html="v.quantity + 'x'"></span>
                            <span class="opacity-[50%]" v-html="v.item"></span>
                        </div>
                    </div>
                </div>
            </div>


            <!-- galary -->
            <div class="flex sm:flex-row flex-col justify-between  items-start max1200 px-7 gap-y-4 gap-x-4 my-30 md:mt-40">
                <div class="  flex flex-col grow gap-y-4 justify-between  self-stretch">
                    <res_img_dmt class="grow  rounded-[8px]" :img-obj="product.gallery.first" />
                    <res_img_dmt class="grow  rounded-[8px]" :img-obj="product.gallery.second" />
                </div>
                <div class="flex flex-row grow self-stretch justify-start-stretch">
                    <res_img_dmt class=" w-full sm:w-[50%] rounded-[8px] grow " :img-obj="product.gallery.third" />
                </div>
            </div>
            <!-- galary -->

            <!-- suggestion -->
            <div class="flex flex-col items-center justify-center max1200 px-7 gap-y-6 my-10 md:mt-40">
                <h1 class=" uppercase font-[600] text-[24px]"> you may also like</h1>
                <div class=" flex sm:flex-row flex-col justify-between items-start  gap-y-4 gap-x-4 w-full">
                    <suguestion class=" sm:w-[37%] w-full" v-for="p, i in product.others" :product="p" />
                </div>
            </div>
            <!-- <div class=""> -->


            <cards_3 class="max1200 px-7 my-30" />
            <!-- suggestion -->
            <man_lm  />
        </template>
    </div>

    <div v-if="notFound">
        <h1 class=" text-red-500 font-bold ">Item Not Found</h1>
    </div>
</template>



<style scoped></style>