import {Switch, Route} from "react-router-dom";
import StatisticsContainer from "./components/main/statistics/Statistics.container";
import SettingsContainer from "./components/main/settings/SettingsContainer";
import SeasonsContainer from "./components/main/select/seasons/Seasons.container";
import EpisodesContainer from "./components/main/select/episodes/Episodes.container";
import LearnContainer from "./components/main/learn/LearnContainer";
import Sidebar from "./components/sidebar/Sidebar";
import styles from "./App.module.css";


function App() {
    return <div className={styles.app}>
        <Sidebar/>
        <main className={styles.main}>
            <Switch>
                <Route exact path="/" component={LearnContainer}/>
                <Route exact path="/select/seasons" component={SeasonsContainer}/>
                <Route exact path="/select/seasons/episodes" component={EpisodesContainer}/>
                <Route exact path="/statistics" component={StatisticsContainer}/>
                <Route exact path="/settings" component={SettingsContainer}/>
            </Switch>
        </main>
    </div>
}

export default App;
