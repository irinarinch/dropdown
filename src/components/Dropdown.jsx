import { DropdownList } from "./DropdownList";
import { useState } from "react";
import PropTypes from 'prop-types';

export const Dropdown = (props) => {
  const { list } = props;
  const [state, setState] = useState('');

  const toggleOpen = (e) => {
    setState('open');
    e.target.closest('.dropdown-wrapper').classList.toggle(state);    
  }

  return (
    <div className="dropdown-wrapper">
      <button className="btn" onClick={toggleOpen}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button> 
      <DropdownList list={list}/>        
    </div>    
  );
}

Dropdown.propTypes = {
  list: PropTypes.array  
};
