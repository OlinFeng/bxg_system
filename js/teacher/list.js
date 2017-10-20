/**teacherList教师管理
 * Created by Administrator on 2017/10/18.
 */

define(['jquery',
        'text!teacherListTpls.html'
],function($, teacherListTpls, art){

    return function(){

        $('.main').append(teacherListTpls);

    }

})
