<template>
    <div class="product flex">
        <ul class="product__list flex list-reset">
            <ProductItem v-for="(product, i) in products" :key="product.id" :index="i" :product=product />
        </ul>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        ProductItem,
    },
    computed: {
        ...mapGetters(['getProducts']),
        products() {
            return this.getProducts;
        },
    },
}
</script>

<style scoped>
.product {
    width: 55vw;
}

.product__list {
    flex-direction: column;
    width: 100%;
}
</style>
