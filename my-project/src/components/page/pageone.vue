<template>
	<div class="pageone">
			<el-carousel class='slider'>
				<el-carousel-item v-for="(slideshows,index) in slideshow" :key="index">
					<img :src='"//img.51kupai.com/pic/"+slideshows.image+"/750"'>
				</el-carousel-item>
			</el-carousel>
			<el-button type="primary" :loading="true">加载中</el-button>
		<!-- 	<div id="box">{{message}}</div>
			<el-input v-model="message" class="box"></el-input>
			<el-button type="success"  @click="add('测试')">点击</el-button> -->
			<div v-html="show('<p>ss</p>')"></div>
			<div class="schart">
	            <div class="content-title">柱状图</div>
	            <schart canvasId="bar" width="500" height="400" :data="message" type="bar" :options="options1"></schart>
       		</div>
	</div>
</template>
<script>
//import axios from 'axios';
import qs from 'qs';
import Schart from 'vue-schart';
export default {
	data () {
		return {
			slideshow:[],
			fullscreenLoading: true,
			message:[
                {name:'2012',value:1141},
                {name:'2013',value:1499},
                {name:'2014',value:2260},
                {name:'2015',value:1170},
                {name:'2016',value:970},
                {name:'2017',value:1450}
            ],
            options1: {
                title: '某商店近年营业总额',
                bgColor: '#829dda',
                titleColor: '#ffffff',
                fillColor: '#72f6ff',
                axisColor: '#eeeeee',
                contentColor: '#bbbbbb'
            },
		}
	},
	 components: {
            Schart
        },
	mounted(){
		//alert("载入后");
		this.$axios({
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
		},
		show:function(b){
			return b
		}
	},
	/*//Vue生命周期函数;
	beforeCreate(){
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