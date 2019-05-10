<template>
	<view class="uni-padding-wrap uni-common-pb">
		<van-search placeholder="请输入搜索关键词" show-action use-action-slot @search="onSearch">
			<view slot="action" @tap="onTapFilter">筛选</view>
		</van-search>
		<uni-drawer :visible="visible" mode="right" @close="onDrawerClose">
			<view style="padding:30upx;">
				<view class="uni-title">排序</view>
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>{{item.name}}</view>
							<view>
								<radio color="#007aff" :value="item.value" :checked="index === current" />
							</view>
						</label>
					</radio-group>
				</view>
				<view class="uni-title">标签</view>
				
			</view>
		</uni-drawer>
	</view>
	</view>
	</view>
</template>
<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		components: {
			uniDrawer
		},
		data() {
			return {
				visible: false,
				items: [{
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
					}
				],
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			onTapFilter() {
				this.visible = true
			},
			onDrawerClose() {
				this.visible = false
			},
			onSearch() {

			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
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
</style>
