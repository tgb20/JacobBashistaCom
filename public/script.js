$(() => {
    $('#runGET').submit(function (event) {
        
        event.preventDefault();
        let url = $('#url').val();

        let requestURL = `http://browseas.com/telnet.php?bw=2&url=google.com&port=80&request=GET+%2F+HTTP%2F1.1%0D%0AHost%3A+www.google.fr%0D%0AUser-Agent%3A+browseas.com+telnet+%28MSIE+compatible%29%0D%0AReferer%3A+http%3A%2F%2Fbrowseas.com%2F%0D%0AConnection%3A+Close%0D%0A%0D%0A`
        fetch(requestURL).then((res) => {
            console.log(response.status);
            console.log(response.header);
        });
    });
});