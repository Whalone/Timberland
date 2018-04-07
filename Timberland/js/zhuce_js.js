function handsubmit(){
		var userName=document.forms[0].username.value;
		var password2=document.forms[0].password2.value;
		var password1=document.forms[0].password1.value;
		var a = -1;
		var age = document.forms[0].age.value;
		a=document.forms[0].mail.value.indexOf("@");
		if(userName==null || userName=="")
		{
			alert("用户名不为空！！！");
		}
		
		else if(password1!=password2){
			alert("密码输入不一致！！！");
		}else if(password1.length<6){
			alert("密码不能少于6位！！！");
		}
		
		else if(a<0){
			alert("请输入正确的邮箱地址！！！");
		}
		
		else if(age==1){
			alert("年龄不能为空！！！");
		}else{
			alert("注册成功！！！");
		}
	}
