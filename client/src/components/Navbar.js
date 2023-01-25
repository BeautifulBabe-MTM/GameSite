import React from "react";

var login, password;
export default function Navbar() {
    return ( 
        <nav className="nav">
        <div className="nav-li"><a href="/">Главная</a></div>
        <div className="nav-li" onClick={RouteToSomewhere}>Контакты</div>
        <div className="nav-li" onClick={SignIn}>Кабинет</div>
        </nav>
    );
}

function RouteToSomewhere(){
    alert("Наши контакты:\n+380 44 500 70 40 - Ярослав\n+380 44 232 69 78 - Руслан\nНаши инстаграммы указаны в самом низу страницы! Пока");
}
function SignIn(){
    login = prompt("Введите логин");
    password = prompt("Введите пароль");
    console.log(login);
console.log(password);
}
