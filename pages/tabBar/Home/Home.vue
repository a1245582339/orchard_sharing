<template>
	<view class="uni-padding-wrap uni-common-pb">
		<uni-grid column-num="2" :show-out-border="false" :options="[
			{image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:'采摘园'},
			{image:'https://img-cdn-qiniu.dcloud.net.cn/img/lindang.png',text:'果树养成小游戏'}]">
		</uni-grid>
		<view class="uni-swiper-msg">
			<view class="uni-swiper-msg-icon">
				<image style="height: 50upx;width: 50upx;" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
			</view>
			<swiper autoplay="true" circular="true" interval="5000">
				<swiper-item v-for="(item, index) in msg" :key="index">
					<navigator>{{item}}</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<image :src="value.img"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{value.content}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	export default {
		components: {
			uniGrid
		},
		data() {
			return {
				msg: [
					'【活动】首充一百送菜虚鲲专属宝箱，百分百开出神兽，什么谢广鲲都是渣渣！！！',
					'【公告】感谢金主充钱1000万！在贪玩蓝月的路上你将是最强的！！！',
					'【通知】开局一条狗，装备全靠打，无职业、无等级、无副本，更多玩法等你来！'
				],
				list: [{
						title: "幸福",
						content: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "木屋",
						content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "木屋",
						content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "木屋",
						content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "木屋",
						content: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
					}, {
						title: "CBD",
						content: "烤炉模式的城，到黄昏，如同打翻的调色盘一般。",
						img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		onLoad() {
			// #ifdef APP-PLUS
			plus.nativeUI.showWaiting('加载中……');
			// #endif
		},
		onReady() {
			// #ifdef APP-PLUS
			plus.nativeUI.closeWaiting();
			// #endif
		},
		onShow() {
			this.leaveSetTabBarPage()
		},
		onHide() {
			this.leaveSetTabBarPage()
		},
		methods: {
			goDetailPage(e) {
				uni.navigateTo({
					url: url
				})
			},
			leaveSetTabBarPage() {
				this.showSetTabBarPage = false
			}
		}
	}
</script>

<style lang="less">
</style>
