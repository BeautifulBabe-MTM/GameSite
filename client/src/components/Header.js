import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <span className="logo">Stuff</span>
                <ul className="nav">
                    <li>Главная</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    )
}