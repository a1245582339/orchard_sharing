<template>
	<view class="uni-padding-wrap uni-common-pb">
		<uni-grid column-num="2" :show-out-border="false" @click="onTapGrid" :options="[
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
			<view @tap="toDetail(value.id)" class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list" :key="key">
				<view class="uni-media-list">
					<view class="uni-media-list-logo" :style="{backgroundImage: `url(${value.img})`, backgroundSize: 'cover'}">
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
					'【活动】玩游戏送水果！',
					'【公告】登陆你的账号，初始系统会每一个人送一棵果树！！',
					'【通知】起始地果树水滴值是零，每天都可以免费领取一滴水用于果树的成长！'
				],
				list: [{
						title: "给爱吃水果的你一份水果应季时令表",
						content: "一直都觉得爱吃水果的人都很可爱，毕竟水果不是饭，不是刚需。也不是零食，不是撕开袋子就能吃，不是打发时间。",
						img: "http://prir30avz.bkt.clouddn.com/art1_1.jpg",
						id: '1'
					}, {
						title: "水果养生小常识",
						content: "木瓜含木瓜酵素，有助于分解并加强蛋白质吸收，可缓解消化不良和胃炎，木瓜也是健脾养胃、治胃痛的好食物。",
						img: "http://prir30avz.bkt.clouddn.com/art2_1.jpg",
						id: '2'
					}, {
						title: "给爱吃水果的你一份水果应季时令表",
						content: "一直都觉得爱吃水果的人都很可爱，毕竟水果不是饭，不是刚需。也不是零食，不是撕开袋子就能吃，不是打发时间。",
						img: "http://prir30avz.bkt.clouddn.com/art1_1.jpg",
						id: '1'
					}, {
						title: "水果养生小常识",
						content: "木瓜含木瓜酵素，有助于分解并加强蛋白质吸收，可缓解消化不良和胃炎，木瓜也是健脾养胃、治胃痛的好食物。",
						img: "http://prir30avz.bkt.clouddn.com/art2_1.jpg",
						id: '2'
					}, {
						title: "给爱吃水果的你一份水果应季时令表",
						content: "一直都觉得爱吃水果的人都很可爱，毕竟水果不是饭，不是刚需。也不是零食，不是撕开袋子就能吃，不是打发时间。",
						img: "http://prir30avz.bkt.clouddn.com/art1_1.jpg",
						id: '1'
					}, {
						title: "水果养生小常识",
						content: "木瓜含木瓜酵素，有助于分解并加强蛋白质吸收，可缓解消化不良和胃炎，木瓜也是健脾养胃、治胃痛的好食物。",
						img: "http://prir30avz.bkt.clouddn.com/art2_1.jpg",
						id: '2'
					}, {
						title: "给爱吃水果的你一份水果应季时令表",
						content: "一直都觉得爱吃水果的人都很可爱，毕竟水果不是饭，不是刚需。也不是零食，不是撕开袋子就能吃，不是打发时间。",
						img: "http://prir30avz.bkt.clouddn.com/art1_1.jpg",
						id: '1'
					}, {
						title: "水果养生小常识",
						content: "木瓜含木瓜酵素，有助于分解并加强蛋白质吸收，可缓解消化不良和胃炎，木瓜也是健脾养胃、治胃痛的好食物。",
						img: "http://prir30avz.bkt.clouddn.com/art2_1.jpg",
						id: '2'
					}, {
						title: "给爱吃水果的你一份水果应季时令表",
						content: "一直都觉得爱吃水果的人都很可爱，毕竟水果不是饭，不是刚需。也不是零食，不是撕开袋子就能吃，不是打发时间。",
						img: "http://prir30avz.bkt.clouddn.com/art1_1.jpg",
						id: '1'
					}, {
						title: "水果养生小常识",
						content: "木瓜含木瓜酵素，有助于分解并加强蛋白质吸收，可缓解消化不良和胃炎，木瓜也是健脾养胃、治胃痛的好食物。",
						img: "http://prir30avz.bkt.clouddn.com/art2_1.jpg",
						id: '2'
					}, {
						title: "给爱吃水果的你一份水果应季时令表",
						content: "一直都觉得爱吃水果的人都很可爱，毕竟水果不是饭，不是刚需。也不是零食，不是撕开袋子就能吃，不是打发时间。",
						img: "http://prir30avz.bkt.clouddn.com/art1_1.jpg",
						id: '1'
					}, {
						title: "水果养生小常识",
						content: "木瓜含木瓜酵素，有助于分解并加强蛋白质吸收，可缓解消化不良和胃炎，木瓜也是健脾养胃、治胃痛的好食物。",
						img: "http://prir30avz.bkt.clouddn.com/art2_1.jpg",
						id: '2'
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
			leaveSetTabBarPage() {
				this.showSetTabBarPage = false
			},
			onTapGrid (e) {
				if (e.index === 0) {
					uni.switchTab({
						url: '/pages/tabBar/Search/Search'
					})
				} else if (e.index === 1) {
					uni.navigateTo({
						url: '/pages/tabBar/Home/Game'
					});
				}
			},
			toDetail (id) {
				uni.navigateTo({
					url: '/pages/tabBar/Home/article/art' + id
				});
			}
		}
	}
</script>

<style lang="less">
</style>
