<script setup>
import { onMounted, ref, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()
const route = useRoute()

const productId = ref(-1)
const productData = reactive({})

onMounted(async () => {
  productId.value = parseInt(route.params.id)
  await productStore.loadProduct(productId.value)

  productData.productCode = productStore.selectedProduct.productCode
  productData.productName = productStore.selectedProduct.productName
  productData.price = productStore.selectedProduct.price
  productData.imageUrl = productStore.selectedProduct.imageUrl
})

const editProduct = async (productData, productId) => {
  await productStore.editProduct(productData, productId)
  alert('update completed')
}

</script>

<template>
  <div>
    Product Edit View
    <RouterLink :to="{ name: 'product-list' }">Back</RouterLink>
    <div>
      <h2>Product Header</h2>
      <div>
        Product ID:
        {{ productId }}
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
      <button @click="editProduct(productData, productId)">Update</button>
    </div>
  </div>
</template>

