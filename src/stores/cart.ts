import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core";
export const useCartStore = defineStore('cart', () => {
  const total = ref(0)
  const cartIsOpen = ref(false)
  const itemsCount = ref(0)
  const initCart = ()=>{

  }
  interface cartItemsType {
    id: string | number,
    unitPrice: number,
    price: number,
    quantity: number,
    image: any
  }
  const removeAllItems = ()=>{
    itemsCount.value = 0
    cartItems.value = []
    total.value = 0
  }
  const cartItems = useLocalStorage("cartItems", ref([] as cartItemsType[]))

  const calcCartTotal = () => {
    total.value = 0
    total.value = cartItems.value.reduce((acc, item) => {
      return acc + item.unitPrice * item.quantity
    }, 0)
    return total.value
  }
  const increment = (product: any ,quantity:number = 1) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += quantity
      existingItem.price = existingItem.unitPrice * existingItem.quantity
      
    } else {
      const newProduct: cartItemsType = {
        id: product.id,
        unitPrice: product.unitPrice,
        price: product.prie * product.quantity,
        quantity: quantity,
        image: product.image
      }
      cartItems.value.push(newProduct)
    }
    itemsCount.value += quantity
    
    calcCartTotal()
  }

  const removeItem = (product: any) => {
    const index = cartItems.value.findIndex(item => item.id === product.id)
    if (index == -1) {
      return
    }
    if (cartItems.value[index].quantity > 1) {
      cartItems.value[index].quantity -= 1
      cartItems.value[index].price = cartItems.value[index].unitPrice * cartItems.value[index].quantity
    }
    else{
      cartItems.value.splice(index, 1)
    }
    itemsCount.value -= 1
    calcCartTotal()
  }

  return { increment, removeItem, cartIsOpen,cartItems,itemsCount ,removeAllItems}
})
