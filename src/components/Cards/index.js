import Card from "../Card";
import "./Cards.scss";
import React from "react";

const fruits = [
  {
    title: "Яблочное соблазнение: сочный рай в каждом укусе",
    img: "img/fruits/apple.png",
    price: "244 руб.",
  },
  {
    title: "Абрикосовая нежность: ароматная ласка летнего солнца",
    img: "img/fruits/apricot.png",
    price: "458 руб.",
  },
  {
    title: "Энергия авокадо: зеленый секрет силы и здоровья",
    img: "img/fruits/avocado.png",
    price: "329 руб.",
  },
  {
    title: "Банановая экзотика: энергия в каждом укусе",
    img: "img/fruits/banana.png",
    price: "180 руб.",
  },
  {
    title: "Драконий фрукт: магия вкуса для каждого",
    img: "img/fruits/dragonfruit.png",
    price: "295 руб.",
  },
  {
    title: "Дуриановая дерзость: новый взрыв вкуса и аромата",
    img: "img/fruits/durian.png",
    price: "345 руб.",
  },
  {
    title: "Сокровище граната: яркость и польза в каждом зернышке",
    img: "img/fruits/granata.png",
    price: "145 руб.",
  },
  {
    title: "Виноградное лакомство: гармония в каждой грозди",
    img: "img/fruits/grape.png",
    price: "280 руб.",
  },
  {
    title: "Грейпфрутовая заря: цитрусовая свежесть и здоровье",
    img: "img/fruits/grapefruit.png",
    price: "230 руб.",
  },
  {
    title: "Лимонный взрыв: свежесть и яркость в каждой капле",
    img: "img/fruits/lemon.png",
    price: "70 руб.",
  },
  {
    title: "Лаймовая искра: зеленый освежающий цитрусовый взрыв",
    img: "img/fruits/lime.png",
    price: "125 руб.",
  },
  {
    title: "Тропическое манго: влажный поцелуй солнца",
    img: "img/fruits/mango.png",
    price: "200 руб.",
  },
  {
    title: "Экзотический мангустин: сокровище сказочных островов",
    img: "img/fruits/mangostin.png",
    price: "400 руб.",
  },
  {
    title: "Пламя маракуи: ароматный экзотический вкус",
    img: "img/fruits/maracuja.png",
    price: "310 руб.",
  },
  {
    title: "Апельсиновая феерия: заряд витамина C в каждом сегменте",
    img: "img/fruits/orange.png",
    price: "200 руб.",
  },
  {
    title: "Экзотическая папайя: витаминное богатство и вкус",
    img: "img/fruits/papaya.png",
    price: "280 руб.",
  },
  {
    title: "Нежный персик: сладкая солнечная полоса в каждом кусочке",
    img: "img/fruits/peach.png",
    price: "250 руб.",
  },
  {
    title: "Медовая груша: сладкое и сочное наслождение",
    img: "img/fruits/pear.png",
    price: "200 руб.",
  },
  {
    title: "Спелый ананас: экзотика и свежесть в каждой дольке",
    img: "img/fruits/pineapple.png",
    price: "380 руб.",
  },
  {
    title: "Сочное киви: яркое зеленое удовольствие",
    img: "img/fruits/qiwi.png",
    price: "200 руб.",
  },
];

const Cards = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards__header">
          <h1 className="cards__header-title">Все фрукты</h1>
          <div className="cards__header-search">
            <input
              className="cards__header-input"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
        <ul className="cards__list">
          {fruits.map((fruit) => (
            <Card title={fruit.title} img={fruit.img} price={fruit.price} key={fruit.title}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
