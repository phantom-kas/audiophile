<script setup lang="ts">
import { RouterView } from 'vue-router'
import nav_bar from './components/nav_bar/nav_bar.vue';
import cart_icon from './components/icons/cart_icon.vue';
import audiop_svg from './components/nav_bar/audiop_svg.vue';
import Footer from './components/footer_elments/footer.vue';
</script>

<template>
  <header class="w-full flex flex-row   bg-black items-center justify-center text-xs z-auto">
    <div class=" flex justify-between items-center   sm:justify-start  flex-row max1200 px-7">

      <div class="bars relative md:hidden sm:mr-7 h-full flex flex-col items-center justify-center">
      </div>
      <router-link to="/" class=" md:mr-[10vw]">
        <audiop_svg />
      </router-link>

      <nav_bar
        class="md:left-[unset] md:bg-[unset] md:relative flex md:p-0 p-4 gap-2 md:flex-row md:justify-start md:gap-10  flex-col fixed top-24 md:top-[unset] bg-black left-7" />

      <div class=" sm:ml-auto">
        <cart_icon />
      </div>
    </div>

  </header>

  <main class="w-full font-manrope relative">

    <RouterView />
  </main>
  <Footer/>

</template>

<style scoped>
header,
main {
  --nav-height: 96px;
}

header {
  height: var(--nav-height);
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
  width: 1.7rem;
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
