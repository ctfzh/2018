var net=require("net"); //����netģ��

var count=0;//��ǰ��������
var user={};//�洢��ǰ�����ҵ��û�
//����һ��tcp�ķ�����
var server=net.createServer(function(scoket){

        scoket.write("welcome to node chat ,now "+count+" at this time .your name\r\n");
        count++;//�����ҵ�����Ҫ��������
        var nickname;//��ʱ�洢�û����������

        //�����Ĺ㲥����
        function broadcast(msg){
            for(var i in user){
             if(i!=nickname){
                 user[i].write(msg)
             }
         }
        }

        var temp="";
        scoket.on("data",function(data){
            temp+=data;
            if(temp.indexOf("\n")===-1){
                return;
            }
            data=temp.replace(/\r|\n/g,"");
            if(!nickname){
                //�û����ظ�����
                if(user[data]){
                    scoket.write("nickname already in use ,try \r\n");
                    temp="";
                    return;
                }
                else{
                    nickname=data;
                    user[nickname]=scoket;
                    broadcast(nickname+"join the room\r\n")
                }
            }else{
                broadcast(nickname+"say:"+data+"\r\n");
            }
            temp="";
        })
        //�û��뿪��ʱ��
        scoket.on("close",function(){
            count--;
            delete user[nickname];
            broadcast(nickname+"leave the room")
        })

})
server.listen(9000,function(){
    console.log("server listening on 9000")
});