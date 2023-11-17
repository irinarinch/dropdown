import { DropdownList } from "./DropdownList";
import { useState } from "react";

export const Dropdown = (props) => {
  const { list } = props;
  const [state, setState] = useState('open');

  const toggleOpen = (e) => {
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
