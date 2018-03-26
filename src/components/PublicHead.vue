<template>
   	<div class="publicHead">
	   {{title}}
	</div>
</template>
<script>
export default {
	name:"publicHead",
	props: ['title'],
  	data() {
	    return {
	      showDown:false,
	    }
  	},
  	mounted() {
	    var that=this;
	    
	},
  	methods: {
  		goBack: function (event) {
  			history.go(-1);
	    }
  	}
};
</script>
<style type="text/css" lang="less">
	.publicHead{
		text-align: center;
		font-size:36/75rem;
		line-height:70/75rem;
	}
</style>