let http=require("http");
let fs=require("fs");
let url=require("url");
let querystring=require("querystring");
//��������
http.createServer(function(request,response){
    //�ж����������GET POST
    let filename="";
    //1. �ж��������������URL
    let urlobj=url.parse(request.url);
    //console.log(urlobj.query)
    //2. pathname
    let pathname=urlobj.pathname;

    //console.log(request.method)

    //1. �ж��������������URL
    //let urlobj=url.parse(request.url);
    //console.log(urlobj.query)
    ////2. pathname
    //let pathname=urlobj.pathname;
    //3. ����url ���Ҷ�Ӧ���ļ�
    //console.log(pathname)
    if(pathname=="/"){
        filename="login.html";
        fs.createReadStream(`public/${filename}`).pipe(response);
    }
    else if(pathname=="/checkuser.html")
    {
        let params="";
        if(request.method=="GET"){
            //�Ƿ��������
            if(urlobj.query){
                //ʹ��querystring ��������
                 params=querystring.parse(urlobj.query);

            }
        }
        else if(request.method=="POST"){
            var postdata="";
            request.on("data",function(data){
                postdata+=data;
            })
            request.on("end",function(){
                console.log("ceshi:----"+postdata);
                params=querystring.parse(postdata);
                if(params.username=="admin"&&params.password=="1231"){
                    filename="profile.html";
                }
                else{
                    filename="404.html"
                }
                fs.createReadStream(`public/${filename}`).pipe(response);
            })
        }
        //console.log(11111)


    }else{
        filename="404.html";
        fs.createReadStream(`public/${filename}`).pipe(response);
    }
    //4. ��ȡ�ļ�������Ϊ��Ӧ���������


}).listen(9000,"127.0.0.1",function(){
    console.log("running on 9000")
})