import { useState } from "react";
import MyFooter from "./footer";
function CashRegister() {
  const currencyDenominations = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

  const [numberOfNotes, setNumberOfNotes] = useState([]);

  const getValues = () => {
    // fetching values from the dom
    let billAmount = document.querySelector("#billAmount").value;
    let amountPaid = document.querySelector("#amountPaid").value;
    let balanceToBeReturned = amountPaid - billAmount;

    // Validation
    if (Math.sign(balanceToBeReturned) === -1) {
      return alert("Hath me lota, peeta bidi ,🍑 nahi dota");
    } else {
      let arr = [];
      currencyDenominations.forEach((element) => {
        let temp = Math.trunc(balanceToBeReturned / element);
        arr.push(temp);
        balanceToBeReturned -= temp * element;
        if (balanceToBeReturned === 0 && temp !== 0) {
          // alert("Hooray!");
        } else {
          balanceToBeReturned %= element;
        }
      }); //end of forEach
      setNumberOfNotes(arr);
    }
    const table = document.querySelector(".myTable");
    table.classList.remove("hidden");
  };

  return (
    <div className="">
      <h1>Cash Register App</h1>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>
      <div className="inputWrapper">
        <label htmlFor="billAmount">Bill Amount:</label>
        <input type="number" name="billAmount" id="billAmount" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="amountPaid">Amount Paid:</label>
        <input type="number" name="amountPaid" id="amountPaid" />
      </div>
      <button id="calculateBtn" onClick={getValues}>
        Sumbit
      </button>

      <table className="myTable hidden">
        <tbody>
          <tr>
            <th>Notes:</th>
            {numberOfNotes.map((e) => (
              <td>{e}</td>
            ))}
          </tr>
          <tr>
            <th>Denominations:</th>
            {currencyDenominations.map((e) => (
              <td key={e}>{e}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <MyFooter />
    </div>
  );
}

export { CashRegister };
