/*function palindrome (string){
    if(string != ''){
        var reverse = string.split();
        reverse = reverse.reverse();
        reverse= reverse.join();
        if(reverse == string){
            return true;
        } 
        else{
            return false;
        }
    }
    
        return false;
}*/

//A shorter solution
function checkPalindrome(palindrome) {
    return palindrome == palindrome.split('').reverse().join('');
}

 
