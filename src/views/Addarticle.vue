<template>
    <div class="box">
        <div id="conter" style="width: 70%; height: 50%;">
            <Toolbar
                :defaultConfig="toolbarConfig"
                :editor="editorRef"
                :mode="mode"
            />
            <Editor
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                :mode="mode"
                style="height:100%; overflow-y: hidden;  border-bottom-left-radius: 15px;
   border-bottom-right-radius: 15px; "
                @onCreated="handleCreated"
            />
            <div class="file">
                <input ref="fileInput" type="file" @change="handleFileSelect()">
                <div style="text-align: center; color: white; padding: 10px 0;">添加封面图</div>
                <nav style="width: 200px;height: 160px; border: 5px rgb(100, 100, 100) dotted">
                    <img :src="src" style="max-width: 100%; max-height: 100%;object-fit: cover;"/>
                </nav>
            </div>
            <div>

                <div class="button">
                    <input v-model="title" placeholder="请输入标题" type="text"/>
                </div>
                <div class="button" style="height: 40px; width: 100%;">
                    是否开启评论
                    <el-switch v-model="value1"/>
                </div>
                <div class="button" style="height: 40px; width: 100%; ">
                    是否允许点赞
                    <el-switch v-model="value2"/>
                </div>
                <div style="margin-top: 20px;">
                    <el-select v-model="value" placeholder="请选择文章类别">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :disabled="item.disabled"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <div class="tj" @click="tj">点击提交</div>
            </div>
        </div>
    </div>
</template>

<script>
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
import {onBeforeUnmount, onMounted, ref, shallowRef} from 'vue'
import {addarticle, addImg} from '../http/header/headerApi'

export default {
    components: {Editor, Toolbar},
    setup() {

        const value1 = ref(true)
        const value2 = ref(true)
        //请求参数
        let data = {
            imageUrl: '', //博客封面
            content: '',//文章内容
            userId: 0,
            title: "",//文章标题
            likes: 0,
            allowComment: true,//是否开启评论
            appreciation: true,//是否允许点赞
            excerpt: "",

        }

        const value = ref('')
        const options = [
            {
                value: 0,
                label: '生活倒影',
            },

            {
                value: 1,
                label: '视听盛宴',

            },
            {
                value: 2,
                label: '寻国记',
            },
            {
                value: 5,
                label: '学习人生',
            },

        ]
        const str = 'https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif'
        let src = ref(null);
        const fileInput = ref(null);
        let title = ref('');

        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef()
        // 内容 HTML
        const valueHtml = ref('<input/>')
        // 工具栏配置
        const toolbarConfig = {}
        // 编辑器配置

        const editorConfig = {
            placeholder: '请输入内容...',
            MENU_CONF: {
                uploadImage: {
                    server: '/api/file/uploadEditor',
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImMzY2RlZWUxLThmYjAtNDI1OC04OTFkLWZkYzBlYTE2NmE5OCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.sV4BC_pK68xmVE2aGY4w_n9n6jwxiY9ubs7iOmQw1qZ1o5OLhzEtigQURkTxBs6_0SioZ4zFUgjrq4DA4Io9_Q', // 设置请求头
                    },
                    fieldName: 'file',
                    withCredentials: false,
                    timeout: 5 * 1000,
                    maxFileSize: 1 * 1024 * 1024,
                    onSuccess(file, res) {     //上传图片成功的回调
                        console.log(file, res);
                    },

                },
            },
        }
        onMounted(() => {
            fileInput.value = document.querySelector('input[type="file"]');
        });

        async function handleFileSelect() {

            src.value = str;
            const file = fileInput.value.files[0];
            console.log(file);
            const formData = new FormData();
            formData.append('file', file);

            const img = await addImg(formData);

            //添加图片地址参数
            data.imageUrl = img.data.data.url;
            data.allowComment = value1.value;
            data.appreciation = value2.value;
            src.value = data.imageUrl;

        }

        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return
            editor.destroy()
        })
        const tj = async () => {

            data.content = valueHtml.value; //存储内容;

            data.contentType = value.value;
            options.forEach((item) => {
                if (data.contentType === item.value) {

                    data.excerpt = item.label;
                }
            })
            console.log(data);
            if (editorRef.value.getText().trim() == "") {
                return alert("请输入内容后在提交");
            }
            data.title = title.value;

            if (examine(data.title, src.value)) {
                let obj = await addarticle(data);
                if (obj.data.code === 200) {
                    alert("发布成功");
                } else {
                    alert(obj.data.msg);
                }
                console.log(obj);
            } else {
                alert("请选择图片并且等待图片加载完成,并且输入标题");
            }
        }

        const handleCreated = (editor) => {
            editorRef.value = editor // 记录 editor 实例，重要！
        }

        //提交验证
        const examine = (title, img) => {

            if (title.trim() != "" && img != str && img != null && data.contentType != "") {

                return true;
            }
            console.log(data.contentType);
        }
        return {
            editorRef,
            valueHtml,
            mode: 'default',
            toolbarConfig,
            editorConfig,
            handleCreated,
            tj,
            handleFileSelect,
            fileInput,
            src,
            title,
            value1,
            value2,
            options,
            value
        }
    },
}
</script>

<style scoped>
.button {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;

}

.box {

    height: 150vh;
    display: flex;
    padding-top: 100px;
    justify-content: center;
    background: url('../assets/imges/wz.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

}

:deep(.w-e-text-container) {
    background: rgba(255, 255, 255, 0.5);


}

:deep(.w-e-bar) {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background: rgba(228, 202, 156);
}

#conter {
    position: relative;

}

.file {
    width: 100%;
    position: relative;
    height: 250px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 100px;
}

.file div {
    width: 120px;
    height: 60px;
    background: rgb(212, 222, 185);
    border-bottom-right-radius: 100%;
}

input[type=file] {
    appearance: none;
    top: 10px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: #fff;
    border-radius: 4px;
    border: 2px solid #ccc;
    color: #555;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    padding: 6px 12px;
    transition: all 0.3s ease-in-out;
}

.tj {

    width: 150px;
    height: 40px;
    background: rgba(228, 202, 156);
    right: 40px;
    text-align: center;
    line-height: 40px;
    bottom: -200px;
    margin-top: 20px;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    float: right;
}

.title {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
}

.button input {
    width: 50%;
    height: 100%;
    font-size: 20px;
    text-align: center;
    border: 0px;
    height: 30px;
    padding: 5px;
    background: none;
    box-shadow: none;

}

.title input:focus {
    outline: none;
}

.addimg {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
}
</style>
