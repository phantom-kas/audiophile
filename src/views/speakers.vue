<script setup>
import category_head from '@/components/category_head.vue';
import product_dis from '@/components/card/product_dis.vue';
import data from '../data.json';
import cards_3 from '@/components/card/cards_3.vue';
import man_lm from '@/components/man_lm.vue';

</script>
<template>
  <category_head />
  <div class="w-full flex flex-col items-center justify-center">

    <product_dis :product="data[5]"  />
    <product_dis :product="data[4]" imageOr="r"/>
    <div class="max1200 px-7 flex flex-col items-center justify-center">
      <cards_3 class="" />

    </div>
    <man_lm/>
  </div>
</template>

<style></style>
