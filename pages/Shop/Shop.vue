<template>
	<view class="uni-padding-wrap">
		<view class="header">
			<text>综合评分</text>
			<van-rate style="float: left; margin-right: 10upx;" :size="15" readonly :value="4" />
			<van-tag @tap="clearCol" color="#f2826a" v-if="collected" style="float: right;" size="medium">已收藏</van-tag>
			<van-tag @tap="addCol" color="#f2826a" v-else style="float: right;" size="medium" plain>收&nbsp&nbsp藏</van-tag>
		</view>
		<view class="">
			<van-cell title="店铺名" value="百果采摘园" icon="shop-o" />
			<van-cell title="地址" value="天津市津南区咸水沽百果采摘园" icon="location-o" />
			<van-cell title="水果种类" value="苹果、橘子、水蜜桃" icon="bag-o" />
			<van-cell title="联系电话" value="13555555555" icon="phone-o" is-link @click="tel('13555555555')" />
			<van-cell title="营业时间" value="10:00-19:00" icon="clock-o" />
		</view>
		<view class="uni-comment">
			<van-cell title="评论" icon="comment-o" is-link arrow-direction="down" />
			<view class="uni-comment-list">
				<view class="uni-comment-face">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>网友</text>
					</view>
					<view class="uni-comment-date">
						<text>05/15 18:20</text>
					</view>
					<view class="uni-comment-content">
						老板给了工具，让进去随便摘，价格也不是很贵，推荐来玩!<br>
						去过几次感觉还行，环境整体服务都不错，水果也比较新鲜。<br>
						这边的果蔬不错，空气也很新鲜，来亲近大自然是个不错的选择。
					</view>
					<view class="uni-comment-img">
						<image @click="preview([1, 2, 3].map(item => 'http://prir30avz.bkt.clouddn.com/comment' + item + '.jpg'))" v-for="i in [1, 2, 3]" :key="i"
						 :src="'http://prir30avz.bkt.clouddn.com/comment' + i + '.jpg'" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="uni-comment-list">
				<view class="uni-comment-face">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>
							王格必
						</text>
					</view>
					<view class="uni-comment-date">
						<text>05/14 08:12</text>
					</view>
					<view class="uni-comment-content">
						价格实惠，老板人很好，值得推荐，带孩子不错的好去处<br>
						不错，要早点去，人少一点<br>
						不错第二次来了，带了两个车一同，就这么热心哈哈
					</view>
					<view class="uni-comment-img">
						<image @click="preview([4, 5, 6].map(item => 'http://prir30avz.bkt.clouddn.com/comment' + item + '.jpg'))" v-for="i in [4, 5, 6]" :key="i"
						 :src="'http://prir30avz.bkt.clouddn.com/comment' + i + '.jpg'" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data () {
			return {
				collected: false
			}
		},
		methods: {
			tel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel //仅为示例
				});
			},
			preview(urls) {
				uni.previewImage({
					urls: urls,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(res) {
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						},
						fail: function(res) {
							console.log(res.errMsg);
						}
					}
				});
			},
			clearCol () {
				this.collected = false
			},
			addCol () {
				this.collected = true
			}
		}
	}
</script>

<style lang="less">
	.header {
		margin-top: 15upx
	}

	.list {
		margin-top: 20upx
	}
</style>
