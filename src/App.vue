<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import nav_bar from './components/nav_bar/nav_bar.vue';
import cart_icon from './components/icons/cart_icon.vue';
import audiop_svg from './components/nav_bar/audiop_svg.vue';
import Footer from './components/footer_elments/footer.vue';
import { ref, onMounted } from 'vue';
import cart from './components/cart.vue';
import { useCartStore } from '@/stores/cart';
import checkout_pay from '@/components/checkout_pay.vue'

const checkoutPay = ref(false)
const cartS = useCartStore();
const route = useRoute();
const navIsOpen = ref(false);

// onBeforeRouteUpdate


onMounted(() => {
  cartS.initCart()
})

</script>

<template>
  <div id="top" class="dd w-full   bg-black py-[1rem] mb-[-0.1rem] topnav"></div>
  <header class="header topnav w-full flex flex-row   bg-black items-center justify-center text-xs z-1000 sticky top-0">
    <div class=" flex justify-between items-center   sm:justify-start  flex-row max1200 px-7">

      <div @click="navIsOpen = !navIsOpen, cartS.cartIsOpen = false" :class="[navIsOpen ? 'x' : '']"
        class="bars relative md:hidden sm:mr-7 h-full flex flex-col items-center justify-center">
      </div>
      <span class=" text-white">
        <!-- {{navIsOpen}} -->
      </span>
      <router-link :to="{ name: 'home' }" class=" md:mr-[10vw]">
        <audiop_svg />
      </router-link>

      <nav_bar :class="[navIsOpen ? 'flex' : 'hidden']" :key="navIsOpen ? '1' : '2'" :isopen="navIsOpen"
        @close="navIsOpen = false"
        class="md:left-[unset] md:bg-[unset] md:h-[unset] h-[var(--max05)]  md:flex md:relative  md:p-0 p-4 gap-5 md:flex-row md:justify-start md:gap-10  flex-col fixed top-24 md:top-[unset] bg-black left-7" />

      <div class=" sm:ml-auto relative" @click="cartS.cartIsOpen = !cartS.cartIsOpen">
        <span v-if="cartS.itemsCount > 0"
          class="absolute bg-orange text-gray-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">{{ cartS.itemsCount }}</span>
        <cart_icon class=" cursor-pointer" />
      </div>
    </div>
  </header>
  <div class="dd w-full py-[1rem] bg-black mt-[-0.1rem] topnav"></div>

  <div id="modaloutlet" class=" w-full fixed z-10"></div>
  <cart @close="cartS.cartIsOpen = false" v-if="cartS.cartIsOpen" id="cart" class=" fixed z-10 overflow-scroll" />
  <checkout_pay @close="checkoutPay = false" v-if="checkoutPay" id="checkoutpay" class=" fixed z-10 overflow-scroll"/>
  <main class="w-full font-manrope relative">

    <RouterView @checkoutPay="checkoutPay = true" :key="route.fullPath" />
  </main>
  <Footer />

</template>

<style scoped>
header,
main {
  --nav-height: 96px;
  --max05: min(50vw, 500px);
}

#modaloutlet,
#cart,
#checkoutpay
{
  top: calc(96px - 2rem);
  /* height: calc(99vh - 96px); */
}

header {
  height: calc(var(--nav-height) - 2rem);
}

.topnavh {
  top: var(--nav-height)
}

.top0 {}

.bars {
  width: 1.4rem;
  position: relative;
  --size: 4px;
  --gap: 0.5rem;
  border-bottom: var(--size) solid #fff
}

.bars::before,
.bars::after {
  transition: all 0.2s;
  content: '';
  border-bottom: var(--size) solid #fff;
  position: absolute;
  width: 100%;
  transform-origin: left;
}

.bars.x {
  border: none;
  /* width: 1.7rem; */
}

.bars::before {
  top: calc(-1 * var(--gap));
}

.bars::after {
  top: calc(var(--gap));
}

.bars.x::before {
  rotate: 45deg;

}

.bars.x::after {
  rotate: -45deg;

}
</style>
