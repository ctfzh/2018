/**
 * Created by Administrator on 2017/9/1.
 */
let http=require("http");
let fs=require("fs");
let url=require("url");
let querystring=require("querystring");

http.createServer(function(request,response){
        let urlobj=url.parse(request.url)
        console.log(urlobj);
        //urlobj.pathname /login.html
       if(urlobj.pathname=="/login.html"){
           //��Ӧ��ҳ��
           //fs.readFile("test.html",function(error,data){
           //     //����һ����Ӧͷ����Ϣ
           //     response.writeHead(200,{"Content-Type":"text/html"});
           //    //��Ҫ�������data,��Ӧ�������
           //    response.end(data);
           //})
           //data end
           fs.createReadStream("test.html").pipe(response);
       }

}).listen(9000,"127.0.0.1",function(){
    console.log("node server running on port : 9000")
})