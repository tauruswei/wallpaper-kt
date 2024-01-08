<template>
	<view class="">
		<button @click="remove">删除一个</button>
		<button @click="clear" type="warn">删除所有缓存</button>
	</view>
</template>

<script setup>


uni.setStorageSync('name', '李四');
uni.setStorageSync("arrs", [1,2,3]);

let myName = uni.getStorageSync("name");
console.log(myName);

const res = uni.getStorageInfoSync();
console.log(res);

function remove(){
	uni.removeStorageSync("name")
}

function clear(){
	uni.clearStorageSync()
}

uni.request({
	url:"https://v.api.aa1.cn/api/zhihu-news/index.php?aa1=xiarou",
	dataType:"json",
	success:res=>{
		console.log(res);
	}
})



</script>

<style lang="scss" scoped>

</style>
