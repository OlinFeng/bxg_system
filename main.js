/**index main
 * Created by Administrator on 2017/10/18.
 */


//配置第三方包的路径 和 依赖加载
require.config({
    baseUrl:'js',
    paths:{
        jquery: 'lib/jquery-2.1.4',
        bootstrap: '../assets/bootstrap/js/bootstrap',
        art: 'lib/template-web',
        text: 'lib/text',
        teacherListTpls: '../tpls/teacherListTpls',
        teacherShowTpls: '../tpls/teacherShowTpls'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
})

require(['jquery', 'teacher/list','bootstrap'],function($, teacherList){


    //设定点击的事件
    $('.list-group').on('click','a',function(){
        var asideBtn = $(this).attr('v');

        //点击改变按钮的背景颜色
        $(this).addClass('active').siblings().removeClass('active');

        switch(asideBtn){
            case 'teacher' :
                teacherList();
                break;
            case 'course' :
                $(".main").html("课程管理");
                break;
            case 'courseAdd' :
                $(".main").html("添加课程");
                break;
            case 'catagory' :
                $(".main").html("课程分类");
                break;
            case 'chart' :
                $(".main").html("图表统计");
                break;
        }
    });


    //默认打开页面模拟点击“课程管理”
    $(".list-group a[v=teacher]").trigger('click');




})


