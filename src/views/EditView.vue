<script setup>
import { onMounted, ref, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()
const route = useRoute()

const productId = ref(-1)
const productData = reactive({})
const isLoading = ref(false)

const formData = [
  {
    name: 'Product Code',
    field: 'productCode'
  },
  {
    name: 'Product Name',
    field: 'productName'
  },
  {
    name: 'Price',
    field: 'price'
  },
  {
    name: 'Image URL',
    field: 'imageUrl'
  }
]

onMounted(async () => {
  productId.value = parseInt(route.params.id)
  isLoading.value = true
  await productStore.loadProduct(productId.value)

  productData.id = productStore.selectedProduct.id
  productData.productCode = productStore.selectedProduct.productCode
  productData.productName = productStore.selectedProduct.productName
  productData.price = productStore.selectedProduct.price
  productData.imageUrl = productStore.selectedProduct.imageUrl
  isLoading.value = false
})

const editProduct = async (productData, productId) => {
  isLoading.value = true
  await productStore.editProduct(productData, productId)
  isLoading.value = false
  alert('update completed')
}

</script>

<template>
  <div>
    Product Edit View
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
      <div v-for="form in formData">
        <label>
          <span>{{ form.name }}</span>
        </label>
        <input type="text" v-model="productData[form.field]">
      </div>
      <button @click="editProduct(productData, productId)">Update</button>
    </div>
  </div>
</template>

