<template>
  <div class="pageone">
    <h3>cu{{msg}}</h3>
  		<ul>
  			<li v-for="(lists,index) in list">
	  			<span>{{index}}</span>
	  			<router-link to="/pagetwo" class="add"><span> {{lists.news_title}}</span></router-link>
  			</li>
  		</ul>
  		<div v-for="(slideshows,index) in slideshow" class="box">
  			<img :src='"//img.51kupai.com/pic/"+slideshows.image+"/0"'>
  		</div>
  		
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
  data () {
    return {
      msg: '菜单三的内容',
      list:[],
      slideshow:[],
      html:''
    }
  },
  mounted(){
  	axios({
	  method: 'post',
	  url: '/api/Bazzar/home',
	})
	.then(function (response) {
	     this.slideshow = response.data.data.slideshow;
	}.bind(this));

	axios.post(
		'/api/Bazzar/get_bazaar_news_list', 
		qs.stringify({ page:1,page_num:3 })
	).then(function (response) {
	     this.list = response.data.data.news_list
	}.bind(this));

  }
}
</script>

<style lang="less">
  .box{
  	float: left;
  	width: 100%;
  	img{
  		width: 100%;
  	}
  }
</style>