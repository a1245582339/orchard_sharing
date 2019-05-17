<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="user">
			<image class="avatar" :src="userInfo.avatarUrl || '../../../static/nologin.png'" mode=""></image>
			<view class="name">
				<text v-if="userInfo.nickName">{{userInfo.nickName}}</text>
				<button v-else size="mini" type="default" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">请先登录</button>
			</view>
		</view>
		<view v-if="userInfo.nickName" class="menu">
			<navigator url="/pages/tabBar/Me/Coupon" navigate hover-class="other-navigator-hover">
				<view class="menu-item">
					<view class="icon">
						<van-icon name="coupon-o" />
					</view>
					<text class="label">优惠券</text>
				</view>
			</navigator>
			<navigator url="/pages/tabBar/Me/Point" navigate hover-class="other-navigator-hover">
				<view class="menu-item border">
					<view class="icon">
						<van-icon name="balance-o" />
					</view>
					<text class="label">积分</text>
				</view>
			</navigator>
			<navigator url="/pages/tabBar/Me/Pending" navigate hover-class="other-navigator-hover">
				<view class="menu-item">
					<view class="icon">
						<van-icon name="pending-payment" />
					</view>
					<text class="label">已预定</text>
				</view>
			</navigator>
			<navigator url="/pages/tabBar/Me/Paid" navigate hover-class="other-navigator-hover">
				<view class="menu-item">
					<view class="icon">
						<van-icon name="paid" />
					</view>
					<text class="label">待发货</text>
				</view>
			</navigator>
			<navigator url="/pages/tabBar/Me/Logistics" navigate hover-class="other-navigator-hover">
				<view class="menu-item">
					<view class="icon">
						<van-icon name="logistics" />
					</view>
					<text class="label">待收货</text>
				</view>
			</navigator>
			<navigator url="/pages/tabBar/Me/Order" navigate hover-class="other-navigator-hover">
				<view class="menu-item">
					<view class="icon">
						<van-icon name="orders-o" />
					</view>
					<text class="label">全部订单</text>
				</view>
			</navigator>
		</view>
		<view v-if="userInfo.nickName" class="list">
			<uni-list>
				<uni-list-item title="我的地址" @click="toLink('Me/Address')"></uni-list-item>
				<uni-list-item title="我的收藏" @click="toLink('Me/Collection')"></uni-list-item>
				<uni-list-item title="历史浏览" @click="toLink('Me/History')"></uni-list-item>
				<uni-list-item title="冠名的树" @click="toLink('Home/Game')"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>
<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				loginStatus: false,
				userInfo: {
					
				}
			}
		},
		created () {
			
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
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			mpGetUserInfo (result) {
				console.log('mpGetUserInfo', result.detail.userInfo);
				if (result.detail.errMsg !== 'getUserInfo:ok') {
					uni.showModal({
						title: '获取用户信息失败',
						content: '错误原因' + result.detail.errMsg,
						showCancel: false
					});
					return;
				}
				this.hasUserInfo = true;
				this.userInfo = result.detail.userInfo;
			},
			toLink (url) {
				uni.navigateTo({
					url: '/pages/tabBar/' + url
				});
			}
		}
	}
</script>

<style lang="less">
	.user {
		display: flex;
		align-items: center;
		margin-top: 20upx;
		padding: 10upx 20upx;
		.avatar {
			width: 150upx;
			height: 150upx;
			border-radius: 50%;
		}
		.name {
			margin-left: 70upx
		}
	}
	.menu {
		display: flex;
		justify-content: space-around;
		margin-top: 100upx;
		.menu-item {
			height: 120upx;
			width: 120upx;
			text-align: center;
			.icon {
				color: #1ea7eb;
				font-size: 50upx;
			}
			.label {
				color: #555;
			}
		}
		.menu-item.border {
			border-right: 1px solid #ccc;
		}
	}
	.list {
		margin-top: 50upx
	}
</style>
