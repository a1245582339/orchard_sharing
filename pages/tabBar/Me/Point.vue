<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="header">
			<navigator class="toShop" open-type="redirect" url="/pages/tabBar/Me/Point" hover-class="navigator-hover">
				<text type="default">兑换优惠券 >>></text>
			</navigator>
			<view class="">
				当前积分： <text class="point"> {{point}}</text>
			</view>
			<view class="btn">
				<van-button v-if="signed" size="small" disabled round> 今日已签到 </van-button>
				<van-button v-else size="small" round @click="handleSign"> <van-icon name="edit" /> 签到领积分 </van-button>
				<van-toast id="van-toast" />
			</view>
		</view>
		<view class="list">
			<van-cell-group>
				<van-cell title="签到奖励" value="+10" label="2019-05-09" />
				<van-cell title="签到奖励" value="+10" label="2019-05-08" />
				<van-cell title="签到奖励" value="+10" label="2019-05-07" />
				<van-cell title="签到奖励" value="+10" label="2019-05-06" />
				<van-cell title="签到奖励" value="+10" label="2019-05-05" />
				<van-cell title="签到奖励" value="+10" label="2019-05-04" />
			</van-cell-group>
		</view>
	</view>
</template>

<script>
	import Toast from '@/wxcomponents/vant/dist/toast/toast';
	export default {
		data () {
			return {
				point: 500,
				signed: false
			}
		},
		methods: {
			handleSign () {
				Toast.success('签到成功\n积分 +10');
				this.point += 10
				this.signed = true
			}
		}
	}
</script>
 
<style lang="less">
	.header {
		text-align: center;
		height: 300upx;
		padding-top: 50upx;
		box-sizing: border-box;
		background: linear-gradient(#fb5838, #fb3750); 
		color: #fff;
		position: relative;
		.toShop {
			position: absolute;
			top: 10upx;
			right: 10upx;
			text {
				font-size: 20upx;
				text-decoration: #fff
			}
		}
		.point {
			font-size: 60upx
		}
		.btn {
			margin-top: 20upx;
		}
	}
</style>
