function arePalindromes(arr) {
    function isPalindrome(a) {
        let palindrome = String(a);
        let flag = false;
        for (let i = 0; i < palindrome.length / 2; i++) {
            if (palindrome[i] != palindrome[palindrome.length - i - 1]) {
                flag = true;
                break;
            }
        }
        if (flag) {
            console.log("false");
        } else console.log("true")
    }
    for (let i = 0; i < arr.length; i++) {
        isPalindrome(arr[i]);
    }
}
arePalindromes([123, 323, 421, 121])