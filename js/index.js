{
    let box1=document.querySelectorAll(".img_box li");
    let box2=document.querySelectorAll(".btn_box li");
    let box=document.querySelector(".banner");
    let left=document.querySelector(".banner_fanye .left");
    let right=document.querySelector(".banner_fanye .right");
    box2.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<box2.length;i++){
                box2[i].classList.remove("one");
                box1[i].classList.remove("one")
            }
            this.classList.add("one");
            box1[index].classList.add("one");
        }
    });
    let n=0;
    function bannerfn(dir="r") {
        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===box1.length){
            n=0;
        }
        if(n===-1){
            n=box1.length-1;
        }
        for(let i=0;i<box2.length;i++){
            box2[i].classList.remove("one");
            box1[i].classList.remove("one");
        }
        box2[n].classList.add("one");
        box1[n].classList.add("one");
    }
    let st=setInterval(bannerfn,5000);
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(bannerfn,5000)
    };
    let flag=true;
    right.onclick=function () {
        if(flag){
            flag=false;
            bannerfn();
        }
    };
    left.onclick=function () {
        if(flag) {
            flag=false;
            bannerfn("l");
        }
    };
    box1.forEach(function (ele,index) {
        ele.addEventListener("transitionend",
            function(){
                flag=true;
            })
    })
}
{
    let you=document.querySelector(".fanye .right");
    let zuo=document.querySelector(".fanye .left");
    let box=document.querySelector(".tp");
    you.onclick=function () {
        this.classList.remove("activ");
        zuo.classList.add("activ");
        box.style.transform="translateX(-1240px)";
    };
    zuo.onclick=function () {
        this.classList.remove("activ");
        you.classList.add("activ");
        box.style.transform="translateX(0px)";
    };
    let n=0;
    function danpinfn() {
        n++;
        if (n%2===0){
            you.onclick()
        } else {
            zuo.onclick()
        }
    }
    let st=setInterval(danpinfn,5000);
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(danpinfn,5000)
    };

}


