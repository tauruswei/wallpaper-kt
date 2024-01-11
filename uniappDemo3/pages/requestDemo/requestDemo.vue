<template>
	<view class="container">			
		<view class="layout">
			<view class="box" v-for="(item,index) in pets" :key="item._id">
				<view class="pic">
					<image lazy-load :src="item.url" mode="widthFix" @click="onPreview(index)"></image>
				</view>
				<view class="text">{{item.content}}</view>
				<view class="author">—— {{item.author}}</view>
			</view>
		</view>		
		
	</view>
</template>

<script setup>
import {ref} from "vue";
import {onReachBottom,onPullDownRefresh} from "@dcloudio/uni-app"


const pets = ref([]); 

const onPreview = function (index){
	let urls = pets.value.map(item=>item.url);
	
	uni.previewImage({
		current:index,
		urls
	}) 
}


//发送网络请求
function network(){
	uni.showNavigationBarLoading()
	uni.request({
		url:"https://tea.qingnian8.com/tools/petShow",
		data:{
			size:5
		},
		header:{
			"access-key":"xxm123321@#"
		}
	}).then(res=>{		
		if(res.data.errCode===0){			
			pets.value = [...pets.value,...res.data.data]
			console.log(pets.value);
		}else if(res.data.errCode === 400){
			uni.showToast({
				title:res.data.errMsg,
				icon:"none"
			})
		}		
	}).catch(err=>{		
		uni.showToast({
			title:"请求有误，请重新刷新",
			icon:"none"
		})
	}).finally(()=>{
		uni.hideNavigationBarLoading();
		uni.stopPullDownRefresh();
	})
}


//触底加载更多
onReachBottom(()=>{
	network();
})

//下拉刷新
onPullDownRefresh(()=>{
	pets.value = [];
	network();
})



network();


</script>

<style lang="scss" scoped>
.container{
	.layout{
		padding:50rpx;
		.box{
			margin-bottom:60rpx;
			box-shadow: 0 10rpx 40rpx rgba(0,0,0,0.08);
			border-radius: 15rpx;
			overflow: hidden;
			.pic{
				image{
					width: 100%;
				}
			}
			.text{
				padding:30rpx;
				color:#333;
				font-size: 36rpx;
			}
			.author{
				padding:0 30rpx 30rpx;
				text-align: right;
				color:#888;
				font-size: 28rpx;
			}
		}
	}
}
</style>
