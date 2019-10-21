<template>
    <div class="newsinfo-container">
        <h1 class="title">{{ newsinfo.title }}</h1>
        <p class="subtitle">
            <span>发布时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击次数：{{ newsinfo.click }}</span>
        </p>
        <hr>
        <div class="content">
            {{ newsinfo.content }}
        </div>

        <comment-box :id="this.id"></comment-box>
    </div>

</template>
<script>
import { Toast } from "mint-ui"
import comment from "../subcomponents/comment.vue"
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: '',
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$http.get("newsinfo/"+ this.id).then(result => {
                if(result.body.status === '0') {
                    this.newsinfo = result.body.message[0];
                }else {
                    Toast("获取新闻详情失败！");
                }
            });
        }
    },
    components: {
        "comment-box": comment
    }
}
</script>
<style lang="scss" scoped>
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content {
        color: gray;
    }
}
</style>