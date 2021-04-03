import React ,{useState} from 'react';
import DropDown from './Dropdown';

const options = [
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'ar'
    }
];
const Translate = () => {
    const [language,setLanguage] = useState(options[0]);
    return(
        <div>
            <DropDown selectedChange={language} onSelectedChange={setLanguage} options={options}/>
        </div>
    )
};

export default Translate;