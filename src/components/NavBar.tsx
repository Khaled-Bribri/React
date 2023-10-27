import styles from "./NavBar.css";

function NavBar(props) {
  return (
    <>
      <div>
        <button onClick={props.btn.precedent}>précédent</button>
        <button onClick={props.btn.suivant}>suivant</button>
      </div>
    </>
  );
}
export default NavBar;
