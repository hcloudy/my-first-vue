<template>
    <div class="cmt-container">
        <h3 class="cmt-title">发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多BB120个字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}，发表时间 {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined'?'此用户很懒，什么都没说':item.content}}
                </div>
            </div>
        </div>
        <mt-button size="large" type="danger" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            comments: []
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            this.$http.get("comments/"+this.id).then(result => {
                if(result.body.status === 0) {
                    // this.comments = result.body.message;
                    this.comments = this.comments.concat(result.body.message);
                    //数组拼接
                }else {
                    Toast("评论数据加载失败！");
                }
            });
        }
    },
    props: ["id"]
}
</script>
<style lang="scss" scoped>
.cmt-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color:#ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }     
    }
}
</style>