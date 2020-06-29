
getParameter: function docid(opts) {
            var result = {};
            var search = location.search.slice(1);
            var arr = search.split("&");
            for (var i = 0; i < arr.length; i++) {
                var index_ = arr[i].indexOf("=");
                if (index_ != -1) {
                    var k = arr[i].substring(0, index_);
                    var v = arr[i].substring((index_ + 1), arr[i].length);
                    if (v.length > 0)
                        result[k] = decodeURI(v);
                }
            }

            if (typeof opts === "string") {
                return result[opts] || "";
            }
            $.extend(result, opts);
            return result;
        },