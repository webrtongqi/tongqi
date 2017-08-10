<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
  data () {
    return {
      msg: '菜单一的内容'
    }
  },
  mounted(){
  	axios({
	  method: 'post',
	  url: '/api/Bazzar/home',
	})
	.then(function (response) {
	     
	}.bind(this));

	axios.post(
		'/api/Bazzar/get_bazaar_news_list', 
		qs.stringify({ page:1,page_num:3 })
	).then(function (response) {
	     
	}.bind(this));;
  }
}
</script>

<style>

</style>