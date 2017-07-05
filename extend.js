/**
*
*此文件扩展jQuery对象
*/
;(function($){
	// 封装jQuery对象方法的插件
	$.fn.extend({
		// 练习，这个是扩展添加或获取对象颜色
		"color":function(value){
			return this.css("color",value);
		},
		// 表格隔行变色方法
		alertBgColor:function(options){
			options=$.extend({
				odd:"odd",/*偶数行样式*/
				even:"even",/*奇数行样式*/
				selected:"selected"/*选中行样式*/
			},options);
			$("tbody>tr:odd",this).addClass(options.odd);
			$("tbody>tr:even",this).addClass(options.even);
			$("tbody>tr",this).click(function(){
				//判断当前是否选中
				var hasSelected=$(this).hasClass(options.selected);
				// 如果选中，则移出selected类，否则就加上selected类
				$(this)[hasSelected?"removeClass":"addClass"](options.selected)
					.find(':checkbox').attr("checked",!hasSelected);
			});
			// 如果选中框默认情况是选中的，则高亮
			$('tbody>tr:has(:checked',this).addClass(options.selected);
			return this;//返回this，使方法可链	
		}
	})
})(jQuery);
/**
*封装全局函数插件
*/
;(function($){
	$.extend({
		ltrim:function(text){//去除左侧空格
			return (text||"").replace(/^\s+/g,"");
		},
		rtrim:function(text){//去除右侧空格
			return (text || "").replace(/\s+$/g,"");
		}
	});
})(jQuery);
/*
扩展String对象方法
*/
;(function($){
	$.extend(String.prototype,{
		isPositiveInteger:function(){
			return (new RegExp(/^[1-9]\d*$/).test(this));
		},
		isInteger:function(){
			return (new RegExp(/^\d+$/).test(this));
		},
		isNumber:function(value,element){
			alert("isNumber");
			return (new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/).test(this));
		},
		trim:function(){
			return this.replace(/(^\s*)|(\s*$)|\r|\n/g,"");
		},
		trans:function(){
			return this.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');
		},
		replaceAll:function(os,ns){
			return this.replace(new RegExp(os,"gm"),ns);
		},
		skipChar:function(ch){
			if(!this||this.length===0){
				return '';
			}
			if(this.charAt(0)===ch){
				return this.substring(1).skipChar(ch);
			}
			return this;
		},
		isValidPwd:function(){
			return (new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this));
		},
		isValidMail:function(){
			return (new RegExp(/^\w+((-\w+)|(\.\w+))*\@[a-zA-Z0-9]+((\.|-)[a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/).test(this.trim()));
		},
		isSpaces:function(){
			for(var i=0;i<this.length;i+=1){
				var ch=this.charAt(i);
				if(ch!=' '&& ch!="\n" && ch!="\t" && ch!="\r"){
					return false;
				}
			}
			return true;
		},
		isPhone:function(){
			return (new RegExp(/(^[0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d(3,8)$)/).test(this));
		},
		isUrl:function(){
			return (new RegExp(/^[a-zA-Z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this));
		},
		isExternalUrl:function(){
			return this.isUrl() && this.indexOf("://"+document.domain) == -1
		}
	});
})(jQuery);
/*
*	自定义选中器
*	创建自己的选中器
*/
;(function($){
	$.extend($.expr[":"],{
		between:function(a,i,m){
			var tmp=m[3].split(",");
			return tmp[0]-0<i&&i<tmp[1]-0;
		}
	});
})(jQuery);