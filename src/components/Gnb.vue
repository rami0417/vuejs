<template>
	<div id="headerWrap">
		<h1><router-link to="/">러쉬</router-link></h1>
		<util/>
		
		<div id="gnb">
			<ul @mouseover = " hover = true " @mouseleave = " hover = false ">
				<li v-for="(menu, idx) in menus" :key="idx">
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
import Util from '@/components/Util.vue'
import {mapState, mapMutations } from 'vuex'

 export default {
    name: 'Gnb',
    data() {
      return {
	   //currentPath: '',
		hover: false
      	}
	},
	created () {
		axios.get("/menu.json").then((result) => {
			this.setMenus(result.data);
		})
	},
	computed: {
		...mapState(["menus"])
	},
	methods: {
		...mapMutations(["setMenus"]) 
	},
	components: {
	  Util
    }
  }
</script>
