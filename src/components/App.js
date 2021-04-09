import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate'

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a ffavourite js library amount engineers"
    },
    {
        title: "How do you use React?",
        content: "We use React by using components"
    }
];

const options = [
    {
        label: "Label of color Red",
        value: 'red'
    },
    {
        label: "Label of color Green",
        value: 'green'
    },
    {
        label: "Label of color Blue",
        value: 'blue'
    }
];

const showAccordion = () => {
    if(window.location.pathname  === '/'){
        return <Accordion items={items}  />
    }
};

const showList = () => {
    if(window.location.pathname  === '/list'){
        return <Search />
    }
};

const showDropdown = () => {
    if(window.location.pathname  === '/dropdown'){
        return <Dropdown options={options} />
    }
};

const showTranslate = () => {
    if(window.location.pathname  === '/translate'){
        return <Translate />
    }
};

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    )
};