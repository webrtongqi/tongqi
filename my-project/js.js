  var aqiyi_ios = "http://www.iqiyi.com/app/play.html?aid=717518300&vid=413242931d39bce2211a15aeddb6fc77&tvid=717518300&cid=6&offset=0&down=0&video_type=1&subtype=149&ftype=27&redirect=http%3A%2F%2Fota.iqiyi.com%2Ff2.jsp%3Fpos%3Dplay_button_open%26msrc%3D%26vfm%3D%26qyid%3D0ab55f041fafd773cd893d9979781305%26qypid%3D-1_2031";

        'http://www.iqiyi.com/app/play.html?aid=717518300&vid=413242931d39bce2211a15aeddb6fc77&tvid=717518300&cid=6&offset=0&down=0&video_type=1&subtype=149&ftype=27&redirect=http://ota.iqiyi.com/f2.jsp?pos=play_button_open&msrc=&vfm=&qyid=0ab55f041fafd773cd893d9979781305&qypid=-1_2031'
         var aqiyi_an = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.qiyi.video&android_schema=iqiyi%3A%2F%2Fmobile%2Fplayer%3Faid%3D768839100%26vid%3Db972b04cd17733c3582d77a81ab8a99d%26tvid%3D768839100%26cid%3D6%26offset%3D0%26down%3D0%26video_type%3D1%26subtype%3D149%26ftype%3D27'

         'http://a.app.qq.com/o/simple.jsp?pkgname=com.qiyi.video&android_schema=iqiyi://mobile/player?aid=768839100&vid=b972b04cd17733c3582d77a81ab8a99d&tvid=768839100&cid=6&offset=0&down=0&video_type=1&subtype=149&ftype=27'

   		var wangyi_ios = "http://m.music.163.com/m/applink/?scheme=orpheus://song/472361096?thirdfrom=wx";

   		"http://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fsong%2F472361096%3Fthirdfrom%3Dwx"

        var wangyi_an = "http://intent.music.163.com:2878/something2?k=1503764055131&s=2d5d122fd01c2dbb3bbff52dcc8cd6b3&r=orpheus%3A%2F%2Fsong%2F25962464";

        'http://intent.music.163.com:2878/something2?k=1503764055131&s=2d5d122fd01c2dbb3bbff52dcc8cd6b3&r=orpheus://song/25962464'
   		var weibo = "http://weibo.com"
        $("#box").on('click',function(){
        	var c= "http://intent.music.163.com:2878"
        	window.location.href = c;
        	alert(c)
        })
        'http://music.163.com/m/song?id=472361096&userid=111810205&from=singlemessage&isappinstalled=0'
        var _openclient = function() {
            var _match = /scheme=(.+)?&|scheme=(.+)?$/.exec("?scheme=orpheus://song/472361096?thirdfrom=wx");
            if (!_match) return;
            var _scheme = decodeURIComponent(_match[1] || _match[2]);
            return  _scheme;
        };
        console.log(_openclient())