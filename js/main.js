//关闭弹层
$('.colse_pop').click(function () {
    $(this).parents('.pop_mask').hide()
})
//页面滚动到顶部
$('.go_top').click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500)
})
// 头尾引入
if ($('#header').length){
    $('#header').load('./header.html');
}
if ($('#footer').length){
    $('#footer').load('./footer.html');
}
//  获取路径参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}