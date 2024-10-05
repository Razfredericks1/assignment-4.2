function PalindromeCheck(str) //this function will check to see if a word is a palindrome
{
   // (wont let me comment above for some reason) input with id for string: mean't for word input
   // button: onclick will run the fucntion bellow, which uses tthe input
    let word = document.getElementById("string").value;
    //word = input with id string
    const len = word.length;
    //len = length of string named 'word'
    for (let i = 0; i < len / 2; i++){
    //i : counter into the string
    //string (word) is divided in half
    //i++ : continues down each letter of string
    //processes first half of string then compares with second half
        if(word[i] !== word[len - 1 - i]){ 
            //if first letter and last letter don't match, continued until no more letters
            if(word[i] !== word[len - 1 - i]){ 
                alert( 'This word is not a palindrome.');
            }
            //alert( 'This word is not a palindrome.');
        }
        else{
            //if first and last letters match
            alert( 'Congratulations! This word is a palindrome!');
        }
    }
}