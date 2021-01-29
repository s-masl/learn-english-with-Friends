const SET_CURRENT_VOICE = "SET_CURRENT_VOICE";


const initialSettings = {
    currentVoice: {value: 5, label: 'Google US Female'}
}


const settings = (settings = initialSettings, action) => {
    switch (action.type) {
        case SET_CURRENT_VOICE:
            return {
                ...settings,
                currentVoice: action.newVoice
            }
        default:
            return settings
    }
}

export const setCurrentVoiceAC = (newVoice) => ({type: SET_CURRENT_VOICE, newVoice});

export default settings;