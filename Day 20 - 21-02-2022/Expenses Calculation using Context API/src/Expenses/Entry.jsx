import { useContext } from "react";
import { ExpenseContext } from "../ExpenseContext";

const Entry = (props) => {
  const { handleDelete } = useContext(ExpenseContext);
  return (
    <div>
      <li className="list-group-item list-group-item-action">
        {props.entry.description}
        <button
          className="btn-close float-end"
          onClick={() => {
            props.handleDelete(props.entry.id);
          }}
        ></button>
        <span className="float-end">${props.entry.amount}</span>
      </li>
    </div>
  );
};
export default Entry;
