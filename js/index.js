//轮播图
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

//明星单品
{
    let you=document.querySelector(".mingxing .fanye .right");
    console.log(you);
    let zuo=document.querySelector(".mingxing .fanye .left");
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

//搭配
{
    let lists = document.querySelectorAll(".dapei");
    lists.forEach(function (ele) {
        content(ele);
    });
    function content(context) {
        let btn = context.querySelectorAll('.dpbiaoqian');
        let box = context.querySelectorAll('.youhezi');
        btn.forEach(function (ele, index) {
            ele.onmouseover = function () {
                for (let i = 0; i < box.length; i++) {
                    btn[i].classList.remove('active');
                    box[i].classList.remove('active')

                }
                this.classList.add('active');
                box[index].classList.add('active');
                n = index
            }
        })
    }
}

//为你推荐
{
    let left=document.querySelector('.tuijian .fanye .left');
    let right=document.querySelector('.tuijian .fanye .right');
    let box1=document.querySelectorAll(".tuijian .zb .zhoubiantp");
    let box2=document.querySelector(".tuijian .zb");
    let n=0;
    right.onclick=function(){
        n++;
        if(n>3){
            n=3;
            return;
        }
        yidong(n);
    };
    left.onclick=function(){
        n--;
        if(n<0){
            n=0;
            return;
        }
        yidong(n);
    };
    function yidong(n){
        box2.style.marginLeft=-[n]*1226+"px";
    };
}

// 内容
{
    let lists=document.querySelectorAll(".nrdp");
    lists.forEach(function(ele){
        content(ele);
    });
    function content(context){
        let left=context.querySelector(".fan_ye.left");
        let right=context.querySelector(".fan_ye.right");
        let box1=context.querySelectorAll(".nrdp .box");
        let box2=context.querySelector(".nrdp .big-box");
        let btn=context.querySelectorAll(".diandian1 li");
        let max=box1.length;
        let n=0;
        right.onclick=function(){
            n++;
            if(n>=max){
                n=max-1;
                return;
            }
            yidong(n);
        };
        left.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            yidong(n);
        };
        btn.forEach(function(ele,index){
            ele.onclick=function(){
                yidong(index);
                n=index;
            };
        });
        function yidong(n){
            for(let i=0;i<btn.length;i++){
                btn[i].classList.remove("activ");
            }
            btn[n].classList.add("activ");
            box2.style.marginLeft=-[n]*296+"px";
        }
    }
}

