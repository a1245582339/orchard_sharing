<template>
	<view class="">
		<view v-for="(item, index) in list" :key="index">
			<van-cell @click="toDetail" :title="item.shop" icon="shop-o" is-link />
			<van-card
				:num="item.num"
				:price="item.price"
				:desc="item.desc"
				:title="item.title"
				:thumb="item.img"
			>
				<view slot="footer">
					<van-button round style="margin-right: 5upx;" size="mini">申请退款</van-button>
					<van-button round size="mini">提醒发货</van-button>
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
					title: '樱桃',
					desc: '大果 500g装',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557763919962&di=c004add886aebc7e3f37f69ae95d3203&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F140714%2F330641-140G413255171.jpg',
					price: '20',
					num: '2' 
				}, {
					shop: '千果采摘园',
					title: '柠檬',
					desc: '大果 500g装',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557763855582&di=62ad2e6fd0ce6850419f429d15ac1d57&imgtype=0&src=http%3A%2F%2Fpic163.nipic.com%2Ffile%2F20180501%2F10673188_214146489084_2.jpg',
					price: '10',
					num: '2' 
				}, {
					shop: '万果采摘园',
					title: '牛油果',
					desc: '大果 500g装',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557763760214&di=280ce55e4963bf97e91c3ae3652f9e1b&imgtype=0&src=http%3A%2F%2Fimg2.cache.netease.com%2Fhouse%2F2015%2F9%2F29%2F20150929161201de464_500.jpg',
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
