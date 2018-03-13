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
	
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let  at=xont[index].offsetTop-50;
			// document.documentElement.scrollTop=at;
			let now=document.documentElement.scrollTop;
			let time=0;
			let  speed=(at-document.documentElement.scrollTop)/8;
			let ttt=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(ttt);
				}
				
				document.documentElement.scrollTop=now;
			},25)

		}
		
	})
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		
		for(let i=0;i<xont.length;i++){
			if(st>xont[i].offsetTop-50){
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
				
				mey.style.width="50px";
				
				// me[index].style.background="#ff6700";
				
			}
			labb.onmouseleave=function(){
				mey.style.width="0";
			}

			let menu=document.querySelectorAll(".title_fl li");
		let caozuo=document.querySelectorAll(".lefft");
		// console.log(lab);
		// console.log(me);

		
		menu.forEach(function(ele,index){
			ele.onmouseenter=function(){
				
				caozuo[index].style.width="50px";
				// me[index].style.background="#ff6700";
			
				
			}
			ele.onmouseleave=function(){
				caozuo[index].style.width="0";
			}
	})
}



//dajuhui
{
	let prev=document.querySelector(".btn1");
	let next=document.querySelector(".btn2");
	
	let inee=document.querySelector(".party-left");
	
	let n=0;
	next.onclick=function(){
	n++;


	prev.classList.remove("disable");
	console.log(this);
	if(n===2){
		this.classList.add("disable");
		console.log(this);
	}
	if(n===3){
		n=2;
		return;
	}
	inee.style.marginLeft=-1100*n+"px";

	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
		this.classList.add("disable");
	}
	if(n===-1){
		n=0;
		return;
	}
	inee.style.marginLeft=-1000*n+"px";
	}
}



