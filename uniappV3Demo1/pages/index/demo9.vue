<template>
	<view class="out">		
		<input type="text" class="input" :value="iptValue" @input="onInput" @blur="isActive=false" @focus="isActive=true"/>
		<image src="../../static/chicken.gif" mode="" class="pic" :class="isActive?'active':''"></image>
	</view>
</template>

<script setup>
import {ref} from "vue";

const iptValue = ref("");
const isActive = ref(false);

function onInput(e){
	iptValue.value =  e.detail.value;	
}


</script>

<style lang="scss" scoped>
.out{
	padding:0 20px;
	position: relative;
	margin-top:40px;
	.input{
		border:1px solid #eee;
		height: 40px;
		padding:0 10px;
		background: #fff;
		position: relative;
		z-index: 2;
	}
	.pic{
		width: 24px;
		height: 24px;
		position: absolute;
		z-index: 1;
		top:0px;
		transition: top 0.3s;
		left:calc(50% - 12px);
	}
	.pic.active{
		top:-24px;
	}
}

</style>
