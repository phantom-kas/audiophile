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
   <div class="mb-6 relative has-invalid:text-red-600">
  <label  class="block mb-1 font-medium text-[12px] ">{{label}}</label>
  <input :required :type  class=" focus:invalid:border-red-600 border focus:invalid:outline-red-600   invalid:border-[1.5px]    text-sm rounded-lg  focus:border-orange block w-full p-2.5  " :placeholder>
  <p class=" text-red-600 hidden absolute right-0 top-0 text-[12px] "><span class="font-medium">Wrong format</span></p>
</div>
</template>
<style scoped>
input:invalid+p{
    display: block;
    /* color: red; */
}
p{

}
</style>