<template>
    <div class="info__basket flex">
        <img src="../../public/img/basket.png" alt="">
        <div class="info__basket-descr flex">
            <h4 class="info__basket-descr-header">Ваша корзина</h4>
            <span class="info__basket-descr-count">{{ totalCount }} товаров</span>
            <span class="info__basket-descr-sum">{{ totalSum }} ₽</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getTotalCount', 'getSum']),
        totalCount() {
            return this.getTotalCount;
        },
        totalSum() {
            return this.getSum;
        },
    }
}
</script>

<style>
img {
    margin-right: 5px;
}

h4 {
    margin: 0;
    padding: 0;
}

.info__basket {
    align-items: center;
    position: absolute;
    top: 20px;
    right: 160px;
}

.info__basket-descr {
    flex-direction: column;
}
</style>