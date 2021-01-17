//关闭弹层
$('.colse_pop').click(function () {
    $(this).parents('.pop_mask').hide()
})
//页面滚动到顶部
$('.go_top').click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
})