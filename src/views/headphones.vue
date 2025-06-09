<script setup lang="ts">
import category_head from '@/components/category_head.vue';
import product_dis from '@/components/card/product_dis.vue';
import data from '../data.json';
import cards_3 from '@/components/card/cards_3.vue';
import man_lm from '@/components/man_lm.vue';
</script>
<template>
  <category_head />
  <div class="w-full flex flex-col items-center justify-center">

    <product_dis />
    <product_dis :product="data[2]" imageOr="r" />
    <product_dis imageOr="l" :product="data[1]" />
    <div class="max1200 px-7 flex flex-col items-center justify-center">
      <cards_3 class="" />

    </div>
    <man_lm/>
  </div>
</template>

<style></style>
