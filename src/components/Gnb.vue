<template>
	<div id="headerWrap">
		<h1><router-link to="/">러쉬</router-link></h1>
		<div id="gnb">
			<ul @mouseover = " hover = true " @mouseleave = " hover = false ">
				<li v-for="menu in menus" :key="menu.link">
					<router-link v-bind:to="menu.link" >{{menu.menuName}}</router-link>
					<ul v-if = " hover ">
						<li v-for="submenu in menu.subMenu" :key="submenu.link">
							<router-link v-bind:to="submenu.link" >{{submenu.menuName}}</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

 export default {
    name: 'Gnb',
    data() {
      return {
       //currentPath: '',
		menus :[],
		hover: false	
      	}
	  },
    mounted() {
		axios.get("/menu.json").then((result) => {
			this.menus = result.data;
		});
	}
  }
</script>
