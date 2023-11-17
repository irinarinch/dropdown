export const DropdownItem = (props) => {
  const { list } = props;
 
  const items = [];
  const item = list.map(item => 
    <li key={item}>
      <a className="item" href="#">{item}</a>
    </li>
  );

  items.push(item);

  return items;
}
