var oldName = prompt('What is the older person name?');
var oldAge = prompt('What is the older person age?');
var newName = prompt('What is the younger person name?');
var newAge = prompt('What is the younger person age?');

var diffAge = oldAge - newAge;

alert('the older person name is ' + oldName + ' and have ' + oldAge + ' years old!');
alert('the younger person name is ' + newName + ' and have ' + newAge + ' years old!');

if(diffAge <= 1){
    alert('the age difference is ' + diffAge + ' years!');
}
else{
        alert('the age difference is ' + diffAge + ' years!');
}


