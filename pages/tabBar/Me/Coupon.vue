<template>
	<view class="uni-padding-wrap uni-common-pb">
		<van-tabs style="margin-top: 20upx;" animated>
			<van-tab style="padding-top: 20upx;" title="可用">
				<view style="margin-bottom: 10upx;" class="stamp stamp01" v-for="(item, index) in canUse" :key="index">
					<view class="par">
						<p class="content">{{item.name}}</p><text>￥{{item.price}}</text><sub>优惠券</sub>
						<p class="content">{{item.range}}</p>
					</view>
					<view class="copy">副券<p>{{item.start}}<br>{{item.end}}</p>
					</view>
					<i></i>
				</view>
			</van-tab>
			<van-tab style="padding-top: 20upx;" title="已失效">
				<view style="margin-bottom: 10upx;" class="stamp stamp02" v-for="(item, index) in overTime" :key="index">
					<view class="par">
						<p class="content">{{item.name}}</p><text>￥{{item.price}}</text><sub>优惠券</sub>
						<p class="content">{{item.range}}</p>
					</view>
					<view class="copy">副券<p>{{item.start}}<br>{{item.end}}</p>
					</view>
					<i></i>
				</view>
			</van-tab>
		</van-tabs>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canUse: [{
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-05-13',
					end: '2020-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-05-13',
					end: '2020-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-05-13',
					end: '2020-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-05-13',
					end: '2020-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-05-13',
					end: '2020-05-13'
				}],
				overTime: [{
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-04-13',
					end: '2019-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-04-13',
					end: '2019-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-04-13',
					end: '2019-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-04-13',
					end: '2019-05-13'
				}, {
					name: '无门槛新人券',
					price: '50.00',
					range: '全场通用',
					start: '2019-04-13',
					end: '2019-05-13'
				}]
			};
		}
	}
</script>

<style lang="less">

</style>
