<template>
	<view class="">
		<view v-for="(item, index) in list" :key="index">
			<van-card
				:desc="item.desc"
				:title="item.title"
				:thumb="item.img"
			>
				<view slot="footer">
					<text style="float: left;">
						预定时间：2019-10-26
					</text>
					<van-button round size="mini">取消预定</van-button>
				</view>
			</van-card>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				list: [{
					shop: '百果采摘园',
					title: '百果采摘园',
					desc: '河西小海地泗水道 12km',
					img: 'http://prir30avz.bkt.clouddn.com/shop3.png',
					price: '20',
					num: '2' 
				}, {
					shop: '千果采摘园',
					title: '千果采摘园',
					desc: '河西小海地泗水道 12km',
					img: 'http://prir30avz.bkt.clouddn.com/shop4.png',
					price: '10',
					num: '2' 
				}, {
					shop: '万果采摘园',
					title: '万果采摘园',
					desc: '河西小海地泗水道 12km',
					img: 'http://prir30avz.bkt.clouddn.com/shop5.png',
					price: '50',
					num: '2' 
				}]
			}
		},
		methods: {
			toDetail () {
				uni.navigateTo({
					url: '/pages/Shop/Shop'
				});
			}
		}
	}
</script>

<style lang="less">
	
</style>
