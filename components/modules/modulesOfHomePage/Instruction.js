import styles from "./Instruction.module.css";

const Instruction = () => {

    return (

        <div className={styles.container}>

            <h2 className={styles.title}>How to Order?</h2>

            <ul className={styles.list}>

                <li>Sign in (or create an account) and set your delivery address.</li>
                <li>Choose the restaurant you want to order from.</li>
                <li>Select your items and tap “Add to Cart”.</li>
                <li>To place your order, select “View cart” or “Checkout”.</li>
                <li>Review your order and tap “Place Order”...</li>
                <li>Track your order progress.</li>

            </ul>

        </div>
    );
};

export default Instruction;