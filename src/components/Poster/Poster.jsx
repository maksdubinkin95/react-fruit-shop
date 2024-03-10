import "./Poster.scss"

const Poster = () => {
  
  return (
    <section className="poster">
        <div className="container">
          <h1 className="poster__title" >Закажите свежие фрукты</h1>
          <p className="poster__description" >С доставкой на дом</p>
          <div className="poster__image">
            <img src="img/fruitRainbow.png" alt=""/>
          </div>
        </div>
      </section>
  );
};

export default Poster;
