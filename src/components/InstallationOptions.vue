<template>
    <div class="checkbox flex">
        <input @change="check($event)" type="checkbox" name="" id="">
        <img src="../../public/img/check.png" alt="">
        <div>
            <h3>Установка</h3>
            <span>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</span>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations(['changeInst']),
        check(e) {
            this.changeInst(e.target.checked)
        }
    }
}
</script>

<style>
.checkbox {
    justify-content: flex-start;
    align-items: center;
    width: 55vw;
    height: 100px;
    background-color: #F6F8FA;
}

.checkbox input,
.checkbox img {
    margin-right: 20px;
}
</style>