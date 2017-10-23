/**teacherList��ʦ����
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
                //�������
                if(res.code != 200)  throw new error;
                //����ɹ�ִ�����в���

                console.log(res);
                var html = art.render(teacherListTpls,{r: res.result});
                $html = $(html);
                $html.on('click','.btn-show',function(e){
                    //ͬ�����첽����ֹ��ת
                    e.preventDefault();

                    //��ȡ�������ݵ�idֵ
                    var id = $(this).parents('tr').attr('tc_id');


                    teacherShow(id);

                })

                $('.main').html($html);
            }
        })

    }

})
