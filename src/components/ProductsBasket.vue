<template>
    <div class="backet">
        <h3 class="backet__head">Итого</h3>
        <div class="backet__descr flex"><span>Сумма заказа</span><span>{{ totalSum }} ₽</span></div>
        <div class="backet__descr flex"><span>Количество</span><span>{{ totalCount }} шт</span></div>
        <div class="backet__descr flex"><span>Установка</span><span>{{ checkInst }}</span></div>
        <div class="backet__descr backet__overall flex"><span>Стоимость товаров</span><span>{{ totalSum }} ₽</span></div>
        <div class="backet__buttons flex">
            <button class="btn-reset backet__buttons-first">Оформить заказ</button>
            <button class="btn-reset backet__buttons-second">Купить в 1 клик</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
    export default {
        computed: {
            ...mapGetters(['getSum', 'getTotalCount']),
            ...mapState(['installation']),
            totalSum() {
                return this.getSum;
            },
            totalCount() {
                return this.getTotalCount;
            },
            checkInst() {
                return this.installation ? 'Да' : 'Нет'
            }
        }
    }
</script>

<style scoped>
    .backet {
        padding: 20px;
        background-color: #eef1f4;
        min-width: 425px;
    }

    .backet__descr {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .backet__descr:nth-child(4) {
        padding-bottom: 35px;
        border-bottom: 1px solid #AEB0B6;
    }

    .backet__buttons {
        flex-direction: column;
    }

    .backet__buttons-first {
        min-height: 40px;
        padding: 5px;
        margin-bottom: 5px;
        background-color: #0069B4;
        border-radius: 5px;
        color: white;
    }

    .backet__buttons-second {
        min-height: 40px;
        padding: 5px;
        background-color: white;
        border: 1px solid #0069B4;
        border-radius: 5px;
        color: #0069B4
    }

</style>