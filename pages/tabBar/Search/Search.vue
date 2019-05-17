<template>
	<view style="height: 100%;" class="uni-padding-wrap uni-common-pb">
		<van-search placeholder="请输入搜索关键词" show-action use-action-slot @search="onSearch">
			<view slot="action" @tap="onTapFilter">筛选</view>
		</van-search>
		<uni-drawer :visible="visible" mode="right" @close="onDrawerClose">
			<view style="padding:30upx;">
				<view class="uni-title">排序</view>
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in order" :key="item.value">
							<view>{{item.name}}</view>
							<view>
								<radio color="#007aff" :value="item.value" :checked="index === current" />
							</view>
						</label>
					</radio-group>
				</view>

			</view>
		</uni-drawer>
		<view class="list">
			<van-card v-for="(item, index) in list" :key="index" :desc="item.desc" :title="item.title" :thumb="item.thumb" @tap="toDetail">
				<view slot="footer">
					<van-rate readonly :value="item.like" icon="like" void-icon="like-o" @change="onChange" />
				</view>
			</van-card>
			<uni-load-more :status="loading"></uni-load-more>
		</view>
	</view>
	</view>
	</view>
</template>
<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		components: {
			uniDrawer,
			uniLoadMore
		},
		data() {
			return {
				visible: false,
				order: [{
					value: 'nearest_distant',
					name: '距离最近',
					checked: 'true'
				}, {
					value: 'most_distant',
					name: '距离最远',
				}, {
					value: 'most_type',
					name: '水果种类'
				}, {
					value: 'best_praise',
					name: '好评优先'
				}, {
					value: 'newest',
					name: '最新发布'
				}],
				list: [{
					title: '一果采摘园（河西区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop1.png',
					desc: '河西小海地泗水道 12km',
					like: 5
				}, {
					title: '十果采摘园（河东区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop2.png',
					desc: '河西小海地泗水道 13km',
					like: 4
				}, {
					title: '百果采摘园（河北区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop3.png',
					desc: '河西小海地泗水道 14km',
					like: 3
				}, {
					title: '千果采摘园（南开区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop4.png',
					desc: '河西小海地泗水道 15km',
					like: 2
				}, {
					title: '万果采摘园（和平区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop5.png',
					desc: '河西小海地泗水道 16km',
					like: 1
				}, {
					title: '亿果采摘园（北辰区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop6.png',
					desc: '河西小海地泗水道 17km',
					like: 2
				}, {
					title: '兆果采摘园（津南区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop7.png',
					desc: '河西小海地泗水道 18km',
					like: 3
				}],
				loading: 'more',
				page: 1,
			}
		},
		onNavigationBarButtonTap(e) {
		},
		onReachBottom(obj) {
			this.loading = 'loading'
			this.fetchData()
		},
		methods: {
			onTapFilter() {
				this.visible = true
			},
			bindClick(e) {

			},
			onDrawerClose() {
				this.visible = false
			},
			onSearch() {

			},
			fetchData() {
				if (this.page > 3) {
					setTimeout(() => {
						this.loading = 'noMore'
					})
				} else {
					setTimeout(() => {
						this.list = this.list.concat([{
							title: '一果采摘园（河西区店）',
							thumb: require('@/static/shop1.png'),
							desc: '河西小海地泗水道 12km',
							like: 5
						}, {
							title: '十果采摘园（河东区店）',
							thumb: require('@/static/shop2.png'),
							desc: '河西小海地泗水道 13km',
							like: 4
						}, {
							title: '百果采摘园（河北区店）',
							thumb: require('@/static/shop3.png'),
							desc: '河西小海地泗水道 14km',
							like: 3
						}, {
							title: '千果采摘园（南开区店）',
							thumb: require('@/static/shop4.png'),
							desc: '河西小海地泗水道 15km',
							like: 2
						}, {
							title: '万果采摘园（和平区店）',
							thumb: require('@/static/shop5.png'),
							desc: '河西小海地泗水道 16km',
							like: 1
						}, {
							title: '亿果采摘园（北辰区店）',
							thumb: require('@/static/shop6.png'),
							desc: '河西小海地泗水道 17km',
							like: 2
						}, {
							title: '兆果采摘园（津南区店）',
							thumb: require('@/static/shop7.png'),
							desc: '河西小海地泗水道 18km',
							like: 3
						}])
						this.page++
						this.loading = 'more'
					}, 800)
				}
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
				setTimeout(() => {
					this.visible = false
				}, 100)
			},
			toDetail () {
				uni.navigateTo({
					url: '/pages/Shop/Shop'
				});
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}

	.tag-list {
		display: flex;
		justify-content: space-between;
	}

	.tag-item {}
</style>
