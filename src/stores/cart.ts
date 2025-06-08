import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core";
export const useCartStore = defineStore('cart', () => {
  const total = ref(0)
  const cartIsOpen = ref(false)
  const itemsCount = ref(0)
  const initCart = () => {
    calculateCount()
    calcCartTotal()
  }
  interface cartItemsType {
    id: string | number,
    unitPrice: number,
    price: number,
    quantity: number,
    image: any,
    name: string
  }
  const removeAllItems = () => {
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

  const calculateCount = ()=>{
    itemsCount.value =cartItems.value.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }
  const increment = (product: any, quantity: number = 1) => {
    const existingItemIndex = cartItems.value.findIndex(item => item.id === product.id)
    console.log(product.price)
    if (product.unitPrice != undefined) {
      product.price = parseFloat(product.unitPrice + '')
    }
    else {
      product.price = parseFloat(product.price + '')
    }
    // console.log('--------------------------------------')
    // console.log(product.price)

    quantity = parseFloat(quantity + '')
    if (existingItemIndex != -1) {

      cartItems.value[existingItemIndex].unitPrice = parseFloat(cartItems.value[existingItemIndex].unitPrice + '')
      cartItems.value[existingItemIndex].quantity = parseFloat(cartItems.value[existingItemIndex].quantity + '')

      cartItems.value[existingItemIndex].quantity =cartItems.value[existingItemIndex].quantity + quantity
      cartItems.value[existingItemIndex].price = cartItems.value[existingItemIndex].unitPrice * cartItems.value[existingItemIndex].quantity


      console.log(cartItems.value[existingItemIndex].unitPrice * cartItems.value[existingItemIndex].quantity)
      // console.log('--------------------------------------')
      // console.log(newProduct)
    }
    else {
      const newProduct: cartItemsType = {
        id: product.id,
        name: product.name,
        unitPrice: product.price,
        price: product.price * quantity,
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
    cartItems.value[index].price = parseFloat(cartItems.value[index].price + '')
    cartItems.value[index].unitPrice = parseFloat(cartItems.value[index].unitPrice + '')
    cartItems.value[index].quantity = parseFloat(cartItems.value[index].quantity + '')

    if (cartItems.value[index].quantity > 1) {
      cartItems.value[index].quantity -= 1
      cartItems.value[index].price = cartItems.value[index].unitPrice * cartItems.value[index].quantity
    }
    else {
      cartItems.value.splice(index, 1)
    }
    itemsCount.value -= 1
    calcCartTotal()
  }

  const calculateGTotalAndVat = ()=>{
    let vat = 0.2 * total.value

    let grantotal = vat + total.value + 50
    return [grantotal,vat]
  }

  return {calculateGTotalAndVat, increment, removeItem, cartIsOpen, cartItems, itemsCount, removeAllItems,total ,initCart}
})
