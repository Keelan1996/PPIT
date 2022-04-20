import styles from "../styles/Add.module.css";

// button on the main page to add product
const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Game
    </div>
  );
};

export default AddButton;