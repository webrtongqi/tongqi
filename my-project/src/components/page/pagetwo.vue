<template>
  <div class="pagetwo">
  	<h1>{{msg}}</h1>
   	<ul>
   		<li v-for="(feedLists,index) in feedList">
   			<ul>
   				<li v-for="(bidsLists,index) in feedLists.themeInfo.bidsList">
   					<span>{{bidsLists.bidStatus|format(bidsLists.startTime,bidsLists.endTime,bidsLists.leftStartTime,bidsLists.leftEndTime)}}</span>
   					<router-link :to="{ path: 'pagefour', query: { plan: bidsLists.saleId }}" class="add"><h1> 点击跳转到详情:{{bidsLists.saleId}}</h1></router-link>
   				</li>
   			</ul>
   		</li>
   	</ul>
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
export default {
  data () {
    return {
      msg: '菜单二的内容',
      historyOn:[],
      feedList:[],
     
    }
  },
 
  filters:{
  	uppercase(value){
  		 if (!value) { return ''}
		 value = value.toString()
		 return value.charAt(0).toUpperCase() + value.slice(1)
  	},
  	money(value){
  		
  		 return value >= 10000 ? (value / 10000).toFixed(2) + "万": value;
  	},
  	format(bidStatus,startTime,endTime,leftStartTime,leftEndTime){
  		
  		if(bidStatus < 3){
  			if(startTime == 0){
  				return "即将开始"
  			}else{
  				if(leftStartTime  > 7200){
  					return leftStartTime
  				}else if(leftStartTime < 7200 && leftStartTime != 0){
  					
  				}else if(leftStartTime == 0){
  					return "即将开始"
  				}
  			}
  		}else if(bidStatus == 3){
  			return "热拍中"
  		}else{
  			return "已结束"
  		}
  	}
  },
   mounted(){
   	console.log(this.$route.query.plan)
  	axios({
	  method: 'post',
	  url: '/api/Bazzar/home',
	})
	.then(function (response) {
	    this.historyOn = response.data.data.history_on
	}.bind(this));

	axios.post(
		'/kupai/h5/bidListByClassId', 
		qs.stringify({classId:88,page:1})
	).then(function (response) {
	    this.feedList = response.data.data.feedList
	}.bind(this));
  },

}
</script>

<style>

</style>