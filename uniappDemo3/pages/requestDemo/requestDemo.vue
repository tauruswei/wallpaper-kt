<template>
	<view class="container">
		
	</view>
</template>

<script setup>
uni.request({
	url:"https://tea.qingnian8.com/tools/taoShow",
	header:{
		'access-key':'xxm123321@@'
	}
}).then(res=>{
	console.log(res);
})
</script>

<style lang="scss" scoped>

</style>
