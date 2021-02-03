import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import styles from "./Seasons.module.css";


class Seasons extends React.Component {

    setSeason(n) {
        this.props.setCurrentSeason(n)
    }

    render() {
        let seasons = Array.from({length: 9}, (v, k) => k + 2).map((i) => {
            return <div key={i} className={styles.season}>

                <Button disabled={true} onClick={() => this.setSeason(i)}> Season {i}</Button>

            </div>
        })
        return <div className={styles.list}>
            <div className={styles.season}>
                <Link to="/select/seasons/episodes">
                    <Button disabled={false} onClick={() => this.setSeason(1)}> Season {1}</Button>
                </Link>
            </div>
            {seasons}
        </div>
    }
}

export default Seasons;
