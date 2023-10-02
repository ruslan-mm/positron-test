<template>
    <div class="header__basket flex">
        <h2 class="header__basket-header">Ваша корзина</h2>
        <span class="header__basket-descr">{{ totalCount }} товаров</span>
        <button class="header__basket-button" @click="deleteAll">Очистить корзину</button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    methods: {
        ...mapMutations(['removeAllProducts']),
        deleteAll() {
            this.removeAllProducts()
        }
    },
    computed: {
        ...mapGetters(['getTotalCount']),
        totalCount() {
            return this.getTotalCount;
        }
    }
}
</script>

<style>
.header__basket {
    width: 62%;
    justify-content: space-between;
    align-items: baseline;
}

.header__basket-header {
    margin-right: 10px;
}

.header__basket-descr {
    margin-right: auto;
    color: #797B86;
}

.header__basket-button {
    padding: 1px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #797B86;
    border-bottom: 1px solid #797B86;
}
</style>