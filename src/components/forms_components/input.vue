<script lang="ts" setup>
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: 'text'
    },
    label:{
        type: String,
        default: 'text'
    },
    required:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
   <div class="mb-6 relative">
  <label  class="block mb-1 font-medium text-[12px] ">{{label}}</label>
  <input :required :type  class=" border  invalid:border-red-900    text-sm rounded-lg  focus:border-orange block w-full p-2.5  " :placeholder>
  <p class=" text-red-600 hidden absolute right-0 top-0 text-[12px]"><span class="font-medium">Wrong format</span></p>
</div>
</template>
<style scoped>
input:invalid+p{
    display: block;
}
p{

}
</style>