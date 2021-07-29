import Form from './Form';
import SynthesisPlot from "./SynthesisPlot";
import styles from './Home.module.css';
import usePlotData from "./usePlotData";

function Home() {
    const mutation = usePlotData();

    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                <h1>Synthesis Analyzer</h1>
            </header>
            <Form mutation={mutation} />
            <SynthesisPlot mutation={mutation} />
        </div>
    );
}

export default Home;