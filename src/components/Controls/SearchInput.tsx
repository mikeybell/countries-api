import React, { ChangeEvent } from 'react';

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={onChange}
    />
  )
}