<template>
    <li class="product__list-item flex">
        <img :src="product.img" alt="">
        <div class="product__list-item-descr flex">
            <p>{{ product.name }}</p>
            <span>{{ product.title }}</span>
            <span>{{ product.descr }}</span>
        </div>
        <div class="product__counter-block flex">
            <div class="product__counter form__counter">
                <button @click="decrement(product.id)" type="button">-</button>
                <input type="number" :value=getCount(product.id)>
                <button @click="increment(product.id)" type="button">+</button>
            </div>
            <div class="product__counter-price" v-if="getCount(product.id) > 1">{{ product.price }} ₽/шт.</div>
        </div>
        <span class="product__list-item-price flex">{{ getSum(product.id) }} ₽</span>
        <button class="products__delete-button" @click="deleteProduct(product.id)"></button>
    </li>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: ['product'],
    methods: {
        ...mapGetters(['getBasketCountbyId', 'getSumById']),
        ...mapMutations(['incrementCount', 'decrementCount', 'removeProduct']),
        getCount(id) {
            return this.$store.getters.getBasketCountbyId(id)
        },
        increment(id) {
            this.incrementCount(id);
        },
        decrement(id) {
            this.decrementCount(id);
        },
        getSum(id) {
            return this.$store.getters.getSumById(id)
        },
        deleteProduct(id) {
            this.removeProduct(id)
        }
    },
}
</script>

<style scoped>
.product__list-item {
    position: relative;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
}

.product__list-item:not(:last-child) {
    border-bottom: 1px solid #c4c4c4;
}

.product__list-item-descr {
    flex-direction: column;
}

.product__list-item-price {
    width: 70px;
    align-items: center;
}

.product__counter-block {
    flex-direction: column;
    align-items: center;
}

span {
    max-width: 260px;
}

.product__counter {
    margin-bottom: 2px;
    width: 120px;
    height: 50px;
}

.form__counter {
    display: flex;
    background-color: #fff;
}

.product__counter button {
    height: 30px;
    width: 30px;
    background-color: #F6F8FA;
    border: none;
    cursor: pointer;
}

.product__counter input {
    height: 28px;
    width: 20px;
    padding-left: 15px;
    background-color: #F6F8FA;
    border: none;
}

.products__delete-button {
    position: absolute;
    top: 35px;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.products__delete-button::before {
    position: absolute;
    content: '';
    width: 15px;
    height: 1px;
    background-color: black;
    transform: rotate(45deg);
}

.products__delete-button::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 1px;
    background-color: black;
    transform: rotate(-45deg);
}

.product__counter-price {
    position: absolute;
    top: 90px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}
</style>