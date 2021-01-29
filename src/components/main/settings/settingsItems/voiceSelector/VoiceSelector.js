import Select from "react-select";


function VoiceSelector(props) {
    const options = [
        {value: 5, label: 'Google US Female'},
        {value: 6, label: 'Google UK Female'},
        {value: 7, label: 'Google UK Male'},
        {value: 1, label: 'Microsoft US Male'},
        {value: 2, label: 'Microsoft US Female'},
        {value: 3, label: 'Microsoft UK Male'},
    ]

    const theme = theme => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: 'lightgray',
            primary: 'darkslategray',
        },
    })

    const customStyles = {
        option: (styles) => ({
            ...styles,
            ':active': {
                ...styles[':active'],
                backgroundColor: "lightgray"
            }
        })
    }

    const onChange = (newValue) => props.setCurrentVoice(newValue);
    return <Select theme={theme}
                   styles={customStyles}
                   value={props.currentVoice}
                   onChange={onChange}
                   options={options}/>
}

export default VoiceSelector