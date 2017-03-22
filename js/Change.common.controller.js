
function toastShow(id,msg,time,fun)
{
    $('#'+id+' p').html(msg);
    $('#'+id+'').show();
    if(time==undefined)
        time=3000;
    setTimeout(function () {
        if(fun==undefined)
        {
            $('#'+id+'').hide();
        }
        else
        {
            $('#'+id+'').hide();
            fun();
        }
    }, time);
}