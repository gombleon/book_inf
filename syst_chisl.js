//сумма двух чисел
function summa(nm1,nm2) {
var reg_per='0', sm='', n1=String(nm1), n2=String(nm2), len1=n1.length, len2=n2.length;
	if (len1>len2) {
		for (var i=0;i<len1-len2;i++)
		n2='0'+n2;
	}
	else 	{
		if (len2>len1)
			for (var i=0;i<len2-len1;i++)
				n1='0'+n1;
	}
	for (var i=n1.length-1;i>=0;i--) {
		if ((n1.charAt(i)=='0')&&(n2.charAt(i)=='0'))
			{sm=reg_per+sm;reg_per='0'}
		else
			if (((n1.charAt(i)=='1')&&(n2.charAt(i)=='0'))||((n1.charAt(i)=='0')&&(n2.charAt(i)=='1'))) {
				if (reg_per=='0') {
					sm='1'+sm;reg_per='0';
				}
				else {
					sm='0'+sm;reg_per='1';
				}
			}
			else
				if ((n1.charAt(i)=='1')&&(n2.charAt(i)=='1'))
					if (reg_per=='0') {
						sm='0'+sm;reg_per='1';
					}
					else {
						sm='1'+sm;reg_per='1';
					}

	}
	sm=reg_per+sm;
	return sm;
}

//сдвиг
function sdvig(nm,kol) {
	var n=String(nm), pos=Number(kol), len=n.length, reslt='';
	for (var i=0;i<pos;i++)
		reslt+='0';
/*	reslt=n.substring(pos,len)+reslt*/
	reslt=n+reslt;
	return reslt;
}
//умножаем целые числа
function multipl(nm1,nm2) {
	var reslt='Произведение:\r\n', len=nm2.length, tmp='0', sum='0', reg_perep='0';
	for (var i=0;i<len;i++)
		sum+='0';
	for (var i=len-1;i>=0;i--) {	
		if (nm2.charAt(i)=='1') {
			tmp=sdvig(nm1,len-1-i);
			sum=summa(sum,tmp);
			for (var j=0;j<sum.length-len;j++)
				if (sum.charAt(j)=='1') {
					reg_perep='1';
					break;i=-1;
				}
			reslt+=(tmp.substring(tmp.length-len,tmp.length)+' - результат сдвига\r\n');			
			reslt+=(sum.substring(sum.length-len,sum.length)+' - промежуточный результат сложения\r\n');
		}
		else {
			sum=summa(sum,0);
			reslt+=(sum.substring(sum.length-len,sum.length)+' - промежуточный результат сложения\r\n');
		}
	}
	for (var i=0;i<len;i++)
		reslt+='-';
	reslt+='\r\n'
	if (reg_perep=='1')
		reslt+='Переполнение ';
	else
		reslt+=(sum.substring(sum.length-len,sum.length)+' - искомое произведение\r\n');
	return reslt;
}

//вычисление двоичного кода
function dop_cod(nm) {
	var len=nm.length, obr='', dop='';
	for (var i=0;i<len;i++)
		if (nm.charAt(i)=='1')
			obr+='0';
		else
			obr+='1';
	sum=summa(obr,1);		
	dop=sum.substring(sum.length-len,sum.length);
	return dop;
}

//Перевод целых десятичных чисел в заданную систему счисления
function perevod10_q(num1,osn1) {
var drob=Number(num1)%1, num1=Number(num1)-drob, osn1=Number(osn1), p="", tmp, ost=0;
	while(num1>0) {
		ost=num1%osn1;
		switch(ost) {
			case 10:p='a'+p;break;
			case 11:p='b'+p;break;
			case 12:p='c'+p;break;
			case 13:p='d'+p;break;
			case 14:p='e'+p;break;
			case 15:p='f'+p;break;
			default:p=String(ost)+p
		}
		num1=(num1-ost)/osn1;
	}
	if (drob!=0) {
		p=p+'.';
		for (var i=0;i<10;i++) {
			drob=drob*osn1;
			tmp=drob-drob%1;
			switch(tmp) {
				case 10:p+='a';break;
				case 11:p+='b';break;
				case 12:p+='c';break;
				case 13:p+='d';break;
				case 14:p+='e';break;
				case 15:p+='f';break;
				default:p+=String(tmp)
			}
			drob=drob%1;
			if (drob==0)
				i=10;
		}
	}
	return p;
}
//Перевод веществ. десятичных чисел в заданную систему счисления
function perevod(num1,osn1)
{
	var strnum=String(num1)
	var os=Number(osn1)
	var result=0
	var p=1
	var ch=''
	var len=strnum.length
	var tch=strnum.indexOf('.')
	if (tch==-1)
	tch=len
	for (var i=0;i<=tch-1;i++)
		{
			ch=strnum.charAt(i)
			switch(ch)
			{
				case 'a':p=10;break;
				case 'b':p=11;break;
				case 'c':p=12;break;
				case 'd':p=13;break;
				case 'e':p=14;break;
				case 'f':p=15;break;
				default:p=Number(ch)
			}
			result+=p*Math.pow(os,tch-1-i)
		}
		
	for (var i=1;i<=len-1-tch;i++)
		{
			ch=strnum.charAt(tch+i)
			switch(ch)
			{
				case 'a':p=10;break;
				case 'b':p=11;break;
				case 'c':p=12;break;
				case 'd':p=13;break;
				case 'e':p=14;break;
				case 'f':p=15;break;
				default:p=Number(ch)
			}
			result+=p/Math.pow(os,i)
		}	 
	return result
}

//проверяем как вещ число по основ osn
function proverka(num,osn) {
var os=Number(osn)+1, found=false, str='-.0123456789abcdef';
	for (var i=0;i<num.length;i++) {
		found=false;
		for (var j=0;j<=os;j++) {
			if (str.charAt(j)==num.charAt(i)) {
				found=true;j=os;	
			}
		}
		if (found==false)
			break;
	}
return 	found;
}
//проверяем выражение как нат число
function proverka_des(num) {
var found=false, str='0123456789';
	for (var i=0;i<num.length;i++) {
		found=false;
		for (var j=0;j<10;j++) {
			if (str.charAt(j)==num.charAt(i)) {
				found=true;j=10;	
			}
		}
		if (found==false)
			break;
	}
	return found;
}
//проверяем число со знаком
function proverka_des_znak(num) {
var found=false, str='-0123456789';
	for (var i=0;i<num.length;i++) {
		found=false;
		for (var j=0;j<=10;j++) {
			if (str.charAt(j)==num.charAt(i)) {
				found=true;
				j=10;	
			}
		}
		if (found==false)
			break;
	}
	return found;
}

//Если dv1>=dv2, то rs=true
function more(dv1,dv2) {
	var rs, i=0;
	while ((dv1.charAt(i)==dv2.charAt(i))&&(i<dv1.length))
		i++;
	if ((i==dv1.length)||((i<dv1.length)&&(dv1.charAt(i)=='1')))
		rs=true;
	else
		rs=false;
	return rs;
}

//переводим в двоичную систему
function dv_cod_ves(nm,razr,por2) {
	var nm=Number(nm), abs_nm=Math.abs(nm), dv_cod='', int_nm=abs_nm-(abs_nm%1), frac=abs_nm%1, razr=Number(razr), por2=Number(por2),  mant='', point, int_dv, por10=0, abs_por10, dv_por='', res='';
//Целая часть
	while (int_nm>0) {
		dv_cod=int_nm%2+dv_cod;
		int_nm=(int_nm-int_nm%2)/2;
	}
	calc=dv_cod.indexOf('1',0);
	dv_cod=dv_cod+'.';
//Дробная часть
	while ((frac!=0)&&(dv_cod.length<256))	{
		frac*=2;
		dv_cod+=frac-frac%1;
		frac=frac%1;
	}
//Позиция точки
	point=dv_cod.indexOf('.',0);
//Выделяем целую часть числа
	int_dv=dv_cod.substring(0,point);
//Находим порядок
	if ((int_dv.length>1)||(int_dv.charAt(0)=='1'))
		por10=int_dv.length;
	else
		por10=-dv_cod.indexOf('1',point)+1;
	abs_por10=Math.abs(por10);
//Порядок абсолютного значения в двоичном коде
	while(abs_por10>0) {
		dv_por=abs_por10%2+dv_por;
		abs_por10=(abs_por10-(abs_por10%2))/2;
	}
	if (dv_por.length>=por2)
		res='Переполнение';
	else {
		while (dv_por.length<por2)
			dv_por='0'+dv_por;
			//В прямом коде
		if (por10<0)
			dv_por='1'+dv_por.substring(1,dv_por.length);
//Вычисляем мантиссу
		mant=dv_cod.substring(0,point)+dv_cod.substring(point+1,dv_cod.length);
		point=mant.indexOf('1',0);
		mant='0'+mant.substring(point,mant.length);
		while (mant.length<razr)
			mant+='0';
		mant=mant.substring(0,razr);
//Мантисса в прямом коде
		if (nm<0)
			mant=1+mant.substring(1,mant.length);
		res=dv_por+mant;
	}
	return res;
}

//Нормализация вещественного числа, увеличиваем мантиссу и уменьшаем порядок

function norm_less_1(order,mant) {
	var result_norm, minus_odin='1', i;
	
	//Формируем -1
	for (i=0;i<order.length-1;i++)
		minus_odin='0'+minus_odin;
	minus_odin=dop_cod(minus_odin);
	
	//Выбрасываем второй ноль из мантиссы (сдвигаем мантиссу влево)
	while (mant.charAt(1)=='0') {
		mant=mant.charAt(0)+mant.substring(2,mant.length)+'0';
		order=summa(order,minus_odin);
		order=order.substring(1,order.length);
	}
	result_norm=order+' '+mant;
	return result_norm;
}

//Выравниваем порядки
function eq_por(pr1,mnt1,pr2,mnt2) {
	var p1=pr1, p2=pr2, m1=mnt1, m2=mnt2, len=p1.length, stroka, result;
	if ((p1.charAt(0)=='0')&&(p2.charAt(0)=='0')) {
		if (more(p1,p2))
			while (p1!=p2) {
				stroka=sdvig_mant1(p2,mnt2);
				p2=stroka.substring(0,len);
				mnt2=stroka.substring(len,stroka.length);
			}	
		else
			while (p1!=p2) {
				stroka=sdvig_mant1(p1,mnt1);
				p1=stroka.substring(0,len);
				mnt1=stroka.substring(len,stroka.length);
			}
	}
	else
		if ((p1.charAt(0)=='0')&&(p2.charAt(0)=='1'))
			while (p1!=p2) {
				stroka=sdvig_mant1(p2,mnt2);
				p2=stroka.substring(0,len);
				mnt2=stroka.substring(len,stroka.length);
			}	
	else
	if ((p1.charAt(0)=='1')&&(p2.charAt(0)=='0'))
		while (p1!=p2) {
			stroka=sdvig_mant1(p1,mnt1);
			p1=stroka.substring(0,len);
			mnt1=stroka.substring(len,stroka.length);
		}
	else
		if ((p1.charAt(0)=='1')&&(p2.charAt(0)=='1')) {
			if (more(p1,p2))
				while (p1!=p2) {
					stroka=sdvig_mant1(p1,mnt1);
					p1=stroka.substring(0,len);
					mnt1=stroka.substring(len,stroka.length);
				}	
			else
				while (p1!=p2) {
					stroka=sdvig_mant1(p2,mnt2);
					p2=stroka.substring(0,len);
					mnt2=stroka.substring(len,stroka.length);
				}
		}
	result=p1+mnt1+' '+p2+mnt2;
	return result;
}

//Сдвиг мантиссы вправо и увеличение порядка на 1

function sdvig_mant1(por,mant) {
	var result, pr, znak=mant.charAt(0), mantissa=mant.substring(1,mant.length-1);
	pr=summa(por,'1');
	pr=pr.substring(1,por.length);
	if (znak=='0')
		result=pr+znak+'0'+mantissa;
	else
		result=pr+znak+'1'+mantissa;
	return result;
}


function sdvig_mant(por,mant) {
	var znak=mant.charAt(0), result, mantissa=mant.substring(1,mant.length-1), pr;
	if (por.charAt(0)=='1') {
		pr=dop_cod('0'+por.substring(1,por.length));
//Увеличиваем порядок
		pr=summa(pr,'1');
		pr=pr.substring(1,pr.length);
		if (pr.charAt(0)=='1') {
			pr=dop_cod(pr);
			pr='1'+pr.substring(1,pr.length);
		}	
	}
	else {
		pr=summa(por,'1');
		pr=pr.substring(1,pr.length);
	}	
	result=pr+znak+'0'+mantissa;
	return result;
}
