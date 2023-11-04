<template>
    <div class="bottom">
        <p>云想衣裳花想容， 春风拂槛露华浓。</p>
    </div>
</template>
<script>
export default {
    name: "Bottom"
}
</script>
<style>
@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.bottom {
    width: 100% px;
    height: 50px;

    color: white;
    /* 背景渐变色 - 原理2 */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    /* 背景尺寸 - 原理3 */
    background-size: 600% 600%;
    animation: gradientBG 5s ease infinite;
    text-align: center;
    line-height: 50px;

    border-radius: 1.5rem 1.5rem 0 0;
}
</style>
