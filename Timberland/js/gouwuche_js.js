function _1jiayi(){
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var num1 = parseInt(n1,10);
	var num2 = parseInt(n2,10);
	num1=num1+1;
	document.getElementById('num1').value=num1;

	
	document.getElementById('price1').value=550*num1;
	document.getElementById('total').value=550*num1+250*num2;
}

function _1jianyi(){
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var num1 = parseInt(n1,10);
	var num2 = parseInt(n2,10);
	if(num1>0){
		num1=num1-1;
		document.getElementById('num1').value=num1;
		document.getElementById('price1').value=550*num1;
	}
	document.getElementById('total').value=550*num1+250*num2;
}

function _2jiayi(){
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var num1 = parseInt(n1,10);
	var num2 = parseInt(n2,10);
	num2=num2+1;
	document.getElementById('num2').value=num2;

	
	document.getElementById('price2').value=250*num2;
	document.getElementById('total').value=550*num1+250*num2;
}

function _2jianyi(){
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var num1 = parseInt(n1,10);
	var num2 = parseInt(n2,10);
	if(num2>0){
		num2=num2-1;
		document.getElementById('num2').value=num2;
		document.getElementById('price2').value=550*num1+250*num2;
	}
	document.getElementById('total').value=550*num1+250*num2;
}

function pay(){
	var mon = document.getElementById('total').value;
	alert("已支付"+mon+"元，谢谢惠顾！");
}
