//node�http������
//1. ����httpģ��
let http=require("http");

//2. ʹ��http������������
http.createServer(function(request,response){
   //respones ��Ӧͷ ��״̬�룬��Ӧͷ����
     response.writeHead(200,{"Content-Type":"text/html"});
    //��Ӧ��
     response.write("<h1>777777</h1>")
    //������Ӧ�Ĺ���
    response.end();

}).listen(9000,"127.0.0.1",function(){
    console.log("start :9000")
})