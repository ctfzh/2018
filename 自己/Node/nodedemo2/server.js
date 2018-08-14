let http=require("http");
let fs=require("fs");
let url=require("url");
let querystring=require("querystring");

http.createServer(function(request,response){

    let filename="";
    //1. �ж��������������URL
    let urlobj=url.parse(request.url);
    //2. pathname
    let pathname=urlobj.pathname;
    //3. ����url ���Ҷ�Ӧ���ļ�
    console.log(pathname)
    if(pathname=="/"){
        filename="login.html";
    }
    else if(pathname=="/checkuser.html")
    {
        //�Ƿ��������
        if(urlobj.query){
            //ʹ��querystring ��������
            let params=querystring.parse(urlobj.query);
            if(params.username=="admin"&&params.password=="1231"){
                filename="profile.html";
            }
            else{
                filename="404.html"
            }
        }
    }else{
        filename="404.html"
    }
    //4. ��ȡ�ļ�������Ϊ��Ӧ���������
    fs.createReadStream(`public/${filename}`).pipe(response);

}).listen(9000,"127.0.0.1",function(){
    console.log("running on 9000")
})