<template>
  <div class="pagetwo">
  	<h3>{{msg}}</h3>
   	<ul>
   		<li v-for="(historyOns,index) in historyOn">
   			<div>{{historyOns.tag_name}}</div>
   			<ul>
   				<li v-for="(historyOnsData,index) in historyOns.data">
   					<span>{{historyOnsData.price|money}}</span>
   				</li>
   			</ul>
   		</li>
   	</ul>
   	<ul>
   		<li v-for="(feedLists,index) in feedList">
   			<ul>
   				<li v-for="(bidsLists,index) in feedLists.themeInfo.bidsList">
   					<span>{{bidsLists.bidStatus|format(bidsLists.startTime,bidsLists.endTime,bidsLists.leftStartTime,bidsLists.leftEndTime)}}</span>
   					<span></span>
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
      msg: '菜单四的内容',
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