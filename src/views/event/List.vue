<template>
  <div id="container">
		<div class="boardWrap" id="eventWrap">
			<div class="searchArea">
				<select>
					<option>제목</option>
					<option>내용</option>
					<option>작성자</option>
				</select>
				<input type="text">
				<a href="" class="searchBtn">검색</a>
			</div>
			
			<div class="boardList">
				<ul>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/board/upload/event/15166a95739fc0dc" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/board/upload/event/15166a95739fc0dc" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/board/upload/event/15166a95739fc0dc" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/board/upload/event/15166a95739fc0dc" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
				</ul>
			</div>
			<ul class="paging">
				<li class="active"><span>1</span></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
			</ul>
		</div>
	</div>
</template>
<script>

	export default {
		name: 'Event',
		data () {
			return {
				boardNotice:[
					{"num":"공지", "title":"채러티 팟 펀딩 가이드(신청서 다운로드)", "date":"2019.07.04", "name":"관리자", "hits":"20"},
					{"num":"공지", "title":"채러티 팟 펀딩 가이드", "date":"2019.06.20", "name":"관리자", "hits":"158"}
				]	
			}
		}
 	 }

</script>