import React, { ChangeEvent } from "react";
import styles from "./styles/searchInput.module.css";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onChange }: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};
