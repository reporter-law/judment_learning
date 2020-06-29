// app properties
var $app = {};
$app.context = {
	root: window['contentPath'] != null ? window['contentPath']:'/'
}



var $ctx = $app.context.root;
// service properties
var $svc = {
	filesystem : $ctx + 'LawyeeUploadify/',
	validImg: $ctx + 'code/image',
	parserest : $ctx + 'website/parse/rest.q4w',
	updaterest : $ctx + 'website/crud/rest.q4w',
	uploadrest : $ctx + 'website/attachment/upload.q4w?',//上传附件地址 
	listfilerest : $ctx + 'website/attachment/listfile.q4w?',//附件列表地址 
	removefilerest : $ctx + 'website/attachment/removefile.q4w?',
	downloadrest : $ctx + 'website/systools/download.q4w?id=',
	readimgrest : $ctx + 'website/systools/readimg.q4w?id='
}
var layer, laydate, layutil, layupload;
var WebSiteInit = function(options) {
	// 判断站点类型
	var siteType = $website["siteType"]||"pc";
	// 如果站点是wx版本的，判断用户访问的类型
	if("wx" == siteType && !$.WebSite.isMobileOpen()){
		document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="/static/css/weui.css">';
		document.body.innerHTML = '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
		return ;
	}
	layui.use(['layer', 'laydate', 'util', 'upload'], function(){
        layer = layui.layer;
        laydate = layui.laydate;
        layutil = layui.util;
        layupload = layui.upload;
        layutil.fixbar({
        	bra1: true
        });
        // 页面需要登录访问
        if($page["loginFlag"]){
        	var user = $.WebSite.getUserInfo();
        	if(user == null || "anonymousUser" === user.userId){
        		// 微信访问需要绑定微信用户信息
            	if("wx" === siteType && $.WebSite.isWeixinOpen()){
            		var str = $page["websiteId"] + "-split-" + $page["id"] + "-split-";
        			var search = location.search.slice(1);
        			var arr = search.split("&");
        			for (var i = 0; i < arr.length; i++) {
        				var ar = arr[i].split("=");
        				if(ar.length == 2){
        					var v = unescape(ar[1]);
        					if(v.length > 0) str += "-k-" + ar[0] + "-v-" + unescape(ar[1]);
        				}
        			}
        			var redirectUri =  encodeURIComponent(location.protocol + "//" + location.host + "/website/wechat/auth2.q4w");
        			window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + $website["wxAppid"] + "&redirect_uri=" + redirectUri + "&response_type=code&scope=snsapi_userinfo&state=" + str + "#wechat_redirect";
            	} else {
            		if(typeof loginWindow == "function"){
    					loginWindow();
    				} else {
    					window.location.href = $website["domain"] + $website["home"] + "?" + window.location.href;	
    				}
            	}
            	return false;
        	}
        }
		var defaults = {
			pageId: $page.id||"",
			modules : $modules||[],
			logged: $website.loggedFlag||false
		};
		var options = $.extend(defaults, options);
		for(var moduleId in $modules){
			var item = $modules[moduleId];
			// 解析主动加载的模块
			if(item.activeLoadFlag === true){
				$.WebSite.parseModule(item, {}, null, true);
			} else {
				$("#_view_" + item.randomId).hide();
			}
		}
		onloadModuleMethods();
		/*window.setTimeout(function () {
			$.WebSite.ajaxLoading(false);
			 执行模块加载完成后的方法  
			// 网页访问记录
			if($website.loggedFlag === true){
				
				$.ajax({
					url: $svc.updaterest,
					type: "POST",
					async: true,
					data: {
						cfg: "", 
						pageId: $page.id, 
						redisCountKey: $page.redisCountKey||"", 
						websiteId: $website["id"], 
						pageId: $page["id"]
					}
				});
			}
		}, 100);*/

    });
};

window.lawyee = {}, (function($, lawyeeUI) {
	"use strict";
	function findData(key, lawyeeData){
        try {
    		var data = "", length = lawyeeData.length;
            if (length == undefined){ 
            	data = lawyeeData[key]
            } else {
            	for (var i = 0; i < length; i++) {
            		if ($(lawyeeData[i])) {
                		data = lawyeeData[i];
                        break
                    }	
            	}
            } 
            return data
        } catch(f) {
            return console.log(f.message), ""
        }
	}
	lawyeeUI.data = {
		lawyeeData: {},
		get: function(orgs) {
			if (!orgs) return "";
			var length = orgs.length, 
				resultData = "", 
				lawyeeData = lawyeeUI.data.lawyeeData;
			var localVersion = "", serviceVersion = lawyeeUI.data.lawyeeData["sysdata-version"]||"";
			if(window.localStorage){
				localVersion = window.localStorage.getItem("sysdata-version")||"";
			}
			if(!lawyeeUI.data.lawyeeData["sysdata-version"]){
				$.WebSite.getData({
					cfg: "com.lawyee.sysadmin.web.parse.dto.SystemDataDto@getVersion",
					param: {},
					async : false,
					rollback: function(data){
	                	serviceVersion = data;
						lawyeeUI.data.lawyeeData["sysdata-version"] = serviceVersion;
					}
				});
			}
			if(localVersion !== "" && localVersion == serviceVersion){
				for (var i = 0; i < length; i++){ 
					resultData = findData(orgs[i], lawyeeData);
	            	if (resultData != "" && resultData != undefined){ 
	            		lawyeeData = resultData;
	            	}
	            	else break;
	            }
			} else {
				if(window.localStorage){
                	window.localStorage.clear();
					window.localStorage.setItem("sysdata-version", serviceVersion);
				}
			}
			if((resultData == "" || resultData == undefined || resultData == null) && length == 2){
				var key1 = orgs[0], key2 = orgs[1];
				if(key2 != undefined && key2 != null && key2 != ""){
					var storeKey = "sysdata:" + key1 + ":" + key2;
					if(window.localStorage){
        				var data = window.localStorage.getItem(storeKey)||"";
        				if(data != ""){
	                    	resultData = JSON.parse(data);
        				}
        			}
					if((resultData == "" || resultData == undefined || resultData == null) && length == 2){
						$.WebSite.getData({
							cfg: "com.lawyee.sysadmin.web.parse.dto.SystemDataDto@getData",
							param: {"id": key2, "type": "sysdata:" + key1},
							async : false,
							rollback: function(data){
								if(window.localStorage){
		            				window.localStorage.setItem(storeKey, JSON.stringify(data));
		            			}
		                    	var pst2 = {};
		                    	pst2[key2] = data;
		                    	var pst = {};
		                    	pst[key1] = pst2;
		                    	$.extend(true, lawyeeUI.data.lawyeeData, pst);
		                    	resultData = findData(key2, lawyeeUI.data.lawyeeData[key1]);
	                        	if (resultData != "" && resultData != undefined || resultData == null){ 
	                        		lawyeeData = resultData;
	                        	}
							}
						});
					}
				}
			}
            return (resultData == undefined || resultData == null) && (resultData = ""), resultData
		}
	}
})(jQuery, window.lawyee), (function($) {
	// 基础方法
	var base = {
		getData: function(opts){
            var opt = $.extend({
                cfg: null,
                param: {},
                type : "post",
				dataType : "json",
				async : true,
				cache: true,
				ifModified: true,
				readUrlParam: true,
                rollback: null,
                error: null
            }, opts);
			if (opt.cfg) {
				var url = $website.dataParsePath || $svc.parserest;
				var postData = opt.param || {};
				if ((opt.cfg.indexOf("#") > 0 || opt.cfg.indexOf("@") > 0) && opt.cfg.indexOf(".") > 0) {
					$.extend(postData, {cfg:opt.cfg});
				} else {
					if (!/^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(opt.cfg)) {
						$.extend(postData, {url: $website.domain + $website.enName + "/" + opt.cfg});
					}else{
						$.extend(postData, {url:opt.cfg});
					}
				}
				if(opt.readUrlParam === true){
					postData = $.WebSite.getParameter(postData)
				}
				if ($('[name=__RequestVerificationToken]').length > 0) {
					postData["__RequestVerificationToken"] = $('[name=__RequestVerificationToken]').val();
	            }
				$.ajax({
					url : url,
					type : opt.type,
					dataType : opt.dataType,
					async : opt.async,
					cache : opt.cache,
					ifModified : opt.ifModified,
					data : postData,
					success : function(data) {
						if (data.code == 1 || data.code == "success") {
							if(data.secretKey){
								var obj = DES3.decrypt(data.result, data.secretKey);
								try{ obj = $.parseJSON(obj) }catch(e){ }
								data.result = obj;
							}
							if(opt.rollback){
								if(typeof opt.rollback === "function"){
									if(data.result== null && typeof data.description === "string"){
										try{
											opt.rollback($.parseJSON(data.description));
										}catch(e){
											$.WebSite.appendToView(item || "msg", e);
										}
									}else{
										opt.rollback(data.result);
									}
								}
							}
						} else {
							if(typeof opt.error === "function"){
								opt.error(data);
							} else {
								// 用户未登录
								
								if (data.code == -4) { 
									if(typeof loginWindow == "function"){
										loginWindow();
									} else {
										$.WebSite.msg({
											msg: "用户未登录，请重新登录",
											type: 2
										})
									}
								} 
								// 访问数据过于频繁，需要验证码验证
								
								else if (data.code == -11) {
									layer.open({
										type: 1,
										area: ['420px', '240px'], //宽高
										title: "访问受限",
										closeBtn: 0,
										btn: ['提交验证'],
										yes: function(index, layero){
											opt.param["antitheftImageCode"] = $("input#imageCode").val();
											if(opt.param["antitheftImageCode"] == ""){
												$.WebSite.msg({
													msg: "请输入验证码",
													type: 2
												});
												$("input#imageCode").css({"border": "1px solid red"});
												return;	
											}
											$.WebSite.getData(opt);
											if(opt["$m"]){
												setTimeout(function(){
													$.WebSite.invoke(opt["$m"]["randomId"], "onloadMethod");
												}, 500);
											}
											layer.close(index);
										},
										content: 
											'<div style="width: 400px margin: 5px auto;line-height: 30px;padding: 10px 20px">' +
											'<div>提示：' + data.description + '</div>' +
											'<div>验证码：<input id="imageCode" autocomplete="off" type="text" style="border:1px solid #ccc;"></div>' +
										'<div><img alt="图片验证码" id="codeImagePic" src="' + $svc.validImg + '?' + Math.random() + '" style="margin-left: 10px"></div>' +
										'</div>'
									});
									$("body").on("click", "img#codeImagePic", function(){
										$.WebSite.reloadCaptcha(this);
									})
								} else {
									/*$.WebSite.msg({
										msg: data.description||"数据解析异常",
										type: 2
									})*/
								}
							}
						}
					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						$.WebSite.appendToView("msg", errorThrown);
					},
					complete: function(XMLHttpRequest){$.WebSite.loading({isShow:false});}
				});
			}
		},
		/**
		 * 解析模块
		 * @params item 模块配置
		 * @params postData 请求参数
		 * @params refreshFun 回调方法
		 * @params isinit 是否初始化加载，true初始化的加载，false非初始化加载或者刷新
		 */
		parseModule : function(item, postData, refreshFun, isinit) {
			try {
				var itParams = {};
				$.extend(itParams, $.WebSite.getParameter());
				// 解析模块前执行的方法
				if(typeof item.parameter === "object"){
					itParams = base.clone(item.parameter);
					$.extend(item.parameter, postData);
				} else if(item.parameter != ""){
					itParams = JSON.parse((item.parameter||"{}").replace(/\\/g, ""));
				}
				try{
					var beforeMethod = eval("("+ "beforeMethod" + item.randomId +")");
					beforeMethod(itParams);
				} catch (e) { }
				postData = $.extend(itParams, postData);
				item["_postData"] = postData;
				// cfg不为空，表示到后台读取数据
				if (item.cfg) {
					var moduleStorage = null;
					// 页面开启数据缓存功能
					if($page["cacheFlag"] === true){
						if(isinit == undefined || true === isinit){
							moduleStorage = base.localPageGetStorage(item, postData, true);
						} else {
							postData = base.localPageGetStorage(item, postData, false);
						}
					}
					if(moduleStorage != null){
						$.extend(postData, moduleStorage);
						$("body").data(item.randomId, postData);// 将模块数据存于body中，通过$("body").data(item.randomId)可以获取
						$.WebSite.appendToView(item || "msg", postData, refreshFun);
					} else {
						var rollback = function(result){
							if(!result){
								$.WebSite.importCss("/static/css/weui.css");
								$('#_view_' + item.randomId).html('<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">抱歉，出错了！您所访问的数据不存在或已下线。</h4></div></div>').show();
								return ;
							}
							// 页面开启数据缓存功能
							if($page["cacheFlag"] === true){
								base.localPageSetStorage(item, base.clone(postData), base.clone(result));
							}
							$("body").data(item.randomId, result);// 将模块数据存于body中，通过$("body").data(item.randomId)可以获取
							$.WebSite.appendToView(item || "msg", result, refreshFun);
						}
						if(item.cfg === "com.lawyee.wbsttools.web.parse.dto.AppUserDTO@currentUser"){
							rollback(base.getUserInfo());
						} else {
							$.WebSite.getData({
								"$m": item,
								cfg: item.cfg,
								param: postData,
								async: item.asyncFlag,
								rollback: function(result){
									rollback(result);
								}
							});
						}
					}
				} else {
					$("body").data(item.randomId, postData);// 将模块数据存于body中，通过$("body").data(item.randomId)可以获取
					$.WebSite.appendToView(item || "msg", postData, refreshFun);
				}
			} catch (e) {
			//	$.WebSite.appendToView("msg", e.message, refreshFun);
			}
		},
		/**
		 * 刷新模块
		 * @params isinit 是否初始化加载，true初始化的加载，false非初始化加载或者刷新
		 */
		refreshModule: function(id, postData, refreshFun, isinit){
			var moduleId = $.WebSite.getModuleId(id);
			var item = base.clone($modules[moduleId]);
			if(moduleId=="1541490383000"){
				item.cfg="com.lawyee.judge.dc.parse.dto.LoadDicDsoDTO@loadFy";
			}
			if(item){
				if(isinit == undefined){
					isinit = false;
				}
				$.WebSite.parseModule(item, postData, refreshFun, isinit);
				if(typeof window['onloadMethod'+item.randomId] === "function"){
					window['onloadMethod'+item.randomId]();
				}
			}else{
				//alert("模块【"+moduleId+"】的配置不存在。");
			}
		},
		/**
		 * 将数据解析的模板
		 */
		appendToView: function(item, data, refreshFun){
			if(typeof item != "object"){
				/*$.WebSite.msg({
					msg : data,
					type: 2
				});*/
				return false;
			}
			if(typeof data === "object"){
				var gettpl = item.context;
				laytpl(gettpl).render(data, item["_postData"], function(html){
					if(typeof refreshFun === "function"){
						refreshFun(html, data);
					}else{
						$('#_view_' + item.randomId).html(html).show();
					}
				});
			} else{
				$('#_view_' + item.randomId).html(data).show();
			}
		},
		imgSrc: function(idOrUrl, defImg) {
			if (idOrUrl) {
				if (/^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(idOrUrl)) {
            		return idOrUrl;
    		    }else{
	            	if(idOrUrl.indexOf("/") > -1 || idOrUrl.indexOf("\\") > -1){
	            		return $svc.filesystem + idOrUrl;
	            	} else {
		            	return $svc.readimgrest + idOrUrl;
	            	}
    			}
            }
			return defImg||"/common/static/scripts/lawyeeui/images/nullimg.jpg";
		},
		download: function(idOrUrl) {
			if (idOrUrl) {
				if (/^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(idOrUrl)) {
            		return idOrUrl;
    		    }else{
	            	if(idOrUrl.indexOf("/") > -1 || idOrUrl.indexOf("\\") > -1){
	            		return $svc.filesystem + idOrUrl;
	            	} else {
		            	return $svc.downloadrest + idOrUrl;
	            	}
    			}
            };
		},
		/**
		 * 获取指定模块数据
		 * 
		 * @param randomId
		 *            模块编号
		 */
		getModuleData: function(id){
			var randomId = $.WebSite.getModuleId(id);
			return $("body").data(randomId);
		},
		/**
		 * 根据模块编码获取模块ID
		 */
		getModuleId: function(varName){
			if($("#_view_"+varName).length > 0){
				return varName
			} else if($("[var-name='_var_name_" + varName + "']").length >0){
				var id = $("[var-name='_var_name_" + varName + "']").attr("id");
				if(id.indexOf("_view_") >= 0){
					return id.substring(6);
				}
			}
			return "";
		},
		/**
		 * 获取指定模块
		 * 
		 * @param randomId
		 *            模块编号
		 */
		getModule: function(id){
			var randomId = $.WebSite.getModuleId(id);
			return $("#_view_" + randomId);
		},
		/**
		 * 根据模块编码执行模块的方法
		 * @param mid 模块编号
		 * @param methodName 模块方法
		 * @param param 模块方法参数
		 */
		invoke: function(mid, methodName, param){
			if(param == null){ param = {} }
			var method = methodName + mid + "(" + JSON.stringify(param) + ")";
			return eval("(" + method + ")");
		},
		/**
		 * 获取url中的参数
		 */
		getParameter : function(opts) {
			var result = {};
			var search = location.search.slice(1);
			var arr = search.split("&");
			for (var i = 0; i < arr.length; i++) {
				var index_ = arr[i].indexOf("=");
				if(index_ != -1){
					var k = arr[i].substring(0, index_);
					var v = arr[i].substring((index_ + 1), arr[i].length);
					if(v.length > 0) result[k] = decodeURI(v);
				}
			}
			
			if(typeof opts === "string"){
				return result[opts]||"";
			}
			$.extend(result, opts);
			return result;
		},
		/**
		 * 防止重复提交，遮盖层
		 * @param isShow true：打开，false：关闭
		 */
		ajaxLoading: function (isShow) {
            var $obj = top.$('#ajaxLoading_background');
            if (isShow) {
            	if($obj.length <= 0){
            		var _html = '<div id="ajaxLoading_background" style="cursor: progress; position: fixed; top: -50%; left: -50%; width: 200%; height: 200%; z-index: 10000; overflow: hidden; background: rgb(255, 255, 255);"><img src="data:image/gif;base64,R0lGODlhZAAJAKIFAM4xMc5jY86cnM7Ozv///////wAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAHACwAAAAAZAAJAAADazi6S/zuNTnpiBRLDe31DiGO4UWK34mGatqypxvDpFzTo53jqzn7N+BO2FOVjLrii3hcInnN35OZjAanWKdWur12h1mu2DsGf5VlNHltTlvbbDV8Lq+/7dU8VE/d+0GAFhwMgxUZgYeCIAkAACH5BAUKAAcALAAAAAAJAAkAAAMRCLpM/kTBJ2cE9uY6OWQgkAAAIfkEBQoABwAsAAAAABMACQAAAyQYukvwEAZCK5nAVjD1dZ7TaVjIhaV3eqm2kqA6Wq3FMYwTRQkAIfkEBQoABwAsAAAAAB0ACQAAAzcoukvxEBJAaxUka4LD1h7wZQA2dqMzpWWKjiFrfu8Xj+2pwis+b7XN7ZOj7Ww9ImPpiEQmFksCACH5BAUKAAcALAAAAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALAoAAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALBQAAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALB4AAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALCgAAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALDIAAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALDwAAAAnAAkAAANLOLpL8hCSQGslIGs9iP9EJ4DfGJDeCaBYh4qsyaos4JIwKqM0arM50o7UI/1ejthkhqndQEHQEFQEHXFJ3ZLX9DG+jkhkYrFgNpsEACH5BAUKAAcALEYAAAAdAAkAAAM3OLpL8hCSQGsdJGuCxdZe8GUBNnajM6Vlio4ha37vF4/tqcIrPm+1ze2To+1sPSJj6YhEJhZLAgAh+QQFCgAHACxQAAAAEwAJAAADJDi6S/IQDkIrmcJWMfV1ntNpWMiFpXd6qbaSoDparcUxjBNFCQA7" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;" /></div>';
            	    top.$("body").append(_html);
            	}
                $obj.show();
            } else {
                $obj.fadeOut();
            }
        },
        /**
         * 带提示信息的防止重复提交，遮盖层
		 * @param opt json 对象 {isShow:true/false, msg: "提示文本"}
         */
        loading: function (ops) {//加载动画显示与否
			if (ops.isShow) {
				if(ops.text){
					top.layermsgid_ = top.layer.msg(ops.text||"", {
						icon: 16,
						shade: 0.1,
						time: -1
					});
				}else{
					top.layermsgid_ = top.layer.load(2);
				}
			} else {
				top.layer.close(top.layermsgid_);
			}
        },
        /**
         * 系统提示框
		 * @param opt json 对象 {type: 1/2/3/4/5/6, msg: "提示文本"}
         */
        alert: function (opts) {
			var opt = $.extend({
                type: 1,
                msg: "提示信息",
				rollbackData: null,
                rollback: null
            }, opts);
            if (opt.type == -1) {
                opt.type = 2;
            }
            top.layer.alert(opt.msg, {
                icon: opt.type,
                closeBtn: 0,
                title: "系统提示"
            }, function(index){
				if(typeof opt.rollback === "function"){
					opt.rollback(opt.rollbackData, index);
				}
				top.layer.close(index);
			});
        },
        /**
         * 系统确认框
		 * @param msg 提示文本
         */
        confirm: function (opt) {
            top.layer.confirm(opt.msg, {
                icon: 7,
                title: "系统提示",
                btn: ['确认', '取消'],
            }, function (index) {
                opt.callBack(true, index);
				top.layer.close(index);
            }, function (index) {
                opt.callBack(false, index);
            });
        },
        /**
         * 信息提示
		 * @param opt json 对象 {type: 1/2/3/4/5/6, msg: "提示文本"}
         */
        msg: function (opts) {
            var opt = $.extend({
                type: 5,
                shade : 0,
				anim : 6,
                rollback: null
            }, opts);
            top.layer.msg(opt.msg, { icon: opt.type, time: opt.time, shade: opt.shade, anim: opt.anim }, function(){
				if(typeof opt.rollback === "function"){
					opt.rollback();
				}
			});
        },
        /**
         * 关闭弹窗
		 * @param rollback 关闭后的回调函数
         */
        dialogClose: function (rollback) {
            try {
                var index = top.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                var $IsdialogClose = top.$("#layui-layer" + index).find('.layui-layer-btn').find("#IsdialogClose");
                var IsClose = $IsdialogClose.is(":checked");
                if ($IsdialogClose.length == 0) {
                    IsClose = true;
                }
                if (IsClose) {
                	if(typeof rollback === "function"){
                		rollback();
                	}
                    top.layer.close(index);
                } else {
                    location.reload();
                }
            } catch (e) {
                alert(e)
            }
        },
        /**
         * tips
         * @param opts
         */
        tips: function(opts){
        	var opt = $.extend({
        		area: ["382px", "auto"],
         	    tips: [3, '#D7000F'],
         	    msg: "还没有设置提示信息",
         	    elem : "document"
        	}, opts);
        	top.layer.tips(opt.msg, opt.elem, {
        	    area: opt.area,
        	    tips: opt.tips,
        	    time: opt.time
        	});
        },
        pageTitle: function(title){
        	document.title = title||"公共法律服务网";
        },
        removeData: function(opt){
            var opt = $.extend( {
                msg: "注：您确定要删除吗？该操作将无法恢复",
                loading: "正在删除数据...",
                param: [],
                type: "post",
                dataType: "json",
                success: null
            }, opt);
            base.confirm({
                msg:opt.msg,
                callBack: function (r) {
                    if (r) {
                        base.loading({ isShow: true, text: opt.loading });
                        window.setTimeout(function () {
                            var postdata = opt.param;
                            $.ajax({
                            	url: $website.dataCRUDPath || $svc.updaterest,
                                data: postdata,
                                type: opt.type,
                                dataType: opt.dataType,
                                success: function (data) {
                                	if (data != null && data.code == "1") {
                                		base.alert({ msg: data.description||"数据已删除", type: -1 });
                                		if(typeof opt.success === "function"){
                                            opt.success(data);
                                		}
                                    } else {
                                    	base.alert({ msg: data.description||"数据删除失败", type: -1 });
                                    }
                                },
                                error: function (XMLHttpRequest, textStatus, errorThrown) {
                                    base.loading({ isShow: false });
                                    base.msg({ msg: errorThrown, type: -1 });
                                },
                                beforeSend: function () {
                                	base.loading({ isShow: true, text: opt.loading });
                                },
                                complete: function () {
                                	base.loading({ isShow: false });
                                }
                            });
                        }, 500);
                    }
                }
            });
        },
        /**
         * 提交数据
		 * @param opt json 对象
         */
        saveData: function (opt) {
            var opt = $.extend({
                param: [],
                type: "post",
                dataType: "json",
                loading: "处理中...",
                success: null,
				allowTip: true,
				async: true,
				cache: false,
                error: function(XMLHttpRequest, textStatus, errorThrown) {},
                close: true
            }, opt);
            base.loading({ isShow: true, text: opt.loading });
            window.setTimeout(function () {
				var postData = $.extend($.WebSite.getParameter(opt.param), {"siteEnCode": $website["enCode"]});
                $.ajax({
                	url: $website.dataCRUDPath || $svc.updaterest,
                    data: postData,
                    type: opt.type,
					async : opt.async,
					cache : opt.cache,
                    dataType: opt.dataType,
                    success: function (data) {
                    	if (data != null && data.code == "1") {
							if(opt.allowTip){
								base.alert({ 
									msg: data.description||"数据已经保存", 
									type: 1, 
									rollbackData: data,
									rollback: function(){
										if(typeof opt.success === "function"){
											opt.success();	
										}
									} 
								});
							}else if(typeof opt.success === "function"){
								opt.success(data);	
							}
							if (opt.close == true) {
								base.dialogClose();
							}
                    	} else {
                    		if(opt.allowTip){
                        		base.alert({ msg: data.description||"数据保存失败", type: -1 });	
                    		}
                    		opt.error(data);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        base.loading({ isShow: false });
                		if(opt.allowTip){
                            base.msg({ msg: errorThrown.message, type: -1 });	
                		}
                        opt.error(XMLHttpRequest, textStatus, errorThrown);
                    },
                    complete: function () {
                        base.loading({ isShow: false });
                    }
                });
            }, 1000);
        },
		localPageStorageParams: function(randomId){
			var pageId = $page["id"];
			if(window.sessionStorage){
				var pageStorage = window.sessionStorage.getItem(pageId)||{};
				if(typeof pageStorage === "string"){
					pageStorage = JSON.parse(pageStorage);
				}
				var moduleStorage = pageStorage[randomId]||{};
				var storageInitKey = moduleStorage["storageKey"]||"";
				if(storageInitKey != ""){
					return moduleStorage[storageInitKey + "KEY"]||null;
				}
			}
			return null;
		},
		localPageStorageKey: function(postData){
			var storageInitKey = "";
			for(var key in postData){
				if("pageNo" != key && "pageSize" != key && "cfg" != key && postData[key]) storageInitKey += (key + postData[key]);
			}
			return $.md5(storageInitKey.split("").reverse().join("").replace(" ", ""));
		},
		localPageSetStorage: function(module, postData, result){
			var pageId = $page["id"];
			var randomId = module.randomId;
			if(window.sessionStorage){
				var pageStorage = window.sessionStorage.getItem(pageId)||{};
				if(typeof pageStorage === "string"){
					pageStorage = JSON.parse(pageStorage);
				}
				var moduleStorage = pageStorage[randomId]||{};
				
				var storageInitKey = moduleStorage["storageKey"]||"";
				if(storageInitKey == ""){
					storageInitKey = base.localPageStorageKey(postData);
				}
				if("scroll" === module["listDataLoadType"]){
					var ms = moduleStorage[storageInitKey]||null;
					if(ms != null){
						if(1 != result["pageNo"]){
							$.each(result.result, function(i, lists){
								ms.result.push(lists);
							});
							result.result = ms.result;
						}
					}
				}
				moduleStorage["storageKey"] = storageInitKey;
				moduleStorage[storageInitKey] = result;
				moduleStorage[storageInitKey+"KEY"] = postData;

				pageStorage[randomId] = moduleStorage;
				window.sessionStorage.setItem($page["id"], JSON.stringify(pageStorage));
			}
		},
		localPageGetStorage: function(module, postData, isStorage){
			var pageId = $page["id"];
			var randomId = module.randomId;
			
			if(window.sessionStorage){
				var pageStorage = window.sessionStorage.getItem(pageId)||{};
				if(typeof pageStorage === "string"){
					pageStorage = JSON.parse(pageStorage);
				}
				var moduleStorage = pageStorage[randomId]||{};
				
				var storageInitKey = moduleStorage["storageKey"]||"";
				if(storageInitKey == ""){
					storageInitKey = base.localPageStorageKey(postData);
				}
				if(isStorage === false){
					var p = moduleStorage[storageInitKey + "KEY"]||{};
					if(1 != postData["pageNo"]){
						postData = $.extend(p, postData);
					}
					var nowStorageKey = base.localPageStorageKey(postData);
					if(storageInitKey !== nowStorageKey){
						storageInitKey = nowStorageKey;
					} 
				} else {
					postData = $.extend(postData, moduleStorage[storageInitKey + "KEY"]||{});
				}
				moduleStorage["storageKey"] = storageInitKey;
				moduleStorage[storageInitKey + "KEY"] = postData;
				pageStorage[randomId] = moduleStorage;
				window.sessionStorage.setItem(pageId, JSON.stringify(pageStorage));
				if(isStorage == undefined || true === isStorage){
					var ms = moduleStorage[storageInitKey]||null;
					return ms;
				}
				return postData
			}
			return null;
		},
        getDataItem: function(id, key){
			var dataItem = lawyee.data.get(["dataItem", id])||{};
			if(key != null && key != ""){
				return dataItem[key]||"";
			}
			return dataItem;
        },
        listDataItem: function(parentId){
			var result = lawyee.data.get(["dataItems", parentId])||[];
        	return result;
        },
        getArea: function(id, key){
			var area = lawyee.data.get(["area", id])||{};
			if(key != null && key != ""){
				return area[key]||"";
			}
			return area;
        },
        listArea: function(parentId){
			var result = lawyee.data.get(["areas", parentId])||[];
        	return result;
        },
		// 将毫秒数时间装成HH小时MM分ss秒
		formatTime: function(time){
			var hours = parseInt((time%86400000)/3600000);
			var minutes = parseInt((time%3600000)/60000);
			var seconds = parseInt((time%60000)/1000);
			if(hours > 0)
				return hours + "小时" + minutes + "分钟" + seconds + "秒";
			else
				return minutes + "分钟" + seconds + "秒";
		},
        // 日期格式化yyyy-
        formatDate : function (v, format) {
            if (!v) return "";
            var d = v;
            if (typeof v === 'string') {
                if (v.indexOf("/Date(") > -1)
                    d = new Date(parseInt(v.replace("/Date(", "").replace(")/", ""), 10));
                else
                    d = new Date(Date.parse(v.replace(/-/g, "/").replace("T", " ").split(".")[0]));// 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
            } else if (typeof v === "number"){
            	d = new Date(v);
            }
            var o = {
                "M+": d.getMonth() + 1,  // month
                "d+": d.getDate(),       // day
                "h+": d.getHours(),      // hour
                "m+": d.getMinutes(),    // minute
                "s+": d.getSeconds(),    // second
                "q+": Math.floor((d.getMonth() + 3) / 3),  // quarter
                "S": d.getMilliseconds() // millisecond
            };
            format = format||"yyyy-MM-dd";
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        },
        /**
         * 字符串加密
         */
        encrypt: function(val){
        	return DES3.encrypt(val, "sL9p4mS2mSVTSBzWn4p16Mu7");
        },
        /**
         * 图片验证码
         */
        reloadCaptcha: function(ele){
        	$(ele).attr("src", $ctx + "code/image.q4w?" + Math.random());
			$(ele).off("click").on("click", function(){
				$(this).attr("src", $ctx + "code/image.q4w?" + Math.random());
			});
        },
        getUserInfo : function(){
        	if($page._userInfo == null){
            	$.WebSite.getData({
            		cfg: "com.lawyee.wbsttools.web.parse.dto.AppUserDTO@currentUser",
            		async : false,
            		param: $.WebSite.getParameter(),
            		rollback: function(us){
            			$page._userInfo = us;
            		},
            		error: function(data){ }
            	});
        	}
        	return $page._userInfo;
        },
        uuid: function(){
        	var guid = "";
            for (var i = 1; i <= 32; i++) {
                var n = Math.floor(Math.random() * 16.0).toString(16);
                guid += n;
                // if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid +=
				// "-";
            }
            return guid;
        },
        random: function(size){
        	var str = "",
        	arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        	for(var i=0; i<size; i++){
        		str += arr[Math.round(Math.random() * (arr.length-1))];
        	}
        	return str;
        },
		// 是否移动设备打开
		isMobileOpen: function(){
			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			var isAndroid = ua.indexOf('android') != -1;
			var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
			if (!isWeixin && !isAndroid && !isIos) {
				return false;
			}
			return true;
		},
        /**
         * 是否微信访问
         */
        isWeixinOpen: function(){
        	var ua = navigator.userAgent.toLowerCase();
        	if(ua.match(/MicroMessenger/i) == "micromessenger"){
        		return true;
        	}else{
        		return false;
        	}
        },
		/**
		 *验证是否小于等于len位数的字符串
		 */
		isLenStr: function(str, len){
			str = $.trim(str);
			if(str.length > len){
				return false;
			}else{
				return true;
			}
		},
		/**
		 *验证是否小于等于len位数的字符串
		 */
		timeText: function(v, suf){
			if(typeof suf == 'undefined'){
				suf = true;
			}
			if (!v) return "";
            var d = v;
            if (typeof v === 'string') {
                if (v.indexOf("/Date(") > -1)
                    d = new Date(parseInt(v.replace("/Date(", "").replace(")/", ""), 10));
                else
                    d = new Date(Date.parse(v.replace(/-/g, "/").replace("T", " ").split(".")[0]));// 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
            } else if (typeof v === "number"){
            	d = new Date(v);
            }
			var oldTime = d.getTime();
			var newTime = new Date().getTime();
			var diffValue = newTime - oldTime;
			if(diffValue < 0) return "";
			var mh = diffValue/(86400000*360);
			var mh = diffValue/(86400000*30);
			var w = diffValue/604800000;
			var day = diffValue/86400000;
			var h = diffValue/3600000;
			if(mh >= 1 || mh >= 1 || w >= 1 || day >= 1 || h >= 1){
			    var txt = $.WebSite.formatDate(d, "yyyy-MM-dd hh:mm");
			    var newDayTxt = $.WebSite.formatDate(new Date(), "yyyy-MM-dd hh:mm");
				var subTxt = txt.substring(0, 5);
				var subNewDayTxt = newDayTxt.substring(0, 5);
				if(subTxt == subNewDayTxt){
					return txt.substring(5);
				} else {
					return txt;
				}
			}
			var m = diffValue/60000;
			if(m >= 1){
			    return parseInt(m) + " 分钟" + (suf ? "前" : "");
			}
			return "刚刚";
		},
		clone : function(obj){
			// Handle the 3 simple types, and null or undefined
		    if (null == obj || "object" != typeof obj) return obj;
		    // Handle Date
		    if (obj instanceof Date) {
		        var copy = new Date();
		        copy.setTime(obj.getTime());
		        return copy;
		    }
		    // Handle Array
		    if (obj instanceof Array) {
		        var copy = [];
		        for (var i = 0, len = obj.length; i < len; ++i) {
		            copy[i] = $.WebSite.clone(obj[i]);
		        }
		        return copy;
		    }
		    // Handle Object
		    if (obj instanceof Object) {
		        var copy = {};
		        for (var attr in obj) {
		            if (obj.hasOwnProperty(attr)) copy[attr] = $.WebSite.clone(obj[attr]);
		        }
		        return copy;
		    }
		    throw new Error("Unable to copy obj! Its type isn't supported.");
		},
		/**
		 * 关键词高亮显示
		 * @param context 要高亮显示的内容
		 * @param keywords 关键词库集合
		 * @param style 高亮显示的样式
		 */
		keywordHighlight: function(context, keywords, style){
			var txt = context||"";
			var keys = [];
			if(typeof keywords === "string"){
				keys.push(keywords);
			} else if(typeof keywords === "object"){
				keys = keywords;
			}
			//if(checkCharacter(keywords.toString())){
				var stl = style||"color:red;"
				// 遍历所有的关键字
				$.each(keys, function(i, key){
					// 对包含多个信息的关键字进行处理，含有&或|的分割，使用js split分割多个的写法，/开头结尾，|分隔，要匹配|时写为\|
					var keyss = key.split(/&|\|/);
					// console.info(keyss);
					$.each(keyss, function(i, key1){
						if(key1!=""&&key1!=null){
							//高亮所有出现的关键词
							if(key1.indexOf("*")>0){
								key1=key1.replace(/\*/g,"");
							}
							var reg = new RegExp(key1,"g");
							if(txt.indexOf(key1) != -1){
								//txt = txt.replace(reg, '<span style="' + stl + '">' + key1 + "</span>")
								txt = txt.replace(reg, '<font color="red">' + key1 + "</font>")
							}
						}
					});
				});
				return txt;
			/*}else{
				return txt;
			}*/
		},
		/**
	     * 动态加载JS
	     * @param {string} url 脚本地址
	     * @param {function} callback  回调函数
	     */
		importJs: function(url, callback){
			var head = document.getElementsByTagName('head')[0];
	        var script = document.createElement('script');
	        script.type = 'text/javascript';
	        script.src = url;
	        script.async = "async"
	        if(typeof(callback)=='function'){
	            script.onload = script.onreadystatechange = function () {
	                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"){
	                    callback();
	                    script.onload = script.onreadystatechange = null;
	                }
	            };
	        }
	        head.appendChild(script);
		},
		/**
	     * 动态加载CSS
	     * @param {string} url 样式地址
	     */
		importCss: function(url){
			var head = document.getElementsByTagName('head')[0];
	        var link = document.createElement('link');
	        link.type='text/css';
	        link.rel = 'stylesheet';
	        link.href = url;
	        head.appendChild(link);
		},
		localStorage: function(key, obj){
			if(key === undefined){
				$.WebSite.msg({
					msg: "未知参数",
					type: 2
				})
				return null;
			} 
			var storage = window.localStorage.getItem(key)||{};
			if(typeof storage === "string"){
				storage = JSON.parse(storage);
			}
			if(obj === undefined){
				return storage;
			} else if(typeof obj !== "object"){
				$.WebSite.msg({
					msg: "要设置值不是一个JSON对象",
					type: 2
				})
				return null;
			} else {
				$.extend(true, storage, obj);
				window.localStorage.setItem(key, JSON.stringify(storage));
				return storage;
			}
		}
	};
	
	function checkCharacter(str){
	
		if(!/^[A-Za-z0-9]{0,1}$/.test(str)){
			return true;
		}
		return false;
	}
	$.WebSite = base;
	/**
	 * 附件上传控件
	 */
	$.fn.lawyeeUpload = function(opt) {
		var $select = $(this);
        var selectId = $select.attr('id');
        if (!selectId) { return false; }
		if("length" === opt){
			return $('#' + selectId + '-upload-list').find("tr[id^='upload-']").length;
		} else {
	        var uploadListIns;
	        var btnId = selectId + "-upload-btn";
			var opts = $.extend(true, {
				icon: '&#xe67c;',
				elem: "#" + btnId,
				btnText: "上传文件",
				field: selectId,
				allowUpload: true, // 允许上传
				allowDownload: true, // 允许下载
				allowRemove: false, // 允许删除
				uploadUrl: $svc.uploadrest + new Date().getTime(),
				listFile: function(listFile){
		    		$.each(listFile, function(i, item){
		    			var tr = $(['<tr id="upload-' + item.id + '" data-id="' + item.id + '">',
		    				'<td>' + item.name + '</td>',
		    				'<td>' + (item.fileSize/1024).toFixed(1) + 'kb</td>',
		    				'<td>已上传</td>',
		    				'<td>', 
		    				opts.allowRemove?'<button class="layui-btn layui-btn-xs layui-btn-danger list-delete">删除</button>':'',
		    				opts.allowDownload?'<button class="layui-btn layui-btn-xs list-download">下载</button>':'',
		    				'</td>',
		    				'</tr>'
		    				].join(''));
		    			// 删除
		    			if(opts.allowRemove){
			    			tr.find('.list-delete').on("click", function(){
								opts.removeFile(item.id, $(tr).attr("data-id"));
			    			});
		    			}
		    			// 下载
		    			if(opts.allowDownload){
		    				// 删除
		    				tr.find('.list-download').on("click", function(){
		    					window.location.href = $.WebSite.download($(tr).attr("data-id"));
		    				});
		    			}
		    			$('#' + selectId + '-upload-list').find(".nullFile").hide();
		    			$('#' + selectId + '-upload-list').append(tr);
		    		});
				},
				number: 1,
				multiple: false,
				data: {},
				removeFile: function(index, id){
					if(id){
						$.post($svc.removefilerest + new Date().getTime(), {"id": id}, function(data){
							if(data.code == 1){
								delete uploadListIns.files[index]; // 删除对应的文件
								$("tr#upload-" + index).remove();
								if($('#' + selectId + '-upload-list tr').length == 1){
									$('#' + selectId + '-upload-list').find(".nullFile").show();
								}
								uploadListIns.config.elem.next()[0].value=""; // 清空input file值，以免删除后同名文件不可选
							} else {
								$.WebSite.msg({msg: data.description})
							}
						});
					} else if(index){
						delete uploadListIns.files[index]; // 删除对应的文件
					}
				},
				before: function(obj){
					layer.load();
					var files = uploadListIns.files = obj.pushFile();// 将每次选择的文件追加到文件队列
					obj.preview(function(index, file, result){
						var tr = $(['<tr id="upload-' + index + '">',
							'<td>' + file.name + '</td>',
							'<td>' + (file.size/1024).toFixed(1) + 'kb</td>',
							'<td>等待上传</td>',
							'<td>', 
							'<button class="layui-btn layui-btn-xs layui-hide list-reload">重传</button>',
							'<button class="layui-btn layui-btn-xs layui-btn-danger list-delete">删除</button>',
							'</td>',
							'</tr>'
							].join(''));
						// 单个重传
						tr.find('.list-reload').on("click", function(){
							obj.upload(index, file);
						});
						// 删除
						tr.find('.list-delete').on("click", function(){
							opts.removeFile(index, $(tr).attr("data-id"));
						});
						$('#' + selectId + '-upload-list').find(".nullFile").hide();
						$('#' + selectId + '-upload-list').append(tr);
					})
				},
				// 上传成功
				done: function(res, index, upload){
					layer.closeAll("loading");
					if(res.code == 1){
						var tr = $('#' + selectId + '-upload-list').find("tr#upload-" + index), tds = tr.children();
						$(tr).attr("data-id", res.result[0].id);
						tds.eq(2).html('<span style="color: #5fb878;">上传成功</span>');
						tds.eq(3).find(".list-reload").addClass("layui-hide");// 删除重传操作
						return delete uploadListIns.files[index]; // 删除文件队列已经上传成功的文件
					}
					this.error(index, upload);
				},
				// 上传失败
				error: function(index, upload){
					layer.closeAll("loading");
					var tr = $('#' + selectId + '-upload-list').find("tr#upload-" + index), tds = tr.children();
					tds.eq(2).html('<span style="color: #ff5722;">上传失败</span>');
					tds.eq(3).find(".list-reload").removeClass("layui-hide");// 显示重传操作
				}
	    	}, opt);
	        if($select.find("button.layui-btn").length <= 0){
	        	var html = '';
		        if(opts.allowUpload){
		        	html += '<button type="button" class="layui-btn" id="' + btnId + '"><i class="layui-icon">' + opts.icon + '</i>' + opts.btnText + '</button>';		        	
		        }
	        	html += '<div class="layui-table">';
	        	html += '	<table class="layui-table">';
	        	html += '		<thead>';
	        	html += '			<tr>';
	        	html += '				<th>文件名</th>';
	        	html += '				<th>大小</th>';
	        	html += '				<th>状态</th>';
	        	html += '				<th>操作</th>';
	        	html += '			</tr>';
	        	html += '		</thead>';
	        	html += '		<tbody id="' + selectId + '-upload-list">';
	        	html += '		<tr class="nullFile"><td colspan="4">没有上传文件</td></tr>';
	        	html += '		</tbody>';
	        	html += '	</table>';
	        	html += '</div>';
	        	$select.html(html);
	        }
	        if(opts.data.pid){
	        	// 附件回显
	            $.ajax({
	                type: "POST",
	                dataType: "json",
	                url: $svc.listfilerest + new Date().getTime(),
	                async: false,
	                data: opts.data,
	                success: function (d) {
	    	            opts.listFile(d);
	                }
	            });
	        }
	        if(opts.allowUpload){
	        	$.extend(true, opts, {
	            	url: opts.uploadUrl
	            })
	            uploadListIns = layupload.render(opts);	
	        }
	        return uploadListIns;
		}
	}
	/**
	 * 图片裁切
	 */
	$.fn.photoCut = function(opts){
		var $fileId = $(this);
    	var currId = $fileId.attr('id');
    	if (!currId) {
    		return false;
    	}
    	var fileId = "inputfile" + currId;
    	var opt = $.extend({
    		imgUrl: '/common/static/images/logo-headere47d5.png',
    		// 控件显示图片的宽度。
    		width: 100,
    		// 控件显示图片的高度。
    		height: 100,
    		// 图片的圆角度。
    		radius: 100,
			cutImg: function(img){}
    	}, opts);
    	var imgId = new Date().getTime(); // 取当前系统时间，目的是得到一个独一无二的数字
    	$(this).html(function(){
    		var html = 
				'<style>.img-container{background-color: #f7f7f7;width: 100%;text-align: center;}.img-container {min-height: 200px;max-height: 516px;margin-bottom: 20px;}@media (min-width: 768px) {.img-container {min-height: 516px;}}.img-container > img {max-width: 100%;}</style>' + 
    			'<div style="position: relative;display: inline-block;overflow: hidden;text-decoration: none;text-indent: 0;">' + 
    			'<img id="'+imgId+'" style="width: '+opt.width+'px; height: '+opt.height+'px; border-radius: '+opt.radius+'px;" src="'+opt.imgUrl+'"  onerror="this.src=\'/common/static/images/logo-headere47d5.png\'"/>' + 
	            '<input type="file" name="'+fileId+'" id="'+fileId+'" accept="image/*" style="display: block;position: absolute;left: 0px;top: 0px;font-size: ' + opt.height + 'px;opacity: 0;" >' +
	            '<input type="hidden" name="'+currId+'" id="'+currId+'">' +
			    '</div>' + 
				
				'<div class="container" id="containerDiv" style="display: none;padding:0px; margin:0px;position:fixed;top:0px;left:0px;z-index:200;">' +
				
				'<div class="row">' +
				'<div class="img-container"><img src="" alt="picture"></div>' +
				'</div>' +
				
				'<div class="row" id="cutPictureActions" style="position: fixed;width: 100%;margin: 0px;padding: 0px;bottom: 10px;text-align:center;">' +
				'<button type="button" style="margin: 0px 10px;padding: 0px 10px;" data-method="destroy">取消</button>' +
				'<button type="button" style="margin: 0px 10px;padding: 0px 10px;" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">确定</button>' +
				'</div>' +
				
				'</div>' ;
    		return html;
    	});
		var URL = window.URL || window.webkitURL;
		var blobURL ;
		if(URL){
			// 初始化截图控件
			var screenWidth = $(window).width();
			var screenHeight =  $(window).height();
			var image = $(this).find(".img-container img")[0];
			var options = {
				minContainerHeight :  screenHeight,
				minContainerWidth : screenWidth,
				aspectRatio: 1 / 1,//裁剪框比例 1：1
				viewMode : 1,//显示
				dragMode : "move",
				build: function (e) { //加载开始
					//可以放你的过渡 效果
				},
				built: function (e) { //加载完成
					$("#containerDiv").show();
					$("#imgEdit").show();
				},
				zoom: function (e) {
				  console.log(e.type, e.detail.ratio);
				},
				background : true,// 容器是否显示网格背景
				movable : true,//是否能移动图片
				cropBoxMovable :true,//是否允许拖动裁剪框
				cropBoxResizable :true,//是否允许拖动 改变裁剪框大小
			};
			var cropper = new Cropper(image, options);
			// 选择图片事件
			$(this).on("change", "input#" + fileId, function(){
				var files = this.files;
				var file;
				if(files && files.length){
					file = files[0];
					if(/^image\/\w+/.test(file.type)){
						blobURL = URL.createObjectURL(file);
						cropper.reset().replace(blobURL);
					}else{
						alert("请选择图片文件.");
					}
				}
			})
			// 点击按钮事件
			$(this).on("click", "button", function(event){
				var e = event || window.event;
				var target = e.target || e.strElement;
				var result;
				var input;
				var data;
				if(!cropper){
					return;
				}
				while(target !== this){
					if(target.getAttribute("data-method")){
						break;
					}
					target = target.parentNode;
				}
				data = {
					method: target.getAttribute("data-method"),
					target: target.getAttribute("data-target"),
					option: target.getAttribute("data-option"),
					secondOption: target.getAttribute("data-second-option")
				}
				if(data.method){
					if(typeof data.target != 'undefined'){
						input = document.querySelector(data.target);
						if(!target.hasAttribute("data-option") && data.target && input){
							try {
								data.option = JSON.parse(input.value);
							} catch (e) {
								console.log(e.message);
							}
							
						}
					}
				}
				if(data.method === "getCroppedCanvas"){
					data.option = JSON.parse(data.option);
				}
				result = cropper[data.method](data.option, data.secondOption);
				switch(data.method){
					case 'scaleX':
					case 'scaleY':
						target.setAttribute(data-option, -data.option);
						break;
					case 'getCroppedCanvas':
						if(result){
							var fileImg = result.toDataURL("image/jpg");
							$("#" + imgId).attr("src", fileImg);
							$("input#" + currId).val(fileImg);
							$("#containerDiv").hide();
							$("input#" + fileId).val("");
							if(typeof opt.cutImg === "function"){
								opt.cutImg(fileImg);
							}
						}
						break;
					case "destroy":
						$("#containerDiv").hide();
						$("input#" + fileId).val("");
						break;
				}
				if(typeof result === "object" && result !== cropper && input){
					
					try{
						input.value = JSON.stringify(result);
					} catch(e){
						console.log(e.message);
					}
				}
			})
			
		}
    	
	}
	/**
	 * 长内容缩短显示
	 * opts ： json参数 
	 *  {
	 *  content: "XXXXXXXXXX",
	 *  length: 10,
	 *  ellipsis: "..."
	 *  }
	 */
	$.fn.showShort = function(opts){
		var showEle = $(this);
		var opt = $.extend({
			content: showEle.html(),
			length: 10,
			ellipsis: "..."
        }, opts);
		var eid = "tip-id_" + String(Math.random()).substr(2);
		showEle.attr("tip-id", eid);
		
		// 检查内容是否含有html标签
		var reg = /<[^>]+>/g;
		var html = opt.content;
		if(reg.test(opt.content)){
			html = $(opt.content).html();
		}
		
		if(html.length >= opt.length){
			showEle.html(html.substring(0, opt.length) + opt.ellipsis);
			showEle.mouseover(function(){
				$.WebSite.tips({
					elem: ("[tip-id='" + eid + "']"),
					msg: opt.content
				});
			}).mouseout(function(){
				$(".layui-layer-tips").remove();
			});
		}else{
			showEle.html(html);
		}
	}
	// 获取表单数据
	$.fn.getFormData = function(){
        var postdata = {};
		$(this).find("input, select, textarea").each(function(r){
			var disabled= $(this).attr("disabled");
			if(disabled) return true;
			var type = $(this).attr("type");
			if(type == "file") return true;
			switch (type) {
	            case "radio":
	            	var name = $(this).attr('name');
	        		postdata[name] = $("input[name='"+name+"']:checked").val();
	            	break;
	            case "checkbox":
	            	var name = $(this).attr('name');
	                if ($("input[name='"+name+"']").is(":checked")) {
	                	postdata[name] = true;
	                } else {
	                	postdata[name] = false;
	                }
	                break;
	            case "select":
	            	var name = $(this).attr('name');
	                var value = $("select[name='"+name+"']").val();
	                if (value == "") {
	                    value = "";
	                }
	                postdata[name] = $.trim(value);
	                break;
	            default:
	            	var name = $(this).attr('name');
	                var value = this.value;
	                if (value == "") {
	                	value = $("input[name='"+name+"']").val();
	                }
	                postdata[name] = $.trim(value);
	                break;
	        }
		});
        return postdata;
	}
	/**
	 * 显示地图
	 * opts ： json参数 
	 *  {
	 *  title: "贵州省司法厅",
	 *  address: "都司路130号",
	 *  telephone: "(0851)5831008",
	 *  axis: "", // 默认坐标
	 *  height: "280px", // 展开最大高度
	 *  width: "580px" // 宽度
	 *  }
	 */
	$.fn.showMap = function(opts){
		var $mapAxis = $(this);
		var opt = $.extend({
			title: "",
			address: "",
			telephone: "",
			website: "",
			introduction: "",
			axis: "", // 默认坐标
            // 展开最大高度
            height: "280px",
            // 宽度
            width: "580px"
        }, opts);
		// 检测是否联网
		$.ajax({
			url: "https://www.baidu.com/",
			dataType:'jsonp',
			processData: false,
			type:'get',
			success:function(data){bulidDom(true);},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				if("success" === XMLHttpRequest.statusText) bulidDom(true); 
				else bulidDom(false);
			}
		});
		// 构建dom
		function bulidDom(onlineFlag){
			var maphtml = "";
			if(onlineFlag){
				maphtml += "<div id=\"show-map\" style=\"width:" + opt.width + ";height:" + opt.height + "\"></div>";
			}else {
				maphtml += "<div style=\"width:" + opt.width + ";height:" + opt.height + "\">没有联网</div>";
			}
			$mapAxis.html(maphtml);
			if($mapAxis.find("#show-map").length == 1){
				var showDom = function(map){
					// 设置默认坐标
					var lng = "106.712761" , lat = "26.579543";
					var as = (opt.axis||"").split(",");
					var isAxis = false;
					if(as.length == 2){
						lng = as[0];
						lat = as[1];
						isAxis = true;
					}
					map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放 
					var point = new BMap.Point(lng, lat);  // 创建点坐标  
				    map.centerAndZoom(point, 16); // 初始化地图
					var infoWindow = function(){
						var content = '<div style="margin:0;line-height:20px;padding:2px;max-height: 100px;overflow: auto;">' +
						'地址：'+(opt.address)+'<br/>电话：' + (opt.telephone);
						if(null != opt.website && "" != opt.website){
							content += '<br/>官网：<a href="' + (opt.website) + '" target="_blank">' + (opt.website) + '</a>'
						}
						if(null != opt.introduction && "" != opt.introduction){
							content += '<br/>简介：' + (opt.introduction);
						}
						content += '</div>'
						return new BMapLib.SearchInfoWindow(map, content, {
							title  : opt.title,      //标题
							width  : 290,             //宽度
							height : 105,              //高度
							panel  : "panel",         //检索结果面板
							enableAutoPan : true,     //自动平移
							searchTypes   :[
								BMAPLIB_TAB_SEARCH,   //周边检索
								BMAPLIB_TAB_TO_HERE,  //到这里去
								BMAPLIB_TAB_FROM_HERE //从这里出发
							]
						});
					}
					var tomarker = function(map, isAxis, address, point){
						var marker;
						if(isAxis){
							map.panTo(point);
							
							marker = new BMap.Marker(point); //创建marker对象
							marker.enableDragging(); //marker可拖拽
							marker.addEventListener("click", function(e){
								infoWindow().open(marker);
							});
							infoWindow().open(marker);
							map.addOverlay(marker); //在地图中添加marker
						} else if (address){
							// 创建地址解析器
							var myGeo = new BMap.Geocoder();
							// 将地址解析结果显示在地图上，并调整地图视野
							myGeo.getPoint(address, function(point){
								if(point){
									map.centerAndZoom(point, 16);
									marker = new BMap.Marker(point); //创建marker对象
									marker.enableDragging(); //marker可拖拽
									marker.addEventListener("click", function(e){
										infoWindow().open(marker);
									});
									infoWindow().open(marker);
									map.addOverlay(marker); //在地图中添加marker
								}
							});
						}
					}
					var loadCount = 0;
					map.addEventListener("tilesloaded",function(){
						if(loadCount == 1){
							tomarker(map, isAxis, opt.address, point);
						}
						loadCount ++;
					});
					tomarker(map, isAxis, opt.address, point);
				}
				try {
					// 创建地图实例  
					showDom(new BMap.Map("show-map"));
				} catch (e) {
					$.WebSite.importJs("http://api.map.baidu.com/getscript?v=2.0&ak=bi1LZZnP33ouonB5AIoE6I2g&services=", function(){
						$.WebSite.importCss("http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css");
						$.WebSite.importJs("http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js", function(){
							showDom(new BMap.Map("show-map"));
						});
					});
				}
			}
		}
	};
	// 创建页面访问唯一标识
	$("body").append('<input name="__RequestVerificationToken" type="hidden" value="' + base.random(24) + '">');
	WebSiteInit();
})(window.jQuery);

/**
 * 
 * @Name : laytpl v1.2 - 精妙的JavaScript模板引擎
 * @Author: 贤心
 * @Date: 2014-10-27
 * @Site：http://sentsin.com/layui/laytpl
 * @License：MIT
 * 
 */
;!function() {var config = {open : "{{",close : "}}"};var tool = {exp : function(str) {return new RegExp(str, "g")},query : function(type, _, __) {var types = [ "#([\\s\\S])+?", "([^{#}])*?" ][type || 0];return exp((_ || "") + config.open + types + config.close+ (__ || ""))},escape : function(html) {return String(html || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g,"&#39;").replace(/"/g, "&quot;")},error : function(e, tplog) {var error = "Laytpl Error：";if (window.console) {console.error(error + e + "\n" + (tplog || ""))}return error + e}};var exp = tool.exp, Tpl = function(tpl) {this.tpl = tpl};Tpl.pt = Tpl.prototype;window.errors = 0;Tpl.pt.parse = function(tpl, data, postData) {var that = this, tplog = tpl;var jss = exp("^" + config.open + "#", ""), jsse = exp(config.close+ "$", "");tpl = tpl.replace(/\s+|\r|\t|\n/g, " ").replace(exp(config.open + "#"),config.open + "# ").replace(exp(config.close + "}"),"} " + config.close).replace(/\\/g, "\\\\").replace(/(?="|')/g,"\\").replace(tool.query(), function(str) {str = str.replace(jss, "").replace(jsse, "");return '";' + str.replace(/\\/g, "") + ';view+="'}).replace(tool.query(1), function(str) {var start = '"+(';if (str.replace(/\s/g, "") === config.open + config.close) {return ""}str = str.replace(exp(config.open + "|" + config.close), "");if (/^=/.test(str)) {str = str.replace(/^=/, "");start = '"+_escape_('}return start + str.replace(/\\/g, "") + ')+"'});tpl = '"use strict";var view = "' + tpl + '";return view;';try {that.cache = tpl = new Function("d, pd, _escape_", tpl);return tpl(data, postData, tool.escape)} catch (e) {delete that.cache;return tool.error(e, tplog)}};Tpl.pt.render = function(data, postData, callback) {var that = this, tpl;if (!data) {return tool.error("no data")}tpl = that.cache ? that.cache(data, postData, tool.escape) : that.parse(that.tpl,data, postData);if (!callback) {return tpl}callback(tpl)};var laytpl = function(tpl) {if (typeof tpl !== "string") {return tool.error("Template not found")}return new Tpl(tpl)};laytpl.config = function(options) {options = options || {};for ( var i in options) {config[i] = options[i]}};laytpl.v = "1.2";"function" == typeof define ? define(function() {return laytpl}) : "undefined" != typeof exports ? module.exports = laytpl: window.laytpl = laytpl}();
/**
 * $.md5("I'm Persian."); 
 */
(function($){var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits))};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&2147483648);lY8=(lY&2147483648);lX4=(lX&1073741824);lY4=(lY&1073741824);lResult=(lX&1073741823)+(lY&1073741823);if(lX4&lY4){return(lResult^2147483648^lX8^lY8)}if(lX4|lY4){if(lResult&1073741824){return(lResult^3221225472^lX8^lY8)}else{return(lResult^1073741824^lX8^lY8)}}else{return(lResult^lX8^lY8)}};var F=function(x,y,z){return(x&y)|((~x)&z)};var G=function(x,y,z){return(x&z)|(y&(~z))};var H=function(x,y,z){return(x^y^z)};var I=function(x,y,z){return(y^(x|(~z)))};var FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var convertToWordArray=function(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWordsTempOne=lMessageLength+8;var lNumberOfWordsTempTwo=(lNumberOfWordsTempOne-(lNumberOfWordsTempOne%64))/64;var lNumberOfWords=(lNumberOfWordsTempTwo+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++}lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(128<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray};var wordToHex=function(lValue){var WordToHexValue="",WordToHexValueTemp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValueTemp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValueTemp.substr(WordToHexValueTemp.length-2,2)}return WordToHexValue};var uTF8Encode=function(string){string=string.replace(/\x0d\x0a/g,"\x0a");var output="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){output+=String.fromCharCode(c)}else{if((c>127)&&(c<2048)){output+=String.fromCharCode((c>>6)|192);output+=String.fromCharCode((c&63)|128)}else{output+=String.fromCharCode((c>>12)|224);output+=String.fromCharCode(((c>>6)&63)|128);output+=String.fromCharCode((c&63)|128)}}}return output};$.extend({md5:function(string){var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=uTF8Encode(string);x=convertToWordArray(string);a=1732584193;b=4023233417;c=2562383102;d=271733878;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,3614090360);d=FF(d,a,b,c,x[k+1],S12,3905402710);c=FF(c,d,a,b,x[k+2],S13,606105819);b=FF(b,c,d,a,x[k+3],S14,3250441966);a=FF(a,b,c,d,x[k+4],S11,4118548399);d=FF(d,a,b,c,x[k+5],S12,1200080426);c=FF(c,d,a,b,x[k+6],S13,2821735955);b=FF(b,c,d,a,x[k+7],S14,4249261313);a=FF(a,b,c,d,x[k+8],S11,1770035416);d=FF(d,a,b,c,x[k+9],S12,2336552879);c=FF(c,d,a,b,x[k+10],S13,4294925233);b=FF(b,c,d,a,x[k+11],S14,2304563134);a=FF(a,b,c,d,x[k+12],S11,1804603682);d=FF(d,a,b,c,x[k+13],S12,4254626195);c=FF(c,d,a,b,x[k+14],S13,2792965006);b=FF(b,c,d,a,x[k+15],S14,1236535329);a=GG(a,b,c,d,x[k+1],S21,4129170786);d=GG(d,a,b,c,x[k+6],S22,3225465664);c=GG(c,d,a,b,x[k+11],S23,643717713);b=GG(b,c,d,a,x[k+0],S24,3921069994);a=GG(a,b,c,d,x[k+5],S21,3593408605);d=GG(d,a,b,c,x[k+10],S22,38016083);c=GG(c,d,a,b,x[k+15],S23,3634488961);b=GG(b,c,d,a,x[k+4],S24,3889429448);a=GG(a,b,c,d,x[k+9],S21,568446438);d=GG(d,a,b,c,x[k+14],S22,3275163606);c=GG(c,d,a,b,x[k+3],S23,4107603335);b=GG(b,c,d,a,x[k+8],S24,1163531501);a=GG(a,b,c,d,x[k+13],S21,2850285829);d=GG(d,a,b,c,x[k+2],S22,4243563512);c=GG(c,d,a,b,x[k+7],S23,1735328473);b=GG(b,c,d,a,x[k+12],S24,2368359562);a=HH(a,b,c,d,x[k+5],S31,4294588738);d=HH(d,a,b,c,x[k+8],S32,2272392833);c=HH(c,d,a,b,x[k+11],S33,1839030562);b=HH(b,c,d,a,x[k+14],S34,4259657740);a=HH(a,b,c,d,x[k+1],S31,2763975236);d=HH(d,a,b,c,x[k+4],S32,1272893353);c=HH(c,d,a,b,x[k+7],S33,4139469664);b=HH(b,c,d,a,x[k+10],S34,3200236656);a=HH(a,b,c,d,x[k+13],S31,681279174);d=HH(d,a,b,c,x[k+0],S32,3936430074);c=HH(c,d,a,b,x[k+3],S33,3572445317);b=HH(b,c,d,a,x[k+6],S34,76029189);a=HH(a,b,c,d,x[k+9],S31,3654602809);d=HH(d,a,b,c,x[k+12],S32,3873151461);c=HH(c,d,a,b,x[k+15],S33,530742520);b=HH(b,c,d,a,x[k+2],S34,3299628645);a=II(a,b,c,d,x[k+0],S41,4096336452);d=II(d,a,b,c,x[k+7],S42,1126891415);c=II(c,d,a,b,x[k+14],S43,2878612391);b=II(b,c,d,a,x[k+5],S44,4237533241);a=II(a,b,c,d,x[k+12],S41,1700485571);d=II(d,a,b,c,x[k+3],S42,2399980690);
c=II(c,d,a,b,x[k+10],S43,4293915773);b=II(b,c,d,a,x[k+1],S44,2240044497);a=II(a,b,c,d,x[k+8],S41,1873313359);d=II(d,a,b,c,x[k+15],S42,4264355552);c=II(c,d,a,b,x[k+6],S43,2734768916);b=II(b,c,d,a,x[k+13],S44,1309151649);a=II(a,b,c,d,x[k+4],S41,4149444226);d=II(d,a,b,c,x[k+11],S42,3174756917);c=II(c,d,a,b,x[k+2],S43,718787259);b=II(b,c,d,a,x[k+9],S44,3951481745);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD)}var tempValue=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return tempValue.toLowerCase()}})})(jQuery);

var CryptoJS=CryptoJS||function(y,h){var j={},g=j.lib={},f=function(){},z=g.Base={extend:function(b){f.prototype=this;var d=new f;b&&d.mixIn(b);d.hasOwnProperty("init")||(d.init=function(){d.$super.init.apply(this,arguments)});d.init.prototype=d;d.$super=this;return d},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var d in b){b.hasOwnProperty(d)&&(this[d]=b[d])}b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},c=g.WordArray=z.extend({init:function(b,d){b=this.words=b||[];this.sigBytes=d!=h?d:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(d){var n=this.words,b=d.words,l=this.sigBytes;d=d.sigBytes;this.clamp();if(l%4){for(var e=0;e<d;e++){n[l+e>>>2]|=(b[e>>>2]>>>24-8*(e%4)&255)<<24-8*((l+e)%4)}}else{if(65535<b.length){for(e=0;e<d;e+=4){n[l+e>>>2]=b[e>>>2]}}else{n.push.apply(n,b)}}this.sigBytes+=d;return this},clamp:function(){var b=this.words,d=this.sigBytes;b[d>>>2]&=4294967295<<32-8*(d%4);b.length=y.ceil(d/4)},clone:function(){var b=z.clone.call(this);b.words=this.words.slice(0);return b},random:function(d){for(var e=[],b=0;b<d;b+=4){e.push(4294967296*y.random()|0)}return new c.init(e,d)}}),o=j.enc={},t=o.Hex={stringify:function(d){var n=d.words;d=d.sigBytes;for(var b=[],l=0;l<d;l++){var e=n[l>>>2]>>>24-8*(l%4)&255;b.push((e>>>4).toString(16));b.push((e&15).toString(16))}return b.join("")},parse:function(d){for(var l=d.length,b=[],e=0;e<l;e+=2){b[e>>>3]|=parseInt(d.substr(e,2),16)<<24-4*(e%8)}return new c.init(b,l/2)}},k=o.Latin1={stringify:function(d){var l=d.words;d=d.sigBytes;for(var b=[],e=0;e<d;e++){b.push(String.fromCharCode(l[e>>>2]>>>24-8*(e%4)&255))}return b.join("")},parse:function(d){for(var l=d.length,b=[],e=0;e<l;e++){b[e>>>2]|=(d.charCodeAt(e)&255)<<24-8*(e%4)}return new c.init(b,l)}},m=o.Utf8={stringify:function(b){try{return decodeURIComponent(escape(k.stringify(b)))}catch(d){throw Error("Malformed UTF-8 data")}},parse:function(b){return k.parse(unescape(encodeURIComponent(b)))}},a=g.BufferedBlockAlgorithm=z.extend({reset:function(){this._data=new c.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=m.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(n){var s=this._data,l=s.words,q=s.sigBytes,p=this.blockSize,d=q/(4*p),d=n?y.ceil(d):y.max((d|0)-this._minBufferSize,0);n=d*p;q=y.min(4*n,q);if(n){for(var r=0;r<n;r+=p){this._doProcessBlock(l,r)}r=l.splice(0,n);s.sigBytes-=q}return new c.init(r,q)},clone:function(){var b=z.clone.call(this);b._data=this._data.clone();return b},_minBufferSize:0});g.Hasher=a.extend({cfg:z.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){a.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(e,d){return(new b.init(d)).finalize(e)}},_createHmacHelper:function(b){return function(e,d){return(new i.HMAC.init(b,d)).finalize(e)}}});var i=j.algo={};return j}(Math);(function(){var b=CryptoJS,a=b.lib.WordArray;b.enc.Base64={stringify:function(i){var j=i.words,e=i.sigBytes,g=this._map;i.clamp();i=[];for(var h=0;h<e;h+=3){for(var c=(j[h>>>2]>>>24-8*(h%4)&255)<<16|(j[h+1>>>2]>>>24-8*((h+1)%4)&255)<<8|j[h+2>>>2]>>>24-8*((h+2)%4)&255,f=0;4>f&&h+0.75*f<e;f++){i.push(g.charAt(c>>>6*(3-f)&63))}}if(j=g.charAt(64)){for(;i.length%4;){i.push(j)}}return i.join("")},parse:function(j){var k=j.length,i=this._map,g=i.charAt(64);g&&(g=j.indexOf(g),-1!=g&&(k=g));for(var g=[],h=0,e=0;e<k;e++){if(e%4){var f=i.indexOf(j.charAt(e-1))<<2*(e%4),c=i.indexOf(j.charAt(e))>>>6-2*(e%4);g[h>>>2]|=(f|c)<<24-8*(h%4);h++}}return a.create(g,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();(function(m){function f(l,r,n,s,d,q,p){l=l+(r&n|~r&s)+d+p;return(l<<q|l>>>32-q)+r}function g(l,r,n,s,d,q,p){l=l+(r&s|n&~s)+d+p;return(l<<q|l>>>32-q)+r}function e(l,r,n,s,d,q,p){l=l+(r^n^s)+d+p;return(l<<q|l>>>32-q)+r}function c(l,r,n,s,d,q,p){l=l+(n^(r|~s))+d+p;return(l<<q|l>>>32-q)+r}for(var o=CryptoJS,a=o.lib,j=a.WordArray,k=a.Hasher,a=o.algo,h=[],i=0;64>i;i++){h[i]=4294967296*m.abs(m.sin(i+1))|0}a=a.MD5=k.extend({_doReset:function(){this._hash=new j.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(J,T){for(var V=0;16>V;V++){var U=T+V,N=J[U];J[U]=(N<<8|N>>>24)&16711935|(N<<24|N>>>8)&4278255360}var V=this._hash.words,U=J[T+0],N=J[T+1],S=J[T+2],F=J[T+3],d=J[T+4],L=J[T+5],H=J[T+6],n=J[T+7],p=J[T+8],E=J[T+9],l=J[T+10],b=J[T+11],M=J[T+12],K=J[T+13],I=J[T+14],G=J[T+15],R=V[0],Q=V[1],P=V[2],O=V[3],R=f(R,Q,P,O,U,7,h[0]),O=f(O,R,Q,P,N,12,h[1]),P=f(P,O,R,Q,S,17,h[2]),Q=f(Q,P,O,R,F,22,h[3]),R=f(R,Q,P,O,d,7,h[4]),O=f(O,R,Q,P,L,12,h[5]),P=f(P,O,R,Q,H,17,h[6]),Q=f(Q,P,O,R,n,22,h[7]),R=f(R,Q,P,O,p,7,h[8]),O=f(O,R,Q,P,E,12,h[9]),P=f(P,O,R,Q,l,17,h[10]),Q=f(Q,P,O,R,b,22,h[11]),R=f(R,Q,P,O,M,7,h[12]),O=f(O,R,Q,P,K,12,h[13]),P=f(P,O,R,Q,I,17,h[14]),Q=f(Q,P,O,R,G,22,h[15]),R=g(R,Q,P,O,N,5,h[16]),O=g(O,R,Q,P,H,9,h[17]),P=g(P,O,R,Q,b,14,h[18]),Q=g(Q,P,O,R,U,20,h[19]),R=g(R,Q,P,O,L,5,h[20]),O=g(O,R,Q,P,l,9,h[21]),P=g(P,O,R,Q,G,14,h[22]),Q=g(Q,P,O,R,d,20,h[23]),R=g(R,Q,P,O,E,5,h[24]),O=g(O,R,Q,P,I,9,h[25]),P=g(P,O,R,Q,F,14,h[26]),Q=g(Q,P,O,R,p,20,h[27]),R=g(R,Q,P,O,K,5,h[28]),O=g(O,R,Q,P,S,9,h[29]),P=g(P,O,R,Q,n,14,h[30]),Q=g(Q,P,O,R,M,20,h[31]),R=e(R,Q,P,O,L,4,h[32]),O=e(O,R,Q,P,p,11,h[33]),P=e(P,O,R,Q,b,16,h[34]),Q=e(Q,P,O,R,I,23,h[35]),R=e(R,Q,P,O,N,4,h[36]),O=e(O,R,Q,P,d,11,h[37]),P=e(P,O,R,Q,n,16,h[38]),Q=e(Q,P,O,R,l,23,h[39]),R=e(R,Q,P,O,K,4,h[40]),O=e(O,R,Q,P,U,11,h[41]),P=e(P,O,R,Q,F,16,h[42]),Q=e(Q,P,O,R,H,23,h[43]),R=e(R,Q,P,O,E,4,h[44]),O=e(O,R,Q,P,M,11,h[45]),P=e(P,O,R,Q,G,16,h[46]),Q=e(Q,P,O,R,S,23,h[47]),R=c(R,Q,P,O,U,6,h[48]),O=c(O,R,Q,P,n,10,h[49]),P=c(P,O,R,Q,I,15,h[50]),Q=c(Q,P,O,R,L,21,h[51]),R=c(R,Q,P,O,M,6,h[52]),O=c(O,R,Q,P,F,10,h[53]),P=c(P,O,R,Q,l,15,h[54]),Q=c(Q,P,O,R,N,21,h[55]),R=c(R,Q,P,O,p,6,h[56]),O=c(O,R,Q,P,G,10,h[57]),P=c(P,O,R,Q,H,15,h[58]),Q=c(Q,P,O,R,K,21,h[59]),R=c(R,Q,P,O,d,6,h[60]),O=c(O,R,Q,P,b,10,h[61]),P=c(P,O,R,Q,S,15,h[62]),Q=c(Q,P,O,R,E,21,h[63]);
V[0]=V[0]+R|0;V[1]=V[1]+Q|0;V[2]=V[2]+P|0;V[3]=V[3]+O|0},_doFinalize:function(){var l=this._data,p=l.words,n=8*this._nDataBytes,q=8*l.sigBytes;p[q>>>5]|=128<<24-q%32;var d=m.floor(n/4294967296);p[(q+64>>>9<<4)+15]=(d<<8|d>>>24)&16711935|(d<<24|d>>>8)&4278255360;p[(q+64>>>9<<4)+14]=(n<<8|n>>>24)&16711935|(n<<24|n>>>8)&4278255360;l.sigBytes=4*(p.length+1);this._process();l=this._hash;p=l.words;for(n=0;4>n;n++){q=p[n],p[n]=(q<<8|q>>>24)&16711935|(q<<24|q>>>8)&4278255360}return l},clone:function(){var d=k.clone.call(this);d._hash=this._hash.clone();return d}});o.MD5=k._createHelper(a);o.HmacMD5=k._createHmacHelper(a)})(Math);(function(){var b=CryptoJS,a=b.lib,e=a.Base,f=a.WordArray,a=b.algo,c=a.EvpKDF=e.extend({cfg:e.extend({keySize:4,hasher:a.MD5,iterations:1}),init:function(g){this.cfg=this.cfg.extend(g)},compute:function(k,i){for(var h=this.cfg,o=h.hasher.create(),m=f.create(),q=m.words,g=h.keySize,h=h.iterations;q.length<g;){j&&o.update(j);var j=o.update(k).finalize(i);o.reset();for(var n=1;n<h;n++){j=o.finalize(j),o.reset()}m.concat(j)}m.sigBytes=4*g;return m}});b.EvpKDF=function(h,g,i){return c.create(i).compute(h,g)}})();CryptoJS.lib.Cipher||function(C){var j=CryptoJS,m=j.lib,i=m.Base,h=m.WordArray,D=m.BufferedBlockAlgorithm,g=j.enc.Base64,A=j.algo.EvpKDF,B=m.Cipher=D.extend({cfg:i.extend(),createEncryptor:function(b,c){return this.create(this._ENC_XFORM_MODE,b,c)},createDecryptor:function(b,c){return this.create(this._DEC_XFORM_MODE,b,c)},init:function(d,e,c){this.cfg=this.cfg.extend(c);this._xformMode=d;this._key=e;this.reset()},reset:function(){D.reset.call(this);this._doReset()},process:function(b){this._append(b);return this._process()},finalize:function(b){b&&this._append(b);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(a){return{encrypt:function(d,c,l){return("string"==typeof c?o:y).encrypt(a,d,c,l)},decrypt:function(d,c,l){return("string"==typeof c?o:y).decrypt(a,d,c,l)}}}});m.StreamCipher=B.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var t=j.mode={},z=function(l,n,d){var q=this._iv;q?this._iv=C:q=this._prevBlock;for(var p=0;p<d;p++){l[n+p]^=q[p]}},f=(m.BlockCipherMode=i.extend({createEncryptor:function(b,c){return this.Encryptor.create(b,c)},createDecryptor:function(b,c){return this.Decryptor.create(b,c)},init:function(b,c){this._cipher=b;this._iv=c}})).extend();f.Encryptor=f.extend({processBlock:function(e,l){var d=this._cipher,n=d.blockSize;z.call(this,e,l,n);d.encryptBlock(e,l);this._prevBlock=e.slice(l,l+n)}});f.Decryptor=f.extend({processBlock:function(n,l){var r=this._cipher,p=r.blockSize,q=n.slice(l,l+p);r.decryptBlock(n,l);z.call(this,n,l,p);this._prevBlock=q}});t=t.CBC=f;f=(j.pad={}).Pkcs7={pad:function(q,n){for(var u=4*n,u=u-q.sigBytes%u,r=u<<24|u<<16|u<<8|u,s=[],p=0;p<u;p+=4){s.push(r)}u=h.create(s,u);q.concat(u)},unpad:function(b){b.sigBytes-=b.words[b.sigBytes-1>>>2]&255}};m.BlockCipher=B.extend({cfg:B.cfg.extend({mode:t,padding:f}),reset:function(){B.reset.call(this);var e=this.cfg,l=e.iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE){var d=e.createEncryptor}else{d=e.createDecryptor,this._minBufferSize=1}this._mode=d.call(e,this,l&&l.words)},_doProcessBlock:function(b,d){this._mode.processBlock(b,d)},_doFinalize:function(){var b=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){b.pad(this._data,this.blockSize);var d=this._process(!0)}else{d=this._process(!0),b.unpad(d)}return d},blockSize:4});var k=m.CipherParams=i.extend({init:function(b){this.mixIn(b)},toString:function(b){return(b||this.formatter).stringify(this)}}),t=(j.format={}).OpenSSL={stringify:function(b){var d=b.ciphertext;b=b.salt;return(b?h.create([1398893684,1701076831]).concat(b).concat(d):d).toString(g)},parse:function(e){e=g.parse(e);var l=e.words;if(1398893684==l[0]&&1701076831==l[1]){var d=h.create(l.slice(2,4));l.splice(0,4);e.sigBytes-=16}return k.create({ciphertext:e,salt:d})}},y=m.SerializableCipher=i.extend({cfg:i.extend({format:t}),encrypt:function(p,r,e,q){q=this.cfg.extend(q);var n=p.createEncryptor(e,q);r=n.finalize(r);n=n.cfg;return k.create({ciphertext:r,key:e,iv:n.iv,algorithm:p,mode:n.mode,padding:n.padding,blockSize:p.blockSize,formatter:q.format})},decrypt:function(l,p,d,n){n=this.cfg.extend(n);p=this._parse(p,n.format);return l.createDecryptor(d,n).finalize(p.ciphertext)},_parse:function(b,d){return"string"==typeof b?d.parse(b,this):b}}),j=(j.kdf={}).OpenSSL={execute:function(l,p,e,n){n||(n=h.random(8));l=A.create({keySize:p+e}).compute(l,n);e=h.create(l.words.slice(p),4*e);l.sigBytes=4*p;return k.create({key:l,iv:e,salt:n})}},o=m.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:j}),encrypt:function(p,a,l,n){n=this.cfg.extend(n);l=n.kdf.execute(l,p.keySize,p.ivSize);n.iv=l.iv;p=y.encrypt.call(this,p,a,l.key,n);p.mixIn(l);return p},decrypt:function(p,a,l,n){n=this.cfg.extend(n);a=this._parse(a,n.format);l=n.kdf.execute(l,p.keySize,p.ivSize,a.salt);n.iv=l.iv;return y.decrypt.call(this,p,a,l.key,n)}})
}();(function(){function o(d,l){var n=(this._lBlock>>>d^this._rBlock)&l;this._rBlock^=n;this._lBlock^=n<<d}function g(d,l){var n=(this._rBlock>>>d^this._lBlock)&l;this._lBlock^=n;this._rBlock^=n<<d}var h=CryptoJS,f=h.lib,e=f.WordArray,f=f.BlockCipher,t=h.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],k=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],m=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],i=[{"0":8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{"0":1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{"0":260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{"0":2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{"0":128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{"0":268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{"0":1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{"0":134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],j=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],a=t.DES=f.extend({_doReset:function(){for(var n=this._key.words,q=[],u=0;
56>u;u++){var s=c[u]-1;q[u]=n[s>>>5]>>>31-s%32&1}n=this._subKeys=[];for(s=0;16>s;s++){for(var r=n[s]=[],p=m[s],u=0;24>u;u++){r[u/6|0]|=q[(k[u]-1+p)%28]<<31-u%6,r[4+(u/6|0)]|=q[28+(k[u+24]-1+p)%28]<<31-u%6}r[0]=r[0]<<1|r[0]>>>31;for(u=1;7>u;u++){r[u]>>>=4*(u-1)+3}r[7]=r[7]<<5|r[7]>>>27}q=this._invSubKeys=[];for(u=0;16>u;u++){q[u]=n[15-u]}},encryptBlock:function(d,l){this._doCryptBlock(d,l,this._subKeys)},decryptBlock:function(d,l){this._doCryptBlock(d,l,this._invSubKeys)},_doCryptBlock:function(w,z,y){this._lBlock=w[z];this._rBlock=w[z+1];o.call(this,4,252645135);o.call(this,16,65535);g.call(this,2,858993459);g.call(this,8,16711935);o.call(this,1,1431655765);for(var x=0;16>x;x++){for(var v=y[x],u=this._lBlock,s=this._rBlock,l=0,b=0;8>b;b++){l|=i[b][((s^v[b])&j[b])>>>0]}this._lBlock=s;this._rBlock=u^l}y=this._lBlock;this._lBlock=this._rBlock;this._rBlock=y;o.call(this,1,1431655765);g.call(this,8,16711935);g.call(this,2,858993459);o.call(this,16,65535);o.call(this,4,252645135);w[z]=this._lBlock;w[z+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});h.DES=f._createHelper(a);t=t.TripleDES=f.extend({_doReset:function(){var d=this._key.words;this._des1=a.createEncryptor(e.create(d.slice(0,2)));this._des2=a.createEncryptor(e.create(d.slice(2,4)));this._des3=a.createEncryptor(e.create(d.slice(4,6)))},encryptBlock:function(d,l){this._des1.encryptBlock(d,l);this._des2.decryptBlock(d,l);this._des3.encryptBlock(d,l)},decryptBlock:function(d,l){this._des3.decryptBlock(d,l);this._des2.encryptBlock(d,l);this._des1.decryptBlock(d,l)},keySize:6,ivSize:2,blockSize:2});h.TripleDES=f._createHelper(t)})();var DES3={iv:function(){return $.WebSite.formatDate(new Date(),"yyyyMMdd")},encrypt:function(b,c,a){if(c){return(CryptoJS.TripleDES.encrypt(b,CryptoJS.enc.Utf8.parse(c),{iv:CryptoJS.enc.Utf8.parse(a||DES3.iv()),mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7})).toString()}return""},decrypt:function(b,c,a){if(c){return CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(b,CryptoJS.enc.Utf8.parse(c),{iv:CryptoJS.enc.Utf8.parse(a||DES3.iv()),mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7})).toString()}return""}};