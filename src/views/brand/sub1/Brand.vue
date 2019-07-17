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
			<div class="boardNotice">
				<table>
					<colgroup> 
						<col width="10%">
						<col width="*">
						<col width="15%">
						<col width="15%">
						<col width="15%">
					</colgroup>
					<thead>
						<tr>
							<th scope="col">번호</th>
							<th scope="col">제목</th>
							<th scope="col">날짜</th>
							<th scope="col">작성자</th>
							<th scope="col">조회</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="notice in boardNotice" :key="notice.num">
							<td class="notice"><span>{{notice.num}}</span></td>
							<td class="title"><a href="">{{notice.title}}</a></td>
							<td>{{notice.date}}</td>
							<td>{{notice.name}}</td>
							<td>{{notice.hits}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="boardList">
				<ul>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg" alt=""></span>
						<div class="txtArea">55.월드키즈센터</div></a>
					</li>
					<li><a href="">
						<span class="thum"><img src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg" alt=""></span>
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
		name: 'Brands',
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