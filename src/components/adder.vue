<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const slidAdm = ref('slide-up')
const val = ref(0);




const props = defineProps({
    value: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: ''
    },
    w:{
        type: String,
        default: 'w-[120px]'
    },
    h: {
        type: String,
        default: 'h-[48px]'
    }
})

const emit = defineEmits(['change','increase','reduce'])

onMounted(() => {
    if (props.value) {
        val.value = props.value
    }
})

const handelDecreament = () => {
    if (val.value <= 0) {
        return
    }
slidAdm.value ='slide-down'
    val.value -= 1;
     emit('change', val)

     emit('reduce')

}
</script>
<template>
    <div :class="w +' '+ h" class="flex flex-row justify-between items-center   bg-[#F1F1F1]">

        <button type="button" @click="handelDecreament()"
            class="fs10   round1  hov_glow w-[max(50)] grow cursor-pointer hover:text-orange hover:font-[900]">
            -
        </button>

        <transition mode="out-in" :name="slidAdm">
            <span class="w-[max(50)] justify-self-stretch flex flex-col items-center justify-center text-center grow">{{ val
                }}</span>
        </transition>

        <!-- </div> -->
        <button type="button" @click="e => { slidAdm = 'slide-up'; val += 1; emit('change', val),emit('increase') }"
            class=" w-[max(50)]  grow cursor-pointer hover:text-orange hover:font-[900]">
            +
        </button>
    </div>
</template>
<style scoped>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.25s ease-out;
    /* position: absolute; */
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
    /* position: absolute; */
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-30px);
    /* position: absolute; */
}

.slide-up-leave-to {
    /* position: absolute; */
    opacity: 0;
    transform: translateY(-30px);
}

.slide-down-leave-to {
    /* position: absolute; */
    opacity: 0;
    transform: translateY(30px);
}
</style>