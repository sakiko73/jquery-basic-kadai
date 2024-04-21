$(function () {

    //change-color
    $('#change-color').on('click', function() {
        //文字色変化
        $('#target').css('color','red');
    });

    //change-text
    $('#change-text').on('click', function() {
        //内容を替える
        $('#target').text('Hello');
    });
    
    //fade-out
    $('#fade-out').on('click', function() {
        // フェードアウトする
        $('#target').fadeOut();
    });
    
    //fade-in
    $('#fade-in').on('click', function() {
        // フェードインする
        $('#target').fadeIn();
    });

});