function insert(num) 
{
document.calc.textview.value = document.calc.textview.value + num;
}

function equal()
{
var exp = document.calc.textview.value;
if(exp)
{
document.calc.textview.value = eval(exp)
}
}

