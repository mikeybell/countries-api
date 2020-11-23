import React, { useState } from 'react';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const useFilterRegion = () => {
  const [region, setRegion] = useState<string>('All');

  const FilterRegion = () => {
    return (
      <select
        value={region}
        onChange={e => setRegion(e.target.value)}
        onBlur={e => setRegion(e.target.value)}
        disabled={!regions.length}
      >
        {regions.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    )
  };

  return [region, FilterRegion];
}