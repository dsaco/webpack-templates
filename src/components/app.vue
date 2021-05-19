<template>
    <div>
        <h1 class="red">{{ message }}</h1>
        <img :src="imgSrc" alt="" />
    </div>
</template>

<script>
import dva from '@/assets/dva.jpg';
export default {
    data() {
        return {
            message: 'hello, world',
            imgSrc: dva,
        };
    },
};
</script>
<style lang="less" scoped>
.red {
    color: red;
    transform: scale(0.8);
    &::before {
        content: '';
        margin-left: 5px;
    }
}
</style>