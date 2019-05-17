<template>
	<view class="">
		<van-cell :use-label-slot="true" v-for="(item, index) in list" :key="index">
			<text slot="title"><text>{{item.recipient + '\n'}}</text>{{item.city + item.dis + item.address}}</text>
			<text slot="label">{{item.tel}}</text>
			<van-button style="margin-right: 5upx;" size="mini" @click=toDetail(item)>编辑</van-button>
			<van-button size="mini" type="danger" @click=del(index)>删除</van-button>
		</van-cell>
		<van-button size="large" @click="toDetail({})">新增收货地址</van-button>
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	import Dialog from '@/wxcomponents/vant/dist/dialog/dialog';
	export default {
		data() {
			return {
				list: [{
					recipient: '张三',
					tel: '13555555555',
					city: '天津',
					dis: '河西区',
					address: '泗水道天津财经大学学生公寓',
					default: true
				}, {
					recipient: '李四',
					tel: '13555555523',
					city: '天津',
					dis: '河西区',
					address: '泗水道天津财经大学学生公寓'
				}, {
					recipient: '王五',
					tel: '13555555534',
					city: '天津',
					dis: '河西区',
					address: '泗水道天津财经大学学生公寓'
				}, {
					recipient: '赵六',
					tel: '13555555545',
					city: '天津',
					dis: '河西区',
					address: '泗水道天津财经大学学生公寓'
				}]
			}
		},
		methods: {
			toDetail (row) {
				uni.navigateTo({
					url: '/pages/tabBar/Me/AddressDetail?' + this.toStr(row)
				});
			},
			del (index) {
				Dialog.confirm({
					title: '提示',
					message: '确定删除此收货地址？'
				}).then(() => {
					this.list.splice(index, 1)
				})
			},
			toStr (obj) {
				return Object.keys(obj).reduce((total, curr) => {
					return [...total, `${curr}=${obj[curr]}`]
				}, []).join('&')
			}
		}
	}
</script>

<style lang="less">

</style>
