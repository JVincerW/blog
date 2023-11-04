<template>
    <div style="  font-family:fontregular;">
        <div class="heade">
            <div class="left">
                <h2>
                    POETIZE
                </h2>
            </div>
            <div v-show="stare" class="right" style="  font-family:fontregular;">
                <ul>
                    <li @click="$router.push('/home')">
                        <span> 🏡 </span>
                        <span>首页</span>
                    </li>
                    <li>
                        <span> 📒 </span>
                        <span>记录</span>
                    </li>
                    <li>
                        <span> 💋 </span>
                        <span>爱情买卖</span>
                    </li>
                    <li>
                        <span> 🌏 </span>
                        <span>旅拍</span>
                    </li>
                    <li>
                        <span> 🧰 </span>
                        <span>百宝箱</span>
                    </li>
                    <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                        <span> 💬 </span>
                        <span>非礼勿言
                    <div v-show="stare2" @click="$router.push('/addarticle')">发布文章</div>
                  </span>

                    </li>
                    <li>
                        <span> 📪 </span>
                        <span>留言</span>
                    </li>
                    <li>
                        <span> 💃 </span>
                        <span>友人帐</span>
                    </li>
                    <li>
                        <span> 🐟 </span>
                        <span>关于</span>
                    </li>
                    <li>
                        <div><img src="./assets/imges/tx.jpg" style="width:30px; height:30px; margin-top: 13px; border-radius: 50%; "/>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-show="!stare" style="margin-right: 20px ; " @click="eject">
                <i class="iconfont" style="font-size:20px;cursor: pointer;">&#xe60a;</i>
            </div>
            <div :class="ejects ? 'active2' : ''" class="eject">弹出窗口</div>
        </div>
        <!-- 一级路由出口 -->
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>

<script setup>
import Bottom from '@/components/Bottom.vue'
import {L2Dwidget} from 'live2d-widget'
import {ref} from 'vue'

const stare = ref(true)
const ejects = ref(false)
const stare2 = ref(false);
if (window.innerWidth <= 1000) {
    stare.value = false;
}
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width <= 1000) {
        stare.value = false;
    } else {
        stare.value = true;
        ejects.value = false;
        gd();
    }
})

window.addEventListener('scroll', () => {
    gd();
})
setTimeout(function () {
    L2Dwidget.init({
        model: {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
        },
        display: {
            superSample: 2,
            width: 200, // 模型的宽度
            height: 300, // 模型的高度
            position: "left", // 模型的位置（left/right）
            hOffset: 0, // 模型水平偏移量
            vOffset: -20 // 模型垂直偏移量
        },

    });
}, 1000);

const eject = () => {
    ejects.value = !ejects.value;
    gd();
}
//滚动判断
const gd = () => {
    if (ejects.value) {
        document.body.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        document.body.style.overflow = '';
    }
}
const handleMouseEnter = () => {

    stare2.value = true;
}
const handleMouseLeave = () => {
    stare2.value = false;
}
</script>

<style scoped>
@font-face {
    font-family: 'fontregular';
    src: url('../assets/font/XianYanBaoXiaoGou-2.ttf');
}

.active2 {
    transform: translateX(100%);
}

.eject {
    position: absolute;
    left: -50%;
    width: 50%;
    transition: transform 0.6s ease-in-out;
    height: 100vh;
    background: red;
    z-index: 9999;

}

.heade {
    width: 100%;
    z-index: 100;
    height: 60px;
    position: absolute;;
    transition: all .3s ease-in-out;
    line-height: 60px;
    display: flex;

    justify-content: space-between;
}

.heade:hover {
    transition: all .3s ease-in-out;
    background: rgba(1, 0, 0, 0.4);
    box-shadow: 0 1px 3px 0 rgba(0, 34, 77, .05);
}

.left {
    padding-left: 30px;
}

.left h2 {
    color: white;
}

.right ul {
    display: flex;
    min-width: 1000px;
    font-family: fontregular;
}

.right ul li {
    margin-left: 30px;
    color: white;
    border-bottom: 2px solid transparent; /* 初始状态下边框为透明 */
    cursor: pointer;
}

.right ul li span {
    position: relative;
}

.right ul li span div {
    width: 100px;
    height: 50px;
    background: red;
    z-index: -1;
    top: 40px;
    position: absolute;
}

.right ul li::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    animation-fill-mode: both;
    height: 10px;
    background-color: rgb(243, 187, 98);
    transition: all 0.5s;
}

.right ul li:hover::before {
    width: 5%;
}

.right {
    display: none;

}

@media (min-width: 768px) {
    .right {
        display: block;
    }
}
</style>
