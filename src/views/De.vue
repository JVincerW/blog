<template>
    <div class="box">
        <div v-show="star" class="header-center">
            <img :src="bgImage" style="max-width: 100%; max-height: 100%;object-fit: cover;  width: 100%;
        height: 100%; "/>
            <div class="text">
                <h1>{{ title }}</h1>
                <div>
                    <span><svg data-v-31732cc6="" height="14" style="vertical-align: -2px;" viewBox="0 0 1024 1024" width="14"><path d="M510.4 65.5l259.69999999 0 1e-8 266.89999999c0 147.50000001-116.2 266.89999999-259.7 266.90000001-143.4 0-259.7-119.5-259.7-266.90000001 0.1-147.5 116.3-266.9 259.7-266.89999999z"
                                                                                                                                     data-v-31732cc6=""
                                                                                                                                     fill="#FF9FCF"></path><path d="M698.4 525.2l-13 0c53-48.4 86.5-117.8 86.5-195.20000001 0-10.2-0.7-20.3-1.8-30.19999999C613.8 377.50000001 438.6 444.9 266 437.7c15 33.4 36.7 63.1 63.5 87.5l-5.3 0c-122.6 0-225.5 88.1-248.8 204.1C340 677.2 597.7 609.2 862.2 585.7c-44.3-37.6-101.5-60.5-163.8-60.5z"
                                                                                                                                                                 data-v-31732cc6=""
                                                                                                                                                                 fill="#FF83BB"></path><path
                        d="M862.2 585.7C597.7 609.2 340 677.2 75.4 729.3c-3.2 16.1-5 32.6-5 49.6 0 99.8 81.7 181.5 181.5 181.5l518.6 0c99.8 0 181.5-81.7 181.5-181.5 0.1-77.2-35-146.5-89.8-193.2z"
                        data-v-31732cc6=""
                        fill="#FF5390"></path><path d="M770.1 299.8C755.1 168 643.3 65.5 507.4 65.5c-146.1 0-264.5 118.4-264.5 264.5 0 38.4 8.3 74.8 23.1 107.7 172.6 7.2 347.8-60.2 504.1-137.9z"
                                                    data-v-31732cc6=""
                                                    fill="#FF9FCF"></path><path d="M436.4 282.1c0 24.1-19.6 43.7-43.7 43.7S349 306.2 349 282.1s19.6-43.7 43.7-43.7c24.19999999 0 43.7 19.6 43.7 43.7z"
                                                                                data-v-31732cc6=""
                                                                                fill="#FFFFFF"></path><path d="M625 282.1m-43.7 0a43.7 43.7 0 1 0 87.4 0 43.7 43.7 0 1 0-87.4 0Z" data-v-31732cc6=""
                                                                                                            fill="#FFFFFF"></path></svg></span>
                    <span>sara</span>
                    <span>.</span>
                    <span><svg data-v-31732cc6="" height="14" style="vertical-align: -2px;" viewBox="0 0 1024 1024" width="14"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                                                                                                                     data-v-31732cc6=""
                                                                                                                                     fill="#409EFF"></path><path d="M654.222222 256c-17.066667 0-28.444444 11.377778-28.444444 28.444444v56.888889c0 17.066667 11.377778 28.444444 28.444444 28.444445s28.444444-11.377778 28.444445-28.444445v-56.888889c0-17.066667-11.377778-28.444444-28.444445-28.444444zM369.777778 256c-17.066667 0-28.444444 11.377778-28.444445 28.444444v56.888889c0 17.066667 11.377778 28.444444 28.444445 28.444445s28.444444-11.377778 28.444444-28.444445v-56.888889c0-17.066667-11.377778-28.444444-28.444444-28.444444z"
                                                                                                                                                                 data-v-31732cc6=""
                                                                                                                                                                 fill="#FFFFFF"></path><path
                        d="M725.333333 312.888889H711.111111v28.444444c0 31.288889-25.6 56.888889-56.888889 56.888889s-56.888889-25.6-56.888889-56.888889v-28.444444h-170.666666v28.444444c0 31.288889-25.6 56.888889-56.888889 56.888889s-56.888889-25.6-56.888889-56.888889v-28.444444h-14.222222c-22.755556 0-42.666667 19.911111-42.666667 42.666667v341.333333c0 22.755556 19.911111 42.666667 42.666667 42.666667h426.666666c22.755556 0 42.666667-19.911111 42.666667-42.666667v-341.333333c0-22.755556-19.911111-42.666667-42.666667-42.666667zM426.666667 654.222222h-56.888889c-17.066667 0-28.444444-11.377778-28.444445-28.444444s11.377778-28.444444 28.444445-28.444445h56.888889c17.066667 0 28.444444 11.377778 28.444444 28.444445s-11.377778 28.444444-28.444444 28.444444z m227.555555 0h-56.888889c-17.066667 0-28.444444-11.377778-28.444444-28.444444s11.377778-28.444444 28.444444-28.444445h56.888889c17.066667 0 28.444444 11.377778 28.444445 28.444445s-11.377778 28.444444-28.444445 28.444444z m0-113.777778h-56.888889c-17.066667 0-28.444444-11.377778-28.444444-28.444444s11.377778-28.444444 28.444444-28.444444h56.888889c17.066667 0 28.444444 11.377778 28.444445 28.444444s-11.377778 28.444444-28.444445 28.444444z"
                        data-v-31732cc6=""
                        fill="#FFFFFF"></path></svg></span>
                    <span>{{ dadt }}</span>
                    <span>.</span>
                    <span><svg data-v-31732cc6="" height="14" style="vertical-align: -2px;" viewBox="0 0 1024 1024" width="14"><path d="M14.656 512a497.344 497.344 0 1 0 994.688 0 497.344 497.344 0 1 0-994.688 0z"
                                                                                                                                     data-v-31732cc6=""
                                                                                                                                     fill="#FF0000"></path><path d="M374.976 872.64c-48.299-100.032-22.592-157.44 14.421-211.37 40.448-58.966 51.115-117.611 51.115-117.611s31.659 41.386 19.115 106.005c56.149-62.72 66.816-162.133 58.325-200.405 127.317 88.746 181.59 281.002 108.181 423.381C1016 652.501 723.093 323.2 672.277 285.867c16.939 37.333 20.054 100.032-14.101 130.474-58.027-219.84-201.664-265.002-201.664-265.002 16.96 113.536-61.781 237.397-137.344 330.24-2.816-45.163-5.632-76.544-29.483-119.808-5.333 82.176-68.373 149.269-85.29 231.445-22.912 111.637 17.237 193.173 170.581 279.424z"
                                                                                                                                                                 data-v-31732cc6=""
                                                                                                                                                                 fill="#FFFFFF"></path></svg></span>
                    <span>92</span>
                    <span>.</span>
                    <span><svg data-v-31732cc6="" height="14" style="vertical-align: -2px;" viewBox="0 0 1024 1024" width="14"><path d="M113.834667 291.84v449.194667a29.013333 29.013333 0 0 0 28.842666 29.013333h252.928v90.453333l160.597334-90.453333h252.928a29.013333 29.013333 0 0 0 29.013333-29.013333V291.84a29.013333 29.013333 0 0 0-29.013333-29.013333h-665.6a29.013333 29.013333 0 0 0-29.696 29.013333z"
                                                                                                                                     data-v-31732cc6=""
                                                                                                                                     fill="#FFDEAD"></path><path d="M809.130667 262.826667h-665.6a29.013333 29.013333 0 0 0-28.842667 29.013333v40.106667a29.013333 29.013333 0 0 1 28.842667-29.013334h665.6a29.013333 29.013333 0 0 1 29.013333 29.013334V291.84a29.013333 29.013333 0 0 0-29.013333-29.013333z"
                                                                                                                                                                 data-v-31732cc6=""
                                                                                                                                                                 fill="#FFF3DB"></path><path
                        d="M556.202667 770.048h252.928a29.013333 29.013333 0 0 0 29.013333-29.013333V362.837333s-59.733333 392.533333-724.309333 314.709334v63.488a29.013333 29.013333 0 0 0 28.842666 29.013333h253.098667v90.453333z"
                        data-v-31732cc6=""
                        fill="#F2C182"></path><path d="M619.008 632.32l101.888-35.157333-131.754667-76.117334 29.866667 111.274667zM891.904 148.992a61.44 61.44 0 0 0-84.138667 22.528l-19.968 34.133333 106.666667 61.610667 19.968-34.133333a61.781333 61.781333 0 0 0-22.528-84.138667z"
                                                    data-v-31732cc6=""
                                                    fill="#69BAF9"></path><path d="M775.338667 198.775467l131.669333 76.032-186.026667 322.218666-131.6864-76.032z" data-v-31732cc6=""
                                                                                fill="#F7FBFF"></path><path d="M775.168 198.826667l-5.290667 9.216 59.221334 34.133333a34.133333 34.133333 0 0 1 12.458666 46.592l-139.946666 242.346667a34.133333 34.133333 0 0 1-46.762667 12.629333l-59.050667-34.133333-6.656 11.434666 88.746667 51.2L720.896 597.333333l186.026667-322.56z"
                                                                                                            data-v-31732cc6=""
                                                                                                            fill="#D8E3F0"></path><path d="M616.448 622.592l2.56 9.728 101.888-35.157333-44.885333-25.941334-59.562667 51.370667zM891.904 148.992c-1.024 0-2.218667-0.853333-3.242667-1.536A61.610667 61.610667 0 0 1 887.466667 204.8l-19.968 34.133333-73.728-42.496-5.12 8.704 106.666666 61.610667 19.968-34.133333a61.781333 61.781333 0 0 0-23.381333-83.626667z"
                                                                                                                                        data-v-31732cc6=""
                                                                                                                                        fill="#599ED4"></path><path d="M265.898667 417.621333H494.933333a17.066667 17.066667 0 1 0 0-34.133333H265.898667a17.066667 17.066667 0 1 0 0 34.133333zM265.898667 533.504H494.933333a17.066667 17.066667 0 0 0 0-34.133333H265.898667a17.066667 17.066667 0 0 0 0 34.133333z"
                                                                                                                                                                    data-v-31732cc6=""
                                                                                                                                                                    fill="#3D3D63"></path><path
                        d="M959.488 354.645333a99.84 99.84 0 0 0-23.722667-127.488 78.677333 78.677333 0 0 0-142.848-64.170666l-11.605333 20.138666a17.066667 17.066667 0 0 0-20.821333 7.168l-32.085334 55.466667H142.677333a46.250667 46.250667 0 0 0-45.909333 46.08v449.194667a46.08 46.08 0 0 0 45.909333 46.08h236.032v73.386666a17.066667 17.066667 0 0 0 8.362667 14.848 17.066667 17.066667 0 0 0 8.704 2.218667 17.066667 17.066667 0 0 0 8.362667-2.218667l156.672-88.234666h248.32a46.08 46.08 0 0 0 46.08-46.08V398.677333L921.6 283.306667a17.066667 17.066667 0 0 0-4.266667-21.504l1.877334-3.413334a65.365333 65.365333 0 0 1 10.410666 79.189334l-53.077333 91.989333a56.832 56.832 0 0 0 20.821333 77.653333 17.066667 17.066667 0 0 0 24.234667-6.314666 17.066667 17.066667 0 0 0-6.997333-23.04 23.04 23.04 0 0 1-8.362667-31.061334z m-138.410667 386.389334a11.946667 11.946667 0 0 1-11.946666 11.946666H556.202667a17.066667 17.066667 0 0 0-8.362667 2.218667l-134.997333 76.117333v-61.269333a17.066667 17.066667 0 0 0-17.066667-17.066667H142.677333a11.946667 11.946667 0 0 1-11.776-11.946666V291.84a11.946667 11.946667 0 0 1 11.776-11.946667h565.930667L574.464 512a17.066667 17.066667 0 0 0-1.706667 12.970667L597.333333 615.253333H265.898667a17.066667 17.066667 0 1 0 0 34.133334h352.938666a17.066667 17.066667 0 0 0 5.802667 0l102.4-35.328a17.066667 17.066667 0 0 0 9.216-7.509334l85.333333-147.968z m-204.8-184.661334l63.829334 36.864-49.322667 17.066667z m206.848-170.666666v1.365333l-108.373333 186.709333-102.4-59.050666L781.482667 221.866667l102.4 59.050666z m76.458667-161.28L887.466667 244.224l-76.970667-44.373333 11.264-19.797334a44.544 44.544 0 1 1 77.141333 44.544z"
                        data-v-31732cc6=""
                        fill="#3D3D63"></path></svg></span>
                    <span>0</span>
                    <span>.</span>
                    <span><svg data-v-31732cc6="" height="14" style="vertical-align: -2px;" viewBox="0 0 1024 1024" width="14"><path d="M510.671749 348.792894S340.102978 48.827055 134.243447 254.685563C-97.636714 486.565724 510.671749 913.435858 510.671749 913.435858s616.107079-419.070494 376.428301-658.749272c-194.095603-194.096626-376.428302 94.106308-376.428301 94.106308z"
                                                                                                                                     data-v-31732cc6=""
                                                                                                                                     fill="#FF713C"></path><path d="M510.666632 929.674705c-3.267417 0-6.534833-0.983397-9.326413-2.950192-16.924461-11.872399-414.71121-293.557896-435.220312-529.448394-5.170766-59.482743 13.879102-111.319341 56.643068-154.075121 51.043536-51.043536 104.911398-76.930113 160.095231-76.930114 112.524796 0 196.878996 106.48115 228.475622 153.195078 33.611515-45.214784 122.406864-148.20646 234.04343-148.20646 53.930283 0 105.46603 24.205285 153.210428 71.941496 45.063335 45.063335 64.954361 99.200326 59.133795 160.920016C935.306982 641.685641 536.758893 915.327952 519.80271 926.859589a16.205077 16.205077 0 0 1-9.136078 2.815116zM282.857183 198.75574c-46.25344 0-92.396363 22.682605-137.127124 67.413365-36.149315 36.157501-51.614541 78.120218-47.25321 128.291898 17.575284 202.089671 352.199481 455.119525 412.332023 499.049037 60.434417-42.86732 395.406538-289.147446 414.567947-492.458945 4.933359-52.344159-11.341303-96.465029-49.759288-134.88199-41.431621-41.423435-85.24243-62.424748-130.242319-62.424748-122.041544 0-220.005716 152.203494-220.989114 153.742547-3.045359 4.806469-8.53335 7.883551-14.101159 7.534603a16.257266 16.257266 0 0 1-13.736863-8.184403c-0.902556-1.587148-91.569532-158.081365-213.690893-158.081364z"
                                                                                                                                                                 data-v-31732cc6=""
                                                                                                                                                                 fill="#885F44"></path></svg></span>
                    <span>.</span>
                    <span>0</span>
                </div>
            </div>
        </div>
        <div>
            <div class="body-heade">
            </div>
            <div class="text1">
                <div class="center">
                    <div v-show="!star" style="height: 100vh;"></div>
                    <div v-show="star" class="center2 editor-content-view" data-slate-editor v-html="str">

                    </div>
                    <div v-show="star">
                        <div v-show="star" class="bottom-text">
                            <div>
                                <p><span>作者:</span><span>Sara</span></p>
                                <p><span>版权声明:</span></p>
                            </div>
                        </div>
                        <div v-show="star">
                            <textarea class="comment-textarea" data-v-3fc733af="" maxlength="1000" placeholder="写下点什么..."></textarea>
                        </div>
                        <div style="float: right;">
                            <div style="width: 40px; height: 30px; background: red; margin-bottom: 100px;">提交</div>
                        </div>
                    </div>
                </div>
                <div class="dw">
                    <ol>
                        <li><h2>目录</h2></li>
                        <li v-for="(i, index) in Anchors" :id="i.id2" :key="index" class="scroll-link" @click="scrollToAnchor(i.id, $event)">

                            {{ i.content }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {v4 as uuidv4} from 'uuid';
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import {getArticle} from '../http/article/getarticle';

const bgImage = ref('');
const route = useRoute();
let str = ref(null);
let title = ref(null);
let dadt = ref("");
const Anchors = ref([]);
//拿到id
const id = route.query.id;
const star = ref(false);
const getarticle = async () => {
    const res = await getArticle(id);
    //设置数据
    str.value = gundong(res.data.data.content).str;
    console.log(str);
    star.value = true;
    bgImage.value = res.data.data.imageUrl;
    title.value = res.data.data.title;
    dadt.value = res.data.data.createAt;
    console.log(bgImage.value);
}

var gundong = function (str) {
    const h2Reg = /<(h2)[^>]*>(.*?)<\/\1>/g; // 匹配<h2>标签及其内容
    const matches = str.matchAll(h2Reg);
    const updatedStr = str.replace(h2Reg, (match) => {
        const id = uuidv4();
        const content = match.match(/<(h2)[^>]*>(.*?)<\/\1>/)[2]; // 提取标签内容
        Anchors.value.push({
            id: id,
            content: content,
            id2: uuidv4(),
        });
        return match.replace(/(<h2[^>]*)/, `$1 id="${id}" data-content="${content}"`);
    });
    return {
        str: updatedStr,
        matches: Array.from(matches).map(match => ({
            id: uuidv4(),
            content: match[2],

        }))
    };
};

const scrollToAnchor = (id, e) => {
    // 使用scrollIntoView()方法将指定元素滚动到屏幕中间
    let dom = document.querySelectorAll('.scroll-link');

    dom.forEach((item) => {
        item.style.backgroundColor = '';
    })
    e.target.style.backgroundColor = 'orange';
    document.getElementById(`${id}`).scrollIntoView({behavior: 'smooth'});

}
const height = window.innerHeight / 2 + 50;

function handleScroll() {
    if (Anchors.value.length > 0) {
        Anchors.value.forEach((item) => {
            let dom = document.getElementById(`${item.id}`);
            let h = dom.getBoundingClientRect().top;

            if (h < height) {

                Anchors.value.forEach((item) => {
                    document.getElementById(`${item.id2}`).style.backgroundColor = '';
                })
                let dom2 = document.getElementById(`${item.id2}`);
                dom2.style.backgroundColor = 'orange';
            }
        })
    }

}

window.addEventListener('scroll', handleScroll);


console.log(Anchors.value);
onMounted(() => {
    getarticle();
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style>
.text span {
    margin-left: 10px;
}

#live2d-container {
    position: fixed;
    right: 150px;
    bottom: 20px;
}

.active {
    background: orange;

}

.scroll-link {
    cursor: pointer;

}

.dw {

    width: 250px;
    position: fixed;
    top: 35vh;
    right: 3vh;
    background: rgb(227, 237, 240);
    border-radius: 8px;
    z-index: 100;
    transition: all 1s;
    padding: 10px 10px 10px 5px;

}

.center2 h2 {
    color: rgb(255, 179, 0);
    text-align: left;
    border-bottom: 2px dashed rgb(107, 107, 107);
    padding: 10px;
}

.center2 p, h1 {
    margin: 20px;

    font-family: fontregular;
}

.center2 pre {
    background: rgb(60, 57, 69);
    line-height: 50px;
    border-radius: 10px;
    color: white;
}

.dw li {
    padding: 10px 10px 10px 5px;
    border-radius: 10px;
}

.header-center {
    height: 40vh;
    background: no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    animation: slide-down 0.5s ease-out forwards;
}

.header-center .text {
    flex-grow: 1;

    color: white;
    position: absolute;
    left: 20%;
    top: 70%
}

.text h1 {
    margin-bottom: 20px;
}

.body {
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.body-heade div {
    margin: 80px auto;

}

.body-heade, .center2, .bottom-text, .comment-textarea {
    animation: slide-up 0.5s ease-out forwards;
}

.center2 {
    animation: slide-up 0.5s ease-out forwards;
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(200px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.body-heade div h4 {
    line-height: 35px;
    word-break: break-word;
    font-size: 18px;
    text-align: center;
}

.text1 {
    display: flex;
    justify-content: center;
    align-content: center;

}

.center {
    width: 60%;
    text-align: center;
}

.center .title {
    border-bottom: 1px red solid;
    padding-bottom: 10px;
}


.center2 p {
    margin: 18px auto;
    line-height: 35px;
    word-break: break-word;
    font-size: 18px;
}

.bottom-text {
    line-height: 2;
    border-left: .2rem solid red;
    padding: 10px 1rem;
    background-color: rgb(65, 161, 246);
    border-radius: 4px;
    margin: 0 0 40px 0;
    color: var(--black);
}

.comment-textarea {
    border: 1px solid red;
    width: 100%;
    font-size: 14px;
    padding: 15px;
    min-height: 180px;
    resize: none;
    outline: none;
    border-radius: 4px;
    background-image: url('../assets/imges/22.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100%;
    margin-bottom: 10px;
}

.box {
    position: relative;

    font-family: fontregular;
}
</style>
