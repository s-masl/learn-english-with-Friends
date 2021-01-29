import React from "react";
import styles from "./Settings.module.css";
import VoiceSelectorContainer from "./settingsItems/voiceSelector/VoiceSelectorContainer";


function Settings() {
    return <div className={styles.settingsBox}>
        <div className={styles.title}>Settings</div>
        <div className={styles.settings}>
            <div>
                <div className={styles.voiceHeader}>Voice</div>
                <VoiceSelectorContainer/>
            </div>
        </div>
    </div>
}

export default Settings;
