import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ENTER THE WORLD OF GAMING</h1>
      <p className={styles.desc}>
       We provide some of the best quality video games on the market.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) =>(
          <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;