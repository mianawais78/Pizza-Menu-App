import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu></Menu>
      <Footer />
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* using ternarity operator */}
      {pizzas.length > 0 ? (
        <>
          <p>
            The Pizza House in town, we have italian spenish garlic chinese
            everything you guys want.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return (
                <Pizza
                  name={pizza.name}
                  photoName={pizza.photoName}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  soldOut={pizza.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : null}
    </main>
  );
}
function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt="#"></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  console.log(hour);
  var isOpen = hour >= openHour && hour <= closeHour;
  isOpen = 1;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to Welcome you between {openHour} to {closeHour}
        </p>
      )}
      {/* {new Date().toLocaleDateString()}. We're currently open! */}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We are open util {closeHour}:0:0. Come Visit us or Order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
