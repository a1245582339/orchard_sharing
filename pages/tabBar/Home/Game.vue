<template>
	<view class="page">
		<view class="canvas">
			<view class="cloud">
				<view class="fly-1"></view>
				<view class="fly-2"></view>
				<view class="fly-3"></view>
			</view>
			<view class="tree">
				<image :src="`http://prir30avz.bkt.clouddn.com/tree-${mupiao}.png`" :class="['tree-'+ mupiao, treemove ? 'move-'+ mupiao : '']" hover-class="none" @click="tree"></image>
			</view>
			<view class="kettle">
				<view class="kettls" @click="water" hover-class="none"></view>
				<view class="flasks" v-show="watercss" :class="{'water': watercss}" ></view>
				<view class="flasms" v-show="!watercss" @click="water" hover-class="none"></view>
				<view class="waters" v-show="waterdom"></view>
			</view>
			<view class="sumup">
				<view class="user">
					<view class="info">
						<view class="drop" hover-class="none">
							<text v-text="info.votes + ' 水滴'"></text>
							<view class="icon">
								<text class="plus" :class="{'pluss': pluss}">+1</text> 
							</view>
						</view>
					</view>
				</view>
				<view class="speed">
					<view class="progress">
						<image class="speed-1" :src="'http://prir30avz.bkt.clouddn.com/speed-1'+ [1 == mupiao ? '-h' : ''] +'.png'"></image>
						<image class="speed-2" :src="'http://prir30avz.bkt.clouddn.com/speed-2'+ [2 == mupiao ? '-h' : ''] +'.png'"></image>
						<image class="speed-3" :src="'http://prir30avz.bkt.clouddn.com/speed-3'+ [3 == mupiao ? '-h' : ''] +'.png'"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="explain">
			<view>果树分类详情：</view>
			<view class="text">1、每浇水1次，水滴值向上加1。</view>
			<view class="text">2、小树(水滴值0-10)， 中树(水滴值10-20)， 大树(水滴值20以上)。</view>
			<view class="text">
				树成长到30滴后可选择果树的种类，会由拥有这一种果树的采摘园送给用户一袋试吃装的水果，到客户留下的地址处。
这样的好事还在等什么呢？快来体验吧！
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					name: '沐枫',	//姓名
					sex: 1,			//姓别
					votes: '8',		//水滴值
				},
				pluss: false,		//+1动画
				mupiao: 1,			//成长进度 小1，中2 ，大3
				movetree: true,		//树动画开关
				treemove: false,	//树大小类型
				wateroff: true, 	//浇水动画开关
				watercss: false,	//水壶动画开关
				waterdom: false		//水滴动画开关
			};
		},
		
		methods: {
			//点击头像放大
			zoom(o) {
				uni.previewImage({
					'urls': [o]
				});	
			},
			
			//点击树的动画
			tree() {
				if(this.movetree) {
					this.treemove = true;
					this.movetree = false;
					setTimeout(() => {
						this.movetree = true;
						this.treemove = false;
					}, 1000);
				};
			},
			
			//点击浇水动画
			water() {
				if(this.wateroff) {
					this.watercss = true;
					this.wateroff = false;
										
					setTimeout(() => {
						this.waterdom = true;
					}, 1500);
					
					setTimeout(() => {
						this.info.votes++;
						this.pluss = true;
						this.treemove = true;
						this.movetree = false;
					}, 2000);
					
					setTimeout(() => {
						this.waterdom = false;
						this.movetree = true;
					}, 3500);
					
					setTimeout(() => {
						this.pluss = false;
						this.wateroff = true;
						this.watercss = false;
						this.treemove = false;
						if(10 <= this.info.votes && 20 > this.info.votes) {
							this.mupiao = 2;
						};
						if(20 <= this.info.votes ) {
							this.mupiao = 3;
						};
					}, 4000);	
				};
			}
		}
	};
</script>

<style>
	.canvas{ position: relative; display: flex; flex-direction: column; width: 750upx; height: 702upx; background: url(http://prir30avz.bkt.clouddn.com/detail-bg.jpg) no-repeat; background-size: contain; overflow: hidden;}
	.canvas .cloud { margin-top: 128upx; }
	.canvas .cloud view{ margin: 40upx 0; }
	.canvas .cloud .fly-1{ width: 102upx; height: 68upx; animation: cloud-1 80s ease-in-out 0s infinite alternate; background: url(http://prir30avz.bkt.clouddn.com/fly-1.png) no-repeat; background-size: contain;}
	.canvas .cloud .fly-2{ width: 72upx; height: 52upx; animation: cloud-2 60s linear 0s infinite alternate; background: url(http://prir30avz.bkt.clouddn.com/fly-2.png) no-repeat; background-size: contain;}
	.canvas .cloud .fly-3{ width: 78upx; height: 56upx; animation: cloud-3 70s ease 0s infinite alternate; background: url(http://prir30avz.bkt.clouddn.com/fly-3.png) no-repeat; background-size: contain;}
	
	.canvas .tree{ position: relative; display: flex; flex-direction: row; height: 160upx; justify-content: center;}
	.canvas .tree image{ position: absolute; bottom: 0; width: 280upx; height: 380upx;}
	.canvas .tree .tree-1{ width: 124upx; height: 264upx;}
	.canvas .tree .tree-3{ width: 420upx; height: 460upx;}
	
	.canvas .kettle{ display: flex; position: relative; flex-direction: row; justify-content: flex-end; width: 100%; height: 80upx;}
	.canvas .kettle view{ position: absolute;}
	.canvas .kettle .kettls{ top: -172upx; right: 20upx; width: 116upx; height: 112upx; background: url(http://prir30avz.bkt.clouddn.com/kettls.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .flasks{ top: -176upx; right: 28upx; width: 113upx; height: 70upx;  background: url(http://prir30avz.bkt.clouddn.com/flasks.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .flasms{ top: -176upx; right: 26upx; width: 117upx; height: 75upx;  background: url(http://prir30avz.bkt.clouddn.com/flasms.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .waters{ top: -240upx; right: 316upx; width: 85upx; height: 150upx; background: url(http://prir30avz.bkt.clouddn.com/waters.gif) no-repeat; background-size: contain; transition: all 2s;}
	
	.canvas .sumup{ position: absolute; bottom: 26upx; display: flex; flex-direction: row; justify-content: space-between; width: 100%; }
	.canvas .sumup .user{ display: flex; flex-direction: row;}
	.canvas .sumup .user .cover{ padding: 0 20upx;}
	.canvas .sumup .user .cover image{ width: 110upx; height: 110upx; border-radius: 50%; border: 1upx solid white;}
	
	.canvas .sumup .user .info{ display: flex; flex-direction: column; color: white; justify-content: flex-start; padding-top: 16upx; font-weight: bold; text-shadow: 4upx 4upx 2upx #085828;}
	.canvas .sumup .user .info .name{ font-size: 30upx; color: white;}
	.canvas .sumup .user .info .name .sex-1{ width: 25upx; height: 31upx; background: url(http://prir30avz.bkt.clouddn.com/male.png) no-repeat; background-size: contain;}
	.canvas .sumup .user .info .name .sex-2{ width: 21upx; height: 34upx; background: url(http://prir30avz.bkt.clouddn.com/women.png) no-repeat; background-size: contain;}
	.canvas .sumup .user .info .name view{ margin-left: 12upx; display: inline-block; vertical-align: middle;}
	.canvas .sumup .user .info .drop{ margin-top: 10upx; margin-left: 30upx; line-height: 32upx; font-size: 50upx;}
	.canvas .sumup .user .info .drop .icon{ position: relative; display: inline-block; margin-left: 15upx; width: 30upx; height: 40upx; vertical-align: bottom; background: url(http://prir30avz.bkt.clouddn.com/water.png) no-repeat bottom right; background-size: contain;}
	.canvas .sumup .user .info .drop .plus{ position: absolute; top: 0upx; right: -12upx; font-size: 50upx; opacity: 0; color: #ffbe2d;}
	
	.canvas .sumup .speed{ display: flex; flex-direction: row; padding: 16upx 32upx; height: 100upx; align-items: flex-end;}
	.canvas .sumup .speed .progress{ display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end;  width: 208upx; height: 30upx; border-radius: 14upx; background: linear-gradient(#9587ce, #7182d8);}
	.canvas .sumup .speed .speed-1{ width: 44upx; height: 50upx; margin-left: -8upx;}
	.canvas .sumup .speed .speed-2{ width: 44upx; height: 60upx;}
	.canvas .sumup .speed .speed-3{ width: 58upx; height: 68upx; margin-right: -12upx;}
	
	.explain{ padding: 50upx 20upx; font-size: 32upx; color: #555;}
	.explain .text{ padding: 20upx; line-height: 60upx; text-indent: 40upx;}
	
	@keyframes cloud-1{
		0%   { opacity: .8; transform: translate3d(200%, 0, 0);}
		50%  { opacity: .6; transform: translate3d(800%, 0, 0) scale(1.3);}
		100% { opacity: .8; transform: translate3d(-120%, 0, 0);}
	}
	@keyframes cloud-2{
		0%   { opacity: .8; transform: translate3d(820%, 0, 0);}
		50%  { opacity: .6; transform: translate3d(-120%, 0, 0);}
		100% { opacity: .8; transform: translate3d(1080%, 0, 0) scale(1.3);}
	}
	@keyframes cloud-3{
		0%   { opacity: .6; transform: translate3d(-120%, 0, 0) scale(1.3);}
		100% { opacity: .8; transform: translate3d(1000%, 0, 0);}
	}
	
	@keyframes move-1{
		0%{height: 268upx;}
		10%{height: 280upx;}
		20%{height: 295upx;}
		40%{height: 275upx;}
		70%{height: 285upx;}
		100%{height: 264upx;}
	} .move-1{ animation: move-1 1s; }
	
	@keyframes move-2{
		0%{height: 385upx;}
		10%{height: 390upx;}
		20%{height: 400upx;}
		40%{height: 380upx;}
		70%{height: 395upx;}
		100%{height: 380upx;}
	} .move-2{ animation: move-2 1s; }
	
	@keyframes move-3{
		0%{height: 475upx;}
		10%{height: 490upx;}
		20%{height: 500upx;}
		40%{height: 470upx;}
		70%{height: 490upx;}
		100%{height: 460upx;}
	} .move-3{ animation: move-3 1s; }
	
	@keyframes water{
		0%  { opacity: .5;transform: translate3d(0, 0, 0);}
		20% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5);}
		30% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(-35deg);}
		80% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(-35deg);}
		100%{ opacity: 0;transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(0deg);}
	} .water{ animation: water 4s ease-in-out forwards;}
	
	@keyframes pluss{
		0%{opacity: 0.8; top: -10upx;}
		80%{opacity: 1;top: -80upx;}
		100%{opacity: 0;top: -120upx;}
	} .pluss{animation: pluss 2s;}
</style>