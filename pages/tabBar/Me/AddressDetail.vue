<template>
	<view class="">
		<van-field :value="info.recipient" clearable label="收件人" placeholder="请输入收件人" />
		<van-field :value="info.tel" clearable label="手机号" placeholder="请输入手机号" />
		<van-cell title="请选择区域" :value="info.dis ? (info.city + ' ' + info.dis) : '请选择'" is-link @click="chooseDis" />
		<van-field :value="info.address" clearable label="地址" placeholder="请输入地址" />
		<van-button size="large" @click="submit">保存</van-button>
		<uni-popup :show="pickerShow" position="bottom" @hidePopup="hidePopup">
			<van-picker show-toolbar :columns="columns" @cancel="hidePopup" @confirm="confirm" @change="onChange" />
		</uni-popup>
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	const citys = {
		'天津': ['河西区', '河东区', '和平区', '河北区', '红桥区'],
		'北京': ['东城区', '西城区', '朝阳区', '海淀区', '丰台区']
	};
	import Toast from '@/wxcomponents/vant/dist/toast/toast';
	import {
		uniPopup
	} from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		onLoad(obj) {
			this.info = obj
		},
		data() {
			return {
				info: {},
				pickerShow: false,
				columns: [{
						values: Object.keys(citys),
						className: 'column1',
					},
					{
						values: citys['天津'],
						className: 'column2',
						defaultIndex: 0
					}
				]
			}
		},
		methods: {
			chooseDis() {
				this.pickerShow = true
			},
			hidePopup() {
				this.pickerShow = false
			},
			confirm(e) {
				const {
					value
				} = e.detail;
				this.info.city = value[0]
				this.info.dis = value[1]
				this.pickerShow = false
			},
			onChange(event) {
				const {
					picker,
					value,
					index
				} = event.detail;
				picker.setColumnValues(1, citys[value[0]]);
			},
			submit() {
				const info = this.info
				if (!info.recipient || !info.tel || !info.city || !info.dis || !info.address) {
					Toast.fail('请将收货信息填写完整！');
				} else if (!/^1(3|4|5|7|8)\d{9}$/.test(info.tel)) {
					Toast.fail('请填写正确手机号！')
				} else {
					Toast.success('保存成功！');
					setTimeout(() => {
						uni.navigateBack({
							delta: 1,
							animationType: 'pop-out',
							animationDuration: 200
						})
					}, 1000)

				}
			}
		}
	}
</script>

<style lang="less">

</style>
