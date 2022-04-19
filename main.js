$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var content = $('#content').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, {"content": content});

    });
});
