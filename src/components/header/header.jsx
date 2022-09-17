import React, { memo } from "react";
import { useRef } from "react";
import styles from "./header.module.css";
const Header = memo(({ onSearch, goHome }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = null;
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleHome = () => {
    inputRef.current.value = null;
    console.log(inputRef.current.value);
    goHome();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={handleHome}>
        <img className={styles.logo_icon} src="images/logo.png" alt="" />
        <div className={styles.logo_name}>Youtube</div>
      </div>
      <form className={styles.search} action="" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search.."
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} onClick={onClick}>
          <img className={styles.search_icon} src="images/search.png" alt="" />
        </button>
      </form>
    </header>
  );
});

export default React.memo(Header);
