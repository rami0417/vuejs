<template>
  <div id="container">
	  <div id="shopWrap">
        <div class="admin-wrap">
          <div class="shop_tit">SHOP INFORMATION</div>
          <div class="shop_desc">러쉬 오프라인 매장을 소개합니다.</div>
       </div>

      <div class="searchArea">
        <select>
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </select>
        <input type="text"><a href="" class="searchBtn">검색</a>
      </div>

      <ul>
					<li>
            <div class="space">
              <div class="thumbnail">
                <a href="javascript:btnView('shop',73 , 'y')">
                  <img src="http://www.lush.co.kr/data/board/upload/shop/t/b6f6f6d580e7a4a6" width="280" height="230" class="js-image-load">
                </a>
              </div>
              <div class="txt">
                <a href="javascript:btnView('shop',73 , 'y')"><strong>롯데백화점 인천터미널점</strong></a>
              </div>
            </div>
          </li>
          <li>
            <div class="space">
              <div class="thumbnail">
                <a href="javascript:btnView('shop',73 , 'y')">
                  <img src="http://www.lush.co.kr/data/board/upload/shop/t/b6f6f6d580e7a4a6" width="280" height="230" class="js-image-load">
                </a>
              </div>
              <div class="txt">
                <a href="javascript:btnView('shop',73 , 'y')"><strong>롯데백화점 인천터미널점</strong></a>
              </div>
            </div>
          </li>
          <li>
            <div class="space">
              <div class="thumbnail">
                <a href="javascript:btnView('shop',73 , 'y')">
                  <img src="http://www.lush.co.kr/data/board/upload/shop/t/b6f6f6d580e7a4a6" width="280" height="230" class="js-image-load">
                </a>
              </div>
              <div class="txt">
                <a href="javascript:btnView('shop',73 , 'y')"><strong>롯데백화점 인천터미널점</strong></a>
              </div>
            </div>
          </li>
        </ul>
	  </div>
	</div>
</template>

<script>
  export default {
    name: 'Shops'
  }
</script>
