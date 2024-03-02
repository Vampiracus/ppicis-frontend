import styles from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.loader__outer}>
            <div className={styles.loader}>
                <p>☕</p>
                <div>ж</div>
                <div>д</div>
                <div>ё</div>
                <div>м</div>
                <div> </div>
                <div>о</div>
                <div>т</div>
                <div>в</div>
                <div>е</div>
                <div>т</div>
                <div>а</div>
                <div> </div>
                <div>о</div>
                <div>т</div>
                <div> </div>
                <div>с</div>
                <div>е</div>
                <div>р</div>
                <div>в</div>
                <div>е</div>
                <div>р</div>
                <div>а</div>
            </div>
        </div>
    );
};

export default Loader;