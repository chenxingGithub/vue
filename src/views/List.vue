<template>
<div>
  <public-head :title=title></public-head>
  <div class="lists" v-for="listData in listData">
     <list-tab :listData=listData></list-tab>
  </div>
</div>
</template>
<script>

import PublicHead from '../components/PublicHead.vue';
import ListTab from '../components/ListTab.vue';

export default {
  name: 'List',
  data() {
    return {
      listData:[],
      title:"列表页",
      description:"当当网数字馆在线销售正版电子书，提供精品正版电子书在线阅读，免费下载和购买"
    }
  },
  mounted() {
    var that=this;
    that.$http({
      url:'/media/api.go?action=column&promotionType=1&columnType=all_zhubian1&isFull=1&permanentId=20171204161435385815752399835331567&returnType=json&channelId=70000&clientVersionNo=5.0.0&deviceType=iphone&start=0&end=19',
    }).then(function (response) {
        var response = response.body;
        that.listData=response.data.saleList;
    }, function (err) {
        console.log(err);
    })
  },
  components: {
    ListTab,
    PublicHead
  }
};
</script>
<style type="text/css">
@import "../css/common.less";
</style>
