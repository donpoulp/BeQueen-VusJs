import { ref, computed} from 'vue'
import { defineStore} from 'pinia'

export const useCartStore = defineStore("cart", () => {
    const cartItems = ref([]);
  
    //getter
     const sortItems = computed(() =>
       [...cartItems.value].sort((a, b) => b.id - a.id)
     );
  
    //actions
    const addItems = (item) => {
      //Find the object whose id is similar to the item
      // const checkItems = cartItems.value.find((x) => x.id === item.id);
      // if (!checkItems) {
        cartItems.value.push(item);
         //localStorage.setItem(CartView, JSON.stringify(item))
      // }
    };
    const removeItems = (id) => {
      cartItems.value = cartItems.value.filter((x) => x.id !== id);
    };
    return { cartItems, sortItems, addItems, removeItems };
  });