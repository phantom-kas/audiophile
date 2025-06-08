<template>
    <div class="flex sm:flex-row gap-7 sm:justify-start justify-between flex-col items-center ">
        <RouterLink :to="{name:'home'}" class=" text-[13px] font-[600] text-white hover:text-orange" >
            HOME
        </RouterLink>
        <RouterLink :to="{name:'headphones'}" class=" text-[13px] font-[600] text-white hover:text-orange" >
            HEADPHONES
        </RouterLink>
        <RouterLink :to="{name:'speakers'}"  class=" text-[13px] font-[600] text-white hover:text-orange" >
            SPEAKERS
        </RouterLink>
        <RouterLink :to="{name:'earphones'}" class=" text-[13px] font-[600] text-white hover:text-orange" >
            EARPHONES
        </RouterLink>
    </div>

</template>
<style scoped>
  .router-link-exact-active {
    color: #D87D4A;
}
</style>