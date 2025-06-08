<script setup lang="ts">
import vbutton3 from '../buttons/vbutton3.vue';
defineProps({
    product: {
        type: Object,
        default: {
            id: 4,
            category: "headphones",
            image: {
                "mobile": "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
                "tablet": "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
                "desktop": "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
            },
            "categoryImage": {
                "mobile": "./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
                "tablet": "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
                "desktop": "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
            },
        }
    }
})
</script>
<template>
    <div class="   w-full flex flex-col items-center justify-end ">

        <div class="card1img md:w-[122.95px] w-[104px]  sm:w-[79.92px] z-auto relative ">
            <img :src="product.categoryImage.desktop" class=" w-full" alt="">
        </div>
        <div
            class=" w-full sm:h-[200px] h-[165px] flex items-center  flex-col justify-end bg-[#F1F1F1] rounded-xl pb-5">
            <span class=" uppercase text-xl font-[600]">{{ product.category }}</span>
            <!--  -->
            <router-link :to="{ name: 'product', params: { name: product['slug'] } }"
                class="flex justify-center items-center mt-2">
                <vbutton3 class="  " />
            </router-link>
        </div>
    </div>
</template>



<style scoped>
.card1img {
    --w: 120.95px;
}

.card1img {
    margin-bottom: calc(var(--w) * -0.5);
    /*  */
}

.card1img::after {
    content: '';
    position: absolute;
    width: 100%;
    display: block;
    bottom: 0;
    height: 0rem;
    left: 0;
    z-index: 100;
    box-shadow: -4px 19px 40px 5px rgba(0, 0, 0, 1)
}
</style>