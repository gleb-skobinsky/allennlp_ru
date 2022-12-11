export function DropdownItem(model, setModel, key) {
  console.log(model);
  return <a className="dropdown-item">{model.model.model_name}</a>;
}

export default DropdownItem;
