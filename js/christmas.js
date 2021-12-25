	/**
		Profile:;
		Author: Nguyên Chương;
		Date: 2021/12/25;
		
	*/
    $("#curs").click(function(){
        var str = '「CẨM BÌNH」，I AM SORRY\n';
        str += 'Anh biết anh không thể nói ngọt ngào\n';
        str += 'Anh biết nhiều lời nói của anh làm tổn thương đến em\n';
        str += 'Anh biết anh đã thiếu tôn trọng cảm xúc của em\n';
	str += 'Anh biết anh đã làm em buồn lòng rất nhiều\n';
	str += 'Em có thể cho anh sửa sai lần này không\n';
        str += 'Anh hứa  anh sẽ không vô tâm với em\n';
        str += 'Em chính là nghĩa sống của anh\n';
        str += 'Bất cứ nơi đâu có mặt em\n';
        str += 'Anh đều muốn bên em\n';
        str += 'Ở cạnh em\n';
	str += 'Sorry\n';
        Printer.init(str, {
            //speed: 90  
            selector: 'canvas',
            //lnStr: 'root@demo ~/ # ',
            //"curSpeed" : 50,
            "speed" : 400,  
            // "selector" : 'canvas'
            // "startIndex" : 0,   
            // "endIndex" : 0
            "hasCur" : true,   
            // "curId" : 'cur',   
            // "curStr" : '_', 
            // "curStyle" : 'font-weight: bold;'
            "curSpeed" : 800
            // "lnStr": "" 
        }).print();
        $("#curs").attr("disabled","disabled");
        $(".contact").css('display','none');
    });   
   
    
    // $(document).snowfall('clear');
    // $(document).snowfall({
    //     image: "./org/jquery-hb/images/huaban.png",
    //     flakeCount:60,
    //     minSize: 5,
    //     maxSize: 22
    // });
    //timer
    function SetTime(){
        var oDay = document.getElementById("t_d");
        var oHours = document.getElementById("t_h");
        var oMinutes = document.getElementById("t_m");
        var oSeconds = document.getElementById("t_s");
        var date1 = new Date("Jun Jul 07 2021 00:00:00 GMT+0700")
        var date2=new Date(); 
        console.log(date2);
        var date3=date2.getTime()-date1.getTime() ;
		
        var days=Math.floor(date3/(24*3600*1000));
		
        var leave1=date3%(24*3600*1000); 
        var hours=Math.floor(leave1/(3600*1000));
		
        var leave2=leave1%(3600*1000); 
        var minutes=Math.floor(leave2/(60*1000));
		
        var leave3=leave2%(60*1000); 
        var seconds=Math.round(leave3/1000);
        
        var LoveDay = new Date();



        var ms=0;
        var sec=seconds;
        var min=minutes;
        var hour=hours;
        var day = days;
        timer=setInterval(function(){
            oDay.innerHTML = day;
            oHours.innerHTML = hour;
            oMinutes.innerHTML = min;
            oSeconds.innerHTML = sec;
            //oDiv.innerHTML=time;
            ms=ms+50;
            if(ms>999){
                ms=0;
                sec++;
            }
            if(sec>59){
                sec=0;
                min++;
            }
            if(min>59){
                min=0;
                hour++;
            }
            if(hour>23){
                hour=0;
                day++;
            }

        },50)
    };
    function StopTimer(){
        clearInterval(timer);
    }
    //end timer
    //begin carousel
    window.onload = function(){
        SetTime();
        var oWrap = document.getElementById('wrap');
        var oImg = oWrap.getElementsByTagName('img');
        var oImgLength = oImg.length;
        var Deg = 360 / oImgLength;
        var nowX , nowY , lastX , lastY , minusX = 0, minusY = 0;
        var roY = 0 , roX = -10;
        var timer;

        for ( var i=0;i<oImgLength;i++ )
        {
            oImg[i].style.transform = 'rotateY('+ i*Deg +'deg) translateZ(350px)';
            oImg[i].style.transition = 'transform 1s '+ (oImgLength-1-i)*0.1 +'s';

        }

        mTop();

        window.onresize = mTop;

        function mTop(){
            var wH = document.documentElement.clientHeight;
            oWrap.style.marginTop = wH / 2 - 180 + 'px';
        }

      
        document.onmousedown = function(ev){
            ev = ev || window.event;

           
            lastX = ev.clientX;
            lastY = ev.clientY;

            this.onmousemove = function(ev){
                ev = ev || window.event;

                clearInterval( timer );

                nowX = ev.clientX; // clientX 
                nowY = ev.clientY; // clientY 

                
                minusX = nowX - lastX;
                minusY = nowY - lastY;

                
                roY += minusX*0.2; // roY = roY + minusX*0.2;
                roX -= minusY*0.1;

                oWrap.style.transform = 'rotateX('+ roX +'deg) rotateY('+ roY +'deg)';

                /*
                
                var oDiv = document.createElement('div');
                oDiv.style.cssText = 'width:5px;height:5px;background:red;position:fixed;left:'+nowX+'px;top:'+nowY+'px';
                this.body.appendChild(oDiv);
                */

                
                lastX = nowX;
                lastY = nowY;

            };
            
            this.onmouseup = function(){
                this.onmousemove = null;
                timer = setInterval(function(){
                    minusX *= 0.95;
                    minusY *= 0.95;
                    roY += minusX*0.2; // roY = roY + minusX*0.2;
                    roX -= minusY*0.1;
                    oWrap.style.transform = 'rotateX('+ roX +'deg) rotateY('+ roY +'deg)';

                    if ( Math.abs(minusX)<0.1 && Math.abs( minusY )<0.1 )
                    {
                        clearInterval( timer );
                    }
                    console.log( minusX );
                },13);
            };
            return false;
        }
    };
    //end carousel