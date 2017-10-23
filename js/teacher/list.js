/**teacherList教师管理
 * Created by Administrator on 2017/10/18.
 */

define(['jquery',
        'text!teacherListTpls.html',
        'art',
        './show'
],function($, teacherListTpls, art, teacherShow){

    return function(){

        $.ajax({
            url: '/api/teacher',
            type: 'get',
            success: function(res){
                //请求错误
                if(res.code != 200)  throw new error;
                //请求成功执行下列操作

                console.log(res);
                var html = art.render(teacherListTpls,{r: res.result});
                $html = $(html);
                $html.on('click','.btn-show',function(e){
                    //同步改异步，阻止跳转
                    e.preventDefault();

                    //获取该行数据的id值
                    var id = $(this).parents('tr').attr('tc_id');


                    teacherShow(id);

                })

                $('.main').html($html);
            }
        })

    }

})
