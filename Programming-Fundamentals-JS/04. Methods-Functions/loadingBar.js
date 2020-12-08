function bar(num) {
    if (num == 100) {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    } else {
        switch (num) {
            case 0: console.log('0% [..........]'); break;
            case 10: console.log('10% [%.........]'); break;
            case 20: console.log('20% [%%........]'); break;
            case 30: console.log('30% [%%%.......]'); break;
            case 40: console.log('40% [%%%%......]'); break;
            case 50: console.log('50% [%%%%%.....]'); break;
            case 60: console.log('60% [%%%%%%....]'); break;
            case 70: console.log('70% [%%%%%%%...]'); break;
            case 80: console.log('80% [%%%%%%%%..]'); break;
            case 90: console.log('90% [%%%%%%%%%.]'); break;
            default: break;
        }
        console.log("Still loading...")
    }
}