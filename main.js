
function populateCards(currencyData){
    console.log("currency",currencyData);
    $.each(currencyData, function(index,element){
        if (index===0){
            console.log("currency card",$(".currency-card"));
            $(".currency-card").find(".currency-title").text(element.name);
            $(".currency-card").find(".SUP").text(element.symbol);
            $(".currency-card").find(".rank").text(element.rank);
            $(".currency-card").find(".currency-rate").text(parseFloat(element.priceUsd).toFixed(3));
        } else{
            const currencyCardClone = $(".currency-card").first().clone();
            currencyCardClone.find(".currency-title").text(element.name);
            currencyCardClone.find(".SUP").text(element.symbol);
            currencyCardClone.find(".rank").text(element.rank);
            currencyCardClone.find(".currency-rate").text(parseFloat(element.priceUsd).toFixed(3));


            $(".card-container").append(currencyCardClone);
        }
    })


}




function fetchData(){
    //console.log("data feth")
    $.ajax({url: "https://api.coincap.io/v2/assets?limit=6", 
    success: function(result){ 
       // console.log("result",result);
        const currencyData = result.data;
 populateCards(currencyData);
       
},
});
     
}


$(window).on("load",function(){
    fetchData();
    
});





