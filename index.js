function togglePage() {
	document.querySelector(".overlay-signin").classList.toggle("show");
	document.querySelector(".overlay-signup").classList.toggle("hide");
	document.querySelector(".signup").classList.toggle("show");
	document.querySelector(".signin").classList.toggle("hide");
}



function getData() {
	var userName = document.getElementById("input_userName_su").value;
	var userMail = document.getElementById("input_userMail_su").value;
	var userPass = document.getElementById("input_userPass_su").value;
	localStorage.setItem("objSignUp", JSON.stringify({ name: userName, email: userMail, password: userPass }));
	document.querySelector(".overlay-signin").classList.toggle("show");
	document.querySelector(".overlay-signup").classList.toggle("hide");
	document.querySelector(".signup").classList.toggle("show");
	document.querySelector(".signin").classList.toggle("hide");

}
function login() {
	var userNameLogin = document.getElementById("input_userName_si").value;
	var userPassLogin = document.getElementById("input_userPass_si").value;
	var storage = JSON.parse(localStorage.getItem("objSignUp"));
	if (userNameLogin === storage.name) {
		if (userPassLogin === storage.password) {
			swal("Wecome " + userNameLogin.toUpperCase(), "Your Are Loged In.", "success");
			document.getElementById("firstPage").style.display = "none"
			document.getElementById("quizSelect").style.display = "block"
			document.getElementById("panel_window").style.display = "flex"
			document.getElementById("panel_window_nav").style.display = "block"
			document.getElementById("panel_window_nav").innerHTML = "Hello, " + userNameLogin;
			document.getElementById("footer").style.color = "white"
			document.getElementById("footer").style.backgroundColor = "#274EA7"
			// document.getElementById("logout").style.display = "block"

		} else {
			swal("Error!", "Incorrect Password", "error");
		}
	} else {
		swal("Error!", "User Not Registered", "error");
	}
	if (userNameLogin === "" && userPassLogin === "") {
		swal("Error!", "Empty Feild of UserName or Password", "error");
	}
}

function logout() {
	window.location.href = "index.html"
}


var data = [
	{
		question: "What does HTML stands for?",
		a: "Hyper Text Markup Language",
		b: "Hyper Text Progarmming Language",
		c: "Hyper Link Markup Language",
		d: "Hyper TextNode Markup Language",
		anskey: "op1",
	},
	{
		question: "Which tag is use of writing a paragraph?",
		a: "<h1></h1>",
		b: "<p>",
		c: "<paragraph></paragraph>",
		d: "none of the above.",
		anskey: "op4",
	},
	{
		question: "Choose the correct HTML element for the largest heading:?",
		a: "<heading>",
		b: "<h1><h1/>",
		c: "<h1></h1>",
		d: "All of the above",
		anskey: "op3",
	},
	{
		question: "What is the correct HTML element for inserting a line break?",
		a: "<br>",
		b: "<break>",
		c: "<br />",
		d: "a & c both.",
		anskey: "op4",
	},
	{
		question: "Who is making the Web standards?",
		a: "Mozilla",
		b: "Google",
		c: "MicroSoft",
		d: "World Wide Web",
		anskey: "op4",
	},
	{
		question: "Choose the correct HTML element to define important text:",
		a: "<importatnt>",
		b: "<b>",
		c: "<i>",
		d: "<strong>",
		anskey: "op4",
	}, {
		question: "Choose the correct HTML element to define emphasized text",
		a: "<em>",
		b: "<italic>",
		c: "<i>",
		d: "<cusive>",
		anskey: "op1"
	}, {
		question: "What is the correct HTML for creating a hyperlink?",
		a: "<a href='https://salmanali.com'>Salman</a>",
		b: "<a href='salmanali.com'></a>",
		c: "<a url='salmanali.com'>Salman</a>",
		d: "none of the above",
		anskey: "op1"
	}, {
		question: "Which character is used to indicate an end tag?",
		a: "*",
		b: "/",
		c: "<",
		d: "<>",
		anskey: "op2"
	}, {
		question: "How can you open a link in a new tab/browser window?",
		a: "<a href='url' target='_blanck'>Demo</a>",
		b: "<a href='url' target='_black'></a>",
		c: "<a href='url' target='black_'>",
		d: "All Of The Above",
		anskey: "op1"
	}
]
var question = document.querySelector("#question");
var option1 = document.querySelector("#opt1")
var option2 = document.querySelector("#opt2")
var option3 = document.querySelector("#opt3")
var option4 = document.querySelector("#opt4")
var btn_1 = document.getElementById("btn_1")
var answers = document.getElementsByClassName("answer");
var submit = document.getElementById("btn_2")
var score = document.getElementById("scoreHere")

function deselect() {
	for (i = 0; i < answers.length; i++) {
		answers[i].checked = false;

	}

}
console.log(answers)
var qCount = 0;
var score = 0;



function htmlquiz() {
	document.getElementById("quizArea").style.display = "block"
	document.getElementById("selectionPortal").style.display = "none"
	var qsList = data[qCount];
	question.innerText = qsList.question;
	option1.innerText = qsList.a;
	option2.innerText = qsList.b;
	option3.innerText = qsList.c;
	option4.innerText = qsList.d;
	document.getElementById("op1").removeAttribute('checked')
	document.getElementById("op2").removeAttribute('checked')
	document.getElementById("op3").removeAttribute('checked')
	document.getElementById("op4").removeAttribute('checked')


}
function next() {
	if (qCount < data.length) {
		htmlquiz();
	}
	var getId;
	for (var i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			getId = answers[i].id;
			document.getElementById(getId).removeAttribute('checked')
			break;
		}
	}
	deselect()


	var grade = document.getElementById("grade");
	var rightAns = document.getElementById("right");
	var totalQues = document.getElementById("ttlQ");

	if (qCount === data.length) {
		document.getElementById("quizArea").style.display = "none"
		document.getElementById("Score").style.display = "block"
		document.getElementById("status").style.display = "block"
		document.getElementById("certificateBtn").style.display = "block"
		document.getElementById("footer").style.display = "none"
		var percentage = Math.round((score / 10) * 100)
		document.getElementById("scoreHere").innerHTML = percentage + "%"
		console.log("Your Total Score is = " + score + " And Your Percentage is " + (score / 4) * 100 + "%")
	} if (percentage >= 90) {
		grade.innerHTML = "<center>" + "Congartulations!🎉" + "<hr>" + "</center>" + "Your Grade : A" + "<sup>" + "+" + "</sup>"
		document.getElementById("Score").style.borderColor = "#274EA7"
		rightAns.innerHTML = "Correct Answers : " + score;
		totalQues.innerHTML = "Total Questions : " + qCount;
	} if (percentage <= 80) {
		grade.innerHTML = "<center>" + "Congartulations!🎉" + "<hr>" + "</center>" + "Your Grade : A ";
		document.getElementById("Score").style.borderColor = "green"
		rightAns.innerHTML = "Correct Answers : " + score;
		totalQues.innerHTML = "Total Questions : " + qCount;
	} if (percentage <= 70) {
		grade.innerHTML = "<center>" + "Work Hard!" + "<hr>" + "</center>" + "Your Grade : B";
		document.getElementById("Score").style.borderColor = "green"
		rightAns.innerHTML = "Correct Answers : " + score;
		totalQues.innerHTML = "Total Questions : " + qCount;
	} if (percentage <= 60) {
		document.getElementById("certificateBtn").style.display = "block"
		document.getElementById("certificateBtn").style.display = "none"
		grade.innerHTML = "<center>" + "Be Consistent" + "<hr>" + "</center>" + "Your Grade : Fail";
		document.getElementById("Score").style.borderColor = "red"
		rightAns.innerHTML = "Correct Answers : " + score;
		totalQues.innerHTML = "Total Questions : " + qCount;
	}
}
function getAnswer() {
	var getId;
	for (var i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			getId = answers[i].id;
			break;
		}
	}
	console.log(getId)
	if (getId === data[qCount].anskey) {
		score++;
	}
	console.log(getId, data[qCount].anskey)
	console.log(score)
	qCount++;
	console.log(qCount, data.length - 1)
}

function certificate() {
	var date = new Date().toLocaleDateString();
	document.getElementById("Score").style.display = "none"
	document.getElementById("status").style.display = "none"
	document.getElementById("certificateBtn").style.display = "none"
	document.getElementById("certificate").style.display = "block"
	var userNameLogin = document.getElementById("input_userName_si").value;
	document.getElementById("namecertificateId").innerHTML = userNameLogin.toUpperCase()
	document.getElementById("date").innerHTML = "<u>" + date + "</u>" + "<br>" + "<center>" + "Date" + "</center>"
}


