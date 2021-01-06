// global scope / windows scope
//"use strict";
// var a = 1;

// function tes() {
//     //name conflict
//     //kalau ingin di variabel lokal harus selalu menuliskan var
//     var a = 2;
//     // var a = 2;
//     // console.log(window.a);
// }

// tes();
// console.log(a);

// contoh 1
// var a = 1;

// function tes(a) {
//     console.log(a);
// }

// tes(a);
// console.log(a);

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) 
{
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++)
        {
            if (vowels.indexOf(s[i]) > -1)
                {
                    console.log(s[i]);
                }
        }
    
    for (var j = 0; j < s.length; j++)
        {
            if (vowels.indexOf(s[j]) < 0)
                {
                    console.log(s[j]);
                }
        }
    
}

