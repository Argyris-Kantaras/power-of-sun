import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <form>
      <input type="text" placeholder="Search items" />
      <button>Go</button>
    </form>
  );
}

export default Searchbar;
