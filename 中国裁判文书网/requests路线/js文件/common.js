function yjjy(){
	
 // 意见建议弹出层-打开
    var nickName=getNickName("nickName");
    if(nickName!=null && nickName!="" && typeof(nickName)!="undefined"){
    	if(typeof($("#yjjy").attr('href'))!="undefined")
    	   $("#yjjy").attr('href','#');
    	else
    	   $("#yjjyPop").attr('href','#');
    	$('.mask_box').fadeIn();
		$('.yjjyPop').fadeIn();
	
    }
	
	
}

 function erweima() { // 二维码下载弹出层-打开
	$('.mask_box').fadeIn();
	$('.cpwswApp').fadeIn();
 }
function logout() { // 退出登录
	$.WebSite
			.confirm({
				"msg" : "确定要退出登录吗？",
				callBack : function(is, e) {
					if (is == true) {
						$.WebSite
								.saveData({
									allowTip : false,
									param : {
										cfg : "com.lawyee.wbsttools.web.parse.dto.AppUserDTO@logout"
									},
									success : function(res) {
										$.WebSite
												.msg({
													msg : "退出成功，即将刷新页面",
													type : 1
												});
										setTimeout(
												function() {
													location
															.reload();
													delNickName("nickName");
												}, 1000);
									}
								});
					}
				}
			});
	
	
}

/*
功能：获取cookies函数 
参数：name，cookie名字
*/ 
function getNickName(name){ 
  /*  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)")); 
    if(arr != null){ 
     return unescape(arr[2]);  
    }else{ 
     return null; 
    } */
    return window.localStorage.getItem("nickName");

}  
/*
功能：删除cookies函数 
参数：name，cookie名字
*/ 
   
function delNickName(name){ 
   /* var exp = new Date();  //当前时间 
    exp.setTime(exp.getTime() - 1000); 
    var cval=getCookie(name); 

    if(cval!=null) {
    	document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/"; 
    	//$.cookie("nickName",null);
    }*/
	window.localStorage.clear();
} 


//}
//计算当前日期+周几
function showDate() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var weekDay = new Array(7);
	weekDay[0] = "星期日";
	weekDay[1] = "星期一";
	weekDay[2] = "星期二";
	weekDay[3] = "星期三";
	weekDay[4] = "星期四";
	weekDay[5] = "星期五";
	weekDay[6] = "星期六";
	$("#showDate").text(
			year + "年" + month + "月" + day + "日" + " "
					+ weekDay[date.getDay()]);
}
