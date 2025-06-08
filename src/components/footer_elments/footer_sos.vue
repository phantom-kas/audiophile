<script setup lang="ts">
import fb from '../icons/fb.vue';
import twt from '../icons/tt.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ig from '../icons/ig.vue';
</script>
<template>
    <div class="flex flex-row gap-7 justify-between">
        <a class=" text-[13px] font-[600] text-white hover:text-orange  cursor-pointer" to="/">
           <font-awesome-icon  size="2x" :icon="['fab', 'square-facebook']" />
        </a>
        <a class=" text-[13px] font-[600] text-white hover:text-orange  cursor-pointer" to="/">
            <font-awesome-icon size="2x" :icon="['fab', 'twitter']" />

        </a>
        <a class=" text-[13px] font-[600] text-white  cursor-pointer hover:text-orange" to="/">
            <font-awesome-icon size="2x" :icon="['fab', 'instagram']" />
        </a>

    </div>

</template>