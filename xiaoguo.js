{
	let images=document.querySelectorAll(".banner_lunbo li");
	let pagers=document.querySelectorAll(".lunbodian li");
	let image=document.querySelectorAll(".youshang li");
	let pager=document.querySelectorAll(".youxiatu li ");
	let banner=document.querySelector(".banner");
	let  next=document.querySelector(".next");
	let  prev=document.querySelector(".prev");


	// console.log(image);
	// console.log(pager);
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for( let i=0;i<pagers.length;i++){
			images[i].classList.remove("active");
		    pagers[i].classList.remove("active");
		    image[i].classList.remove("active");
		    pager[i].classList.remove("active");
		}
		this.classList.add("active");
		images[index].classList.add("active");
		image[index].classList.add("active");
		pager[index].classList.add("active");
		n=index;
	}
	})

let n=0;
 let t=setInterval(move,1000);
 	function move(){
	n++;
	if(n===images.length){
		n=0;
	}
	if(n<0){
		n=images.length-1;
	}
	for( let i=0;i<images.length;i++){
			images[i].classList.remove("active");
		    pagers[i].classList.remove("active");
		     image[i].classList.remove("active");
		    pager[i].classList.remove("active");
		}
		images[n].classList.add("active");
		pagers[n].classList.add("active");
		image[n].classList.add("active");
		pager[n].classList.add("active");

		
}

banner.onmouseenter=function(){
	clearInterval(t)
}
banner.onmouseleave=function(){
	t=setInterval(move,1000);
}
next.onclick=function(){
	move();
}
prev.onclick=function(){
	n-=2;
	move();
	
}



}