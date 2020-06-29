// 页面模块配置
var $modules = {
	/*"1545034746000" : {
		"activeLoadFlag" : true,
		"asyncFlag" : true,
		"beforeMethod" : "",
		"cfg" : "com.lawyee.wbsttools.web.parse.dto.AppUserDTO@currentUser",
		"context" : "<div class=\"haeder\">\n  <div class=\"header_box clearfix\">\n    <div class=\"fl logo2\"><a href=\"../181029CR4M5A62CH/index.html\"><img src=\"../images/list/logo1.png\" /><\/a><\/div>\n    <div class=\"fr header-list\">\n      <div class=\"menu_sub\">\n        <span id=\"showDate\">2018年10月16日 &nbsp; &nbsp; 星期二<\/span>\n        {{# if($globalNet ==\"outer\"){ }}\n          {{#if(\"anonymousUser\" !== d.userId){}}\n              <a href=\"/website/wenshu/181029BPRY8AYR1P/index.html?open=login\" style=\"text-decoration:underline\" id=\"loginLi\">欢迎您，{{d.userName}}<\/a>\n              <a id=\"logout\" href=\"javascript:void(0)\" style=\"text-decoration:underline\" id=\"logout\">退出<\/a>\n              <a href=\"javascript:void(0)\" id=\"yjjyPop\">意见建议<\/a>\n          {{#}else{}}\n          <a href=\"../181010CARHS5BS3C/index.html?open=login\" id=\"loginLi\">登录<\/a>\n          <a href=\"../181010CARHS5BS3C/index.html?open=reg\" id=\"reg\">注册<\/a>\n          <a href=\"../181010CARHS5BS3C/index.html?open=login\" id=\"yjjyPop\">意见建议<\/a>\n          {{#}}}\n          <a href=\"../181029CR4M5A62CH/index.html\" id=\"goHome\">返回主站<\/a>\n        {{#}}}\n        <a id=\"cpwswApp\" href=\"#\">APP下载<\/a>\n        <a href=\"/website/wenshu/181109AWZA70BFK4/index.html\" target=\"_blank\">使用帮助<\/a>\n      <\/div>\n      <div class=\"menu\">\n        <ul class=\"first_list clearfix\">\n          <li class=\"other-list\"><a href=\"../181029CR4M5A62CH/index.html\" class=\"list_a\"  target=\"_self\">首页<\/a><\/li>\n          <li class=\"other-list\"><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=02\" class=\"list_a\" target=\"_blank\">刑事案件<\/a><\/li>\n          <li class=\"other-list\"><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=03\" class=\"list_a\" target=\"_blank\">民事案件<\/a><\/li>\n          <li class=\"other-list\"><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=04\" class=\"list_a\" target=\"_blank\">行政案件<\/a><\/li>\n          <li class=\"other-list\"><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=05\" class=\"list_a\" target=\"_blank\">赔偿案件<\/a><\/li>\n          <li class=\"other-list\"><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=10\" class=\"list_a\" target=\"_blank\">执行案件<\/a><\/li>\n          <li class=\"others\"><a href=\"javascript:;\" class=\"list_a\" >其他案件<\/a>\n            <ul class=\"second_list clearfix\">\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=01\" target=\"_blank\">管辖案件<\/a><\/li>\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=06\" target=\"_blank\">区际司法协助<\/a><\/li>\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=07\" target=\"_blank\">国际司法协助<\/a><\/li>\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=09\" target=\"_blank\">非诉保全<\/a><\/li>\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=08\" target=\"_blank\">司法制裁<\/a><\/li>\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=11\" target=\"_blank\">强制清算与破产<\/a><\/li>\n              <li><a href=\"../181217BMTKHNT2W0/index.html?pageId={{$.WebSite.uuid()}}&s8=99\" target=\"_blank\">其他<\/a><\/li>\n            <\/ul>\n          <\/li>\n          {{# if($globalNet ==\"outer\"){ }}\n          <li class='others' id=\"otherLanguagesLi\"><a href=\"javascript:;\" class=\"list_a\">民族语言文书<\/a>\n            <ul class=\"second_list clearfix\">\n              <li>\n              \t\t<a href=\"../1811087NPAYMP0ZC/index.html?lang=Mongolian\" target=\"_blank\" style=\"display: inline-block;width: 100%;text-align: center;line-height: 32px;font-size: 12px;\">蒙古语<\/a>\n              <\/li>\n              <li>\n                   <a href=\"../1811087T48BTG4SW/index.html?lang=tibetan\" target=\"_blank\" style=\"display: inline-block;width: 100%;text-align: center;line-height: 32px;font-size: 12px;\">藏语<\/a>\n              <\/li>\n              <li>\n                   <a href=\"../1811087TASM6FH4H/index.html?lang=uygur\" target=\"_blank\" style=\"display: inline-block;width: 100%;text-align: center;line-height: 32px;font-size: 12px;\">维吾尔语<\/a>\n           \t   <\/li>\n              <li>\n                   <a href=\"../1811087TGWFGC18H/index.html?lang=korean\" target=\"_blank\" style=\"display: inline-block;width: 100%;text-align: center;line-height: 32px;font-size: 12px;\">朝鲜语<\/a>\n        \t\t <\/li>\n              <li>\n                   <a href=\"../1811087TS4Y7F5AW/index.html?lang=kazakh\" target=\"_blank\" style=\"display: inline-block;width: 100%;text-align: center;line-height: 32px;font-size: 12px;\">哈萨克语<\/a>\n      \t\t\t  <\/li>\n            <\/ul>\n          <\/li>\n          {{#}}}\n        <\/ul>\n      <\/div>\n    <\/div>\n  <\/div>\n<\/div>",
		"events" : [],
		"index" : 1,
		"layoutId" : "3dec8c82614adc710a477b688edb63cb",
		"listDataLoadType" : "",
		"moduleId" : "18110288G1DFS7MW",
		"name" : "通用页头",
		"onloadMethod" : "initHead1545034746000();",
		"parameter" : "",
		"randomId" : "1545034746000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034746000"
	},*/
	"1545034761000" : {
		"activeLoadFlag" : true,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div id=\"bottom\">\n  <div class=\"footer bottom\">\n    {{# if($globalNet ==\"outer\"){ }}\n    <div class=\"container-wrapper\">\n      <div class=\"container containerFisrt\"> |\n        <a href=\"http://govinfo.nlc.cn/lmzz\" target=\"_blank\">中国政府公开信息整合服务平台<\/a>|\n        <a href=\"https://www.12309.gov.cn/12309index.shtml\" target=\"_blank\">人民检察院案件信息公开网<\/a>|\n\n            <a href=\"https://splcgk.court.gov.cn/gzfwww/\" target=\"_blank\">中国审判流程信息公开网<\/a>|\n <a href=\"http://data.court.gov.cn/pages/research.html/\" target=\"_blank\">中国司法大数据服务网<\/a>|\n  <\/div>\n      <div class=\"container\"> |\n        <a href=\"http://shixin.court.gov.cn\" target=\"_blank\">中国执行信息公开网<\/a>|\n        <a href=\"http://jxjs.court.gov.cn/\" target=\"_blank\">全国法院减刑、假释、暂予监外执行信息网<\/a>|\n        <a href=\"http://ccmt.court.gov.cn\" target=\"_blank\">中国涉外商事海事审判网<\/a>|\n     <a href=\"http://cjdh.court.gov.cn/\" target=\"_blank\">最高人民法院服务人民群众系统场景导航<\/a>|\n   <\/div>\n    <\/div>\n    {{#}}}\n    <div class='bottom_con'>\n      <p> 地址：北京市东城区东交民巷27号&nbsp;&nbsp;&nbsp;&nbsp;邮编：100745&nbsp;&nbsp;&nbsp;&nbsp;总机：010-67550114&nbsp;&nbsp;&nbsp;&nbsp; <\/p>\n      <p> 中华人民共和国最高人民法院 版权所有<\/p>\n      <p> 京ICP备05023036号 <\/p>\n    <\/div>\n  <\/div>\n<\/div>",
		"events" : [],
		"index" : 1,
		"layoutId" : "346eb5bd6832d00de1b1e368c4c40aab",
		"listDataLoadType" : "",
		"moduleId" : "181010C0G0HWPK8H",
		"name" : "页尾",
		"onloadMethod" : "//点击关闭头部下拉菜单\n$(document).on('click',function(){         //点击关闭头部下拉菜单\n  if($('.search-rightBtn').hasClass('live')){\n    $('.search-rightBtn').removeClass('live')\n    $('.search-rightBtn').addClass('search-click')\n  }\n  $('.advencedWrapper,.list-box,.list-input .treeItem,.laydate_box').fadeOut();\n  $('.advenced-search,.selectCon,.selectCon_other').removeClass('active');\n}).on('click','.advencedWrapper',function(){\n  $('.list-box,.list-input .treeItem,.laydate_box').fadeOut();\n  $('.advenced-search,.selectCon,.selectCon_other').removeClass('active');\n  return false;\n}).on('click','.treeItem,.laydate_box',function(){\n  return false;\n});",
		"parameter" : "",
		"randomId" : "1545034761000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034761000"
	},
	"1545034768000" : {
		"activeLoadFlag" : true,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"mask_box\"><\/div>\n<div class=\"cpwswApp\">\n  <h4>扫码下载APP <span>&times;<\/span><\/h4>\n  <p><img src=\"/website/wenshu/images/cpwswApp.png\" id=\"cpwswAppImg\"/><\/p>\n<\/div>\n<div class=\"yjjyPop\">\n  <h4>意见建议 <span>&times;<\/span><\/h4>\n  <div class=\"yjjyPopBox\">\n    <div class=\"clearfix yjjyList\">\n      <div class=\"jyPop_left\">建议类型:<\/div>\n      <div class=\"jyPop_right\">\n        <p class=\"userType\" id=\"suggestType\"><span><i class=\"on\"><\/i>针对裁判文书公开上网工作<\/span><span><i><\/i>针对具体裁判文书<\/span><span><i><\/i>针对裁判文书网网站建设<\/span><\/p>\n        <div class=\"jbzxBox\">\n          <a href=\"http://jubao.court.gov.cn\" target=\"_blank\">人民法院工作人员违纪违法举报中心<\/a>\n        <\/div>\n      <\/div>\n    <\/div>\n    <div class=\"clearfix yjjyList\">\n      <div class=\"jyPop_left\">建议内容:<\/div>\n      <div class=\"jyPop_right\">\n        <textarea id=\"suggestContent\"><\/textarea><b id=\"tips-suggestContent\">*<\/b>\n      <\/div>\n    <\/div>\n    <div class=\"clearfix yjjyList\">\n      <div class=\"jyPop_left\">案件来源:<\/div>\n      <div class=\"jyPop_right\">\n        <input type=\"text\" id=\"suggestSource\"/>\n        <div class=\"tishi\">（案件来源：如果有案件来源，请正确填写。例如：（2015）兰民初第XX号）<\/div>\n      <\/div>\n    <\/div>\n    <div class=\"clearfix yjjyList\">\n      <div class=\"jyPop_left\">所属法院:<\/div>\n      <div class=\"jyPop_right\">\n        <input type=\"text\" id=\"court\"/> \n      <\/div>\n    <\/div>\n    <div class=\"clearfix yjjyList\">\n      <div class=\"jyPop_left\">备注:<\/div>\n      <div class=\"jyPop_right\">\n        <textarea id=\"remark\"><\/textarea>\n      <\/div>\n    <\/div>\n    <div class=\"clearfix yjjyList\">\n      <div class=\"btn-group\">\n        <span class=\"cancle\" id=\"submitBtn\">提交<\/span><span class=\"sure\"  id=\"resetBtn\">重置<\/span>\n      <\/div>\n    <\/div>\n  <\/div>\n<\/div>",
		"events" : [],
		"index" : 1,
		"layoutId" : "86d9103fca4fb504abae00c4d2026efc",
		"listDataLoadType" : "",
		"moduleId" : "181029AKA8HTAGF8",
		"name" : "扫码、意见建议",
		"onloadMethod" : "initYjjy1545034768000();",
		"parameter" : "",
		"randomId" : "1545034768000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034768000"
	},
	"1545034775000" : {
		"activeLoadFlag" : true,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"search-con clearfix\">\n  " +
				"<div class=\"search-wrapper clearfix\">\n    " +
				"<div class=\"advenced-search\" ><\/div>\n    " +
				"<div class=\"search-middle\">\n      " +
				"<input type=\"text\" class=\"searchKey search-inp\" placeholder=\"输入案由、关键词、法院、当事人、律师\" data-val=\"s21\"/>\n    <\/div>\n    " +
				"<div class=\"search-rightBtn search-click\" >\n      搜索\n    <\/div>\n <div class=\"helpBtn\"><a href=\"/website/wenshu/181109AWZA70BFK4/index.html\" target=\"_blank\"><img src=\"/website/wenshu/images/list-help.png\"/><\/a><\/div>\n <\/div>\n  " +
				"<div class='search-list' id='search-list'><\/div>\n  " +
				"<div class='advencedWrapper' >\n    " +
				"<div class=\"inputWrapper clearfix\">\n      " +
				"<div class=\"list-input clearfix\">\n        " +
				"<span class=\"titles fl\">全文检索<\/span>\n        " +
				"<div class=\"values-first fr\">\n          " +
				"<input type=\"text\" style='width:156px;height:28px;border:none;' id=\"qbValue\"/>\n          " +
				"<div class='selectCon'><span class=\"dropdown-text\" id=\"qbType\" data-val=\"\">全文<\/span><\/div>\n          " +
				"<ul style='display:none;' class='list-box' id=\"qwTypeUl\">\n            {{#if(wenshulist[\"dic\"] && wenshulist[\"dic\"]!=null){}}\n            {{#\n            \t$.each(wenshulist[\"dic\"][\"qw\"],function(i,item){\n            }}\n            \t{{#if(i==0){}}\n            " +
				"<li class='on' data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n            \t{{#}else{}}\n            \t\t<li data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n            \t{{#}}}\n            {{#});}}\n            {{#}}}\n          <\/ul>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">案由<\/span>\n        " +
				"<div class=\"values fr\" style='width:64%;'>\n          " +
				"<div class='selectCon_other  anyou' style='width:248px;float:right;'><span class=\"dropdown-text\"  data-val=\"\" data-level=\"\" id=\"s16\">请选择<\/span><\/div>\n          <div id=\"tree\" class=\"tree\" >\n            <div class=\"treeItem ay\">\n              " +
				"<div class=\"jstree ay\" id=\"ayTreeDiv\" data-val='{{JSON.stringify(wenshulist[\"dic\"][\"ay\"])}}'>\n                \n              <\/div>\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">案件名称<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s1\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">案号<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s7\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">法院名称<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s2\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">法院层级<\/span>\n        <div class=\"values fr\">\n          <div class='selectCon_other'><span class=\"dropdown-text\"  data-val=\"\" id=\"s4\">请选择<\/span><\/div>\n          <ul style='display:none;' class='list-box' id='gjjs_fycj'>\n            <li class='on' data-val=''>请选择<\/li>\n            {{#if(wenshulist[\"dic\"] && wenshulist[\"dic\"]!=null){}}\n            {{#\n            \t$.each(wenshulist[\"dic\"][\"fycj\"],function(i,item){\n            }}\n            \t<li data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n            {{#});}}\n            {{#}}}\n          <\/ul>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">案件类型<\/span>\n        <div class=\"values fr\">\n          <div class=\"values fr\">\n            <div class='selectCon_other' id=\"selectCon_other_ajlx\"><span class=\"dropdown-text\"  data-val=\"\" id=\"s8\">请选择<\/span><\/div>\n            <ul style='display:none;' class='list-box' id='gjjs_ajlx'>\n              <li class='on' data-val=\"\">请选择<\/li>\n              {{#if(wenshulist[\"dic\"] && wenshulist[\"dic\"]!=null){}}\n              {{#\n \t\t\t\t\t\t$.each(wenshulist[\"dic\"][\"ajlx\"],function(i,item){\n              }}\n                  <li data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n              {{#});}}\n              {{#}}}\n            <\/ul>\n          <\/div>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">审判程序<\/span>\n        <div class=\"values fr\">\n          <div class=\"values fr\">\n            <div class='selectCon_other spcx'><span class=\"dropdown-text\" data-level=\"\"  data-val=\"\" id=\"s9\">请选择<\/span><\/div>\n            <div id=\"tree\" class=\"tree\" >\n              <div class=\"treeItem spcx\">\n                <div class=\"jstree spcx\" id=\"spcxTreeDiv\" data-val='{{JSON.stringify(wenshulist[\"dic\"][\"spcx\"])}}'>\n                <\/div>\n              <\/div>\n            <\/div>\n          <\/div>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">文书类型<\/span>\n        <div class=\"values fr\">\n          <div class=\"values fr\">\n            <div class='selectCon_other'><span class=\"dropdown-text\"  data-val=\"\" id=\"s6\">请选择<\/span><\/div>\n            <ul style='display:none;' class='list-box' id=\"gjjs_wslx\">\n              <li class='on' data-val=\"\">请选择<\/li>\n              {{#if(wenshulist[\"dic\"] && wenshulist[\"dic\"]!=null){}}\n              {{#\n \t\t\t\t\t\t$.each(wenshulist[\"dic\"][\"wslx\"],function(i,item){\n              }}\n                  <li data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n              {{#});}}\n              {{#}}}\n            <\/ul>\n          <\/div>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">裁判日期<\/span>\n        <div class=\"values fr\" style=\"background: none;\">\n          <input class=\"laydate-icon ldt dropdown-text\" id=\"cprqStart\" type='text' style=\"width:117px;\" />至<input type='text' class=\"laydate-icon ldt ly-inp dropdown-text\" style=\"width:117px;\" id=\"cprqEnd\"/>\n        <\/div>\n      <\/div>\n      \n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">案例等级<\/span>\n        <div class=\"values fr\">\n          <div class=\"values fr\">\n            <div class='selectCon_other'><span class=\"dropdown-text\"  data-val=\"\" id=\"s44\">请选择<\/span><\/div>\n            <ul style='display:none;' class='list-box' id=\"gjjs_aldj\">\n              <li class='on' data-val=\"\">请选择<\/li>\n              {{#if(wenshulist[\"dic\"] && wenshulist[\"dic\"]!=null){}}\n              {{#\n \t\t\t\t\t\t$.each(wenshulist[\"dic\"][\"aldj\"],function(i,item){\n              }}\n                  <li data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n              {{#});}}\n              {{#}}}\n            <\/ul>\n          <\/div>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">公开类型<\/span>\n        <div class=\"values fr\">\n          <div class=\"values fr\">\n            <div class='selectCon_other'><span class=\"dropdown-text\"  data-val=\"\" id=\"s43\">请选择<\/span><\/div>\n            <ul style='display:none;' class='list-box' id=\"gjjs_gklx\">\n              <li class='on' data-val=\"\">请选择<\/li>\n              {{#if(wenshulist[\"dic\"] && wenshulist[\"dic\"]!=null){}}\n              {{#\n \t\t\t\t\t\t$.each(wenshulist[\"dic\"][\"gklx\"],function(i,item){\n              }}\n                  <li data-val='{{item[\"code\"]}}'>{{item[\"name\"]}}<\/li>\n              {{#});}}\n              {{#}}}\n            <\/ul>\n          <\/div>\n        <\/div>\n      <\/div>\n      \n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">审判人员<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s18\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">当事人<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s17\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">律所<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s20\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\">\n        <span class=\"titles fl\">律师<\/span>\n        <div class=\"values fr\">\n          <input type=\"text\" id=\"s19\"/>\n        <\/div>\n      <\/div>\n      <div class=\"list-input clearfix\" style='width:100%;'>\n        <span class=\"titles fl\" style='width:15%;'>法律依据<\/span>\n        <div class=\"values large_input fr\">\n          <input type=\"text\" placeholder=\"例如:请输入《中华人民共和国民事诉讼法》第一百七十条\" id=\"flyj\"/>\n        <\/div>\n      <\/div>\n    <\/div>\n    <div class='searchbtn'>\n      <a href=\"javascript:void(0)\" id=\"searchBtn\">检索<\/a>\n      <a href=\"javascript:void(0)\" id=\"resetBtn\">重置<\/a>\n    <\/div>\n  <\/div>\n<\/div>\n",
		"events" : [
				{
					"driveEelement" : ".searchKey.search-inp",
					"eventCode" : "//快速检索输入框值改变事件\ninitKeywordChangeFun1545034775000({\n  // 需要将事件传送到方法里边。\n  event: event\n});",
					"eventDesc" : "快速检索change事件",
					"eventName" : "search-inpChange",
					"eventType" : "keyup",
					"id" : "190809ADPM38KYW1",
					"pageModuleCfg" : null
				},
				{
					"driveEelement" : ".search-click",
					"eventCode" : "var keyword = $(\".search-inp\").val();\n// 判断快速检索查询文本是否不为空或为ie兼容提示语\nvar placeholder = $('.search-inp').attr(\"placeholder\");\nif(keyword != null && keyword != \"\" && keyword == placeholder){\n  keyword = \"\";// 点击快速检索无文本则刷新页面\n}\n//通过案由名称获取案由详细信息及s*的工具方法\nvar getSkeyByName = function(ayName){\n  var ay = wenshulist.dic.ayNameKeyMap[ayName];\n  // 部分智能提示接口返回的案由在数据字典xml里找不到，如制造毒品,返回初始化后的对象\n  if(ay == null){\n    var errorResult = {};\n    errorResult[\"id\"] = ayName;\n    errorResult[\"parent\"] = \"#\";\n    errorResult[\"skey\"] = \"s11\";\n    errorResult[\"text\"] = ayName;\n    return errorResult;\n  }\n  ay[\"skey\"] = 11;\n  var ayParent = ay[\"parent\"] + \"\";\n  for(var i = 0; i < 6; i++){\n    var hasParent = wenshulist.dic.ayValueMap[ayParent] != null;\n    if(hasParent){\n      ay[\"skey\"] ++;\n      ayParent = wenshulist.dic.ayValueMap[ayParent][\"parent\"];\n    }\n  }\n  ay[\"skey\"] = \"s\" + ay[\"skey\"];\n  return ay;\n}\n\n\n\nvar solrCode = $('.search-inp').attr(\"data-val\");\nvar s16 = \"\";\nif(keyword.indexOf(\":\")!=-1){\n  keyword = keyword.substring(keyword.indexOf(\":\")+1, keyword.length);\n   //智能检索 案由 单独处理\n  if(solrCode==\"s11\"||solrCode==\"s12\"||solrCode==\"s13\"||solrCode==\"s14\"||solrCode==\"s15\"){\n    var ay= getSkeyByName(keyword);\n    s16 = keyword;// 智能提示案由多传s16用于回写\n    keyword=ay[\"id\"];\n  }\n}\nif($.trim(keyword).length==0){\n  window.location.reload();\n  //location.href = $website[\"domain\"]+$website[\"enName\"]+\"/181217BMTKHNT2W0/index.html\";\n}else{\n  \n  // 快速检索要拼接已有的查询条件中的s21,改为带入旧的查询条件后不用了\n  /* if(solrCode == \"s21\"){\n    var queryCondition = $.WebSite.invoke(\"1545035259000\", \"addParams\");// 获取当前已有的查询条件\n    var searchItemKeywordStr = \"\";\n    $.each(queryCondition, function(i, item){// 从当前已有的查询条件中获取s21\n      if(item[\"key\"] == solrCode){\n\n        searchItemKeywordStr += item[\"value\"] + \" \";\n     }\n    });\n    if(searchItemKeywordStr != null && searchItemKeywordStr != \"\"){\n      keyword = searchItemKeywordStr + keyword;\n    }\n  }*/\n  var reg = new RegExp(\"&\",\"g\");\n  keyword = keyword.replace(reg,\"%26\");\n  // location.href = encodeURI($website[\"domain\"]+$website[\"enName\"]+\"/181217BMTKHNT2W0/index.html?\"+solrCode+\"=\"+keyword + ((s16==null||s16==\"\")?\"\":(\"&s16=\" + s16)));\n  addParams1545035259000(JSON.parse(\"{\\\"\" + solrCode + \"\\\": \\\"\" + keyword + \"\\\"}\"));\n  // 重置快速检索为空\n  $(\".search-inp\").val(\"\");\n  $('.search-inp').attr(\"data-val\", \"s21\");\n  \n  $page.loadData();\n}\n\n",
					"eventDesc" : "快速检索点击事件",
					"eventName" : "search-rightBtnClick",
					"eventType" : "click",
					"id" : "190809ADPM38KYW2",
					"pageModuleCfg" : null
				},
				{
					"driveEelement" : "#searchBtn",
					"eventCode" : "//获取urlParam\nvar urlParam = getUrlParam1545034775000();\nif(urlParam.length>0){\n  urlParam = urlParam.substring(1,urlParam.length);\n  // 与首页相同的跳转到新页面的高级检索\n  // location.href = encodeURI($website[\"domain\"]+$website[\"enName\"]+\"/181217BMTKHNT2W0/index.html?\"+urlParam);\n  // 在本页刷新的高级检索，检索条件添加在条件bar\n\n  // 将url格式的参数转为添加查询条件所需的\n  var paramArr = urlParam.split(\"&\");\n  var paramObj = {};\n  $.each(paramArr, function(i, item){\n    var itemParam = item.split(\"=\");\n    var paramKey = itemParam[0];\n    var paramValue = itemParam[1];\n    if(paramKey != null && paramKey != \"\" && paramValue != null && paramValue != \"\"){\n      paramObj[paramKey] = paramValue;\n    }\n  });\n  // 添加查询条件\n  addParams1545035259000(paramObj);\n  $page.loadData();\n  // 关闭高级检索框\n  if($('.search-rightBtn').hasClass('live')){\n    $('.search-rightBtn').removeClass('live')\n    $('.search-rightBtn').addClass('search-click')\n  }\n  $('.advencedWrapper,.list-box,.list-input .treeItem,.laydate_box').fadeOut();\n  $('.advenced-search,.selectCon,.selectCon_other').removeClass('active');\n}else{\n  $.WebSite.msg({type:7, msg:'无符合条件的数据，请输入检索条件！'});\n}",
					"eventDesc" : "高级检索事件",
					"eventName" : "searchBtnClick",
					"eventType" : "click",
					"id" : "190809ADPM38KYW0",
					"pageModuleCfg" : null
				} ],
		"index" : 1,
		"layoutId" : "734b53d7638ce8035aef047352d08a7e",
		"listDataLoadType" : "",
		"moduleId" : "1810319X7R91SK40",
		"name" : "快速、高级检索",
		"onloadMethod" : "initSearch1545034775000();\nlayui.use('laydate',function(){\n  var laydate = layui.laydate;\n  var startTime = laydate.render({\n    elem: '#cprqStart',\n    theme: '#886342',\n    btns:['clear','confirm'],\n    done: function(value, date){\n      endTime.config.min = {\n        year: date.year,\n        month: date.month - 1,//重点！！！\n        date: date.date,\n        hours:date.hours, \n        minutes:date.minutes, \n        seconds:date.seconds\n      }\n      var stime = new Date(Date.parse(value.replace(\"-\", \"/\")));            \n      var etime = new Date(Date.parse($(\"#cprqEnd\").val().replace(\"-\", \"/\")));   \n      if(stime>etime){ //开始时间若大于结束时间，则把开始时间的日期回填到结束时间\n        $(\"#cprqEnd\").val(value);\n      }\n    }\n  });\n  var endTime = laydate.render({\n    elem: '#cprqEnd',\n    theme: '#886342',\n    btns:['clear','confirm'],\n    min: $(\"#cprqStart\").val(), //可选择的最小日期为开始日期\n  \n  });\n});\n$('.list-input .jstree').jstree();\nvar arr = wenshulist.dic.spcx;\nvar spcxs = [];\nfor(var key in arr){\n  var values = arr[key];\n  for(var i = 0 ; i < values.length; i++){\n    spcxs[values[i].id] = values[i].text;\n  }\n};\nwindow.spcxs = spcxs;",
		"parameter" : "",
		"randomId" : "1545034775000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034775000"
	},
	"1545035259000" : {
		"activeLoadFlag" : true,
		"asyncFlag" : false,
		"beforeMethod" : " ",
		"cfg" : "",
		"context" : "<div class=\"listText\">\n  <div class=\"LT_box\">\n    <div class=\"LT_btn clearfix common_lt\">\n      <div class=\"fl LT_Filter_left\">已选条件：<\/div>\n      <a id=\"save-Btn\" href=\"javascript:void(0)\" {{# if($globalNet ==\"inner\"){ }}style=\"display: none;\"{{# } }}>保存搜索条件<\/a>\n      <a id=\"clear-Btn\" href=\"javascript:void(0)\">清空搜索条件<\/a>\n    <\/div>\n    <div class=\"LT_Filter clearfix\">\n      <div class=\"LT_Filter_left\"><\/div>\n      <div class=\"LT_Filter_right clearfix\">\n\n      <\/div>\n    <\/div>\n  <\/div>\n<\/div>",
		"events" : [
				{
					"driveEelement" : ".fa.fa-close",
					"eventCode" : "// 删除查询项HTML元素\n$(this).parent().remove();\n$('.list-box li').removeClass('on');\n// 查询参数回显, 刷新文书列表\n$page.loadData();\n",
					"eventDesc" : "单个查询条件删除事件",
					"eventName" : "facloseOnClick",
					"eventType" : "click",
					"id" : "190809ADPMN7HTTF",
					"pageModuleCfg" : null
				},
				{
					"driveEelement" : "#clear-Btn",
					"eventCode" : "$(\".LT_Filter_right.clearfix p\").remove();\n$('.list-box li').removeClass('on');\n// 查询参数回显, 刷新文书列表\n$page.loadData();",
					"eventDesc" : "清空搜索条件",
					"eventName" : "clearBtnOnClick",
					"eventType" : "click",
					"id" : "190809ADPMN7HTTC",
					"pageModuleCfg" : null
				},
				{
					"driveEelement" : "#save-Btn",
					"eventCode" : "// 未登录跳转到登录页start\nvar userInfo = $.WebSite.getUserInfo();\nif(userInfo == null || userInfo.loginId == \"anonymousUser\"){\n  window.location.href = $website[\"domain\"] + $website[\"home\"] + \"?\" + window.location.href;\n}\n// 未登录跳转到登录页end\nif($(\".LT_Filter_right.clearfix p\").length == 0){\n  $.WebSite.msg({msg:\"当前搜索条件为空\"});\n  return;\n}\nvar searchItem = [];\n$(\".LT_Filter_right.clearfix p\").each(function(i, item){\n  var m = {};\n  m[\"key\"] = $(item).attr(\"data-key\");\n  m[\"value\"] = $(item).attr(\"data-value\");\n  m[\"oper\"] = $(item).attr(\"data-oper\");\n  m[\"title\"] = $.trim($(item).text());\n  searchItem.push(m);\n});\n\n$.WebSite.saveData({\n  allowTip: false,\n  param:{\n    templateName:$(\".LT_Filter_right.clearfix p\").text(),\n    queryCondition:JSON.stringify(searchItem),\n    lastQueryCount:$(\".fr.con_right span\").text(),\n    cfg:\"com.lawyee.judge.mem.web.parse.dto.QueryTemplateDsoDTO@insert\"  \n  },\n  success: function(res){\n    $.WebSite.msg({msg:\"收藏成功\",type: 1});\n  },\n  error:function(data){\n    $.WebSite.alert({ msg: data.description||\"数据保存失败\", type: -1 });\t\n  }\n});",
					"eventDesc" : "保存搜索条件",
					"eventName" : "saveBtnOnClick",
					"eventType" : "click",
					"id" : "190809ADPMN7HTTD",
					"pageModuleCfg" : null
				} ],
		"index" : 1,
		"layoutId" : "1161ebf6927364f0ac69149b6e929f25",
		"listDataLoadType" : "",
		"moduleId" : "1810098AB76SZT2W",
		"name" : "文书列表上部查询条件",
		"onloadMethod" : "// 初始化数据字典\nvar moduleData = wenshulist;\n// 加载数据\nvar loadData = $page.loadData = function(postData){\n  // 刷新文书列表，如果返回false，标识不加载数据\n  var loadFlag = loadData1545184311000({\n    \"searchMid\": $mid, \n    \"seniorMid\": \"1545034775000\",\n    postData: postData||{}\n  });\n  // 如果默认不加载\n  if(loadFlag === false){\n    return ;\n  }\n  /* 刷新树 */ \n  var queryCondition = $.WebSite.invoke($mid, \"addParams\");\n  var treeDatas = {};\n  $.WebSite.getData({\n    cfg:\"com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem\",\n    param: {\"groupFields\": \"s45;s11;s4;s33;s42;s8;s6;s44\", \"queryCondition\": JSON.stringify(queryCondition)},\n    async: false,\n    rollback: function(data){\n    treeDatas = data;\n  }});\n  // 关键字树\n  initTree1545094675000({\n    icon: \"fa fa-file-text-o\",\n    title: \"关键字\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s45\"],\n    getGroupFields: function(node){\n      return \"s45\";\n    },\n    // 将特殊的数据字典转为树模块所用的\n    builderData: function(map){\n      var ds = new Array();\n      $.each(map, function(key, value){\n        ds.push({\n          children: false,\n          name: key,\n          text: key +\"(\" + (value||0) + \")\"\n        });\n      });\n      return ds;\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      loadData({\n        \"s45\": obj.node.original.name\n      });\n    }\n  });\n\n  // 文书类型树\n  initTree1545095166000({\n    icon: \"fa fa-paste\",\n    title: \"文书类型\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s6\"],\n    getGroupFields: function(node){\n      return \"s6\";\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      loadData({\n        \"s6\": obj.node.original.code\n      });\n    },\n    // 将特殊的数据字典转为树模块所用的\n    builderData: function(map){\n      var ds = new Array();\n      $.each(moduleData[\"dic\"][\"wslx\"], function(i, item){\n        if(item[\"name\"] == \"全部\"){// 排除全部\n          return true;\n        }\n        // 接口返回为0的数据项不展示\n        var itemCount = map[item[\"code\"]];\n        if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n          return true;\n        }\n        ds.push($.extend(item, {\n          children: false,\n          text: item[\"name\"] +\"(\" + (map[item[\"code\"]]||0) + \")\"\n        }));\n      });\n      return ds;\n    }\n  });\n\n  // 审判程序树\n  initTree1545034782000({\n    icon: \"fa fa-gavel\",\n    title: \"审判程序\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s8\"],\n    data: moduleData[\"dic\"][\"ajlx\"],\n    getGroupFields: function(node){\n      var thisGroupFields = \"s\" + (node.parents.length + 8);\n      var childGroupFields = \"s\" + (node.parents.length + 9);\n      if(thisGroupFields == \"s10\"){\n        return thisGroupFields;\n      }\n      return thisGroupFields + \",\" + childGroupFields;\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      if(obj.node.parents.length == 1){\n        loadData({\n          \"s8\": obj.node.original.id\n        });\n      }else if(obj.node.parents.length == 2){\n        loadData({\n          \"s9\": obj.node.original.id\n        });\n      }else{\n        loadData({\n          \"s10\": obj.node.original.id\n        });\n      }\n    },\n    // 将特殊的数据字典转为树模块所用的\n    builderData: function(map, obj, hasChildMap){\n\n      var ds = new Array();\n      // 首次展示案件类型\n      if(obj.parents.length == 0){\n        // 案件类型数据字典\n        $.each(moduleData[\"dic\"][\"ajlx\"], function(i, item){\n          // 接口返回为0的数据项不展示\n          var itemCount = map[item[\"code\"]];\n          if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n            return true;\n          }\n          ds.push({\n            id: item[\"code\"],\n            name: item[\"name\"],\n            children: true,\n            text: item[\"name\"] +\"(\" + (map[item[\"code\"]]||0) + \")\"\n          });\n        });\n      }\n      // 展示一级审判程序\n      else if(obj.parents.length == 1){\n        var spcxDatas = wenshulist.dic.spcx[obj[\"id\"]];\n        $.each(spcxDatas, function(i, item){\n          // 接口返回为0的数据项不展示\n          var itemCount = map[item[\"id\"]];\n          if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n            return true;\n          }\n          ds.push({\n            parent: obj[\"id\"],\n            id: item[\"id\"],\n            name: item[\"text\"],\n            children: hasChildMap[item[\"id\"]],\n            text: item[\"text\"] +\"(\" + (map[item[\"id\"]]||0) + \")\"\n          });\n        });\n      }\n      // 展示二级审判程序\n      else{\n        var spcxDatas = wenshulist.dic.spcx[obj[\"parent\"]];\n        $.each(spcxDatas, function(i, item){\n          // 不是当前节点的子级的不展示\n          if(item[\"parent\"] != obj[\"id\"]){\n            return true;\n          }\n          // 接口返回为0的数据项不展示\n          var itemCount = map[item[\"id\"]];\n          if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n            return true;\n          }\n          ds.push({\n            parent: obj[\"id\"],\n            id: item[\"id\"],\n            name: item[\"text\"],\n            children: hasChildMap[item[\"id\"]],\n            text: item[\"text\"] +\"(\" + (map[item[\"id\"]]||0) + \")\"\n          });\n        });\n      }\n      return ds;\n    }\n  });\n\n  // 案由树\n  initTree1545034785000({\n    icon: \"fa fa-list-alt\",\n    title: \"案由\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s8\"],\n    data: moduleData[\"dic\"][\"ay\"],\n    getGroupFields: function(node){\n      node.state.opened=false;\n      var thisGroupFields = \"s1\" + (node.parents.length + 1);\n      var childGroupFields = \"s1\" + (node.parents.length + 2);\n      if(thisGroupFields == \"s15\"){\n        return thisGroupFields;\n      }\n      return thisGroupFields + \",\" + childGroupFields;\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n   \n      var searchKey = \"s\" + (10 + obj.node.parents.length);\n      var param = {};\n      param[searchKey] = obj.node.original.id;\n      loadData(param);\n    }\n  });\n\n  // 法院层级树\n  initTree1545034788000({\n    icon: \"fa fa-balance-scale\",\n    title: \"法院层级\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s4\"],\n    getGroupFields: function(node){\n      return \"s\" + (node.parents.length + 4);\n    },\n    builderData: function(map){\n      var ds = new Array();\n      $.each(moduleData[\"dic\"][\"fycj\"], function(i, item){\n        if(item[\"name\"] == \"全部\"){// 排除全部\n          return true;\n        }\n        // 接口返回为0的数据项不展示\n        var itemCount = map[item[\"code\"]];\n        if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n          return true;\n        }\n        ds.push($.extend(item, {\n          children: false,\n          text: item[\"name\"] +\"(\" + (map[item[\"code\"]]||0) + \")\"\n        }));\n      });\n      return ds;\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      loadData({\n        \"s4\": obj.node.original.code\n      });\n    }\n  });\n\n  // 地域及法院树\n  initTree1545095958000({\n    icon: \"fa fa-bank\",\n    title: \"地域及法院\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s33\"],\n    getGroupFields: function(node){\n      if(node.parents.length == 0){\n        return \"s33\";\n      }else{\n        var thisGroupFields = \"s\" + (node.parents.length + 38);\n        var childGroupFields = \"s\" + (node.parents.length + 39);\n        if(thisGroupFields == \"s40\"){\n          return thisGroupFields;\n        }\n        return thisGroupFields + \",\" + childGroupFields;\n      }\n    },\n    getNodeParams: function(obj, groupField){\n      var data = {};\n      if(obj.id == \"#\")  return data;\n      if(obj.parents.length == 1){\n        data[\"s33\"] = obj[\"original\"][\"shortName\"];\n      } else {\n        data[\"s39\"] = obj[\"id\"];\n      }\n      return data;\n    },\n    builderData: function(map, obj, hasChildMap){\n      var ds = new Array();\n      // 首次展示地区\n      if(obj.parents.length == 0){\n        var zgfyCount = map[\"最高人民法院\"];\n        if(zgfyCount != null && zgfyCount != 0 && zgfyCount != \"0\"){\n          // 最高人民法院\n          ds.push({\n            id: \"0\",\n            name: \"最高人民法院\",\n            shortName: \"最高人民法院\",\n            children: false,\n            text: \"最高人民法院\" +\"(\" + (map[\"最高人民法院\"]||0) + \")\"\n          });\n        }\n        // 省份数据字典\n        $.each(wenshulist.areas, function(i, item){\n          // 接口返回为0的数据项不展示\n          var itemCount = map[item[\"dataValue\"]];\n          if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n            return true;\n          }\n          ds.push({\n            id: item[\"fyCode\"],\n            name: item[\"title\"],\n            shortName: item[\"dataValue\"],\n            children: true,\n            text: item[\"title\"] +\"(\" + (map[item[\"dataValue\"]]||0) + \")\"\n          });\n        });\n      }\n      // 其他展示法院\n      else {\n        var fyDatas = [];\n        //加载法院数据字典\n        $.WebSite.getData({\n          cfg:\"com.lawyee.judge.dc.parse.dto.LoadDicDsoDTO@loadFyByCode\",\n          param:{\"parentCode\": obj[\"id\"]},\n          async: false,\n          rollback:function(fyDataItem){\n          fyDatas = fyDataItem[\"fy\"];\n        }\n                          });\n        $.each(fyDatas, function(i, item){\n          // 接口返回为0的数据项不展示\n          var itemCount = map[item[\"code\"]];\n          if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n            return true;\n          }\n          ds.push({\n            parent: obj[\"id\"],\n            id: item[\"code\"],\n            name: item[\"name\"],\n            // children: obj.parents.length == 1 ? true : false,\n            children: hasChildMap[item[\"code\"]],\n            text: item[\"name\"] +\"(\" + (map[item[\"code\"]]||0) + \")\"\n          });\n        });\n      }\n      return ds;\n\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      if(obj.node.parents.length == 1){\n        loadData({\n          \"s33\": obj.node.original.shortName\n        });\n      }else if(obj.node.parents.length == 2){\n        window.currentFyName = obj.node.original.name;\n        loadData({\n          \"s39\": obj.node.original.id\n        });\n      }else if(obj.node.parents.length == 3){\n        window.currentFyName = obj.node.original.name;\n        loadData({\n          \"s40\": obj.node.original.id\n        });\n      }\n    }\n  });\n\n  // 裁判年份树\n  initTree1545096058000({\n    icon: \"fa fa-calender\",\n    title: \"裁判年份\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s42\"],\n    getGroupFields: function(node){\n      return \"s\" + (node.parents.length + 42);\n    },\n    builderData: function(map){\n      var ds = new Array();\n\n      var yearArr = [];\n      var year = new Date().getFullYear();\n      for(var i = year;i >= 1996; i--){\n        yearArr.push(i);\n      }\n\n      $.each(yearArr, function(i, item){\n        // 接口返回为0的数据项不展示\n        var itemCount = map[item];\n        if(itemCount == null || itemCount == 0 || itemCount == \"0\"){\n          return true;\n        }\n        ds.push($.extend(item, {\n          children: false,\n          name: item,\n          text: item +\"(\" + (map[item]||0) + \")\"\n        }));\n      });\n      return ds;\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      loadData({\n        \"s42\": obj.node.original.name\n      });\n    }\n  });\n\n  // 案例等级树\n  initTree1545096160000({\n    icon: \"fa fa-thumbs-o-up\",\n    title: \"案例等级\",\n    searchMid: $mid, // 查询条件所在模块ID\n    treeDatas: treeDatas[\"s44\"],\n    getGroupFields: function(node){\n      return \"s\" + (node.parents.length + 44);\n    },\n    builderData: function(map){\n      var ds = new Array();\n      // 接口返回为0的数据项不展示\n      var itemCount1 = map[\"01\"];\n      if(itemCount1 != null && itemCount1 != 0 && itemCount1 != \"0\"){\n        ds.push({\n          children: false,\n          code: \"01\",\n          name: \"指导性案例\",\n          text: \"指导性案例\" +\"(\" + (map[\"01\"]||0) + \")\"\n        });\n      }\n      // 接口返回为0的数据项不展示\n      var itemCount2 = map[\"02\"];\n      if(itemCount2 != null && itemCount2 != 0 && itemCount2 != \"0\"){\n        ds.push({\n          children: false,\n          code: \"02\",\n          name: \"优秀文书\",\n          text: \"优秀文书\" +\"(\" + (map[\"02\"]||0) + \")\"\n        });\n      }\n      return ds;\n    },\n    // 节点点击事件\n    nodeClick: function(obj){\n      loadData({\n        \"s44\": obj.node.original.code\n      });\n    }\n  });\n  // 将当前查询条件存入浏览器，供全文页使用，wenshuListInfo：文书列表信息，searchItem：查询条件\n  $.WebSite.localStorage(\"wenshuListInfo\", {\"searchItem\": \"\"});\n  var highLightArr = [];\n  var allSearchItem = addParams1545035259000();\n  $.each(allSearchItem, function(i, item){\n    if(item[\"key\"] == \"s53\" || item[\"key\"] == \"s21\" || item[\"key\"] == \"s22\" || item[\"key\"] == \"s23\" || item[\"key\"] == \"s25\" || item[\"key\"] == \"s26\" || item[\"key\"] == \"s27\" || item[\"key\"] == \"s28\" || item[\"key\"] == \"s45\" || item[\"key\"] == \"s54\"){\n      highLightArr.push(item[\"value\"]);\n    }\n  });\n  $.WebSite.localStorage(\"wenshuListInfo\", {\"searchItem\": highLightArr});\n  // 刷新文书列表后高亮关键字(标题和裁判理由)\n  $.WebSite.getModule(\"1545184311000\").find(\".list_title.clearfix h4 a\").each(function(i, item){\n    $(this).html($.WebSite.keywordHighlight($(this).text()||'', highLightArr||''));\n  });\n  $.WebSite.getModule(\"1545184311000\").find(\".list_reason p\").each(function(i, item){\n    $(this).html($.WebSite.keywordHighlight($(this).text()||'', highLightArr||''));\n  });\n}\n//国双搜索监测探针\nfunction guoshuang(){\n  if($globalNet=='outer1'){\n    var listData = $.WebSite.getModuleData(\"1545184311000\");\n    var dataItem=listData.queryResult.resultList;\n    _gsq.push([\"T\",\"GWD-002808\",\"trackSiteSearch\",\"keyword\",null,\"utf-8\",false]);\n    var _gsElements = document.getElementsByClassName(\"dataItem\");\n    if (_gsElements.length > 0) {\n      _gsq.push([\"T\",\"GWD-002808\",\"bindSearchResults\",_gsElements[0]]);\n    }\n  }\n};\n// 监听页面刷新事件，刷新前要更新$listparams\nwindow.onbeforeunload = function(){\n  //window.localStorage.setItem(\"$isRefreshPage\", \"true\");\n  //window.localStorage.setItem(\"$refreshPageTime\", new Date().getTime());\n  //window.localStorage.setItem(\"$listparams\", JSON.stringify(addParams1545035259000()));\n  \n  var pageId = $.WebSite.getParameter(\"pageId\");\n  var searchItems = JSON.parse(window.localStorage.getItem(\"$listPageSearchItem\")||\"{}\");\n  searchItems[pageId] = addParams1545035259000();\n  window.localStorage.setItem(\"$listPageSearchItem\",JSON.stringify(searchItems));\n  \n  \n};\n// 查询参数回显, 刷新文书列表\n// 通过刷新或关闭时的时间判断是刷新页面还是从其他地方跳转过来的\n// 如果是刷新页面，从localStorage取刷新前的查询条件，否则就是从其他地方跳转过来的，从url取查询条件\n//var refreshPageTime = window.localStorage.getItem(\"$refreshPageTime\");\n/*if(refreshPageTime != null && refreshPageTime != \"\"){\n  var oldTime = new Date(parseInt(refreshPageTime)).getTime();\n  var nowTime = new Date().getTime();\n  if(nowTime - oldTime > 1000){\n    window.localStorage.setItem(\"$isRefreshPage\", \"false\");\n  }\n}*/\nvar pageId = $.WebSite.getParameter(\"pageId\");\nvar searchItems = JSON.parse(window.localStorage.getItem(\"$listPageSearchItem\")||\"{}\");\nvar thisPageSearchItem = searchItems[pageId];\n//if(window.localStorage.getItem(\"$isRefreshPage\") == \"true\"){\nif((thisPageSearchItem !== null && thisPageSearchItem !== \"\" && thisPageSearchItem !== undefined) || thisPageSearchItem ===[]){\n  //window.localStorage.setItem(\"$isRefreshPage\", \"false\"); \n  //var $listparams = JSON.parse(window.localStorage.getItem(\"$listparams\")||\"[]\");\n  $.each(thisPageSearchItem, function(i, item){\n    addParams1545035259000(JSON.parse(\"{\\\"\" + item[\"key\"] + \"\\\": \\\"\" + item[\"value\"] + \"\\\"}\"));\n  });\n  window.localStorage.setItem(\"$listPageSearchItem\",\"{}\");\n}else{\n  addParams1545035259000($.WebSite.getParameter());\n}\nloadData();// 刷新文书列表",
		"parameter" : "",
		"randomId" : "1545035259000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545035259000"
	},
	"1545094675000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 1,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "关键字树",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545094675000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545094675000"
	},
	"1545034785000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 2,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "案由树",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545034785000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034785000"
	},
	"1545184311000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : true,
		"beforeMethod" : "",
		"cfg" : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@queryDoc",
		"context" : "{{# \n  " +
				"var sortFields = d.queryParams.sortFields;\n  " +
				"var showCount = 0;\n\n  " +
				"if(d.queryResult.resultCount > 600){\n    " +
				"showCount = 600;\n  " +
				"}\n}}\n" +
				"<div class=\"LM_con clearfix\"" +
				" {{# if($globalNet ==\"outer\"){ }}style=\"background: none;\"{{# } }}>\n  " +
				"<div class=\"fl con_left clearfix\" {{# if($globalNet ==\"outer\"){ }}style=\"display: none;\"{{# } }}>\n    " +
				"<a href=\"../181217BMTKHNT2W0/index.html\"> <\/a>\n    " +
				"<a id=\"chartListBtn\" href=\"javascript:;\"> <\/a>\n  " +
				"<\/div>\n  " +
				"<div class=\"fr con_right\">共检索到 <span>{{ d.queryResult.resultCount }}<\/span> 篇文书{{# if(showCount != 0){ }}，显示前{{ showCount }}条{{# } }}<\/div>\n<\/div>\n" +
				"<div class=\"LM_tool clearfix\">\n  " +
				"<div class=\"fl tool_PX {{# if(sortFields =='s50:desc'){ }}tool_On{{# } }}{{# if(sortFields =='s50:asc'){ }}tool_OnUp{{# } }}\" data-value=\"s50\">\n    " +
				"<a href=\"javascript:;\">法院层级<\/a>\n  " +
				"<\/div>\n  " +
				"<div class=\"fl tool_PX {{# if(sortFields =='s51:desc'){ }}tool_On{{# } }}{{# if(sortFields =='s51:asc'){ }}tool_OnUp{{# } }}\" data-value=\"s51\">\n    " +
				"<a href=\"javascript:;\">裁判日期<\/a>\n  <\/div>\n  <div class=\"fl tool_PX {{# if(sortFields =='s52:desc'){ }}tool_On{{# } }}{{# if(sortFields =='s52:asc'){ }}tool_OnUp{{# } }}\" data-value=\"s52\">\n    <a href=\"javascript:;\">审判程序<\/a>\n  <\/div>\n  <!-- <div class=\"fl tool_PX {{# if(sortFields =='s52:asc'){ }}tool_On{{# } }}{{# if(sortFields =='s52:desc'){ }}tool_OnUp{{# } }}\" data-value=\"s52\">\n    <a href=\"javascript:;\">审判程序<\/a>\n  <\/div> -->\n  <div class=\"fr tool_All\">\n    <a class=\"AllSelect\" href=\"javascript:;\"><input type=\"checkbox\" id=\"AllSelect\" /><label for=\"AllSelect\">全选<\/label><\/a>\n    <a class=\"AllKeep\" href=\"javascript:;\" {{# if($globalNet ==\"inner\"){ }}style=\"display: none;\"{{# } }}>批量收藏<\/a>\n    <a class=\"AllDownload\" href=\"javascript:void(0);\">批量下载<\/a>\n  <\/div>\n<\/div>\n{{# if(d.queryResult.resultList.length == 0){ }}\n      暂无数据！\n{{# } }}\n{{# $.each(d.queryResult.resultList, function(i, item){ }}\n<div class=\"LM_list\">\n  <div class=\"List_label clearfix\">\n    <div class=\"labelOne\"><img src=\"../images/list/one.png\" /><\/div>\n    <div class=\"labelTwo\">\n      {{ window.spcxs == null? item[10] || item[9] || '' : (spcxs[item[10] || item[9]] || '') }}\n    <\/div>\n    <div class=\"labelThree\"><img src=\"../images/list/three.png\" /><\/div>\n    <!-- <span class=\"on_1\">推荐案例<\/span> -->\n    {{# if(item[44] != null){ }}\n      {{# if(item[44].indexOf(\"01\") != -1){ }}\n      <span class=\"on_2\">指导性案例<\/span>\n      {{# } }}\n      {{# if(item[44].indexOf(\"02\") != -1){ }}\n      <span class=\"on_1\"><i class=\"fa fa-star\"> <\/i> 优秀文书<\/span>\n      {{# } }}\n    {{# } }}\n  <\/div>\n  <div class=\"list_title clearfix\">\n    <a class=\"AllSelect\" href=\"javascript:void(0)\" ><input type=\"checkbox\" class=\"ListSelect\" data-value=\"{{ item['rowkey'] || '' }}\" /><\/a>\n    {{# var wenshuTitle = item[1];\n    \t\n    }}\n    " +
				"<h4><a href=\"../181107ANFZ0BXSK4/index.html?docId={{ item['rowkey'] || '' }}\" class=\"caseName\" target=\"_blank\">" +
				"{{ wenshuTitle || '' }}<\/a><\/h4>\n  " +
				"<\/div>\n  " +
				"<div class=\"list_subtitle\">\n    " +
				"<span class=\"slfyName\">{{ item[2] || '' }}<\/span>\n    " +
				"<span class=\"ah\">{{ item[7] || '' }}<\/span>\n    " +
				"<span class=\"cprq\">{{ item[31] || '' }}<\/span>\n  " +
				"<\/div>\n  " +
				"<div class=\"list_reason\">\n      {{# if(item[43]==\"02\" ){ }}\n    " +
				"<h4>[不公开理由]<\/h4>\n    {{#  var wenshuCply = wenshulist.dic.bgklyMap[item[32]];\n    \tif(wenshuCply != null && wenshuCply.length > 130){\n    \t  wenshuCply = wenshuCply.substring(0, 130) + \"...\";\n    \t}\n  }else{ }}\n   " +
				"<h4>[裁判理由]<\/h4>\n    {{#  var wenshuCply = item[26];\n    \tif(wenshuCply != null && wenshuCply.length > 130){\n    \t  wenshuCply = wenshuCply.substring(0, 130) + \"...\";\n    \t}\n    } }}\n   \n        <p>{{ wenshuCply || '' }}<\/p>\n  <\/div>\n  \n  {{# \n    var thisWenshuRel = [];\n    " +
				"$.each(d.relWenshu, function(wenshuKey, relWenshuItem){\n      " +
				"if(wenshuKey == item['rowkey']){\n        " +
				"thisWenshuRel = relWenshuItem;\n      }\n    });\n  }}\n\n  \n  \n  " +
				"<div class=\"list_Association\">\n    {{# if(thisWenshuRel.length > 0){ }}\n    " +
				"<h4>[关联文书]<\/h4>\n    {{# }else{ }}\n    " +
				"<h4 style=\"height: 40px;\"><\/h4>\n    {{# } }}\n      {{# $.each(thisWenshuRel, function(relI, relItem){ }}\n        " +
				"<div class=\"guanLian\">\n          <span>{{# if(item['rowkey'] == relItem[5]){ }}本篇{{# } }}<\/span><b><\/b>\n          " +
				"<a  href=\"../181107ANFZ0BXSK4/index.html?docId={{ relItem['rowkey'] || '' }}\" target=\"_blank\" title=\"\"><i class=\"guanlianAnyou\">{{ window.spcxs == null? relItem[10] || relItem[9] || '' : (spcxs[relItem[10] || relItem[9]] || '') }}<\/i><i>{{ relItem[2] || '' }} <\/i><i>{{ relItem[7] || '' }}<\/i><i>{{ relItem[31] || '' }}<\/i><i>{{ wenshulist.dic.jaMap[relItem[46]] || '' }}<\/i><\/a>\n        <\/div>\n      {{# }) }}\n  <\/div>\n  \n  \n  <div class=\"List_label2 clearfix\">\n    <div class=\"fr\">\n      <a data-value=\"{{ item['rowkey'] || '' }}\" class=\"a_sc\" href=\"javascript:void(0)\" {{# if($globalNet ==\"inner\"){ }}style=\"display: none;\"{{# } }}><i class=\"fa fa-heart-o\"> <\/i> 收藏<\/a>\n      <a data-value=\"{{ item['rowkey'] || '' }}\" class=\"a_xz\" href=\"javascript:void(0)\"><i class=\"a_xzBox\"><\/i> 下载<\/a>\n    <\/div>\n  <\/div>\n<\/div>\n{{# }) }}\n{{# if(d.queryResult.resultList.length != 0){ }}\n<!--分页-->\n{{# \n  var pageNum = d.queryParams.pageNum;\n  var pageSize = d.queryParams.pageSize;\n  var last = Math.ceil(d.queryResult.resultCount / d.queryParams.pageSize);\n  if(showCount != 0){\n    last = Math.ceil(showCount / d.queryParams.pageSize);\n  }\n  var first = 1;\n  var next = pageNum == last ? pageNum : pageNum + 1;\n  var prev = pageNum == 1 ? 1 : pageNum - 1;\n}}\n<div class=\"left_7_3\">\n  <a class=\"{{pageNum==1?'disabled':''}} pageButton\" value=\"{{ prev }}\">上一页<\/a>\n  \n  {{# for(var i = 6 ; i > 0 ; i--){ }}\n    {{# if(first <= pageNum - i){ }}<a href=\"javascript:;\" class=\"pageButton\" value=\"{{ pageNum - i }}\">{{ pageNum - i }}<\/a>\n    {{# } }}\n  {{# } }}\n  \n  <a class=\"active\" href=\"javascript:;\">{{ pageNum }}<\/a>\n  \n  {{# for(var i = 1 ; i < 6 ; i++){ }}\n    {{# if(last >= pageNum + i){ }}<a href=\"javascript:;\" class=\"pageButton\" value=\"{{ pageNum + i }}\">{{ pageNum + i }}<\/a>\n    {{# } }}\n  {{# } }}\n  \n  <a href=\"javascript:;\" class=\"{{pageNum==last?'disabled':''}} pageButton\" value=\"{{ next }}\">下一页<\/a>\n    <div class=\"WS_my_pages\" style=\"display: inline;\">\n      每页\n      <select class=\"pageSizeSelect\" style=\"height: 30px;border-radius: 0;\">\n        <option {{# if(pageSize == 5){ }}selected=\"selected\"{{# } }}>5<\/option>\n        <option {{# if(pageSize == 10){ }}selected=\"selected\"{{# } }}>10<\/option>\n        <option {{# if(pageSize == 15){ }}selected=\"selected\"{{# } }}>15<\/option>\n      <\/select>\n      条\n\t<\/div>\n<\/div>\n{{# } }}",
		"events" : [],
		"index" : 2,
		"layoutId" : "1161ebf6927364f0ac69149b6e929f25",
		"listDataLoadType" : "",
		"moduleId" : "181218B8ANN3DP94",
		"name" : "文书列表-文书列表",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545184311000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545184311000"
	},
	"1545034788000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 3,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "法院层级树",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545034788000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034788000"
	},
	"1545095958000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 4,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "地域及法院",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545095958000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545095958000"
	},
	"1545096058000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 5,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "裁判年份",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545096058000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545096058000"
	},
	"1545034782000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 6,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "审判程序",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545034782000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545034782000"
	},
	"1545095166000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 7,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "文书类型树",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545095166000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545095166000"
	},
	"1545096160000" : {
		"activeLoadFlag" : false,
		"asyncFlag" : false,
		"beforeMethod" : "",
		"cfg" : "",
		"context" : "<div class=\"treeItem\" style=\"margin-top: -5px;\">\n  <div class=\"itemhead\">\n    <i class=\"fa {{d.icon}}\"><\/i>\n    <span>{{d.title}}<\/span>\n    <div class=\"collspand fa fa-angle-right\"><\/div>\n  <\/div>\n  <div class=\"jstree\"><\/div>\n<\/div>",
		"events" : [],
		"index" : 8,
		"layoutId" : "2cc587adffa937b7cdb0bf493df29fcd",
		"listDataLoadType" : "",
		"moduleId" : "181217BKS948H940",
		"name" : "指导性案例",
		"onloadMethod" : "",
		"parameter" : "",
		"randomId" : "1545096160000",
		"type" : "module",
		"updateFlag" : false,
		"varName" : "1545096160000"
	}
};
// 站点信息
var $website = {
	"copyType" : "",
	"created" : "4a6b2814a55546279a1afbf8d1e7dfa8",
	"dataParsePath" : "/website/parse/rest.q4w",
	"department" : "",
	"description" : "",
	"domain" : "/website/",
	"enCode" : "bFVTbc2ti9IK5NtwcfmepCaB",
	"enName" : "wenshu",
	"grayscalFlag" : false,
	"group" : "c0d9f9f67e6b417ab5644f1f3b9d7fe4",
	"home" : "wenshu/181010CARHS5BS3C/index.html",
	"id" : "bb0e94898ff337e214e66a706d96ac8c",
	"isDeleted" : 0,
	"keywords" : "",
	"loggedFlag" : true,
	"name" : "裁判文书二期",
	"organization" : "9208e8585e6045058d96208d90c5dd3a",
	"prodFlag" : false,
	"siteType" : "pc",
	"statisticsFlag" : false,
	"updated" : "4a6b2814a55546279a1afbf8d1e7dfa8",
	"userName" : "超级管理员",
	"wxAppSecre" : "",
	"wxAppid" : ""
};
// 页面信息
var $page = {
	"cacheFlag" : false,
	"categoryId" : "18100980ZB1W41KP",
	"categoryName" : "文书列表",
	"clickCount" : 0,
	"created" : "4a6b2814a55546279a1afbf8d1e7dfa8",
	"department" : "",
	"group" : "c0d9f9f67e6b417ab5644f1f3b9d7fe4",
	"id" : "181217BMTKHNT2W0",
	"isDeleted" : 0,
	"loginFlag" : false,
	"name" : "文书列表",
	"organization" : "9208e8585e6045058d96208d90c5dd3a",
	"quoteResource" : "<link rel=\"stylesheet\" href=\"../css/listText.css\" />\n<link rel=\"stylesheet\" href=\"../js/dist/themes/default/style.min.css\" />\n\n<script src=\"/website/wenshu/js/dist/jstree.min.js\"><\/script>\n<link rel=\"stylesheet\" href=\"../../common/plugins/font-awesome-4.7.0/css/font-awesome.min.css\" />\n\n<link rel=\"stylesheet\" href=\"../css/index.css\" />\n<link rel=\"stylesheet\" href=\"../css/common.css\" />\n\n<script type=\"text/javascript\" src=\"../js/divscroll.js\"><\/script>\n\n<script type=\"text/javascript\" src=\"../js/wenshulist1.js\"><\/script>\n<script type=\"text/javascript\" src=\"../js/strToBinary.js\"><\/script>\n<script type=\"text/javascript\" src=\"../js/placeholder.js\"><\/script>\n\n\n<style>\n  .search-con {\n    margin-top: 0px;\n  }\n  .pageButton.disabled {\n    pointer-events: none;\n    cursor: default;\n  }\n  .jstree-default .jstree-anchor {\n    line-height: 24px;\n    max-width: 192px;\n  }\n  .jstree-anchor, .jstree-anchor:link, .jstree-anchor:visited, .jstree-anchor:hover, .jstree-anchor:active {\n    text-decoration: none;\n    color: #333;\n  }\n  .left_7_3 a {\n    margin-right: 5px;\n  }\n\n<\/style>\n<script type=\"text/javascript\">\n  //智能提示列表index\n  var liInd = -1;\n\n<\/script>\n",
	"redisCountKey" : "",
	"updated" : "4a6b2814a55546279a1afbf8d1e7dfa8",
	"websiteId" : "bb0e94898ff337e214e66a706d96ac8c"
};
// js代码

var newscript = document.createElement("script");
newscript.setAttribute("src",
		"/common/static/scripts/lawyeeui/website.js?v=1565674603120");
newscript.setAttribute("type", "text/javascript");
var head = document.getElementsByTagName("head")[0];
head.appendChild(newscript);


$(function() {
	var params =window.localStorage.getItem("params");

	var nickName=getNickName("nickName");
	if(nickName!=""&&nickName!=null&&typeof(nickName)!="undefined"){
		$("#loginLi").attr('href','/website/wenshu/181029BPRY8AYR1P/index.html?open=login');
		$("#loginLi").text("欢迎您，"+nickName);
		$("#reg").attr('onclick','logout()');
		$("#reg").attr('href','#');
		$("#reg").text("退出");
	}
	showDate();
	// 页面加载前执行的方法
	page181217BMTKHNT2W0();

	$("#_view_1545034775000").on("keyup", ".searchKey.search-inp",
			function(event) {
				var $m = $('#_view_1545034775000');
				var $mid = "1545034775000";
				// 快速检索输入框值改变事件
				initKeywordChangeFun1545034775000({
					// 需要将事件传送到方法里边。
					event : event
				});
			});
	$("#_view_1545034775000")
			.on(
					"click",
					".search-click",
					function(event) {
						var $m = $('#_view_1545034775000');
						var $mid = "1545034775000";
						var keyword = $(".search-inp").val();
						// 判断快速检索查询文本是否不为空或为ie兼容提示语
						var placeholder = $('.search-inp').attr("placeholder");
						if (keyword != null && keyword != ""
								&& keyword == placeholder) {
							keyword = "";// 点击快速检索无文本则刷新页面
						}
						// 通过案由名称获取案由详细信息及s*的工具方法
						var getSkeyByName = function(ayName) {
							var ay = wenshulist.dic.ayNameKeyMap[ayName];
							// 部分智能提示接口返回的案由在数据字典xml里找不到，如制造毒品,返回初始化后的对象
							if (ay == null) {
								var errorResult = {};
								errorResult["id"] = ayName;
								errorResult["parent"] = "#";
								errorResult["skey"] = "s11";
								errorResult["text"] = ayName;
								return errorResult;
							}
							ay["skey"] = 11;
							var ayParent = ay["parent"] + "";
							for (var i = 0; i < 6; i++) {
								var hasParent = wenshulist.dic.ayValueMap[ayParent] != null;
								if (hasParent) {
									ay["skey"]++;
									ayParent = wenshulist.dic.ayValueMap[ayParent]["parent"];
								}
							}
							ay["skey"] = "s" + ay["skey"];
							return ay;
						}

						var solrCode = $('.search-inp').attr("data-val");
						var s16 = "";
						if (keyword.indexOf(":") != -1) {
							keyword = keyword.substring(
									keyword.indexOf(":") + 1, keyword.length);
							// 智能检索 案由 单独处理
							if (solrCode == "s11" || solrCode == "s12"
									|| solrCode == "s13" || solrCode == "s14"
									|| solrCode == "s15") {
								var ay = getSkeyByName(keyword);
								s16 = keyword;// 智能提示案由多传s16用于回写
								keyword = ay["id"];
							}
						}
						if ($.trim(keyword).length == 0) {
							window.location.reload();
							// location.href =
							// $website["domain"]+$website["enName"]+"/181217BMTKHNT2W0/index.html";
						} else {

							// 快速检索要拼接已有的查询条件中的s21,改为带入旧的查询条件后不用了
							/*
							 * if(solrCode == "s21"){ var queryCondition =
							 * $.WebSite.invoke("1545035259000", "addParams");//
							 * 获取当前已有的查询条件 var searchItemKeywordStr = "";
							 * $.each(queryCondition, function(i, item){//
							 * 从当前已有的查询条件中获取s21 if(item["key"] == solrCode){
							 * 
							 * searchItemKeywordStr += item["value"] + " "; }
							 * }); if(searchItemKeywordStr != null &&
							 * searchItemKeywordStr != ""){ keyword =
							 * searchItemKeywordStr + keyword; } }
							 */
							var reg = new RegExp("&", "g");
							keyword = keyword.replace(reg, "%26");
							// location.href =
							// encodeURI($website["domain"]+$website["enName"]+"/181217BMTKHNT2W0/index.html?"+solrCode+"="+keyword
							// + ((s16==null||s16=="")?"":("&s16=" + s16)));
							addParams1545035259000(JSON.parse("{\"" + solrCode
									+ "\": \"" + keyword + "\"}"));
							// 重置快速检索为空
							$(".search-inp").val("");
							$('.search-inp').attr("data-val", "s21");
                          
                           
							$page.loadData();
						}
					});
	$("#_view_1545034775000")
			.on(
					"click",
					"#searchBtn",
					function(event) {
						var $m = $('#_view_1545034775000');
						var $mid = "1545034775000";
						// 获取urlParam
						var urlParam = getUrlParam1545034775000();
						if (urlParam.length > 0) {
							urlParam = urlParam.substring(1, urlParam.length);
							// 与首页相同的跳转到新页面的高级检索
							// location.href =
							// encodeURI($website["domain"]+$website["enName"]+"/181217BMTKHNT2W0/index.html?"+urlParam);
							// 在本页刷新的高级检索，检索条件添加在条件bar

							// 将url格式的参数转为添加查询条件所需的
							var paramArr = urlParam.split("&");
							var paramObj = {};
							$.each(paramArr, function(i, item) {
								var itemParam = item.split("=");
								var paramKey = itemParam[0];
								var paramValue = itemParam[1];
								if (paramKey != null && paramKey != ""
										&& paramValue != null
										&& paramValue != "") {
									paramObj[paramKey] = paramValue;
								}
							});
							// 添加查询条件
							addParams1545035259000(paramObj);
							$page.loadData();
							// 关闭高级检索框
							if ($('.search-rightBtn').hasClass('live')) {
								$('.search-rightBtn').removeClass('live')
								$('.search-rightBtn').addClass('search-click')
							}
							$(
									'.advencedWrapper,.list-box,.list-input .treeItem,.laydate_box')
									.fadeOut();
							$('.advenced-search,.selectCon,.selectCon_other')
									.removeClass('active');
						} else {
							$.WebSite.msg({
								type : 7,
								msg : '无符合条件的数据，请输入检索条件！'
							});
						}
					});
	$("#_view_1545035259000").on("click", ".fa.fa-close", function(event) {
		var $m = $('#_view_1545035259000');
		var $mid = "1545035259000";
		// 删除查询项HTML元素
		$(this).parent().remove();
		$('.list-box li').removeClass('on');
		// 查询参数回显, 刷新文书列表
		$page.loadData();
	});
	$("#_view_1545035259000").on("click", "#clear-Btn", function(event) {
		var $m = $('#_view_1545035259000');
		var $mid = "1545035259000";
		$(".LT_Filter_right.clearfix p").remove();
		$('.list-box li').removeClass('on');
		// 查询参数回显, 刷新文书列表
		$page.loadData();
	});
	$("#_view_1545035259000")
			.on(
					"click",
					"#save-Btn",
					function(event) {
						var $m = $('#_view_1545035259000');
						var $mid = "1545035259000";
						// 未登录跳转到登录页start
						var userInfo = $.WebSite.getUserInfo();
						if (userInfo == null
								|| userInfo.loginId == "anonymousUser") {
							if(navigator.userAgent.indexOf("MSIE")>-1){
		                        var referLink = document.createElement('a');
		                        referLink.href= $website["domain"]
								+ $website["home"] + "?"
								+ window.location.href;
		                        document.body.appendChild(referLink);
		                        referLink.click();
	                        }else{
							window.location.href = $website["domain"]
									+ $website["home"] + "?"
									+ window.location.href;
	                        }
						}
						// 未登录跳转到登录页end
						if ($(".LT_Filter_right.clearfix p").length == 0) {
							$.WebSite.msg({
								msg : "当前搜索条件为空"
							});
							return;
						}
						var searchItem = [];
						$(".LT_Filter_right.clearfix p").each(
								function(i, item) {
									var m = {};
									m["key"] = $(item).attr("data-key");
									m["value"] = $(item).attr("data-value");
									m["oper"] = $(item).attr("data-oper");
									m["title"] = $.trim($(item).text());
									searchItem.push(m);
								});

						$.WebSite
								.saveData({
									allowTip : false,
									param : {
										templateName : $(
												".LT_Filter_right.clearfix p")
												.text(),
										queryCondition : JSON
												.stringify(searchItem),
										lastQueryCount : $(".fr.con_right span")
												.text(),
										cfg : "com.lawyee.judge.mem.web.parse.dto.QueryTemplateDsoDTO@insert"
									},
									success : function(res) {
										$.WebSite.msg({
											msg : "数据保存成功",
											type : 1
										});
									},
									error : function(data) {
										$.WebSite.alert({
											msg : data.description || "数据保存失败",
											type : -1
										});
									}
								});
					});
});
function page181217BMTKHNT2W0() {
	// 主体 Left Right 排版
	$('.LM_right').css({
		width : $('.listTMain').width() - $('.LM_left').width() - 20
	});
	$(window).resize(function() {
		$('.LM_right').css({
			width : $('.listTMain').width() - $('.LM_left').width() - 20
		});
	});
};

// 通用页头执行前
function beforeMethod1545034746000($param) {
	var $m = $('#_view_1545034746000');
	var $mid = "1545034746000";

};

// 通用页头执行后
function onloadMethod1545034746000() {
	var $m = $('#_view_1545034746000');
	var $mid = "1545034746000";
	initHead1545034746000();
};

// 通用页头
function initHead1545034746000(d) {
	var $m = $('#_view_1545034746000');
	var $mid = "1545034746000";
	
	// 计算当前日期+周几
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
	showDate();

	$('.first_list .others').hover(function() {
		$(this).find('a').toggleClass('on');
		$(this).find('.second_list').stop().slideToggle();
	});

};

// 页尾执行前
function beforeMethod1545034761000($param) {
	var $m = $('#_view_1545034761000');
	var $mid = "1545034761000";

};

// 页尾执行后
function onloadMethod1545034761000() {
	var $m = $('#_view_1545034761000');
	var $mid = "1545034761000";
	// 点击关闭头部下拉菜单
	$(document)
			.on(
					'click',
					function() { // 点击关闭头部下拉菜单
						if ($('.search-rightBtn').hasClass('live')) {
							$('.search-rightBtn').removeClass('live')
							$('.search-rightBtn').addClass('search-click')
						}
						$(
								'.advencedWrapper,.list-box,.list-input .treeItem,.laydate_box')
								.fadeOut();
						$('.advenced-search,.selectCon,.selectCon_other')
								.removeClass('active');
					}).on(
					'click',
					'.advencedWrapper',
					function() {
						$('.list-box,.list-input .treeItem,.laydate_box')
								.fadeOut();
						$('.advenced-search,.selectCon,.selectCon_other')
								.removeClass('active');
						return false;
					}).on('click', '.treeItem,.laydate_box', function() {
				return false;
			});
};

// 扫码、意见建议执行前
function beforeMethod1545034768000($param) {
	var $m = $('#_view_1545034768000');
	var $mid = "1545034768000";

};

// 扫码、意见建议执行后
function onloadMethod1545034768000() {
	var $m = $('#_view_1545034768000');
	var $mid = "1545034768000";
	initYjjy1545034768000();
};

// 扫码、意见建议重置表单
function resetFormFun1545034768000(d) {
	var $m = $('#_view_1545034768000');
	var $mid = "1545034768000";
	// 重置表单方法
	$("#suggestContent").val("");
	$("#suggestSource").val("");
	$("#court").val("");
	$("#remark").val("");
	$("#tips-suggestContent").html("*");
	$(".userType span").find("i").eq(0).addClass('on');
	$(".userType span").find("i").eq(1).removeClass('on');
	$(".userType span").find("i").eq(2).removeClass('on');

};

// 扫码、意见建议
function initYjjy1545034768000(d) {
	var $m = $('#_view_1545034768000');
	var $mid = "1545034768000";
	$m.on('click', '.cpwswApp h4 span', function() { // 二维码下载弹出层-关闭
		$('.cpwswApp').fadeOut();
		$('.mask_box').fadeOut();
	});
	$m.on('click', '.yjjyPop h4 span', function() { // 意见建议弹出层-关闭
		$('.yjjyPop').fadeOut();
		$('.mask_box').fadeOut();
	});
	$(".userType span").on('click', function() {
		$(this).find('i').addClass('on');
		$(this).siblings().find('i').removeClass('on');
	});

	// 意见建议提交
	$m
			.on(
					"click",
					"span#submitBtn",
					function() {
						var suggestContent = $("#suggestContent").val();
						var suggestSource = $("#suggestSource").val();
						var court = $("#court").val();
						if ($.trim(suggestContent) == "") {
							$("#tips-suggestContent").html("* 请输入建议内容");
							return false;
						}
						if(suggestSource.length>125){
							$.WebSite
							.alert({
								msg :"请输入正确的案件来源",
								type : 2
							});
							return false;
						}
						if(court.length>25){
							$.WebSite
							.alert({
								msg :"请输入正确的所属法院",
								type : 2
							});
							return false;
						}
						var court = $("#court").val();
						var remark = $("#remark").val();
						var suggestType = "针对裁判文书公开上网工作";
						$(".userType span").each(function(index, item) {
							var html_ = $(this).html();
							if (html_.indexOf('class="on"') != -1) {
								suggestType = $(this).text();
							}
						});

						$.WebSite
								.saveData({
									allowTip : false,
									param : {
										cfg : "com.lawyee.judge.mem.web.parse.dto.SuggestDsoDTO@insertSuggest",
										suggestType : suggestType,
										suggestContent : suggestContent,
										suggestSource : suggestSource,
										court : court,
										remark : remark
									},
									success : function(res) {
										$.WebSite
												.alert({
													msg : "提交成功",
													type : 1,
													rollback : function() {
														// 调用国双接口
														if ($globalNet == 'outer1') {
															var GlobalId = "c"
																	+ new Date()
																			.getTime()
																	+ "-"
																	+ Math
																			.floor(Math
																					.random() * 1000);
															var orderid = GlobalId;
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addOrder",
																			orderid,
																			1 ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			location.pathname,
																			location.pathname,
																			1,
																			1,
																			"Page" ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			"意见建议",
																			"意见建议",
																			1,
																			1,
																			"FormName" ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			suggestType,
																			suggestType,
																			1,
																			1,
																			"建议类型" ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			suggestContent,
																			suggestContent,
																			1,
																			1,
																			"建议内容" ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			suggestSource,
																			suggestSource,
																			1,
																			1,
																			"案件来源" ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			court,
																			court,
																			1,
																			1,
																			"所属法院" ]);
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"addProduct",
																			orderid,
																			remark,
																			remark,
																			1,
																			1,
																			"备注" ]);
															// 更多addProduct
															$_gsp
																	.push([
																			"T",
																			"GWD-002808",
																			"trackECom" ]);
														}
														$.WebSite.invoke($mid,
																"resetFormFun");
														$('.yjjyPop').fadeOut();
														$('.mask_box')
																.fadeOut();
													}
												});
									}
								});
					});
	// 重置表单事件
	$m.on("click", "span#resetBtn", function() {
		$.WebSite.invoke($mid, "resetFormFun");
	});

};

// 快速、高级检索执行前
function beforeMethod1545034775000($param) {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";

};

// 快速、高级检索执行后
function onloadMethod1545034775000() {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";
	initSearch1545034775000();
	layui.use('laydate', function() {
		var laydate = layui.laydate;
		var startTime = laydate.render({
			elem : '#cprqStart',
			theme : '#886342',
			btns : [ 'clear', 'confirm' ],
			done : function(value, date) {
				endTime.config.min = {
					year : date.year,
					month : date.month - 1,// 重点！！！
					date : date.date,
					hours : date.hours,
					minutes : date.minutes,
					seconds : date.seconds
				}
				var stime = new Date(Date.parse(value.replace("-", "/")));
				var etime = new Date(Date.parse($("#cprqEnd").val().replace(
						"-", "/")));
				if (stime > etime) { // 开始时间若大于结束时间，则把开始时间的日期回填到结束时间
					$("#cprqEnd").val(value);
				}
			}
		});
		var endTime = laydate.render({
			elem : '#cprqEnd',
			theme : '#886342',
			btns : [ 'clear', 'confirm' ],
			min : $("#cprqStart").val(), // 可选择的最小日期为开始日期

		});
	});
	$('.list-input .jstree').jstree();
	var arr = wenshulist.dic.spcx;
	var spcxs = [];
	for ( var key in arr) {
		var values = arr[key];
		for (var i = 0; i < values.length; i++) {
			spcxs[values[i].id] = values[i].text;
		}
	}
	;
	window.spcxs = spcxs;
};

// 快速、高级检索组装高级检索表单参数
function getUrlParam1545034775000(d) {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";
	var qbValue = $m.find("#qbValue").val();
	var qbType = $m.find("#qbType").text();
	var s16 = $m.find("#s16").text();
	var ayCode = $m.find("#s16").attr("data-val");
	var ayLevel = $m.find("#s16").attr("data-level");
	var s1 = $.trim($m.find("#s1").val());
	var s7 = $.trim($m.find("#s7").val());
	var s2 = $.trim($m.find("#s2").val());
	var s4 = $.trim($m.find("#s4").attr("data-val"));
	var s8 = $.trim($m.find("#s8").attr("data-val"));
	var s9 = $.trim($m.find("#s9").attr("data-val"));
	var spcxLevel = $.trim($m.find("#s9").attr("data-level"));
	var s6 = $.trim($m.find("#s6").attr("data-val"));
	var s43 = $.trim($m.find("#s43").attr("data-val"));
	var s44 = $.trim($m.find("#s44").attr("data-val"));
	var cprqStart = $.trim($m.find("#cprqStart").val());
	var cprqEnd = $.trim($m.find("#cprqEnd").val());
	var s18 = $.trim($m.find("#s18").val());
	var s17 = $.trim($m.find("#s17").val());
	var s20 = $.trim($m.find("#s20").val());
	var s19 = $.trim($m.find("#s19").val());
	var flyj = $.trim($m.find("#flyj").val());
	var urlParam = "";
	var s17Flag = false;
	// 设置全文
	if ($.trim(qbValue).length > 0) {
		if (qbType == "全文") {
			var reg = new RegExp("&", "g");

			qbValue = qbValue.replace(reg, "%26");
			urlParam = "&s21=" + qbValue;
		} else if (qbType == "首部") {
			urlParam = "&s22=" + qbValue;
		} else if (qbType == "当事人段") {

			urlParam = "&s53=" + qbValue;
			/*
			 * if(s17.trim().length>0){ urlParam +="&s17="+s17; s17Flag = true;
			 * }else{ urlParam="&s17="+qbValue; }
			 */
		} else if (qbType == "诉讼记录") {
			urlParam = "&s23=" + qbValue;
		}/*******************************************************************
			 * else if(qbType=="诉控辩"){ urlParam="&s24="+qbValue; }
			 ******************************************************************/
		else if (qbType == "事实") {
			urlParam = "&s25=" + qbValue;
		} else if (qbType == "理由") {
			urlParam = "&s26=" + qbValue;
		} else if (qbType == "判决结果") {
			urlParam = "&s27=" + qbValue;
		} else if (qbType == "尾部") {
			urlParam = "&s28=" + qbValue;
		} else if (qbType == "其他") {
			urlParam = "&s54=" + qbValue;
		}
	}
	if ($.trim(s16).length > 0 && s16 != '请选择') {
		urlParam += "&s16=" + s16;
		// 此处案由传code，需要判断是几级案由
		if (ayLevel) {
			if (ayLevel == '1') {
				urlParam += "&s11=" + ayCode;
			} else if (ayLevel == '2') {
				urlParam += "&s12=" + ayCode;
			} else if (ayLevel == '3') {
				urlParam += "&s13=" + ayCode;
			} else if (ayLevel == '4') {
				urlParam += "&s14=" + ayCode;
			} else if (ayLevel == '5') {
				urlParam += "&s15=" + ayCode;
			}
		}
	}
	if ($.trim(s1).length > 0) {
		urlParam += "&s1=" + s1;
	}
	if ($.trim(s7).length > 0) {
		urlParam += "&s7=" + s7;
	}
	if ($.trim(s2).length > 0) {
		urlParam += "&s2=" + s2;
	}
	if ($.trim(s4).length > 0) {
		urlParam += "&s4=" + s4;
	}
	if ($.trim(s8).length > 0) {
		urlParam += "&s8=" + s8;
	}
	if ($.trim(s9).length > 0) {
		// 此处判断点击的是一级审判程序，还是二级审判程序。一级对应s9字段，二级对应s10字段
		if (spcxLevel) {
			if (spcxLevel == '1') {
				urlParam += "&s9=" + s9;
			} else if (spcxLevel == '2') {
				urlParam += "&s10=" + s9;
			}
		}
	}
	if ($.trim(s6).length > 0) {
		urlParam += "&s6=" + s6;
	}
	if ($.trim(cprqStart).length > 0) {
		urlParam += "&cprqStart=" + cprqStart;
	}
	if ($.trim(cprqEnd).length > 0) {
		urlParam += "&cprqEnd=" + cprqEnd;
	}
	if ($.trim(s44).length > 0) {
		urlParam += "&s44=" + s44;
	}
	if ($.trim(s43).length > 0) {
		urlParam += "&s43=" + s43;
	}
	if ($.trim(s18).length > 0) {
		urlParam += "&s18=" + s18;
	}
	if ($.trim(s17).length > 0 && !s17Flag) {
		urlParam += "&s17=" + s17;
	}
	if ($.trim(s20).length > 0) {
		urlParam += "&s20=" + s20;
	}
	if ($.trim(s19).length > 0) {
		urlParam += "&s19=" + s19;
	}
	if ($.trim(flyj).length > 0
			&& $.trim(flyj) != $(".large_input input").attr("placeholder")) {
		urlParam += "&flyj=" + flyj;
	}
	return urlParam;
};

// 快速、高级检索快速检索输入框值改变事件
function initKeywordChangeFun1545034775000(d) {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";
	var event = d["event"] ? d["event"] : window.event;
	// 通过案由名称获取案由详细信息及s*的工具方法
	function getSkeyByName(ayName) {
		var ay = wenshulist.dic.ayNameKeyMap[ayName];
		// 部分智能提示接口返回的案由在数据字典xml里找不到，如制造毒品,返回初始化后的对象
		if (ay == null) {
			var errorResult = {};
			errorResult["id"] = ayName;
			errorResult["parent"] = "#";
			errorResult["skey"] = "s11";
			errorResult["text"] = ayName;
			return errorResult;
		}
		ay["skey"] = 11;
		var ayParent = ay["parent"] + "";
		for (var i = 0; i < 6; i++) {
			var hasParent = wenshulist.dic.ayValueMap[ayParent] != null;
			if (hasParent) {
				ay["skey"]++;
				ayParent = wenshulist.dic.ayValueMap[ayParent]["parent"];
			}
		}
		ay["skey"] = "s" + ay["skey"];
		return ay;
	}

	// 如果输入框键盘按键是0~1或空格（选字）或回删键，则触发提示列表重新加载
	if (event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51
			|| event.keyCode == 52 || event.keyCode == 53
			|| event.keyCode == 54 || event.keyCode == 55
			|| event.keyCode == 56 || event.keyCode == 57
			|| event.keyCode == 32 || event.keyCode == 8 || event.keyCode == 65
			|| event.keyCode == 66 || event.keyCode == 67
			|| event.keyCode == 68 || event.keyCode == 69
			|| event.keyCode == 70 || event.keyCode == 71
			|| event.keyCode == 72 || event.keyCode == 73
			|| event.keyCode == 74 || event.keyCode == 75
			|| event.keyCode == 76 || event.keyCode == 77
			|| event.keyCode == 78 || event.keyCode == 79
			|| event.keyCode == 80 || event.keyCode == 81
			|| event.keyCode == 82 || event.keyCode == 83
			|| event.keyCode == 84 || event.keyCode == 85
			|| event.keyCode == 86 || event.keyCode == 87
			|| event.keyCode == 88 || event.keyCode == 89
			|| event.keyCode == 90) {
	} else if (event.keyCode == 40) { // 向下键
		liInd++;
		$('.search-list li').removeClass('one').eq(liInd).addClass('one');
		if ($('.search-list li').last().hasClass('one')) {
			return liInd = -1;
		}
		// 下拉列表隐藏 则不获取数据
		if ($('.search-list').css('display') === 'none') {
			return liInd = -1;
		}
		var inputText = $('.search-list li.one').text();
		if ($.trim(inputText) == "" || inputText == null) {
			return liInd = -1;
		}
		var dataName = $('.search-list li.one').attr("data-name");
		var dataCode = $('.search-list li.one').attr("data-code");
		$m.find(".search-inp").val(dataName + inputText);
		$m.find('.search-inp').attr("data-val", dataCode);
		if ($('.search-list li.one').length == 0) {
			return liInd = -1;
		}
		return false;
	} else if (event.keyCode == 38) { // 向上键
		liInd--;
		$('.search-list li').removeClass('one').eq(liInd).addClass('one');
		if ($('.search-list li').first().hasClass('one')) {
			return liInd = $('.search-list li').length;
		}

		// 下拉列表隐藏 则不获取数据

		if ($('.search-list').css('display') === 'none') {
			return liInd = -1;
		}
		var inputText = $('.search-list li.one').text();
		if ($.trim(inputText) == "" || inputText == null) {
			return liInd = -1;
		}
		var dataName = $('.search-list li.one').attr("data-name");
		var dataCode = $('.search-list li.one').attr("data-code");
		$m.find(".search-inp").val(dataName + inputText);
		$m.find('.search-inp').attr("data-val", dataCode);
		if ($('.search-list li.one').length == 0) {
			return liInd = $('.search-list li').length;
		}
		return false;
	} else if (event.keyCode == 13) {// 回车按键事件
		// 回车的操作

		var keyword = $(".search-inp").val();

		var solrCode = $('.search-inp').attr("data-val");
		if (keyword.indexOf(":") != -1) {
			keyword = keyword.substring(keyword.indexOf(":") + 1,
					keyword.length);
			// 智能检索 案由 单独处理
			if (solrCode == "s11" || solrCode == "s12" || solrCode == "s13"
					|| solrCode == "s14" || solrCode == "s15") {
				var ay = getSkeyByName(keyword);
				keyword = ay["id"];
			}
		}

		$(".search-rightBtn.search-click").click();// 回车的时候触发一下检索按钮的点击事件就好了

	} else {// 其他按键
		return false;
	}
	var keyword = $m.find(".search-inp").val();
	if ($.trim(keyword).length == 0) {
		return false;
	}
	// 选择智能提示列表事件的方法
	changeSearchKey = function(val, solrCode) {
		$m.find('.search-inp').val(val);
		$m.find('.search-inp').attr("data-val", solrCode);
		$m.find('.search-list').hide();

	}
	// 渲染智能提示列表
	function smartTipRender(data) {
		var searchListUl = $m.find(".search-list");
		var arr = [];
		if (data.s1) {
			if (data.s1.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>案由</div>";
				html_ = html_ + "<ul>";
				$.each(data.s1, function(i, item) {
					var ay = getSkeyByName(item);
					// html_ = html_+"<li data-name='案由:' data-code='s16'
					// onclick='changeSearchKey(\"案由:"+item+"\", \"s16\")'>" +
					// item + "</li>";
					html_ = html_ + "<li data-name='案由:' data-code='"
							+ ay["skey"] + "' onclick='changeSearchKey(\"案由:"
							+ item + "\", \"" + ay["skey"] + "\")'>" + item
							+ "</li>";
				});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s2) {
			if (data.s2.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>关键字</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s2,
								function(i, item) {
									html_ = html_
											+ "<li data-name='关键字:' data-code='s45' onclick='changeSearchKey(\"关键字:"
											+ item + "\", \"s45\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s3) {
			if (data.s3.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>审理法院</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s3,
								function(i, item) {
									html_ = html_
											+ "<li data-name='审理法院:' data-code='s2' onclick='changeSearchKey(\"审理法院:"
											+ item + "\", \"s2\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s4) {
			if (data.s4.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>当事人</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s4,
								function(i, item) {
									html_ = html_
											+ "<li data-name='当事人:' data-code='s17' onclick='changeSearchKey(\"当事人:"
											+ item + "\", \"s17\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s5) {
			if (data.s5.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>审理人员</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s5,
								function(i, item) {
									html_ = html_
											+ "<li data-name='审理人员:' data-code='s18' onclick='changeSearchKey(\"审理人员:"
											+ item + "\", \"s18\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s6) {
			if (data.s6.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>律师</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s6,
								function(i, item) {
									html_ = html_
											+ "<li data-name='律师:' data-code='s19' onclick='changeSearchKey(\"律师:"
											+ item + "\", \"s19\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s7) {
			if (data.s7.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>律所</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s7,
								function(i, item) {
									html_ = html_
											+ "<li data-name='律所:' data-code='s20' onclick='changeSearchKey(\"律所:"
											+ item + "\", \"s20\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		if (data.s8) {
			if (data.s8.length > 0) {
				var html_ = "<div class='list-type'>";
				html_ = html_ + "<div class='search_type'>法律依据</div>";
				html_ = html_ + "<ul>";
				$
						.each(
								data.s8,
								function(i, item) {
									html_ = html_
											+ "<li  data-name='法律依据:' data-code='s29' onclick='changeSearchKey(\"法律依据:"
											+ item + "\", \"s29\")'>" + item
											+ "</li>";
								});
				html_ = html_ + "</ul>";
				html_ = html_ + "</div>";
				arr.push(html_);
			}
		}
		// 如果没有结果要隐藏，查询结果的模块
		$m.find(".search-list").html(arr);
		if (arr.length > 0) {
			$m.find(".search-list").show();
		} else {
			$m.find(".search-list").hide();
		}
	}
	$.WebSite.getData({
		cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@smartTipSearch",
		param : {
			"keyword" : keyword
		},
		rollback : function(data) {
			smartTipRender(data);
			document.getElementById('search-list').scrollTop=0;

		}
	});
};

// 快速、高级检索给高级表单赋值方法
function setFormValue1545034775000(d) {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";
	// 给高级表单赋值方法
	if (d && d.length > 0) {
		$
				.each(
						d,
						function(index, obj) {
							var code = obj.id;// 字段编码
							var reg = new RegExp("%26", "g");
							var value = obj.value.replace(reg, "&");// 值

							// 1、设置全文输入框和下拉框
							if (code == 's21') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("全文");
								$m.find("#qbType").attr("data-val", "1");
							} else if (code == 's22') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("首部");
								$m.find("#qbType").attr("data-val", "2");
							} else if (code == 's17') {// 当事人只要回填底下的字段即可（2019-01-02高建龙确认）
								$m.find("#" + code).val(value);
								$m.find("#qbType").attr("data-val", "3");
							} else if (code == 's23') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("诉讼记录");
								$m.find("#qbType").attr("data-val", "4");
							}/***********************************************
								 * else if(code=='s24'){
								 * $("#qbValue").val(value);
								 * $("#qbType").text("诉控辩");
								 * $("#qbType").attr("data-val","5"); }
								 **********************************************/
							else if (code == 's25') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("事实");
								$m.find("#qbType").attr("data-val", "5");
							} else if (code == 's26') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("理由");
								$m.find("#qbType").attr("data-val", "6");
							} else if (code == 's27') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("判决结果");
								$m.find("#qbType").attr("data-val", "7");
							} else if (code == 's28') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("尾部");
								$m.find("#qbType").attr("data-val", "8");
							} else if (code == 's54') {
								$m.find("#qbValue").val(value);
								$m.find("#qbType").text("其他");
								$m.find("#qbType").attr("data-val", "255");
							}
							// 2、设置案由
							else if (code == 's11') {
								$m.find("#s16").attr("data-val", value);
								$m.find("#s16").attr("data-level", "1");
							} else if (code == 's12') {
								$m.find("#s16").attr("data-val", value);
								$m.find("#s16").attr("data-level", "2");
							} else if (code == 's13') {
								$m.find("#s16").attr("data-val", value);
								$m.find("#s16").attr("data-level", "3");
							} else if (code == 's14') {
								$m.find("#s16").attr("data-val", value);
								$m.find("#s16").attr("data-level", "4");
							} else if (code == 's15') {
								$m.find("#s16").attr("data-val", value);
								$m.find("#s16").attr("data-level", "5");
							} else if (code == 's16') {
								if (value == null || value == "") {
									$m.find("#" + code).html("请选择");
								} else {
									$m.find("#" + code).html(value);
								}
							}
							// 3、设置法院层级、案件类型、文书类型、公开类型、案例等级
							else if (code == 's4' || code == 's8'
									|| code == 's6' || code == 's43'
									|| code == 's44') {
								var node = $m.find("#" + code).parent().next(
										".list-box").find(
										"li[data-val='" + value + "']");
								if (node) {
									node.addClass("on");
									var text = node.text();
									$m.find("#" + code).html(text);
									$m.find("#" + code).attr("data-val", value);
									if (code == 's8') {// 如果字段是案件类型，重新设置审判程序下拉框数据
										if ($m.find("#spcxTreeDiv").attr(
												"data-val")
												&& $m.find("#spcxTreeDiv")
														.attr("data-val") != null
												&& $m.find("#spcxTreeDiv")
														.attr("data-val") != '') {
											var spcxdData = JSON.parse($m.find(
													"#spcxTreeDiv").attr(
													"data-val"));
											var spcxArray = spcxdData[value];
											$m.find('.list-input .jstree.spcx')
													.data('jstree', false)
													.empty();
											$m.find('.list-input .jstree.spcx')
													.jstree({
														'core' : {
															'data' : spcxArray
														}
													});
										}
									}
								}
							}
							// 4、审判程序
							else if (code == 's9') {// 一级审判程序
								if ($m.find("#spcxTreeDiv").attr("data-val")
										&& $m.find("#spcxTreeDiv").attr(
												"data-val") != null
										&& $m.find("#spcxTreeDiv").attr(
												"data-val") != '') {
									var spcxdData = JSON.parse($m.find(
											"#spcxTreeDiv").attr("data-val"));
									var text = spcxdData[value];
									// 审判程序无法设为空的解决代码
									if (text == null || text == "") {
										$m.find('.spcx').find('span').html(
												"请选择");
									} else {
										$m.find('.spcx').find('span')
												.html(text);
									}
									$m.find('.spcx').find('span').attr(
											"data-val", value);
									$m.find('.spcx').find('span').attr(
											"data-level", "1");
								}
							} else if (code == 's10') {// 二级审判程序
								if ($m.find("#spcxTreeDiv").attr("data-val")
										&& $m.find("#spcxTreeDiv").attr(
												"data-val") != null
										&& $m.find("#spcxTreeDiv").attr(
												"data-val") != '') {
									var spcxdData = JSON.parse($m.find(
											"#spcxTreeDiv").attr("data-val"));
									var text = spcxdData[value];
									// 审判程序无法设为空的解决代码
									if (text == null || text == "") {
										$m.find('.spcx').find('span').html(
												"请选择");
									} else {
										$m.find('.spcx').find('span')
												.html(text);
									}
									$m.find('.spcx').find('span').attr(
											"data-val", value);
									$m.find('.spcx').find('span').attr(
											"data-level", "2");
								}
							}
							// 3、其他字段设值
							else {
								$m.find("#" + code).val(value);
							}
						});
	}
};

// 快速、高级检索清空高级检索表单
function cleanFormVal1545034775000(d) {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";
	// 清空高级检索对应的字段回写
	var jsonArray = [];

	// jsonArray.push({id: "s255", value: ""});
	jsonArray.push({
		id : "flyj",
		value : ""
	});
	jsonArray.push({
		id : "cprqStart",
		value : ""
	});
	jsonArray.push({
		id : "cprqEnd",
		value : ""
	});

	for (var i = 0; i < 60; i++) {
		// 首部.当事人.诉讼记录.事实.理由.判决结果.尾部.其他不清空，否则会覆盖全文s21
		if (i == 22 || i == 23 || i == 25 || i == 26 || i == 27 || i == 28
				|| i == 53 || i == 54) {
			continue;
		}
		var id = "s" + i;
		var value = "";
		jsonArray.push({
			id : id,
			value : value
		});
	}
	$.WebSite.invoke($mid, "setFormValue", jsonArray);
};

// 快速、高级检索高级表单的控件事件
function initSearch1545034775000(d) {
	var $m = $('#_view_1545034775000');
	var $mid = "1545034775000";
	// 快速检索提示语兼容ie事件
	var browser = navigator.appName;
	if (browser == "Microsoft Internet Explorer") {// 仅针对ie9
		// 查找所有含placeholder的元素修改value并添加事件兼容ie
		$("input[placeholder][placeholder!='']").each(function(i, item) {
			$(this).val($(this).attr("placeholder"));
			$(this).css("color", "#bbb");
			$(this).focus(function() {
				$(this).css("color", "#000000");
				if ($(this).val() == $(this).attr("placeholder")) {
					$(this).val("");
				}
			});
			$(this).blur(function() {
				if ($(this).val() == "") {
					$(this).css("color", "#bbb");
					$(this).val($(this).attr("placeholder"));
				}
			});
		});
	}
	// 全文下拉框点击事件
	$m.on("click", '.selectCon_other,.selectCon', function() {
		$(this).toggleClass('active');
		var display = $(this).next('.list-box').css('display');
		if (display == 'none') {
			$(this).next('.list-box').show();
		} else {
			$(this).next('.list-box').hide();
		}
		$(this).find('dropdown-text').show();
		$(this).parents('.list-input').siblings().find(
				'.list-box,.treeItem,.laydate_box').hide();
		return false;
	});
	// 全文下拉选项选择事件
	$(".selectCon span").parent().next(".list-box").on("click", "li",
			function() {
				$(this).addClass('on').siblings('li').removeClass('on');
				var txt = $(this).html();
				var txtCode = $(this).attr("data-val");
				$(".selectCon span").html(txt);
				$(".selectCon span").attr("data-val", txtCode);
				$(this).parents(".list-box").hide();
			});
	// 文书类型、法院层级、案件类型
	$(".selectCon_other span").parent().next(".list-box").on(
			"click",
			"li",
			function() {
				$(this).addClass('on').siblings('li').removeClass('on');
				var txt = $(this).html();
				var txtCode = $(this).attr("data-val");
				$(this).parents(".list-box").prev('.selectCon_other').find(
						'span').attr("data-val", txtCode);
				$(this).parents(".list-box").prev('.selectCon_other').find(
						'span').html(txt);
				$(this).parents(".list-box").hide();
			})
	// 案由树组件
	$m.on("click", '.anyou', function() {
		$m.find(".list-input .treeItem.ay").toggle();
	});
	$m.on('click', '.list-input .jstree.ay a', function() {
		var words = $(this).text();
		var txtCode = $(this).attr("id");
		var dataLevel = $(this).parent().attr("aria-level");
		$m.find('.anyou').find('span').html(words);
		$m.find('.anyou').find('span').attr("data-val",
				txtCode.replace("_anchor", ""));
		$m.find('.anyou').find('span').attr("data-level", dataLevel);
		$(this).parents('.treeItem').hide();
	});

	// 审判程序树组件
	$m.on('click', '.spcx', function() {
		var ajlxName = $m.find("#selectCon_other_ajlx span").text();
		if (ajlxName == '请选择') {
			$.WebSite.msg({
				type : 2,
				msg : "请先选择案件类型！"
			});
		} else {
			$m.find(".list-input .treeItem.spcx").toggle();
		}
	});
	$m.on('click', '.list-input .jstree.spcx a', function() {
		
		var words = $(this).text();
		var txtCode = $(this).attr("id");
		$m.find('.spcx').find('span').html(words);
		$m.find('.spcx').find('span').attr("data-val",
				txtCode.replace("_anchor", ""));
		var dataLevel = $(this).parent().attr("aria-level");
		$m.find('.spcx').find('span').attr("data-level", dataLevel);
		$(this).parents('.treeItem').hide();
	});
	// 切换到高级检索

	$m.on("click", '.advenced-search', function() {
			$(".search-rightBtn").toggle();
			$('.search-middle').css({
				'border-right' : '2px solid #cd3c3f'
			});
		// 点击高级检索 隐藏搜索框的边线 ps：目前无效果
		if ($('.search-rightBtn').hasClass('live')) {
			//$('.search-rightBtn').removeClass('live')
			/*$(".advenced-search").css({
				'border' : '1px solid #c9c9c9',
				'borderRight' : 'none'
			});*/
			/*$(".search-middle").css({
				'border' : '1px solid #c9c9c9',
				'borderLeft' : 'none'
			});*/
			$('.search-rightBtn').addClass('search-click');
			
		} else {
			//$('.search-rightBtn').addClass('live')
			/*$('.advenced-search').css({
				'border' : 'none'
			});
			$('.search-middle').css({
				'border' : 'none'
			});*/
			$('.search-rightBtn').removeClass('search-click')
		}
		;
		$('.advencedWrapper').toggle();
		//$(this).toggleClass('active');
		// $('.list-box,.list-input .treeItem,.laydate_box').fadeOut();
		// $('.selectCon,.selectCon_other').removeClass('active');
		return false;
	});

	$(document).on('click', function() {
		$(".search-rightBtn").show();
//		$(".advenced-search").css({
//			'border' : '1px solid #c9c9c9',
//			'borderRight' : 'none'
//		});
//		$(".search-middle").css({
//			'border' : '1px solid #c9c9c9',
//			'borderLeft' : 'none'
//		});
	}).on('click', '.search-inp', function() {
		return false;
	});
	$m.find('.search-inp').focus(function() {
		$('.advencedWrapper').hide();
		$('.search-rightBtn').show();

//		$(this).parent().css({
//			'border' : '1px solid #a6795c',
//			'borderLeft' : 'none'
//		});
//		$('.advenced-search').css({
//			'border' : '1px solid #a6795c',
//			'borderRight' : 'none'
//		});
		return false;
	});
	// 快速检索失去焦点事件
	$m.find(".search-inp").blur(function() {
//		$(this).parent().css({
//			'border' : '1px solid #c9c9c9',
//			'borderLeft' : 'none'
//		});
//		$('.advenced-search').css({
//			'border' : '1px solid #c9c9c9',
//			'borderRight' : 'none'
//		});
		setTimeout(function() {
			$m.find('.search-list').hide();
		}, 500);
	});
	// 重置按钮事件
	$m.on('click', '#resetBtn', function() {
		$m.find("#qbValue").val("");
		$m.find("#s16").html("");
		$m.find("#s1").val("");
		$m.find("#s7").val("");
		$m.find("#s2").val("");
		$m.find("#s4").html("请选择");
		$m.find("#s8").html("请选择");
		$m.find("#s9").html("请选择");
		$m.find("#s6").html("请选择");
		$m.find("#cprqStart").val("");
		$m.find("#cprqEnd").val("");
		$m.find("#s18").val("");
		$m.find("#s17").val("");
		$m.find("#s20").val("");
		$m.find("#s19").val("");
		$m.find("#s43").html("请选择");
		$m.find("#s44").html("请选择");
		$m.find("#s16").html("请选择");
		$m.find("#s43").attr("data-val", "");
		$m.find("#s44").attr("data-val", "");
		$m.find("#s16").attr("data-val", "");
		$m.find("#s4").attr("data-val", "");
		$m.find("#s8").attr("data-val", "");
		$m.find("#s9").attr("data-val", "");
		$m.find("#s6").attr("data-val", "");
		// 法律依据ie兼容性重置时变成有placeholder的样子
		var browser = navigator.appName;
		if (browser == "Microsoft Internet Explorer") {// 仅针对ie9
			$m.find("#flyj").val($m.find("#flyj").attr("placeholder"));
			$m.find("#flyj").css("color", "#bbb");
		} else {
			$m.find("#flyj").val("");
		}
		$m.find("#qbType").html("全文");
		$m.find(".searchKey search-inp").val("");
	});

	// 案件类型下拉框选项变化，触发审判程序下拉框数据重新加载
	$m
			.find("#selectCon_other_ajlx span")
			.parent()
			.next(".list-box")
			.find("li")
			.click(
					function() {
						$(this).addClass('on').siblings('li').removeClass('on');
						var txt = $(this).html();
						$(this).parents(".list-box").prev('.selectCon_other')
								.find('span').html(txt);
						$(this).parents(".list-box").hide();
						// 重新设置审判程序下拉框数据\
						$m.find('.spcx').find('span').html("请选择");
						$m.find("#s9").attr("data-val", "");
						var ajlx = $(this).attr("data-val");
						if ($m.find("#spcxTreeDiv").attr("data-val")
								&& $m.find("#spcxTreeDiv").attr("data-val") != null
								&& $m.find("#spcxTreeDiv").attr("data-val") != '') {
							var spcxJsonData = JSON.parse($m.find(
									"#spcxTreeDiv").attr("data-val"));
							var spcxArray = spcxJsonData[ajlx];
							$m.find('.list-input .jstree.spcx').data('jstree',
									false).empty();
							$m.find('.list-input .jstree.spcx').jstree({
								'core' : {
									'data' : spcxArray
								}
							});
						}

					});
	// 初始化案由树
	if ($m.find("#ayTreeDiv").attr("data-val")
			&& $m.find("#ayTreeDiv").attr("data-val") != null
			&& $m.find("#ayTreeDiv").attr("data-val") != '') {
		var ayJsonData = JSON.parse($m.find("#ayTreeDiv").attr("data-val"));
		$m.find('.list-input .jstree.ay').jstree({
			'core' : {
				'data' : ayJsonData
			}
		});
	}

	// var tree=$('.list-input .jstree.ay');
	// tree.jstree({ 'core': { data: null } });

	// var spcxtree=$('.list-input .jstree.spcx');
	// spcxtree.jstree({ 'core': { data: null } });

};

// 文书列表上部查询条件执行前
function beforeMethod1545035259000($param) {
	var $m = $('#_view_1545035259000');
	var $mid = "1545035259000";

};

// 文书列表上部查询条件执行后
function onloadMethod1545035259000() {
	var $m = $('#_view_1545035259000');
	var $mid = "1545035259000";
	// 初始化数据字典
	var moduleData = wenshulist;
	// 加载数据
	var loadData = $page.loadData = function(postData) {
		// 刷新文书列表，如果返回false，标识不加载数据
		var loadFlag = loadData1545184311000({
			"searchMid" : $mid,
			"seniorMid" : "1545034775000",
			postData : postData || {}
		});
		// 如果默认不加载
		if (loadFlag === false) {
			return;
		}
		/* 刷新树 */
		var queryCondition = $.WebSite.invoke($mid, "addParams");
		var treeDatas = {};
		$.WebSite
				.getData({
					cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
					param : {
						//"groupFields" : "s45;s11,s12;s4;s33,s39;s42;s8,s9;s6;s44",
						"groupFields" : "s45;s11;s4;s33;s42;s8;s6;s44",
						"queryCondition" : JSON.stringify(queryCondition)
					},
					async : false,
					rollback : function(data) {
						treeDatas = data;
						
					}
				});
		// 关键字树
		initTree1545094675000({
			icon : "fa fa-file-text-o",
			title : "关键字",
			searchMid : $mid, // 查询条件所在模块ID
			treeDatas : treeDatas["s45"],
			getGroupFields : function(node) {
				return "s45";
			},
			// 将特殊的数据字典转为树模块所用的
			builderData : function(map) {
				
				var ds = new Array();
				$.each(map, function(key, value) {
					ds.push({
						children : false,
						name : key,
						text : key + "(" + (value || 0) + ")"
					});
				});
				return ds;
			},
			// 节点点击事件
			nodeClick : function(obj) {
				loadData({
					"s45" : obj.node.original.name
				});
			}
		});

		// 文书类型树
		initTree1545095166000({
			icon : "fa fa-paste",
			title : "文书类型",
			searchMid : $mid, // 查询条件所在模块ID
			treeDatas : treeDatas["s6"],
			getGroupFields : function(node) {
				return "s6";
			},
			// 节点点击事件
			nodeClick : function(obj) {
				loadData({
					"s6" : obj.node.original.code
				});
			},
			// 将特殊的数据字典转为树模块所用的
			builderData : function(map) {
				var ds = new Array();
				$.each(moduleData["dic"]["wslx"],
						function(i, item) {
							if (item["name"] == "全部") {// 排除全部
								return true;
							}
							// 接口返回为0的数据项不展示
							var itemCount = map[item["code"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								text : item["name"] + "("
										+ (map[item["code"]] || 0) + ")"
							}));
						});
				return ds;
			}
		});

		// 审判程序树
		initTree1545034782000({
			icon : "fa fa-gavel",
			title : "审判程序",
			searchMid : $mid, // 查询条件所在模块ID
			//treeDatas : treeDatas["s8,s9"],
			treeDatas : treeDatas["s8"],
			data : moduleData["dic"]["ajlx"],
			getGroupFields : function(node) {
				var thisGroupFields = "s" + (node.parents.length + 8);
				var childGroupFields = "s" + (node.parents.length + 9);
				if (thisGroupFields == "s10") {
					return thisGroupFields;
				}
				return thisGroupFields + "," + childGroupFields;
			},
			// 节点点击事件
			nodeClick : function(obj) {
				
				if (obj.node.parents.length == 1) {
					loadData({
						"s8" : obj.node.original.id
					});
				} else if (obj.node.parents.length == 2) {
					loadData({
						"s9" : obj.node.original.id
					});
				} else {
					loadData({
						"s10" : obj.node.original.id
					});
				}
			},
			// 将特殊的数据字典转为树模块所用的
			builderData : function(map, obj, hasChildMap) {

				var ds = new Array();
				// 首次展示案件类型
				if (obj.parents.length == 0) {
					// 案件类型数据字典
					$.each(moduleData["dic"]["ajlx"], function(i, item) {
						// 接口返回为0的数据项不展示
						var itemCount = map[item["code"]];
						if (itemCount == null || itemCount == 0
								|| itemCount == "0") {
							return true;
						}
						ds.push({
							id : item["code"],
							name : item["name"],
							children : true,
							text : item["name"] + "("
									+ (map[item["code"]] || 0) + ")"
						});
					});
				}
				// 展示一级审判程序
				else if (obj.parents.length == 1) {
					var spcxDatas = wenshulist.dic.spcx[obj["id"]];
					$.each(spcxDatas, function(i, item) {
						// 接口返回为0的数据项不展示
						var itemCount = map[item["id"]];
						if (itemCount == null || itemCount == 0
								|| itemCount == "0") {
							return true;
						}
						ds.push({
							parent : obj["id"],
							id : item["id"],
							name : item["text"],
							children : hasChildMap[item["id"]],
							text : item["text"] + "(" + (map[item["id"]] || 0)
									+ ")"
						});
					});
				}
				// 展示二级审判程序
				else {
					var spcxDatas = wenshulist.dic.spcx[obj["parent"]];
					$.each(spcxDatas, function(i, item) {
						// 不是当前节点的子级的不展示
						if (item["parent"] != obj["id"]) {
							return true;
						}
						// 接口返回为0的数据项不展示
						var itemCount = map[item["id"]];
						if (itemCount == null || itemCount == 0
								|| itemCount == "0") {
							return true;
						}
						ds.push({
							parent : obj["id"],
							id : item["id"],
							name : item["text"],
							children : hasChildMap[item["id"]],
							text : item["text"] + "(" + (map[item["id"]] || 0)
									+ ")"
						});
					});
				}
				return ds;
			}
		});

		// 案由树
		initTree1545034785000({
			icon : "fa fa-list-alt",
			title : "案由",
			searchMid : $mid, // 查询条件所在模块ID
			//treeDatas : treeDatas["s11,s12"],
			treeDatas : treeDatas["s11"],
			data : moduleData["dic"]["ay"],
			getGroupFields : function(node) {
				node.state.opened = false;
				var thisGroupFields = "s1" + (node.parents.length + 1);
				var childGroupFields = "s1" + (node.parents.length + 2);
				if (thisGroupFields == "s15") {
					return thisGroupFields;
				}
				return thisGroupFields + "," + childGroupFields;
			},
			// 节点点击事件
			nodeClick : function(obj) {
				/*var searchKey = "s" + (10 + obj.node.parents.length);
				var param = {};
				param[searchKey] = obj.node.original.id;
				loadData(param);*/
				if (obj.node.parents.length == 1) {
					loadData({
						"s11" : obj.node.original.id
					});
				} else if (obj.node.parents.length == 2) {
					loadData({
						"s12" : obj.node.original.id
					});
				} else if (obj.node.parents.length == 3) {
					loadData({
						"s13" : obj.node.original.id
					});
				} else if (obj.node.parents.length == 4) {
					loadData({
						"s14" : obj.node.original.id
					});
				} else {
					loadData({
						"s15" : obj.node.original.id
					});
				}
			}
		});

		// 法院层级树
		initTree1545034788000({
			icon : "fa fa-balance-scale",
			title : "法院层级",
			searchMid : $mid, // 查询条件所在模块ID
			treeDatas : treeDatas["s4"],
			getGroupFields : function(node) {
				return "s" + (node.parents.length + 4);
			},
			builderData : function(map) {
				var ds = new Array();
				$.each(moduleData["dic"]["fycj"],
						function(i, item) {
							if (item["name"] == "全部") {// 排除全部
								return true;
							}
							// 接口返回为0的数据项不展示
							var itemCount = map[item["code"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								text : item["name"] + "("
										+ (map[item["code"]] || 0) + ")"
							}));
						});
				return ds;
			},
			// 节点点击事件
			nodeClick : function(obj) {
				loadData({
					"s4" : obj.node.original.code
				});
			}
		});

		// 地域及法院树
		initTree1545095958000({
			icon : "fa fa-bank",
			title : "地域及法院",
			searchMid : $mid, // 查询条件所在模块ID
			//treeDatas : treeDatas["s33,s39"],
			treeDatas : treeDatas["s33"],
			getGroupFields : function(node) {
				if (node.parents.length == 0) {
					return "s33";
				} else {
					var thisGroupFields = "s" + (node.parents.length + 38);
					var childGroupFields = "s" + (node.parents.length + 39);
					if (thisGroupFields == "s40") {
						return thisGroupFields;
					}
					return thisGroupFields + "," + childGroupFields;
				}
			},
			getNodeParams : function(obj, groupField) {
				var data = {};
				if (obj.id == "#")
					return data;
				if (obj.parents.length == 1) {
					data["s33"] = obj["original"]["shortName"];
				} else {
					data["s39"] = obj["id"];
				}
				return data;
			},
			builderData : function(map, obj, hasChildMap) {
				var ds = new Array();
				// 首次展示地区
				if (obj.parents.length == 0) {
					var zgfyCount = map["最高人民法院"];
					if (zgfyCount != null && zgfyCount != 0 && zgfyCount != "0") {
						// 最高人民法院
						ds.push({
							id : "0",
							name : "最高人民法院",
							shortName : "最高人民法院",
							children : false,
							text : "最高人民法院" + "(" + (map["最高人民法院"] || 0) + ")"
						});
					}
					// 省份数据字典
					$.each(wenshulist.areas, function(i, item) {
						// 接口返回为0的数据项不展示
						var itemCount = map[item["dataValue"]];
						if (itemCount == null || itemCount == 0
								|| itemCount == "0") {
							return true;
						}
						ds.push({
							id : item["fyCode"],
							name : item["title"],
							shortName : item["dataValue"],
							children : true,
							text : item["title"] + "("
									+ (map[item["dataValue"]] || 0) + ")"
						});
					});
				}
				// 其他展示法院
				else {
					var fyDatas = [];
					// 加载法院数据字典
					$.WebSite
							.getData({
								cfg : "com.lawyee.judge.dc.parse.dto.LoadDicDsoDTO@loadFyByCode",
								param : {
									"parentCode" : obj["id"]
								},
								async : false,
								rollback : function(fyDataItem) {
									fyDatas = fyDataItem["fy"];
								}
							});
					$.each(fyDatas, function(i, item) {
						// 接口返回为0的数据项不展示
						var itemCount = map[item["code"]];
						if (itemCount == null || itemCount == 0
								|| itemCount == "0") {
							return true;
						}
						ds.push({
							parent : obj["id"],
							id : item["code"],
							name : item["name"],
							// children: obj.parents.length == 1 ? true : false,
							children : hasChildMap[item["code"]],
							text : item["name"] + "("
									+ (map[item["code"]] || 0) + ")"
						});
					});
				}
				return ds;

			},
			// 节点点击事件
			nodeClick : function(obj) {
				if (obj.node.parents.length == 1) {
					loadData({
						"s33" : obj.node.original.shortName
					});
				} else if (obj.node.parents.length == 2) {
					window.currentFyName = obj.node.original.name;
					loadData({
						"s39" : obj.node.original.id
					});
				} else if (obj.node.parents.length == 3) {
					window.currentFyName = obj.node.original.name;
					loadData({
						"s40" : obj.node.original.id
					});
				}
			}
		});

		// 裁判年份树
		initTree1545096058000({
			icon : "fa fa-calendar",
			title : "裁判年份",
			searchMid : $mid, // 查询条件所在模块ID
			treeDatas : treeDatas["s42"],
			getGroupFields : function(node) {
				return "s" + (node.parents.length + 42);
			},
			builderData : function(map) {
				var ds = new Array();

				var yearArr = [];
				var year = new Date().getFullYear();
				for (var i = year; i >= 1996; i--) {
					yearArr.push(i);
				}

				$.each(yearArr,
						function(i, item) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item,
								text : item + "(" + (map[item] || 0) + ")"
							}));
						});
				return ds;
			},
			// 节点点击事件
			nodeClick : function(obj) {
				loadData({
					"s42" : obj.node.original.name
				});
			}
		});

		// 案例等级树
		initTree1545096160000({
			icon : "fa fa-thumbs-o-up",
			title : "案例等级",
			searchMid : $mid, // 查询条件所在模块ID
			treeDatas : treeDatas["s44"],
			getGroupFields : function(node) {
				return "s" + (node.parents.length + 44);
			},
			builderData : function(map) {
				var ds = new Array();
				// 接口返回为0的数据项不展示
				var itemCount1 = map["01"];
				if (itemCount1 != null && itemCount1 != 0 && itemCount1 != "0") {
					ds.push({
						children : false,
						code : "01",
						name : "指导性案例",
						text : "指导性案例" + "(" + (map["01"] || 0) + ")"
					});
				}
				// 接口返回为0的数据项不展示
				var itemCount2 = map["02"];
				if (itemCount2 != null && itemCount2 != 0 && itemCount2 != "0") {
					ds.push({
						children : false,
						code : "02",
						name : "优秀文书",
						text : "优秀文书" + "(" + (map["02"] || 0) + ")"
					});
				}
				return ds;
			},
			// 节点点击事件
			nodeClick : function(obj) {
				loadData({
					"s44" : obj.node.original.code
				});
			}
		});
		// 将当前查询条件存入浏览器，供全文页使用，wenshuListInfo：文书列表信息，searchItem：查询条件
		$.WebSite.localStorage("wenshuListInfo", {
			"searchItem" : ""
		});
		var highLightArr = [];
		var allSearchItem = addParams1545035259000();
		$.each(allSearchItem, function(i, item) {
			if (item["key"] == "s53" || item["key"] == "s21"
					|| item["key"] == "s22" || item["key"] == "s23"
					|| item["key"] == "s25" || item["key"] == "s26"
					|| item["key"] == "s27" || item["key"] == "s28"
					|| item["key"] == "s45" || item["key"] == "s54") {
				highLightArr.push(item["value"]);
			}
		});
		$.WebSite.localStorage("wenshuListInfo", {
			"searchItem" : highLightArr
		});
		// 刷新文书列表后高亮关键字(标题和裁判理由)
		$.WebSite.getModule("1545184311000").find(".list_title.clearfix h4 a")
				.each(
						function(i, item) {
							$(this).html(
									$.WebSite.keywordHighlight($(this).text()
											|| '', highLightArr || ''));
						});
		$.WebSite.getModule("1545184311000").find(".list_reason p").each(
				function(i, item) {
					$(this).html(
							$.WebSite.keywordHighlight($(this).text() || '',
									highLightArr || ''));
				});
	}
	// 国双搜索监测探针
	function guoshuang() {
		if ($globalNet == 'outer1') {
			var listData = $.WebSite.getModuleData("1545184311000");
			var dataItem = listData.queryResult.resultList;
			_gsq.push([ "T", "GWD-002808", "trackSiteSearch", "keyword", null,
					"utf-8", false ]);
			var _gsElements = document.getElementsByClassName("dataItem");
			if (_gsElements.length > 0) {
				_gsq.push([ "T", "GWD-002808", "bindSearchResults",
						_gsElements[0] ]);
			}
		}
	}
	;
	// 监听页面刷新事件，刷新前要更新$listparams
	window.onbeforeunload = function() {
		// window.localStorage.setItem("$isRefreshPage", "true");
		// window.localStorage.setItem("$refreshPageTime", new
		// Date().getTime());
		// window.localStorage.setItem("$listparams",
		// JSON.stringify(addParams1545035259000()));

		var pageId = $.WebSite.getParameter("pageId");
		var searchItems = JSON.parse(window.localStorage
				.getItem("$listPageSearchItem")
				|| "{}");
		searchItems[pageId] = addParams1545035259000();
		window.localStorage.setItem("$listPageSearchItem", JSON
				.stringify(searchItems));
	

	};
	// 查询参数回显, 刷新文书列表
	// 通过刷新或关闭时的时间判断是刷新页面还是从其他地方跳转过来的
	// 如果是刷新页面，从localStorage取刷新前的查询条件，否则就是从其他地方跳转过来的，从url取查询条件
	// var refreshPageTime = window.localStorage.getItem("$refreshPageTime");
	/*
	 * if(refreshPageTime != null && refreshPageTime != ""){ var oldTime = new
	 * Date(parseInt(refreshPageTime)).getTime(); var nowTime = new
	 * Date().getTime(); if(nowTime - oldTime > 1000){
	 * window.localStorage.setItem("$isRefreshPage", "false"); } }
	 */
	var pageId = $.WebSite.getParameter("pageId");
	var searchItems = JSON.parse(window.localStorage
			.getItem("$listPageSearchItem")
			|| "{}");
	var thisPageSearchItem = searchItems[pageId];
	// if(window.localStorage.getItem("$isRefreshPage") == "true"){
	if ((thisPageSearchItem !== null && thisPageSearchItem !== "" && thisPageSearchItem !== undefined)
			|| thisPageSearchItem === []) {
		// window.localStorage.setItem("$isRefreshPage", "false");
		// var $listparams =
		// JSON.parse(window.localStorage.getItem("$listparams")||"[]");
		$.each(thisPageSearchItem, function(i, item) {
			addParams1545035259000(JSON.parse("{\"" + item["key"] + "\": \""
					+ item["value"] + "\"}"));
		});
		window.localStorage.setItem("$listPageSearchItem", "{}");
	} else {
		addParams1545035259000($.WebSite.getParameter());
	}
	loadData();// 刷新文书列表
};
String.prototype.endWith=function(endStr){
	var d = this.length-endStr.length;
	return(d >=0 && this.lastIndexOf(endStr)==d);
	
};
// 文书列表上部查询条件添加查询条件
function addParams1545035259000(d) {
	var $m = $('#_view_1545035259000');
	var $mid = "1545035259000";
	var searchFlag = true;
	if (d == null) {
		d = {};
	}
	var dic = wenshulist.dic;

	for ( var i in d) {
		var showText = d[i];

		if (i == null) {
			showText = "未知的查询条件";
		}
		// 转换法院层级字典值为中文
		else if (i == "s4") {
			showText = dic.fycjMap[d[i]] || d[i];
		}
		// 转换文书类型字典值为中文
		else if (i == "s6") {
			showText = dic.wslxMap[d[i]] || d[i];
		}
		// 转换案件类型字典值为中文
		else if (i == "s8") {
			var s8Content = d[i];
			if (s8Content == "100") {
				var s8Arr = [ "01", "06", "07", "08", "09", "11", "99" ];
				$.each(s8Arr, function(i, item) {
					appendSearchItem("s8", item, '案件类型：'
							+ (dic.ajlxMap[item] || item));
					// $m.find('.LT_Filter_right').append(
					// '<p data-key="s8" data-value="' + item + '">案件类型：' +
					// (dic.ajlxMap[item]||item) + ' <i class="fa
					// fa-close"></i></p>');
				});
				continue;
			} else {
				showText = dic.ajlxMap[d[i]] || d[i];
			}
		}
		// 转换审判程序字典值为中文
		else if (i == "s9") {
			showText = dic.spcxMap[d[i]] || d[i];
		} else if (i == "s10") {
			showText = dic.spcxMap[d[i]] || d[i];
		}
		// 转换案由字典值为中文 s11 到 s15
		else if (i == "s11") {
			showText = dic.ayMap[d[i]] || d[i];
		} else if (i == "s12") {
			showText = dic.ayMap[d[i]] || d[i];
		} else if (i == "s13") {
			showText = dic.ayMap[d[i]] || d[i];
		} else if (i == "s14") {
			showText = dic.ayMap[d[i]] || d[i];
		} else if (i == "s15") {
			showText = dic.ayMap[d[i]] || d[i];
		}
		// 屏蔽高级检索回填用的字段continue;
		else if (i == "s16") {
			continue;
		}
		// 转换全文为多值
		else if (i == "s21") {
			var s21Content = d[i];
			while (s21Content.indexOf("  ") != -1) {// 字符串中有多个空格减为一个
				s21Content = s21Content.replace("  ", " ");
			}
			if(s21Content.endWith(" ")){
				s21Content=s21Content.substring(0,s21Content.length-1)
			}
			var s21Arr = s21Content.split(" ");
			$.each(s21Arr, function(i, item) {
				if (item.indexOf("%26") != -1) {
					var reg = new RegExp("%26", "g");
					item = item.replace(reg, "&")
				}
				appendSearchItem("s21", item, '全文：' + item);
				// $m.find('.LT_Filter_right').append(
				// '<p data-key="s21" data-value="' + item + '">' + "全文" + "：" +
				// item + ' <i class="fa fa-close"></i></p>');
			});
			continue;
		}
		// 合并裁判日期为一个查询条件
		else if (i == "cprqStart" || i == "cprqEnd") {
			var cprqStartStr = d["cprqStart"] || "1900-01-01";
			var cprqEndStr = d["cprqEnd"] || "2099-01-01";
			var dataValue = cprqStartStr + " TO " + cprqEndStr;
			// $m.find(".LT_Filter_right p[data-key='cprq']").remove();
			// 添加裁判日期查询条件到查询bar
			appendSearchItem("cprq", dataValue, '裁判日期：' + dataValue);
			// $m.find('.LT_Filter_right').append(
			// '<p data-key="cprq" data-value="' + dataValue + '">裁判日期：' +
			// dataValue + ' <i class="fa fa-close"></i></p>');
			continue;
		}
		// 转换法院code为中文
		else if (i == "s38" || i == "s39" || i == "s40") {
			var currentFyName = window.currentFyName;
			if (currentFyName) {
				showText = currentFyName;
				window.currentFyName = null;
			} else {
				var fymc = $.WebSite.getParameter("fymc");
				if (fymc != null && fymc != "") {
					showText = fymc;
				} else {// 缓存和URL都取不到，从后台取法院名称
					$.WebSite
							.getData({
								cfg : "com.lawyee.judge.dc.parse.dto.LoadDicDsoDTO@getFyByCode",
								param : {
									fyCode : d[i]
								},
								async : false,
								rollback : function(data) {
									if (data != null && data != {}) {
										showText = data["name"];
									}
								}
							});
				}
			}
		}
		// 转换公开类型字典值为中文
		else if (i == "s43") {
			showText = dic.gklxMap[d[i]] || d[i];
		}
		// 转换案例等级字典值为中文
		else if (i == "s44") {
			showText = dic.aldjMap[d[i]] || d[i];
		}
		// 转换关键字为多值（使用逗号分隔）
		else if (i == "s45") {
			var s45Arr = d[i].split(",");
			$.each(s45Arr, function(i, item) {
				if ($m.find(".LT_Filter_right p[data-key='s45'][data-value='"
						+ item + "']").length == 0) {
					appendSearchItem("s45", item, '关键字：' + item);
					// $m.find('.LT_Filter_right').append(
					// '<p data-key="s45" data-value="' + item + '">' + "关键字" +
					// "：" + item + ' <i class="fa fa-close"></i></p>');
				}
			});
			continue;
		}
		// 转换指导性案例字典值为中文
		else if (i == "s49") {
			if (d[i] == "0") {
				showText = "指导性案例";
			} else {
				showText = "非指导性案例";
			}
		}
		// 用于s39，s40字段转换为中文，不参与查询，屏蔽
		else if (i == "fymc") {
			continue;
		} else if (i == "pageId") {
			continue;
		}

		appendSearchItem(i, d[i], wenshulist.dataItemStr[i] + "：" + showText);
		// 如果查询条件的key和value不重复
		/*
		 * if($m.find(".LT_Filter_right p[data-key='" + i + "'][data-value='" +
		 * d[i] + "']").length == 0){ // 字段同时有多个只保留一个，关键字，全文例外 if(i != "s21" &&
		 * i != "s45"){ if(i == "s11" || i == "s12" || i == "s13" || i == "s14" ||
		 * i == "s15"){// 案由的s11-15都视为一种字段 $m.find(".LT_Filter_right
		 * p[data-key='s11']").remove(); $m.find(".LT_Filter_right
		 * p[data-key='s12']").remove(); $m.find(".LT_Filter_right
		 * p[data-key='s13']").remove(); $m.find(".LT_Filter_right
		 * p[data-key='s14']").remove(); $m.find(".LT_Filter_right
		 * p[data-key='s15']").remove(); } if(i == "s9" || i == "s10"){//
		 * 审判程序的s9-10都视为一种字段 $m.find(".LT_Filter_right
		 * p[data-key='s9']").remove(); $m.find(".LT_Filter_right
		 * p[data-key='s10']").remove();
		 *  } $m.find(".LT_Filter_right p[data-key='" + i + "']").remove(); } //
		 * 添加查询条件到查询bar $m.find('.LT_Filter_right').append( '<p data-key="' + i + '" data-value="' + d[i] + '">' +
		 * wenshulist.dataItemStr[i] + "：" + showText + ' <i class="fa
		 * fa-close"></i></p>'); } else { searchFlag = false; }
		 */
	}

	$page["isInitS45"] = false;

	if (searchFlag) {
		var postData = [];
		$m.find('.LT_Filter_right p').each(function(i, item) {
			postData.push({
				"key" : $(item).attr("data-key"),
				"value" : $(item).attr("data-value")
			})
		});
		return postData;
	} else {
		return false;
	}

	// 添加查询条件到bar
	function appendSearchItem(key, value, text) {
		if ($m.find(".LT_Filter_right p[data-key='" + key + "'][data-value='"
				+ value + "']").length != 0) {
			searchFlag = false;
			return;
		}
		// 字段同时有多个只保留一个，关键字，全文例外
		if (key != "s21" && key != "s45") {
			if (key == "s11" || key == "s12" || key == "s13" || key == "s14"
					|| key == "s15") {// 案由的s11-15都视为一种字段
				$m.find(".LT_Filter_right p[data-key='s11']").remove();
				$m.find(".LT_Filter_right p[data-key='s12']").remove();
				$m.find(".LT_Filter_right p[data-key='s13']").remove();
				$m.find(".LT_Filter_right p[data-key='s14']").remove();
				$m.find(".LT_Filter_right p[data-key='s15']").remove();
			}
			if (key == "s9" || key == "s10") {// 审判程序的s9-10都视为一种字段
				$m.find(".LT_Filter_right p[data-key='s9']").remove();
				$m.find(".LT_Filter_right p[data-key='s10']").remove();
			}
			$m.find(".LT_Filter_right p[data-key='" + key + "']").remove();
		}
		if(key=="s29"||key=="flyj"){
			$m.find(".LT_Filter_right p[data-key='s29']").remove();
			$m.find(".LT_Filter_right p[data-key='flyj']").remove();

		}

		$m.find('.LT_Filter_right').append(
				'<p data-key="' + key + '" data-value="' + value + '">' + text
						+ ' <i class="fa fa-close"></i></p>');
		
	}

};

// 关键字树执行前
function beforeMethod1545094675000($param) {
	var $m = $('#_view_1545094675000');
	var $mid = "1545094675000";

};

// 关键字树初始化树
function initTree1545094675000(d) {
	var $m = $('#_view_1545094675000');
	var $mid = "1545094675000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
						
							treeDatas = data[params["groupFields"]];
						
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	// 刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		// 滚动条
		// $m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 案由树执行前
function beforeMethod1545034785000($param) {
	var $m = $('#_view_1545034785000');
	var $mid = "1545034785000";

};

// 案由树初始化树
function initTree1545034785000(d) {
	var $m = $('#_view_1545034785000');
	var $mid = "1545034785000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		if (obj.parents.length == 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			

			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
				
				if( item["childGroupFieldList"].length==1){
					var childGroupFieldList=item["childGroupFieldList"][0];
					if(childGroupFieldList==null || childGroupFieldList["childGroupFieldList"]==null){
						hasChildMap[item["value"]] = false;

					}
				}
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
			
				if (hasChildMap[item["id"]]==true||item["parent"]=="#") {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	// 刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		// 滚动条
		// $m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 文书列表-文书列表执行前
function beforeMethod1545184311000($param) {
	var $m = $('#_view_1545184311000');
	var $mid = "1545184311000";

};

// 文书列表-文书列表加载文书数据
function loadData1545184311000(d) {
	var $m = $('#_view_1545184311000');
	var $mid = "1545184311000";
	// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
	var postData = eval("addParams" + d.searchMid + "("
			+ JSON.stringify(d.postData || {}) + ")");
	if (postData !== false) {
		// 实时刷新高级检索
		$.WebSite.invoke("1545034775000", "cleanFormVal");// temp
		var jsonArray = [];
		$.each(postData, function(i, item) {
			if (item["key"] == "s29") {
				jsonArray.push({
					id : "flyj",
					value : item["value"]
				});
			} else if (item["key"] == "cprq") {
				var cprqArr = item["value"].split(" TO ");
				jsonArray.push({
					id : "cprqStart",
					value : cprqArr[0] || ""
				});
				jsonArray.push({
					id : "cprqEnd",
					value : cprqArr[1] || ""
				});
			} else if (item["key"] == "s11" || item["key"] == "s12"
					|| item["key"] == "s13" || item["key"] == "s14"
					|| item["key"] == "s15") {
				var s16Text = wenshulist.dic.ayMap[item["value"]];
				jsonArray.push({
					id : "s16",
					value : s16Text || ""
				});
			} else {
				jsonArray.push({
					id : item["key"],
					value : item["value"]
				});
			}
		});
		if (d.seniorMid) {
			$.WebSite.invoke(d.seniorMid, "setFormValue", jsonArray);
		}
		// 设置排序
		var sortFields = "s50:desc";
		if ($(".tool_PX.tool_On").length != 0) {
			sortFields = $(".tool_PX.tool_On").attr("data-value") + ":desc";
		} else if ($(".tool_PX.tool_OnUp").length != 0) {
			sortFields = $(".tool_PX.tool_OnUp").attr("data-value") + ":asc";
		}
		// 设置翻页
		var pageNum = d.pageNum || 1; // 当前页
		var pageSize = $m.find("select.pageSizeSelect").val();
		var ciphertext = cipher();
		window.localStorage.setItem("$listparams", JSON.stringify(postData));
		// 刷新列表数据
		$.WebSite.refreshModule($mid, {
			sortFields : sortFields,
			ciphertext : ciphertext,
			pageNum : pageNum,
			pageSize : pageSize,
			"queryCondition" : JSON.stringify(postData)
		});
		// 初始化列表事件
		$.WebSite.invoke($mid, "initEvents", {
			"searchMid" : d.searchMid
		});
	}
	return postData;
};

// 文书列表-文书列表初始化列表事件
function initEvents1545184311000(d) {
	var $m = $('#_view_1545184311000');
	var $mid = "1545184311000";
	var searchMid = d.searchMid;
	// 排序
	$m.off("click", "div.tool_PX").on(
			"click",
			"div.tool_PX",
			function(e) {
				if ($(this).hasClass("tool_On")) {
					$(this).removeClass("tool_On").addClass("tool_OnUp");
				} else {
					$(this).removeClass("tool_OnUp").addClass("tool_On");
				}
				$(this).siblings(".tool_PX").removeClass("tool_On")
						.removeClass("tool_OnUp");
				// 刷新列表
				eval("loadData" + $mid + "(" + JSON.stringify({
					"searchMid" : searchMid
				}) + ")");
			});

	// 全选
	$m
			.off("change", "input#AllSelect")
			.on(
					"change",
					"input#AllSelect",
					function(e) {

						if (this.checked) {
							$(this)
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect_on.png) left center no-repeat'
											});
							$('.ListSelect').attr('checked', true);
							$('.ListSelect').prop('checked', true);
							$('.ListSelect')
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect_on.png) left center no-repeat'
											});
							$(this).next('label').text('取消全选');

						} else {
							$(this)
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect.png) left center no-repeat'
											});
							$('.ListSelect').attr('checked', false);
							$('.ListSelect').prop('checked', false);
							$('.ListSelect')
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect.png) left center no-repeat'
											});
							$(this).next('label').text('全选');
						}
					});

	// 复选框：全部选择后 全选按钮改变状态，全部不选择后全选按钮改变状态
	$m
			.off("click", "input.ListSelect")
			.on(
					"click",
					"input.ListSelect",
					function(e) {
						var allCheckNum = $('.ListSelect').length;
						var checkedNum2 = $('.ListSelect:checked').length;
						if (allCheckNum == checkedNum2) {
							$('#AllSelect')
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect_on.png) left center no-repeat'
											});
							$('#AllSelect').next('label').text('取消全选');
						}
						if (checkedNum2 == 0) {
							$('#AllSelect')
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect.png) left center no-repeat'
											});
							$('#AllSelect').next('label').text('全选');
						}
					});

	// 单选
	$m
			.off("change", "input.ListSelect")
			.on(
					"change",
					"input.ListSelect",
					function(e) {
						if (this.checked) {
							$(this)
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect_on.png) left center no-repeat'
											});
						} else {
							$(this)
									.parent()
									.css(
											{
												'background' : 'url(../images/list/AllSelect.png) left center no-repeat'
											});
						}
					});

	// 批量收藏
	$m
			.off("click", "a.AllKeep")
			.on(
					"click",
					"a.AllKeep",
					function(e) {
						var checkedNum = $('.ListSelect:checked').length;
						if (checkedNum == 0) {
							$('body')
									.append(
											'<div class="PopBox-Toast clearfix"><div class="Pop_left fl"><i class="fa fa-frown-o"></i></div><div class="Pop_right fr">请选择收藏内容</div></div>');
							$('.PopBox-Toast').fadeIn().delay(1500).fadeOut();
							setTimeout(function() {
								$('.PopBox-Toast').remove();
							}, 1500);
							return;
						}
						// 未登录跳转到登录页start
						var userInfo = $.WebSite.getUserInfo();
						if (userInfo == null
								|| userInfo.loginId == "anonymousUser") {
							if(navigator.userAgent.indexOf("MSIE")>-1){
		                        var referLink = document.createElement('a');
		                        referLink.href= $website["domain"]
								+ $website["home"] + "?"
								+ window.location.href;
		                        document.body.appendChild(referLink);
		                        referLink.click();
	                        }else{
								window.location.href = $website["domain"]
										+ $website["home"] + "?"
										+ window.location.href;
	                        }
						}
						// 未登录跳转到登录页end
						
						var ids = [];
						var caseInfo = [];
						var packageName = "";
						$('.ListSelect').each(
								function() {
									if (this.checked) {
										ids.push($(this).attr("data-value"));
										// $(this).parents('.LM_list').find('.a_sc').html('<i
										// class="fa fa-heart" style="color:
										// #C50009;"> </i>
										// 已收藏').removeClass('a_sc').addClass('a_ysc');
										var caseInfoItem = {};
										var thisLM_list = $(this).parents(
												'.LM_list');
										packageName = thisLM_list.find(
												".caseName").text();
										caseInfoItem["caseName"] = thisLM_list
												.find(".caseName").text();
										caseInfoItem["slfyName"] = thisLM_list
												.find(".slfyName").text();
										caseInfoItem["ah"] = thisLM_list.find(
												".ah").text();
										caseInfoItem["cprq"] = thisLM_list
												.find(".cprq").text();
										caseInfoItem["id"] = $(this).attr(
												"data-value");
										caseInfo.push(caseInfoItem);
									}
								});

						$.WebSite
								.saveData({
									allowTip : false,
									param : {
										id : ids.toString(),
										caseInfo : JSON.stringify(caseInfo),
										packageName : packageName,
										cfg : "com.lawyee.judge.mem.web.parse.dto.CasePackageDsoDTO@insert"
									},
									success : function(res) {
										$('body')
												.append(
														'<div class="PopBox-Toast clearfix"><div class="Pop_left fl"><i class="fa fa-check"></i></div><div class="Pop_right fr">成功收藏'
																+ checkedNum
																+ '条</div></div>');
										$('.PopBox-Toast').fadeIn().delay(1500)
												.fadeOut();
										setTimeout(function() {
											$('.PopBox-Toast').remove();
										}, 1500);
										// invokeByModuleCode("1539067675000",
										// "refresh");
									},
									error : function(data) {
										$.WebSite.alert({
											msg : data.description || "数据保存失败",
											type : -1
										});
									}
								});

					});
	// 批量下载
	$m
			.off("click", "a.AllDownload")
			.on(
					"click",
					"a.AllDownload",
					function(e) {
						var checkedNum = $('.ListSelect:checked').length;
						if (checkedNum == 0) {
							$('body')
									.append(
											'<div class="PopBox-Toast clearfix"><div class="Pop_left fl"><i class="fa fa-frown-o"></i></div><div class="Pop_right fr">请选择下载内容</div></div>');
							$('.PopBox-Toast').fadeIn().delay(1500).fadeOut();
							setTimeout(function() {
								$('.PopBox-Toast').remove();
							}, 1500);
							return;
						}
						var ids = [];
						$('.ListSelect').each(function() {
							if (this.checked) {
								ids.push($(this).attr("data-value"));
							}
						});

						window.location.href = "/down/more?docIds="+ ids.toString();
						return false;
					});
	// 收藏
	$m
			.off("click", "a.a_sc")
			.on(
					"click",
					"a.a_sc",
					function(e) {
						// 未登录跳转到登录页start
						var userInfo = $.WebSite.getUserInfo();
						if (userInfo == null
								|| userInfo.loginId == "anonymousUser") {
							if(navigator.userAgent.indexOf("MSIE")>-1){
		                        var referLink = document.createElement('a');
		                        referLink.href= $website["domain"]
								+ $website["home"] + "?"
								+ window.location.href;
		                        document.body.appendChild(referLink);
		                        referLink.click();
	                        }else{
								window.location.href = $website["domain"]
										+ $website["home"] + "?"
										+ window.location.href;
	                        }
						}
						// 未登录跳转到登录页end
						var thisId = $(this).attr("data-value");
						var caseInfo = {};
						$(this).parents(".LM_list")
								.each(
										function() {
											caseInfo["caseName"] = $(this)
													.find(".caseName").text();
											caseInfo["slfyName"] = $(this)
													.find(".slfyName").text();
											caseInfo["ah"] = $(this)
													.find(".ah").text();
											caseInfo["cprq"] = $(this).find(
													".cprq").text();
											caseInfo["id"] = thisId;
										});
						var packageName = $(this).parent().parent().parent()
								.find(".caseName").text();
						$.WebSite
								.saveData({
									allowTip : false,
									param : {
										id : thisId,
										caseInfo : JSON.stringify([ caseInfo ]),
										packageName : packageName,
										cfg : "com.lawyee.judge.mem.web.parse.dto.CasePackageDsoDTO@insert"
									},
									success : function(res) {
										$.WebSite.msg({
											msg : "收藏成功",
											type : 1
										});
										invokeByModuleCode("1539067675000",
												"refresh");
									},
									error : function(data) {
										$.WebSite.alert({
											msg : data.description || "数据保存失败",
											type : -1
										});
									}
								});
					});
	// 下载
	$m
			.off("click", "a.a_xz")
			.on(
					"click",
					"a.a_xz",
					function(e) {
						var thisId = $(this).attr("data-value");
						window.location.href = "/down/one?docId="
								+ thisId;
						return false;
					});
	// 翻页
	$m.off("click", "a.pageButton").on("click", "a.pageButton", function(e) {
		$.WebSite.invoke($mid, "loadData", {
			searchMid : searchMid,
			pageNum : $(this).attr("value")
		});
	});
	// 每页条数
	$m.off("change", ".pageSizeSelect").on("change", ".pageSizeSelect",
			function(e) {
				$.WebSite.invoke($mid, "loadData", {
					searchMid : searchMid,
					pageNum : 1
				});
			});

	// 关联文书排版
	$('.list_Association .guanLian')
			.each(
					function() {
						if ($(this).find('span').text() == '本篇') {
							$(this)
									.find('b')
									.css(
											{
												'background' : 'url(../images/list/guanlian_line1.png) center center no-repeat'
											});
						} else {
							$(this)
									.find('b')
									.css(
											{
												'background' : 'url(../images/list/guanlian_line2.png) center center no-repeat'
											});
						}
					});
	$('.list_Association')
			.each(
					function() {

						if ($(this).find('span').first().text() == '本篇') {
							$(this)
									.find('b')
									.first()
									.css(
											{
												'background' : 'url(../images/list/guanlian_line0.png) center center no-repeat'
											});
						} else {
							$(this)
									.find('b')
									.first()
									.css(
											{
												'background' : 'url(../images/list/guanlian_line3.png) center center no-repeat'
											});
						}
						if ($(this).find('span').last().text() == '本篇') {
							$(this)
									.find('b')
									.last()
									.css(
											{
												'background' : 'url(../images/list/guanlian_line5.png) center center no-repeat'
											});
						} else {
							$(this)
									.find('b')
									.last()
									.css(
											{
												'background' : 'url(../images/list/guanlian_line4.png) center center no-repeat'
											});
						}
					});
	// 刷新文书列表后高亮关键字
	var highLightArr = $.WebSite.localStorage("wenshuListInfo")["searchItem"];
	$.WebSite.getModule($mid).find(".list_title.clearfix h4 a").each(
			function(i, item) {
				$(this).html(
						$.WebSite.keywordHighlight($(this).text() || '',
								highLightArr || ''));
			});
	$.WebSite.getModule($mid).find(".list_reason p").each(
			function(i, item) {
				$(this).html(
						$.WebSite.keywordHighlight($(this).text() || '',
								highLightArr || ''));
			});
};

// 法院层级树执行前
function beforeMethod1545034788000($param) {
	var $m = $('#_view_1545034788000');
	var $mid = "1545034788000";

};

// 法院层级树初始化树
function initTree1545034788000(d) {
	var $m = $('#_view_1545034788000');
	var $mid = "1545034788000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	// 刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		// 滚动条
		// $m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 地域及法院执行前
function beforeMethod1545095958000($param) {
	var $m = $('#_view_1545095958000');
	var $mid = "1545095958000";

};

// 地域及法院初始化树
function initTree1545095958000(d) {
	var $m = $('#_view_1545095958000');
	var $mid = "1545095958000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	// 刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		// 滚动条
		// $m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 裁判年份执行前
function beforeMethod1545096058000($param) {
	var $m = $('#_view_1545096058000');
	var $mid = "1545096058000";

};

// 裁判年份初始化树
function initTree1545096058000(d) {
	var $m = $('#_view_1545096058000');
	var $mid = "1545096058000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	// 刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		// 滚动条
		// $m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 审判程序执行前
function beforeMethod1545034782000($param) {
	var $m = $('#_view_1545034782000');
	var $mid = "1545034782000";

};

//审判程序初始化树
function initTree1545034782000(d) {
	var $m = $('#_view_1545034782000');
	var $mid = "1545034782000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	//刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		//滚动条
		//$m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 文书类型树执行前
function beforeMethod1545095166000($param) {
	var $m = $('#_view_1545095166000');
	var $mid = "1545095166000";

};

//文书类型树初始化树
function initTree1545095166000(d) {
	var $m = $('#_view_1545095166000');
	var $mid = "1545095166000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	//刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		//滚动条
		//$m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 指导性案例执行前
function beforeMethod1545096160000($param) {
	var $m = $('#_view_1545096160000');
	var $mid = "1545096160000";

};

//指导性案例初始化树
function initTree1545096160000(d) {
	var $m = $('#_view_1545096160000');
	var $mid = "1545096160000";
	var searchMid = d.searchMid;
	var treeDatas = d.treeDatas || [];
	function loadData(obj, callback) {
		if (obj.parents.length !== 0) {
			var groupField = d.getGroupFields(obj);
			var nodeParams = typeof d.getNodeParams === "function" ? d
					.getNodeParams(obj, groupField) : {};
			// 设置查询参数(页面需要传递查询条件模块的id：searchMid)
			var searchData = eval("addParams" + searchMid + "("
					+ JSON.stringify(d.postData || {}) + ")");
			for ( var key in nodeParams) {
				searchData.push({
					"key" : key,
					"value" : nodeParams[key]
				});
			}
			var params = {};
			$.extend(params, {
				"queryCondition" : JSON.stringify(searchData),
				"facetLimit" : 1000,
				"groupFields" : groupField
			});
			$.WebSite
					.getData({
						cfg : "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@leftDataItem",
						param : params,
						async : false,
						rollback : function(data) {
							treeDatas = data[params["groupFields"]];
						}
					});
		}
		var map = {};
		var hasChildMap = {};
		$.each(treeDatas, function(i, item) {
			map[item["value"]] = item["count"];
			// 从childGroupFieldList获取是否有子级，多级的查询每次都查两级
			if (item["childGroupFieldList"] != null
					&& item["childGroupFieldList"].length > 0) {
				hasChildMap[item["value"]] = true;
			} else {
				hasChildMap[item["value"]] = false;
			}
		});
		var ds = new Array();
		if (typeof d.builderData === "function") {
			ds = d.builderData(map, obj, hasChildMap);
		} else {
			var dataItems = $.WebSite.clone(d.data);
			$.each(dataItems,
					function(i, item) {
						// hasChildMap[item["parent"]] = true;
						if (item.parent == obj.id) {
							// 接口返回为0的数据项不展示
							var itemCount = map[item["id"]];
							if (itemCount == null || itemCount == 0
									|| itemCount == "0") {
								return true;
							}
							ds.push($.extend(item, {
								children : false,
								name : item["text"],
								text : item["text"] + "("
										+ (map[item["id"]] || 0) + ")"
							}));
						}
					});
			$.each(ds, function(i, item) {
				if (hasChildMap[item["id"]]) {
					item["children"] = true;
				}
			});
		}

		callback.call(this, ds);

	}
	//刷新当前模块
	$.WebSite.refreshModule($mid, d, function(html) {
		$m.html(html).show();
		//滚动条
		//$m.find(".jstree").perfectScrollbar();
		// 初始化树

		$m.find(".jstree").jstree({
			"core" : {
				"check_callback" : true,
				"data" : function(obj, callback) {
					loadData(obj, callback)
				}
			}
		}).bind("activate_node.jstree", function(e, obj) {

			if (typeof d.nodeClick == "function") {
				d.nodeClick(obj);
				// 点击树项回到顶部事件
				window.scrollTo(0, 0);
			}
		});
	});
	// 初始化收缩事件，事件绑定在模块中会每次初始化都绑定一次事件，故改为绑定在.treeItem上
	$m.find(".treeItem").on("click", ".itemhead", function() {
		$(this).children("div").toggleClass("collspand fa-angle-right");
		$(this).children("div").toggleClass("expand fa-angle-down");
		$(this).next(".jstree").slideToggle(300);
		$(this).parent().css({
			"padding-bottom" : "12px"
		});
	});
};

// 模块全加载完成后执行
function onloadModuleMethods() {

	// 通用页头:加载完执行的方法
	onloadMethod1545034746000();

	// 页尾:加载完执行的方法
	onloadMethod1545034761000();

	// 扫码、意见建议:加载完执行的方法
	onloadMethod1545034768000();

	// 快速、高级检索:加载完执行的方法
	onloadMethod1545034775000();

	// 文书列表上部查询条件:加载完执行的方法
	onloadMethod1545035259000();

}
