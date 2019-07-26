<template>
  <div id="container">
	<title-area/>
	<div id="productWrap">
		<div class="sub_visual">
			<div>
				<p class="subv_txt01">BEST</p>
				<p class="subv_txt02">한 번에 모아 보는 인기 제품</p>
			</div>
		</div>

		<div class="contents">
			<base-layout>
				<template v-slot:header><h2>베스트</h2></template>
				<div class="list">
					<ul>
						<li>
							<div class="space">
								<div class="box ">
									<div class="thumbnail" data-image-magnify="http://www.lush.co.kr/data/goods/17/08/16/246/246_main_053.jpg">
										<a href=""><span class="prdimg"><img width="280" alt="더티 보디 스프레이" title="더티 보디 스프레이" class="middle gd_image_lazy" src="http://www.lush.co.kr/data/goods/17/08/16/246/246_main_053.jpg" style="display: inline;"></span></a>
										<div class="prdinfo">
											<div class="conditions">
												<span class="hot"><img src="http://www.lush.co.kr/data/icon/goods_icon/스마트샘플.jpg" alt="스마트 샘플" title="스마트 샘플" class="middle"></span>
											</div>
											<div class="txt">
												<a href=""><span class="prdName">더티 보디 스프레이</span><span class="shotdesc">#궁금했던그향기 #뒤돌아맡은향기</span></a>
											</div>
											<div class="price gd-default">
												<span class="cost"><strong>￦ 50,000</strong></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="space">
								<div class="box ">
									<div class="thumbnail" data-image-magnify="http://www.lush.co.kr/data/goods/11/01/20/15/15_main_074.png">
										<a href=""><span class="prdimg"><img width="280" alt="더티 보디 스프레이" title="더티 보디 스프레이" class="middle gd_image_lazy" src="http://www.lush.co.kr/data/goods/11/01/20/15/15_main_074.png" style="display: inline;"></span></a>
										<div class="prdinfo">
											<div class="conditions">
												<span class="hot"></span>
											</div>
											<div class="txt">
												<a href=""><span class="prdName">더티 보디 스프레이</span><span class="shotdesc">#궁금했던그향기 #뒤돌아맡은향기</span></a>
											</div>
											<div class="price gd-default">
												<span class="cost"><strong>￦ 50,000</strong></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="space">
								<div class="box ">
									<div class="thumbnail" data-image-magnify="http://www.lush.co.kr/data/goods/12/03/07/97/97_main_074.jpg">
										<a href=""><span class="prdimg"><img width="280" alt="더티 보디 스프레이" title="더티 보디 스프레이" class="middle gd_image_lazy" src="http://www.lush.co.kr/data/goods/12/03/07/97/97_main_074.jpg" style="display: inline;"></span></a>
										<div class="prdinfo">
											<div class="conditions">
												<span class="hot"></span>
											</div>
											<div class="txt">
												<a href=""><span class="prdName">더티 보디 스프레이</span><span class="shotdesc">#궁금했던그향기 #뒤돌아맡은향기</span></a>
											</div>
											<div class="price gd-default">
												<span class="cost"><strong>￦ 50,000</strong></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="space">
								<div class="box ">
									<div class="thumbnail" data-image-magnify="http://www.lush.co.kr/data/goods/11/01/20/79/79_main_023.jpg">
										<a href=""><span class="prdimg"><img width="280" alt="더티 보디 스프레이" title="더티 보디 스프레이" class="middle gd_image_lazy" src="http://www.lush.co.kr/data/goods/11/01/20/79/79_main_023.jpg" style="display: inline;"></span></a>
										<div class="prdinfo">
											<div class="conditions">
												<span class="hot"></span>
											</div>
											<div class="txt">
												<a href=""><span class="prdName">더티 보디 스프레이</span><span class="shotdesc">#궁금했던그향기 #뒤돌아맡은향기</span></a>
											</div>
											<div class="price gd-default">
												<span class="cost"><strong>￦ 50,000</strong></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="space">
								<div class="box ">
									<div class="thumbnail" data-image-magnify="http://www.lush.co.kr/data/goods/19/03/13/1000000586/1000000586_main_060.jpg">
										<a href=""><span class="prdimg"><img width="280" alt="더티 보디 스프레이" title="더티 보디 스프레이" class="middle gd_image_lazy" src="http://www.lush.co.kr/data/goods/19/03/13/1000000586/1000000586_main_060.jpg" style="display: inline;"></span></a>
										<div class="prdinfo">
											<div class="conditions">
												<span class="hot"></span>
											</div>
											<div class="txt">
												<a href=""><span class="prdName">더티 보디 스프레이</span><span class="shotdesc">#궁금했던그향기 #뒤돌아맡은향기</span></a>
											</div>
											<div class="price gd-default">
												<span class="cost"><strong>￦ 50,000</strong></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<template v-slot:footer>
					<red-link url="http://www.naver.com">더보기</red-link>
				</template>
			</base-layout>
		</div>
	</div>
  </div>
</template>
<script>
import TitleArea from '@/components/Title.vue'
import BaseLayout from "@/components/BaseLayout.vue";

  export default {
	name: 'Product',
	components: {
		BaseLayout,
 		TitleArea
 	 }
  }
</script>
