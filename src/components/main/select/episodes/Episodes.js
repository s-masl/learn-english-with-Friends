import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import styles from "./Episodes.module.css";


class Episodes extends React.Component {
    setEpisode(n) {
        this.props.setCurrentEpisode(n)
    }

    render() {
        let episodes = Array.from({length: 23}, (v, k) => k + 2).map((i) => {
            return <div key={i} className={styles.episode}>

                <Button disabled={true} onClick={() => this.setEpisode(i)}> Episode {i}</Button>

            </div>
        });

        return <div className={styles.list}>
            <div className={styles.episode}>
                <Link to="/learn-english-with-friends/learn">
                    <Button disabled={false} onClick={() => this.setEpisode(1)}> Episode {1}</Button>
                </Link>
            </div>
            {episodes}
        </div>
    }
}

export default Episodes;
