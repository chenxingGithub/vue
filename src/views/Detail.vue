<template>
<div>
  <public-head :title=title></public-head>
  <div class="detailCon">
    <img class="bookImg" :src="bookData.coverPic" >
    <p class="descs">{{bookData.descs}}</p>
  </div>
</div>
</template>

<script>
  import PublicHead from '../components/PublicHead.vue';
  export default {
    name: 'Detail',
    data(){
      return{
        title:"详情页",
        bookData:{},
        id:this.$route.params.id
      }
    },
    created () {
      var that = this;
      that.$http({
        url:'/media/api.go?action=getMedia&appId=1&consumeType=1&platform=3&sign=html5&deviceType=html5&deviceVersion=5.0.0&channelId=70000&fromPaltform=ds_android&fromPlatform=107&deviceSerialNo=html5&clientVersionNo=5.8.4&platformSource=DDDS-P&mediaId='+that.id+'&saleId='+that.id
      }).then(function (response) {
        var response=response.body;
        that.bookData=response.data.mediaSale.mediaList[0]
        that.title=that.bookData.title;
      }, function (err) {
          console.log(err);
      })
    },
    methods: {
      downloadFun:function(){
        var that=this;
        if (navigator.userAgent.indexOf('iPhone') >0) {
          location.href="https://e-misc.dangdang.com/download/load.html?opt=voiceBook&mediaId="+that.mediaId;
        }else{
          location.href="ddreader://audioBook?mediaId="+that.mediaId;
          setTimeout(function() {
              location.href="https://e-misc.dangdang.com/download/load.html"
          },2000);
        }
      }
    },
    components: {
      PublicHead
    }
  }
 
</script>
<style lang="less">
.detailCon{
  margin:0 1rem;
  text-align:center;
  .bookImg{
    width:150/75rem;
  }
  .descs{
      font-size: .346667rem;
      color: #888;
      text-align:left;
  }
}

</style>