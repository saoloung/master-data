<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()
const productData = reactive({
  productCode: '',
  productName: '',
  price: 0,
  imageUrl: 'https://picsum.photos/200'
})
const isLoading = ref(false)

const createProduct = async (productData) => {
  isLoading.value = true
  await productStore.createProduct(productData)
  productData.id = productStore.selectedProduct.id
  isLoading.value = false
  alert('create product complete')
}

</script>

<template>
  <div>
    Create Product View
    <RouterLink :to="{ name: 'product-list' }">Back</RouterLink>
    <div>
      <h2>Product Master</h2>
      <div v-if="isLoading">
        <h2>Loading...</h2>
      </div>
      <div>
        Product ID:
        {{ productData.id }}
      </div>
      <div>
        Product code:
        <input type="text" v-model="productData.productCode">
      </div>
      <div>
        Product name:
        <input type="text" v-model="productData.productName">
      </div>
      <div>
        Price:
        <input type="number" v-model="productData.price">
      </div>
      <div>
        Image URL:
        <input type="text" v-model="productData.imageUrl">
      </div>
      <button @click="createProduct(productData)">Create Product</button>
    </div>
  </div>
</template>
  
  