<template>
  <div>
    <div class="container" id="app">
      <InfoBasket />
      <HeaderBasket />
      <div class="content flex">
        <ProductsList />
        <ProductsBasket />
      </div>
      <InstallationOptions />
    </div>
    <SwiperProducts />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import ProductsBasket from '@/components/ProductsBasket.vue';
import HeaderBasket from '@/components/HeaderBasket.vue';
import InstallationOptions from '@/components/InstallationOptions.vue';
import InfoBasket from '@/components/InfoBasket.vue';
import SwiperProducts from '@/components/SwiperProducts.vue';

export default {
  name: 'App',
  components: {
    ProductsList, ProductsBasket, HeaderBasket, InstallationOptions, InfoBasket, SwiperProducts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  justify-content: space-between;
}
</style>
