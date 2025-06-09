<script setup lang="ts">
import { useRouter } from 'vue-router';
import vinput from '../components/forms_components/input.vue';
import radio from '@/components/forms_components/radio.vue';
import cart_sum from '@/components/cart_sum.vue';
import strange_icon from '@/components/icons/strange_icon.vue';
const emits = defineEmits(['checkoutPay'])

const router = useRouter()

const handelSubmit = () => {
    emits('checkoutPay')
}
</script>
<template>
    <div class="w-full flex flex-col justify-center items-center  bg-[#F1F1F1] py-20 px-7 md:px-0">

        <div class="max1200 px-7 flex flex-col items-start justify-center mb-10 ">
            <span @click="router.go(-1)" class=" cursor-pointer hover:text-orange">Go Back</span>
            <!-- {{ route.fullPath }} -->
        </div>

        <form @submit.prevent="handelSubmit()"
            class="max1200 md:px-7  flex flex-col md:flex-row items-start md:justify-between gap-x-7 bg-white md:bg-[unset]">
            <div class="w-full md:w-[70%] flex flex-col gap-3.5 py-10 px-7 md:p-10 md:bg-white rounded-xl">
                <h1 class=" text-[32px] font-[600] mb-2">
                    CHECKOUT
                </h1>

                <h2 class=" text-orange font-[600] text-[13px] uppercase mb-2 mt-3">
                    Billing Details
                </h2>


                <div class="flex flex-col sm:flex-row justify-between gap-3.5">
                    <vinput label="Name" placeholder="Alexei Ward" class=" grow" />
                    <vinput required label="Email Address" placeholder="alexei@mail.com" type="Email" class=" grow" />
                </div>

                <vinput label="Phone Number" placeholder="+1 202-555-0136" class="sm:w-[50%]" />

                <h2 class=" text-orange font-[600] text-[13px] uppercase mb-2 mt-3">
                    shipping info
                </h2>
                <vinput label="Address" placeholder="1137 Williams Avenue" class=" grow" />
                <div class="flex flex-col sm:flex-row justify-between gap-3.5">
                    <vinput label="Zip Code" placeholder="10001" class=" grow" />
                    <vinput label="City" placeholder="New York" type="Email" class=" grow" />
                </div>
                <vinput label="Country" placeholder="United States" class="sm:w-[50%]" />

                <h2 class=" text-orange font-[600] text-[13px] uppercase mb-2 mt-3">
                    shipping info
                </h2>
                <div class="flex flex-col sm:flex-row justify-between gap-3.5">
                    <span class="grow">Payment Method</span>

                    <div class=" flex flex-col gap-3.5 grow">
                        <radio id='radio1' value="e-Money" class="w-full" >e-Money</radio>
                        <radio id='radio2' value="Cash on Delivery" class="w-full" >Cash on Delivery</radio>
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row justify-between gap-3.5">
                    <vinput label="e-Money Number" placeholder="238521993" class=" grow" />
                    <vinput label="e-Money Pin" placeholder="6891" type="Email" class=" grow" />
                </div>
                <div class=" md:flex flex-row justify-between gap-7 hidden md:block">
                    <strange_icon />
                    <div class=" opacity-[50%] ">
                        The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at
                        your residence. Just make sure your address is correct so that your order will not be cancelled.
                    </div>
                </div>
            </div>

            <cart_sum class="w-full md:w-[27%]" />

        </form>
    </div>
</template>