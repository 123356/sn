//左边框
{
	let topbuy=document.querySelector(".xiaobiaoti");
	console.log(topbuy);
	let leftbar=document.querySelector(".leftbar");
	window.onscroll=function(){
		let tt=document.documentElement.scrollTop;
		console.log(document.documentElement.scrollTop);
		if(tt>700){
			topbuy.style.display="block";
			topbuy.style.top="0";
		}else{
			topbuy.style.display="none";
		}
		if(tt>900){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	}
	let tips=document.querySelectorAll(".leftbar li");
	let xont=document.querySelectorAll(".contens");
	console.log(tips);
	console.log(xont);
	let flag;
	tips.forEach(function(ele,index){
	
		ele.onclick=function(){
			flag=false;
			let  at=xont[index].offsetTop-100;
			// document.documentElement.scrollTop=at;
			let now=document.documentElement.scrollTop;
			let time=0;
			let  speed=(at-document.documentElement.scrollTop)/8;
			
				let ttt=setInterval(function(){
				time+=25;
				 now+=speed;
				if(time===200){
					clearInterval(ttt);
					flag=true;
				}
				
				document.documentElement.scrollTop=now;
			},25)

			

		}
		
	})
	
	window.addEventListener("scroll",function(){
		
		let st=document.documentElement.scrollTop;
		
			for(let i=0;i<xont.length;i++){
			if(st>=xont[i].offsetTop-100){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}
				tips[i].classList.add("active");
			}

		}
		
		
	})
}
//banner

{
	let lab=document.querySelectorAll(".suning_banner_nav li");
	let me=document.querySelectorAll(".me");
	console.log(lab);
	console.log(me);

	let obj=me[0];
	lab.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				me[index].style.display="block";
				me[index].style.opacity="1";
				// me[index].style.background="#ff6700";
				obj=me[index];
				console.log(obj)
			}
			ele.onmouseleave=function(){
				me[index].style.display="none";
			}
	})

}
//you
{
	let totopp=document.querySelector(".totop");
	
	totopp.onclick=function(){
	// 	document.documentElement.scrollTop=0;
	// }
	// 
	let st=document.documentElement.scrollTop;
	// console.log(st);
	let t=setInterval(function(){
		st-=200;
		if(st<0){
			st=0;
			clearInterval(t);
		}
		document.documentElement.scrollTop=st;


	},25)
	}

	let labb=document.querySelector(".xinxi");
	let mey=document.querySelector(".float_news");
	console.log(labb);
	console.log(mey);

	
	
			labb.onmouseenter=function(){
				mey.style.display="block";
				mey.style.width="70px";
				
				// me[index].style.background="#ff6700";
				
			}
			labb.onmouseleave=function(){
				mey.style.display="none";
				mey.style.width="0";
			}

			let menu=document.querySelectorAll(".title_fl li");
		let caozuo=document.querySelectorAll(".lefft");
		// console.log(lab);
		// console.log(me);

		
		menu.forEach(function(ele,index){
			ele.onmouseenter=function(){
			caozuo[index].style.display="block";
				caozuo[index].style.width="70px";
				// me[index].style.background="#ff6700";
			
				
			}
			ele.onmouseleave=function(){
				caozuo[index].style.display="none";
				caozuo[index].style.width="0";
			}
	})
}



// //dajuhui
// {
// 	let pre=document.querySelector(".btn1");
// 	let nex=document.querySelector(".btn2");
	
// 	let inee=document.querySelector(".party-left");
// 	let n=1;
// 	let flag=true;
// 	nex.onclick=function(){	
// 			if(flag){
// 				flag=false;
			
// 				n++;	
// 			inee.style.transition="all 0.3s"	
// 			inee.style.marginLeft=-1000*n+"px";	
// 		}	
					
// 	}
// 	pre.onclick=function(){
// 	if(flag){
// 		flag=false;

// 		inee.style.transition="all 0.3s"	
// 		n--;
// 		inee.style.marginLeft=-1000*n+"px";
// 		}
		
// 	}
// 	inee.addEventListener("transitionend",function(){
// 		flag=true;
// 		if(n===4){
// 			inee.style.transition="none"
// 			inee.style.marginLeft="1000px";
// 			n=1;
// 		}
// 		if(n===0){
// 			inee.style.transition="none"
// 			inee.style.marginLeft="-3000px";
// 			n=3;
// 		}
		
// 	})	
// }
//suningjubu
// {	
// 	let totle=document.querySelector(".totle");
// 	let n=1;
// 	let flag=true;

// 	let inv=document.querySelector(".title_change ");
// 	let len=document.querySelectorAll(".nsan_bottom");
// 	let left=document.querySelector(".nav_prev");
// 	let right=document.querySelector(".nav_next");
// 	let dotted=document.querySelectorAll(".sangedian li");
	
// 	right.onclick=function(ele,index){
		
// 		n++;
// 		if(flag){
// 			flag=false;
			
// 		inv.style.transition="all 0.3s"		
// 		inv.style.marginLeft=-390*n+"px";		
// 		dotted[n].classList.add("active");
// 		dotted[n-1].classList.remove("active");
		
// 		}		
// 		}
// 			dotted.forEach(function(ele,index){
// 				ele.classList.remove("active");
// 		})
		
			
// 	left.onclick=function(ele,index){
// 		n--;
// 		if(flag){
// 			flag=false;
// 			inv.style.transition="all 0.3s"		
// 			inv.style.marginLeft=-390*n+"px";		
// 		dotted[n].classList.add("active");
// 		dotted[n+1].classList.remove("active");
					
// 		}		
			
// 	}
// 	inv.addEventListener("transitionend",function(){
// 		flag=true;
// 		if(n===4){
// 			n=1;
// 			inv.style.transition="none"		
// 		inv.style.marginLeft=-390+"px";
		
// 		}
// 		if(n===0){
// 			n=3;
			
		
// 			inv.style.transition="none"		
// 		inv.style.marginLeft=-1170+"px";		
// 		}

// 	} )	
// }	
		
		

//视频滚动
// {
// 	let innn=document.querySelector(".right-contr ");
// 	let pr=document.querySelector(".pr");
// 	let ne=document.querySelector(".ne");
// 	n=0;
// 	ne.onclick=function(ele,index){
// 	n++	;
// 	do{
// 		innn.style.marginLeft=-390*n+"px";
// 	}while(n>3){
// 		n=0;
// 		return 
// 	}

			
// 		}
// 	pr.onclick=function(ele,index){	
// 		n--;
// 		do{
// 			innn.style.marginLeft=390*n+"px";		
// 		}while(n<-3){
// 			n=0;
// 			return			
// 	}	
// 		}				
// }
