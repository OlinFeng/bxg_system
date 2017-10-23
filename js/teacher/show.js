/**�鿴��ʦ����
 * Created by Administrator on 2017/10/18.
 */

define(['jquery',
        'text!teacherShowTpls.html',
        'art'
],function($, teacherShowTpls, art){

    return function(id){
        $.ajax({
            url: '/api/teacher/view',
            type: 'get',
            data: {
                tc_id: id
            },
            success: function(res){

                if(res.code != 200)  throw new Error(res.msg);

                console.log(res.result);
                //��ȡ�������ݱ��뵽ģ��
                var html = art.render(teacherShowTpls, res.result);
                var $html = $(html).on('hidden.bs.modal',function(){
                    $html.remove();
                }).appendTo('body').modal();


            }
        });
    }

})
