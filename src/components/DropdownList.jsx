import { DropdownItem } from "./DropdownItem";
import PropTypes from 'prop-types';

export const DropdownList = (props) => {
  const { list } = props;
  let activeItem;

  const activate = (e) => {  
    document.querySelectorAll('li').forEach(li => {
      li.style.color = 'inherit';
    });
     
    activeItem = e.target.closest('li');
    activeItem.style.color = '#5380F7';
  }

  return (    
    <ul className="dropdown" onClick={activate}>
      <DropdownItem list={list} />
    </ul>
  );
}

DropdownList.propTypes = {
  list: PropTypes.array  
};