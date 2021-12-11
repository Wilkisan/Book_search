import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Categories() {
    const [drMenu, setDrMenu] = useState(false);
    const toggle = () => setDrMenu(!drMenu);
    
    const [activeType, setactiveType] = useState(0);
    const [subject, setSubject] = useState('');


    const sections = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];


    const onSelectSection = (index) => {
        setSubject(index);
    }

    return (
        <div>
            <ButtonDropdown isOpen={drMenu} toggle={toggle}>
                <DropdownToggle color="primary" caret size="lg">
                    Категории
                </DropdownToggle>
                <DropdownMenu>
                    {sections.map((section, index) => 
                    <DropdownItem 
                        key={section}
                        onClick={() => setactiveType(index)} 
                        className={activeType === index ? 'active' : '' }>
                        {section}
                    </DropdownItem> )}
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    )
}

export default Categories;
