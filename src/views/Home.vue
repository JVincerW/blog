<template>
    <div style="width: 100%;height: 100% ;  font-family:fontregular;">
        <div class="conter">
            <div class="saohua">
                <div style="text-align: center; margin-bottom:50px;font-size:40px; color: white;  position: absolute;left: 45.5%; top:35%">生活倒影</div>
                <nav style="align-items: center;">

                    <div>

                        <div class="text1">
                            <i v-text="char">
                            </i><span></span>
                        </div>

                    </div>
                </nav>
            </div>

            <div class="wave" style="opacity: 0.9;"></div>
            <div class="wave"></div>
            <div class="jt" style="position: absolute; bottom:40px; left:48%"><i class="iconfont" style="font-size: 60px; color:white">&#xe605;</i></div>
        </div>
        <div class="conter-header">
            <div class="header">
                <div class="le">
                    <div class="le-top">
                        <img src="../assets/imges/tx.jpg"/>
                        <h3 style="margin-top: 20px;">POETIZE</h3>
                        <div class="fl">
                            <span style="margin-top:20px;">文章</span>
                            <span style="margin:20px 20px;">分类</span>
                            <span style="margin-top:20px;">访问量</span>
                        </div>
                        <div class="fl">
                            <span>1</span>
                            <span style="margin:0 50px;">2</span>
                            <span>3</span>
                        </div>
                        <div class="pyq">朋友圈</div>
                    </div>
                    <div class="le-body">
                        <div class="le-body1">
                            <div>搜索</div>
                            <div class="Search">
                                <input placeholder="请输入关键字" type="text"/>
                                <span>
                                <svg data-v-4f1071e2="" height="20" style="margin-top: 3.5px; margin-left: 18px;" viewBox="0 0 1024 1024" width="20"><path d="M51.2 508.8c0 256.8 208 464.8 464.8 464.8s464.8-208 464.8-464.8-208-464.8-464.8-464.8-464.8 208-464.8 464.8z"
                                                                                                                                                           data-v-4f1071e2=""
                                                                                                                                                           fill="#51C492"></path><path
                                    d="M772.8 718.4c48-58.4 76.8-132.8 76.8-213.6 0-186.4-151.2-337.6-337.6-337.6-186.4 0-337.6 151.2-337.6 337.6 0 186.4 151.2 337.6 337.6 337.6 81.6 0 156-28.8 213.6-76.8L856 896l47.2-47.2-130.4-130.4zM512 776c-149.6 0-270.4-121.6-270.4-271.2S363.2 233.6 512 233.6c149.6 0 271.2 121.6 271.2 271.2C782.4 654.4 660.8 776 512 776z"
                                    data-v-4f1071e2=""
                                    fill="#FFFFFF"></path></svg>
                                </span>
                            </div>
                        </div>
                        <div class="le-body2">
                            <p>推荐文章</p>
                            <ul>
                                <li style="margin-top: 10px;">
                                    <div class="essay">
                                        <div class="img"></div>
                                        <div style="margin-left: 20px;width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;

    overflow: hidden;">生活倒映|sdadsadsadsadsadsa
                                        </div>
                                    </div>
                                    <p style="margin-top: 8px;

    color:rgb(151, 151, 151);
    font-size: 12px;">20022-12-3-4</p>
                                </li>
                                <li style="margin-top: 10px;">
                                    <div class="essay">
                                        <div class="img"></div>
                                        <div style="margin-left: 20px;width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;">生活倒映|sdadsadsadsadsadsa
                                        </div>
                                    </div>
                                    <p style="margin-top: 8px;

    color:rgb(151, 151, 151);
    font-size: 12px;">20022-12-3-4</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="classify">
                        <Classify></Classify>
                    </div>
                </div>
                <div class="ri">
                    <!-- 二级路由出口 -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import Classify from '@/components/Classify.vue';

import {onMounted, ref} from 'vue'

const char = ref('');
const text = ref([' 高梧百尺夜苍苍，乱扫秋星落晓霜。', "莫使金樽空对月,人生得意许尽欢", "莫等闲,白了少年头"])
const lg = ref(0);
const list = ref([]);

const setchar = (t, i) => {
    return t[i];
}
const circulate = () => {

    if (lg.value >= text.value.length) {
        lg.value = 0;
    }
    let i = 0;
    let Id = setInterval(() => {
        if (i > text.value[lg.value].length - 2) {
            clearInterval(Id);
            setTimeout(() => {
                let j = char.value.length;
                let id = setInterval(() => {
                    if (j <= 0) {
                        clearInterval(id);
                        setTimeout(() => {
                            lg.value++;
                            circulate();

                        }, 1500)
                    }
                    char.value = char.value.slice(0, -1);
                    j--;
                }, 100)
            }, 2000)
        }
        char.value += setchar(text.value[lg.value], i);
        i++;
    }, 150);
}


onMounted(() => {
    circulate();

})


</script>

<style scoped>

.classify {
    width: 100%;

    margin-top: 30px;
}

.img {
    background: url('@/assets/imges/xy.jpg');
    border-radius: 5px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 30%;
    height: 60px;
}

.essay {
    display: flex;

}

.Search {
    position: relative;
    border-radius: 10px;
    margin-top: 20px;
    width: 95%;
    height: 35px;

    border: 1px solid rgb(33, 232, 247);
    visibility: visible;
}

.Search span {
    position: absolute;
    top: 5px;
    right: 20px;
}

.Search input {
    padding: 0 14px;

    line-height: 35px;
    width: calc(100% - 50px);
    outline: 0;
    border: 2px solid var(--lightGreen);
    border-right: 0;
    border-radius: 40px 0 0 40px;
    color: var(--maxGreyFont);
    background: var(--white);
}

.pyq {
    width: 50%;
    background-color: #a3e9eb;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 5px 20px;
    margin: 20px 0;
    cursor: pointer;
}

.fl {
    width: 100%;
    display: flex;
    justify-content: center;

}

.text1 {
    cursor: pointer;
    color: white;
    padding: 10px;
    background: black;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    border-radius: 10px;
    text-align: center;

}

.text1 span {
    margin-left: 5px;
    animation-duration: 0s; /* 动画持续时间为 0s */
    border-right: 5px solid white;
    animation: color 0.8s ease-out forwards infinite;

}

.le-body2 {
    padding: 15px;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);

    height: 200px;
}

.le-body1 {
    padding: 15px;
    border-radius: 10px;
    margin-top: 30px;

    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
    visibility: visible;
}

@keyframes color {
    0% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
    50% {

        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

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

.le-top {
    background: linear-gradient(-45deg, #e8d8b9, #eccec5, #a3e9eb, #bdbdf0, #eec1ea);
    background-size: 400% 400%;
    -webkit-animation: gradientBG 10s ease infinite;
    animation: gradientBG 10s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100%;

}

.le-top img {
    width: 150px;
    height: 150px;
    margin-top: 20px;
    border-radius: 50%;
    display: block;
}

.header {
    width: 80%;
    display: flex;
}

.le {
    width: 30%;
    min-width: 300px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 40px;
    margin-right: 40px;
    max-width: 300px;
    float: right;

}

.saohua {
    width: 100%;
    height: 100%;

    position: relative;
}

.saohua nav {
    position: absolute;
    top: 50%;
    font-size: 35px;
    color: white;

    left: 50%;
    transform: translate(-50%, -50%);
}

.conter-header {

    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

@keyframes slide-down {
    from {
        opacity: 0;
        background-position: 0 -50px;
    }
    to {
        opacity: 1;
        background-position: 0 0;
    }
}

.conter {
    display: flex;
    height: 100vh;
    animation: slide-down 1.5s ease-out forwards;
    background: url('../assets/imges/53.jpg');
    background-attachment: fixed;
    background-size: cover;
    padding-top: 60px;
    position: relative;
    overflow: hidden;
}

.wave {
    width: 6400px;
    height: 60px;
    background: url('../assets/imges/bj2.png') repeat-x;
    z-index: 1;
    position: absolute;
    bottom: 0;
    animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}

.wave:nth-child(2) {
    height: 70px;

    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}

@keyframes wave {
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -1000px;
    }

}

.jt {
    animation: float 2s ease-in-out infinite;
    cursor: pointer;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

.ri {
    width: 100%;
}
</style>
