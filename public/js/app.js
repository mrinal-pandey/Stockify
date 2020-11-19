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
            $('.detail-row').show();
            $('.company-logo').attr("src", data.details[0].image);
            $('.website').attr("href", data.details[0].website);
            $('.website').html(data.details[0].companyName);
            $('.price').html("<strong>Price:</strong>    " + data.details[0].price);
            $('.market-capital').html("<strong>Market Capital:</strong>  " + data.details[0].mktCap);
            $('.last-dividend').html("<strong>Last dividend:</strong>    " + data.details[0].lastDiv);
            $('.currency').html("<strong>Currency:</strong>  " + data.details[0].currency);
            $('.exchange').html("<strong>Exchange:</strong>  " + data.details[0].exchange);
            $('.sector').html("<strong>Sector:</strong>  " + data.details[0].sector);
            $('.industry').html("<strong>Industry:</strong>  " + data.details[0].industry);
            $('.country').html("<strong>Country:</strong>    " + data.details[0].country);
            $('.dcf').html("<strong>Discounted cash flow:</strong>   " + data.details[0].dcf);
            $('.changes-percent').html("<strong>Changes Percent:</strong>   " + data.quote[0].changesPercentage);
            $('.day-low').html("<strong>Day Low:</strong>   " + data.quote[0].dayLow);
            $('.day-high').html("<strong>Day High:</strong>   " + data.quote[0].dayHigh);
            $('.year-low').html("<strong>Year Low:</strong>   " + data.quote[0].yearLow);
            $('.year-high').html("<strong>Year High:</strong>   " + data.quote[0].yearHigh);
            $('.open').html("<strong>Open:</strong>   " + data.quote[0].open);
            $('.previous-close').html("<strong>Previous Close:</strong>   " + data.quote[0].previousClose);
        })
    })
})