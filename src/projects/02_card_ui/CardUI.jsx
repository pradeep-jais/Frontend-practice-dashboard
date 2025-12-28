import { cardsData } from './constants';
import Card from './components/Card';
import './styles.css';

const CardUI = () => {
  // console.log(cardsData);

  return (
    <section className="section">
      <h2 className="section-title">cards from local data array</h2>
      <div className="container card-ui-container">
        {cardsData.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};
export default CardUI;
