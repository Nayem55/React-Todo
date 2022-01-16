
const date = new Date();
const dateName =date.getDate();
const monthName =date.getMonth();
const currentYear =date.getFullYear();

function Card(props){
  return  <div className="card">
          <h3 className="cardTitle">{props.titleText}</h3>
          <p className="cardDesc">{props.titleDesc}</p>
          <p className="cardfooter">{dateName + "/" + monthName + "/" + currentYear} </p>
          </div>
}

export default Card;