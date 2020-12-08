function charityCampaign(days, sladkari, torti, gofreti, palachinki) {
    let sum = days * sladkari * (torti * 45 + gofreti * 5.8 + palachinki * 3.2) / 8 * 7;
    console.log(sum.toFixed(2));
}
charityCampaign(20, 8, 14, 30, 16);