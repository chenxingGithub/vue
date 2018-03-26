<template>
  <div class="listCon" @click="toDetail()">
   		<div class="fl">
   			<img class="bookImg" :src="listData.mediaList[0].coverPic" >
   		</div>
   		<div>
   			<p class="title">{{listData.mediaList[0].title}}</p>
   			<p class="descs">{{listData.mediaList[0].descs}}</p>
   		</div>
	</div>
</template>
<script>
export default {
	name:"list",
	props: ['listData'],
	mounted() {
    var that=this;
	    
	},
  methods: {
    toDetail: function () {
      this.$router.push({path:'/Detail/'+this.listData.mediaList[0].mediaId})
    }
  }
};
</script>
<style lang="less">
.listCon{
	overflow:hidden;
  .bookImg{
  	width:150/75rem;
  	margin-right:30/75rem;
  }
  .title{
  	display: -webkit-box;
      display: box;
      font-size: 30/75rem;
      line-height:50/75rem;
      color: #494949;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }
  .descs{
  	display: -webkit-box;
      display: box;
      height:2rem;
      font-size:28/75rem;
      color: #888;
      -webkit-line-clamp:4;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }
}
</style>