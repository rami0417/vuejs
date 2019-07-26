<template>
	<div id="utilWrap">
		<ul>
			<li><a href="">마이페이지</a></li>
			<li><a href="">고객센터</a></li>
			<li><a href="">로그아웃</a></li>
		</ul>
		<span class="userName">{{userInfo.name}}님</span>
		<span class="cartNum"><span class="num">{{userInfo.cartNum}}</span><img src="../assets/images/icon_cart.png" alt="장바구니"></span>
	</div>
</template>

<script>
import {mapState} from 'vuex'

 export default {
    name: 'Util',
	computed: {
		...mapState(['userInfo'])
	}
  }
</script>
