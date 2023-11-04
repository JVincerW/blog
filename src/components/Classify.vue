<template>
    <div v-for="(i,index) in list" :key="index" :class="i.class" @click="to">
        <p>速览</p>
        <div style="margin: 20px 0; font-size: 25px;">{{ i.name }}</div>
        <div>记录美好生活</div>
    </div>

</template>
<script>

//获取博客列表
import {getclslist} from "../http/home/homeApi";

export default {
    name: 'Classify',
    data() {
        return {
            list: [],
            classname: ['box1', 'box2', 'box3', 'box4'],
        }
    },
    mounted() {
        this.getlsit();

    },
    methods: {
        async getlsit() {
            const list = await getclslist();
            let i = 0;
            list.data.rows.forEach(element => {
                element.class = this.classname[i];
                i++;
            });
            this.list = list.data.rows;
            console.log(list.data.rows);
            console.log(this.list);
        },
        to() {

            this.$router.push('/home/');
        }

    }
}
</script>
<style scoped>
.box1 {
    position: relative;
    padding: 10px 25px 15px;
    border-radius: 10px;
    animation: 1s ease-in-out 0s 1 normal none running hideToShow;
    margin-top: 30px;
    cursor: pointer;
    color: white;
    background: linear-gradient(to right, rgb(53, 139, 255), rgb(21, 198, 255));
    visibility: visible;
}

.box2 {
    position: relative;
    padding: 10px 25px 15px;
    border-radius: 10px;
    animation: 1s ease-in-out 0s 1 normal none running hideToShow;
    margin-top: 30px;
    cursor: pointer;
    color: white;
    background: linear-gradient(to right, rgb(255, 188, 53), rgb(161, 255, 21));
    visibility: visible;
}

.box3 {
    position: relative;
    padding: 10px 25px 15px;
    border-radius: 10px;
    animation: 1s ease-in-out 0s 1 normal none running hideToShow;
    margin-top: 30px;
    cursor: pointer;
    color: white;
    background: linear-gradient(to right, rgb(255, 174, 53), rgb(145, 50, 12));
    visibility: visible;
}

.box4 {
    position: relative;
    padding: 10px 25px 15px;
    border-radius: 10px;
    animation: 1s ease-in-out 0s 1 normal none running hideToShow;
    margin-top: 30px;
    cursor: pointer;
    color: white;
    background: linear-gradient(to right, rgb(255, 174, 53), rgb(217, 212, 210));
    visibility: visible;
    margin-bottom: 20px;
}


</style>
