<template>
	<view class="uni-padding-wrap">
		<van-button style="float: right; margin-top: 10upx;" size="mini" type="danger" @click="empty">清空历史</van-button>
		<view v-for="(item, i) in list" :key="i" class="history">
			<van-cell v-if="item.log.length" :title="item.date" />
			<van-card @tap="toDetail" v-for="(_item, index) in item.log" :key="index" :desc="_item.desc" :title="_item.title" :thumb="_item.thumb">
				<view slot="footer">
					<van-button type="danger" size="mini" @click="del(i, index)">删除</van-button>
				</view>
			</van-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						date: '5月15日',
						log: [{
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
					}, {
						date: '5月14日',
						log: [{
							title: '百果采摘园（河北区店）',
							thumb: 'http://prir30avz.bkt.clouddn.com/shop3.png',
							desc: '河西小海地泗水道 14km',
						}, {
							title: '千果采摘园（南开区店）',
							thumb: 'http://prir30avz.bkt.clouddn.com/shop4.png',
							desc: '河西小海地泗水道 15km',
						}],
					}, {
						date: '5月13日',
						log: [{
							title: '千果采摘园（南开区店）',
							thumb: 'http://prir30avz.bkt.clouddn.com/shop4.png',
							desc: '河西小海地泗水道 15km',
						}],
					}
				],
			}
		},
		methods: {
			del(i, index) {
				this.list[i].log.splice(index, 1)
			},
			empty () {
				this.list = []
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
