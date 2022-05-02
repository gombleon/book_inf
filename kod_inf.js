//Вычисляем по формуле Хартли информационную емкость знака
function hartli(str)
{
	var alph=new Array()
	var frequancy=new Array()
	alph[0]=str.charAt(0)
	var j
	var freq
	var hart=''
	var len=str.length
	for (var i=1;i<=str.length-1;i++)
	{
		j=0
		while((j<alph.length)&&(!(alph[j]==str.charAt(i))))
		{j++}
		if (j==alph.length) {alph[alph.length]=str.charAt(i)}
	}
	alph=alph.sort()
	hart=String(Math.log(alph.length)/Math.LN2)
	return hart.substring(0,5)
}
//Ôîđěčđóĺě ŕëôŕâčň ŕçáóęč Ěîđçĺ
function start(par_str)
{
//Массив-алфавит
	mas_alph[0]=new Array()
	//Массив частот
	mas_fr[0]=new Array()
	
	mas_cod[0]=new Array()
	mas_alph[0][0]=par_str.charAt(0)
	var j
	var freq
	var shen=0
	var len=par_str.length
	for (var i=1;i<=len-1;i++)
	{
		j=0
		while((j<mas_alph[0].length)&&(!(mas_alph[0][j]==par_str.charAt(i))))
		{j++}
		if (j==mas_alph[0].length) {mas_alph[0][mas_alph[0].length]=par_str.charAt(i)}
	}
	for (j=0;j<mas_alph[0].length;j++)
	{
		mas_cod[0][j]=''
		freq=0
		for (i=0;i<len;i++)
		{if (mas_alph[0][j]==par_str.charAt(i)) freq++}
		mas_fr[0][mas_fr[0].length]=freq
	}
}
//Вычисляем информационную емкость 1 знака сообщения
function calc_kol_inf(str)
{
	var alph=new Array()
	var frequancy=new Array()
	alph[0]=str.charAt(0)
	var j
	var freq
	var kol_inf1=0
	var len=str.length
	for (var i=1;i<=str.length-1;i++)
	{
		j=0
		while((j<alph.length)&&(!(alph[j]==str.charAt(i))))
		{j++}
		if (j==alph.length) {alph[alph.length]=str.charAt(i)}
	}
	alph=alph.sort()
	for (j=0;j<alph.length;j++)
	{
		freq=0
		for (i=0;i<str.length;i++)
		{if (alph[j]==str.charAt(i)) freq++}
		frequancy[frequancy.length]=freq
	}
	for (var i=0;i<frequancy.length;i++)
	{
		kol_inf1+=(-frequancy[i]/len)*Math.log(frequancy[i]/len)/Math.LN2
	}
	return kol_inf1
}

function test_cyr(stroka)
{
	var alph_cyr=' абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
	var len=alph_cyr.length
	var found=true
	var j
	for (var i=0;i<stroka.length;i++)
	{	
		j=0
		while ((stroka.charAt(i)!=alph_cyr.charAt(j))&&(j<len))
			{j++}
		if (j>=len)
		{found=false;break}
	}
return found
}

function format_len(str,len)
{
var res=str
for (var i=0;i<=len-str.length;i++)
res+=' '
return res
}
//Формируем алфавит сообщения и вычисляем частоты знаков алфавита в сообщении
function do_alphabet(perv_soobsh,mas_alph,mas_fr)
{
//создаем массив для алфавита
	mas_alph[0]=new Array()
	//Создаем массив для частоты
	mas_fr[0]=new Array()

	mas_alph[0][0]=perv_soobsh.charAt(0)
	var j
	var freq
	var shen=0
	var len=perv_soobsh.length
	for (var i=1;i<=len-1;i++)
	{
		j=0
		while((j<mas_alph[0].length)&&(!(mas_alph[0][j]==perv_soobsh.charAt(i))))
		{j++}
		if (j==mas_alph[0].length) {mas_alph[0][mas_alph[0].length]=perv_soobsh.charAt(i)}
	}
	for (j=0;j<mas_alph[0].length;j++)
	{
		freq=0
		for (i=0;i<len;i++)
		{if (mas_alph[0][j]==perv_soobsh.charAt(i)) freq++}
		mas_fr[0][mas_fr[0].length]=freq
	}
}
//Вычисляем факториал
function factorial(j)
{
	var fact=1
	if (j==0)
		fact=1
	else
		for (var i=1;i<=j;i++)
			fact=fact*i
	return fact	
}