function yardGreeting(sqArea){
    let finalPrice = (0.82*sqArea*7.61).toFixed(2);
    let discount = (0.18*sqArea*7.61).toFixed(2);
    console.log(` The final price is: ${finalPrice} lv.`);
    console.log(` The discount is: ${discount} lv.`);
}
yardGreeting(540);