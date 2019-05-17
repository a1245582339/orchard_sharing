<template>
	<view class="">
		<view class="list">
			<van-card v-for="(item, index) in list" :key="index" :desc="item.desc" :title="item.title" :thumb="item.thumb" >
				<view slot="footer">
					<van-button style="margin-right: 10upx;" type="danger" size="mini" @click="del(index)">移除</van-button>
					<van-button size="mini" @click="toDetail">进入店铺</van-button>
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
						title: '一果采摘园（河西区店）',
						thumb: 'http://prir30avz.bkt.clouddn.com/shop1.png',
						desc: '河西小海地泗水道 12km',
					}, {
						title: '十果采摘园（河东区店）',
						thumb: 'http://prir30avz.bkt.clouddn.com/shop2.png',
						desc: '河西小海地泗水道 13km',
					}, {
						title: '百果采摘园（河北区店）',
						thumb: 'http://prir30avz.bkt.clouddn.com/shop3.png',
						desc: '河西小海地泗水道 14km',
					}, {
						title: '千果采摘园（南开区店）',
						thumb: 'http://prir30avz.bkt.clouddn.com/shop4.png',
						desc: '河西小海地泗水道 15km',
					}],
			}
		},
		methods: {
			del (index, e) {
				this.list.splice(index, 1)
			},
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
