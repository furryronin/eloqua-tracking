(function(a){a.fn.elqTrack=function(e,d){if(typeof d=="undefined"){d=""}if(typeof e=="undefined"){return false}var f="v200";var c=(document.location.protocol=="https:"?"https://secure":"http://now")+".eloqua.com/visitor/"+f+"/svrGP.aspx";var b=document.referrer!=""?document.referrer:"elqNone";this.each(function(){var g=this.href;if(g==""){return false}a(this).click(function(){var i=new Date().getMilliseconds();var h=c+"?pps=10&siteid="+e+"&elq="+d+"&ref="+g+"&ref2="+b+"&ms="+i;a.ajax({url:h,async:false,dataType:"script"});return false})})};a.elq=function(c){var e="v200";var b=(document.location.protocol=="https:"?"https://secure":"http://now")+".eloqua.com/visitor/"+e+"/svrGP.aspx";var c=c;var d;this.pageTrack=function(h){settings=a.extend({url:"",success:"",},h);var f=document.referrer!=""?document.referrer:"elqNone";var k=new Date(20020101).getTimezoneOffset();var g=new Date().getMilliseconds();if(settings.url!=""){var i=b+"?pps=31&siteid="+c+"&ref="+settings.url+"&ref2="+f+"&tzo="+k+"&ms="+g;if(a("#elqFrame").length>0){a(j).load(function(){if(typeof settings.success=="function"){settings.success()}});a("#elqFrame").attr("src",i)}else{var j=document.createElement("iframe");j.style.display="none";j.id="elqFrame";a(j).load(function(){if(typeof settings.success=="function"){settings.success()}});j.src=i;document.body.appendChild(j)}}else{var i=b+"?pps=3&siteid="+c+"&ref2="+f+"&tzo="+k+"&ms="+g;var l=new Image(1,1);a(l).load(function(){if(typeof settings.success=="function"){settings.success()}});l.src=i}};this.getGUID=function(j){var h=location.href;var g=new Date().getMilliseconds();var f=b+"?pps=70&siteid="+c+"&ref="+h+"&ms="+g;var i;a.ajax({url:f,async:false,dataType:"script",success:function(){var k;if(typeof GetElqCustomerGUID=="function"){k=GetElqCustomerGUID()}else{return false}if(typeof j=="function"){j(k)}else{return false}}})};this.getData=function(g){settings=a.extend({key:"",lookup:"",success:"",},g);if(settings.key!=""){var f=new Date().getMilliseconds();var h=b+"?pps=50&siteid="+c+"&DLKey="+settings.key+"&DLLookup="+settings.lookup+"&ms="+f;a.ajax({url:h,async:false,dataType:"script",success:function(){if(typeof settings.success=="function"){settings.success()}else{return false}}})}};this.redirect=function(h){settings=a.extend({url:"",elq:"",},h);if(settings.url==""){return false}var g=new Date().getMilliseconds();var f=document.referrer!=""?document.referrer:"elqNone";var i=b+"?pps=10&siteid="+c+"&elq="+settings.elq+"&ref="+settings.url+"&ref2="+f+"&ms="+g;a.ajax({url:i,async:false,dataType:"script"})}}})(jQuery);