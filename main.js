
document.addEventListener("DOMContentLoaded", ()=>{
    const numDays = document.getElementById("numDays");
    const tag = document.getElementById("tag");
    const gps = document.getElementById("gps");
    const roadside = document.getElementById("roadside");//Yes
    const under25 = document.getElementById("under25");
    const estimate = document.getElementById("estimate");
    const output = document.getElementById("output");

    estimate.addEventListener("click", ()=>{
        const results = getRateData(
            Number (numDays.value), 
            tag.checked, 
            gps.checked, 
            roadside.checked, 
            under25.checked, 
        )
        output.innerHTML = getTextResults(results);

    });



})