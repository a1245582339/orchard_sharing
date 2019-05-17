<template>
	<view> 
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500" :circular="true">
						<swiper-item>
							<view class="stamp stamp01">
								<view class="par">
									<p class="content">无门槛新人券</p><text>￥50.00</text><sub>优惠券</sub>
									<p class="content">全场通用</p>
								</view>
								<view class="copy">副券<p>2019-08-13<br>2020-08-13</p>
								</view>
								<i></i>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="stamp stamp01">
								<view class="par">
									<p class="content">邀请有礼</p><text>￥20.00</text><sub>优惠券</sub>
									<p class="content">订单满200.00元</p>
								</view>
								<view class="copy">副券<p>2019-08-13<br>2020-08-13</p>
								</view>
								<i></i>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="stamp stamp01">
								<view class="par">
									<p class="content">新人专属券</p><text>￥50.00</text><sub>优惠券</sub>
									<p class="content">指定商品订单满100.00元</p>
								</view>
								<view class="copy">副券<p>2019-08-13<br>2020-08-13</p>
								</view>
								<i></i>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="ranking">
				<view class="title">
					<van-icon style="vertical-align: bottom" color="#FFD700" name="award" /><text> 排行榜</text>
				</view>
				<view class="list">
					<van-card
						v-for="(item, index) in list"
						:key="index"
						:desc="item.desc"
						:title="item.title"
						:thumb="item.thumb"
						:tag="item.tag"
						 @tap="toDetail"
					>
					  <view slot="footer">
						<van-rate
							readonly
							:value="item.like"
							icon="like"
							void-icon="like-o"
							@change="onChange"
						/>
					  </view>
					</van-card>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		data() {
			return {
				list: [{
					title: '一果采摘园（河西区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop1.png',
					desc: '河西小海地泗水道 12km',
					like: 5,
					tag: 'No.1'
				}, {
					title: '十果采摘园（河东区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop2.png',
					desc: '河西小海地泗水道 13km',
					like: 4,
					tag: 'No.2'
				}, {
					title: '百果采摘园（河北区店）',
					thumb: 'http://prir30avz.bkt.clouddn.com/shop3.png',
					desc: '河西小海地泗水道 14km',
					like: 3,
					tag: 'No.3'
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
	// @import './coupon.css';
	.ranking {
		.title {
			margin-top: 30upx;
			padding: 40upx;
			text-align: center;
			font-size: 60upx;
			text {
				color: #1ea7eb;
			}
		}
	}
</style>
