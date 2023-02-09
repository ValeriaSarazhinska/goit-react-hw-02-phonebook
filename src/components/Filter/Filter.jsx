export function Filter({ value, onFilterChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onFilterChange}
      name="filter"
      placeholder="Filter"
    />
  );
}
