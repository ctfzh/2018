$(document).ready(function (){
    // ����Ϊ��ҳ
    function SetHome(obj,vrl){
        try{
            obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
            if(window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }
                catch (e) {
                    alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage',vrl);
            }
            else{
                alert("�����������֧�֣��밴�����沽�������1.����������á�2.���������ҳ��3.���룺"+vrl+"���ȷ����");
            }
        }
    }
// �����ղ� ����360��IE6
    function shoucang(sTitle,sURL) {
        try
        {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e)
        {
            try
            {
                window.sidebar.addPanel(sTitle, sURL, "");
            }
            catch (e)
            {
                alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
            }
        }
    }
    function getClass(className) { //classNameָclass��ֵ
        var tagname = document.getElementsByTagName('*');  //��ȡָ��Ԫ��
        var tagnameAll = [];     //����������ڴ洢���з���������Ԫ��
        for (var i = 0; i < tagname.length; i++) {     //������õ�Ԫ��
            if (tagname[i].className.indexOf(className)>=0){     //�����õ�Ԫ���е�class��ֵ����ָ�����������͸�ֵ��tagnameAll
                tagnameAll[tagnameAll.length] = tagname[i];
            }
        }
        return tagnameAll;
    }
    window.onload=function(){//�����¼�
        var btn=getClass('tab_btn');//��ȡ��ť����
        var div=getClass('tab_div');//��ȡdiv����
        for(i=0;i<btn.length;i++){
            btn[i].onmouseover=function(){//��ť����¼�
                var index=(this.getAttribute('index')-0);//��ȡ�ǵڼ�����ť����
                if(btn[index].className.indexOf('curr_btn')>=0) return;//������µİ�ťΪ��ǰѡ�еİ�ť���޷�Ӧ
                for(i=0;i<btn.length;i++){
                    if(index==i){
                        btn[i].className='tab_btn curr_btn';
                        div[i].className='tab_div curr_div';
                    }else{
                        btn[i].className='tab_btn';
                        div[i].className='tab_div';
                    }
                }
            }
        }
    };
    var ascenHover=$(".ascendancy_hover ul li");
    var ascenBtns=$(".ascendancy_btn li");
    //������ʾ��װ
    function showInfo(obj1,obj2){
        for(var i=0;i<6;i++){
            obj1.eq(i).mouseenter(function () {
                $(".ascendancy_hover").css("display","block");
                obj2.eq($(this).index()).css("display","block")
}
            );
            obj1.eq(i).mouseleave(
                function () {
                    $(".ascendancy_hover").css("display","none");
                    obj2.eq($(this).index()).css("display","none")
                }
            );
        }
    }
    showInfo(ascenBtns,ascenHover);//��������������ʾ
    //�л�������װ
    function tab(objList1,objList2,className) {
        for(var i=0;i<objList1.length;i++){
            objList1.eq(i).mouseenter(function () {
                objList1.removeClass(className);
                $(this).addClass(className);
                objList2.removeClass(className);
                objList2.eq($(this).index()).addClass(className);
            })
        }
    }
    tab($(".priceBtn1 .priceBtnUp li"),$(".priceConList1 .priceCon"),"active");//�۸��л�
    tab($(".priceBtn2 .priceBtnUp li"),$(".priceConList2 .priceCon"),"active");//�����л�
    //����������ʾ������װ
    function hoverShow(objList1) {
        for (var i=0;i<objList1.length;i++){
            objList1.eq(i).mouseenter(function () {
                objList1.each(function () {
                    $(this).removeClass('f-show')
                });
                $(this).addClass("f-show")
            });
            objList1.eq(i).mouseleave(function () {
                $(this).removeClass('f-show')
            });

        }
    }
    hoverShow($(".nav-item"));//�������ϵ���
    $("#header-language").hover(function () {
        $(this).addClass("show")
    }, function () {
        $(this).removeClass("show")
    })
    var infoList=[
        {name:"��ϯ����ʦ Joker.k ��sir",intro:"����CFA����ʦ�ڽ��������г��ڵ�ʵս����..."},
        {name:"���Ʒ���ʦJasson sir",intro:"������רҵ������ʵս�����и߶���ѵ����Ϊ�����ó��ж��߲��ν���..."},
        {name:"���Ʒ���ʦ�� sir",intro:"10����Ĵ�ҵ�����Ͷ�о������Ⱥ����ְҵ�����֡�����Ͷ�ʲ��Է���ʦ..."},
        {name:"���Ʒ���ʦ�Ƴ̸�",intro:"��ҵ�ڹ��������ƾ�ѧ�������������ļ������׺����������о�..."},
        {name:"��Ӣ����ʦ����ΰ",intro:"��ȫ�򾭼ö������ͻƽ����������������������֪..."},
        {name:"��Ӣ����ʦ����",intro:"��Ϥ�ڻ����ƽ���������ȹ��ڹ��ʽ���Ͷ���г���Ͷ��ʵս����ḻ..."}
    ]//����ʦ���
    var $teamInfosInner=$(".teamInfosInner").eq(0);//�ⲿ��ʾ��
    var nextIndex=0;
    //����ʦ�����һ��
    $("#next").click(function () {
        var teamInfositem=$(".teamInfosInner dl:first-child").clone();
        $teamInfosInner.append(teamInfositem)
        $teamInfosInner.animate({ left:'-166px'},100,function () {
            $(".teamInfosInner dl:first-child").remove();
            $teamInfosInner.animate({ left:'0'}, 0);

        });
        if(nextIndex<infoList.length-1){
            nextIndex++;
        }
        else {
            nextIndex=0;
        }
        for(var i=0;i<infoList.length;i++){
            $("#analystTitle").text("")
            $("#analystTitle").text(infoList[nextIndex].name);
            $("#analystCon").text("")
            $("#analystCon").text(infoList[nextIndex].intro);
        }
    })
    //����ʦ�����һ��
    $("#prev").click(function () {
        var teamInfositem=$(".teamInfosInner dl:last-child").clone();
        $teamInfosInner.animate({left:'-166px'},0)
        teamInfositem.prependTo($teamInfosInner)
        $teamInfosInner.animate({ left:'0px'}, 100,function () {
            $(".teamInfosInner dl:last-child").remove();
        });
        if(nextIndex==0){
            nextIndex=5;
        }
        else {
            nextIndex--;
        }
        for(var i=0;i<infoList.length;i++){
            $("#analystTitle").text(infoList[nextIndex].name);
            $("#analystCon").text(infoList[nextIndex].intro);
        }
    })


    /*$.getJSON('http://www.hj9999.hk/index.php?m=jingcai&c=index&a=getpro',function(data){
        $.each(data, function(i, v){
            syb = $('#'+ i);
            syb.find('.lcount').html(v + '%');
            syb.find('.up-fon').css({width:v + '%'});
            syb.find('.rcount').html(100 - v  + '%');
        });
    })
    //$("input[name='phone']").val($.cookie('loginid') ? $.cookie('loginid') : '');
    $(".inputT input").blur(function () {
        testnum();
    });
    $(".u-submit").click(function () {
        if ( !testnum() ) return;
        postGuess();
    })
    //��֤�û��绰�����Ƿ�Ϊ��
    function testnum(){
        var num=$("input[name='phone']").val();
        if(num==null||num=="")
        {
            $(".u-warn2").text("*�绰����Ϊ��");
            return false;
        }
        else{
            $(".u-warn2").text("");
            return true;
        }
    }
    //ͶƱ������
    $(".item-cls").click(function () {
        $(".g-form").hide();
    })*/
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".gotop").fadeIn();
        }
        else {
            $(".gotop").fadeOut();
        }
    })
    /* �ص����� */
    $(".gotop").click(function () {
        $('html,body').stop(true, true).animate({scrollTop: '0px'}, 800);
    })
    $(".rightIcon .onlineServices").eq(0).hover(
        function () {
            $(".rightIcon .kefu").css("display","block")
    },function () {
            $(".rightIcon .kefu").eq(0).css("display","none")
        })
    $(".rightIcon .kefu").eq(0).hover(
        function () {
            $(this).css("display","block")
    },function () {
            $(this).css("display","none")
        })

    $('.nav-list .nav-item:eq(6)').hide();
    $('.nav-list .nav-item:eq(7)').hide();
})
/*var symbolData = {
    LLG : '���ʽ�',
    LLS : '������',
    CL : 'ԭ��',
    EURUSD : 'ŷԪ/��Ԫ'
}
var directionData = {
    up : '��ͷ',
    down : '��ͷ'
}
function showguess(symbol, direction){
    //������½����
    $("input[name='symbol']").val(symbol);
    $("input[name='direction']").val(direction);
    $('.m-form .content').html(symbolData[symbol] + ' ' + directionData[direction]);
    $(".g-form").show();
}
function postGuess(){
    $.ajax({
        type : "GET",
        url : "http://www.hj9999.hk/index.php?m=jingcai&c=index&a=send",
        data : {
            uname  : 'index',
            phone  : $("input[name='phone']").val(),
            symbol  : $("input[name='symbol']").val(),
            direction  : $("input[name='direction']").val()
        },
        dataType : "json",
        success : function(data){
            if(data.status){
                //���cookie
                //$.cookie('loginid', $("input[name='phone']").val(), { expires: 31 });
                alert(data.msg);
                location.reload();
            } else {
                alert(data.msg);
            }
        }
    });
    return false;
}*/



