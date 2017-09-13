<template>
	<div class="pageone">
			<el-carousel class='slider'>
				<el-carousel-item v-for="(slideshows,index) in slideshow" :key="index">
					<img :src='"//img.51kupai.com/pic/"+slideshows.image+"/750"'>
				</el-carousel-item>
			</el-carousel>
			<el-button type="primary" :loading="true">加载中</el-button>
			<div id="box">{{message}}</div>
			<el-input v-model="message" class="box"></el-input>
			<el-button type="success"  @click="add('测试')">点击</el-button>
	</div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
	data () {
		return {
			slideshow:[],
			fullscreenLoading: true,
			message:'双向绑定'
		}
	},
	mounted(){
		//alert("载入后");
		axios({
		 method: 'post',
		 url: '/api/bazzar/home',
		})
		.then(function (response) {
				 this.slideshow = response.data.data.slideshow;
		}.bind(this));

	},
	methods:{
		add:function(a){
			this.message = a
		}
	}
	//Vue生命周期函数;
	/*beforeCreate(){
		alert("创建前"); 
	},
	created(){
		alert("创建后");
	},
	beforeMount(){
		alert("载入前");
	},
	beforeUpdate(){
		alert("更新前");
	},
	updated(){
		alert("更新后");
	},
	beforeDestroy(){
		alert("销毁前");
	},
	destroyed(){
		alert("销毁后");
	}*/
}
</script>

<style lang="less">
 .slider{
		width: 70%;
		margin: 0 auto;
		img{
			width: 100%;
		}
 }
 .box{
		width: 50%;
		margin: 0 auto;
 }
 
</style>