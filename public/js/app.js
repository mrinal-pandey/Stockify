fetch('/players').then((response) => {
    response.json().then((data) => {
        $('.company-name1').html(data.gainer[0].companyName);
        $('.company-name2').html(data.gainer[1].companyName);
        $('.company-name3').html(data.gainer[2].companyName);
        $('.company-name4').html(data.loser[0].companyName);
        $('.company-name5').html(data.loser[1].companyName);
        $('.company-name6').html(data.loser[2].companyName);
        $('.price1').html("Price:   " + data.gainer[0].price);
        $('.price2').html("Price:   " + data.gainer[1].price);
        $('.price3').html("Price:   " + data.gainer[2].price);
        $('.price4').html("Price:   " + data.loser[0].price);
        $('.price5').html("Price:   " + data.loser[1].price);
        $('.price6').html("Price:   " + data.loser[2].price);
    })
})

$('.input-form').submit((e) => {
    e.preventDefault();
    $('.loading').show();
    const name = $('.name-input').val();
    fetch('/details?company=' + name).then((response) => {
        response.json().then((data) => {
            $('.loading').hide();
            $('.company-logo').attr("src", data.details[0].image);
            $('.website').attr("href", data.details[0].website);
            $('.website').html(data.details[0].companyName);
            $('.price').html(data.details[0].price);
            $('.market-capital').html(data.details[0].mktCap);
            $('.last-dividend').html(data.details[0].lastDiv);
            $('.currency').html(data.details[0].currency);
            $('.exchange').html(data.details[0].exchange);
            $('.sector').html(data.details[0].sector);
            $('.industry').html(data.details[0].industry);
            $('.country').html(data.details[0].country);
            $('.dcf').html(data.details[0].dcf);
            $('.changes-percent').html(data.quote[0].changesPercentage);
            $('.day-low').html(data.quote[0].dayLow);
            $('.day-high').html(data.quote[0].dayHigh);
            $('.year-low').html(data.quote[0].yearLow);
            $('.year-high').html(data.quote[0].yearHigh);
            $('.open').html(data.quote[0].open);
        })
    })
})