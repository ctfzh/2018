
//url: http://www.baidu.com/login.html?
// �����б�username=admin&password=123
//let str="username=admin&password=123&timeout=10000&isLogged=true&systemVersion=10";
//let s1=str.split("&")[0].split("=");
//let s2=str.split("&")[1].split("=");
//console.log(s1,s2)
//��Ҫ�������ַ�����Ϊ�������ݽ���
function parse(string){
    let obj={};
    string.split("&").map(function(item){
        let key=item.split("=")[0];
        let value=item.split("=")[1];
        obj[key]=value;
    })
    return obj;
}
module.exports.parse=parse;