export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#405189'
      : state.isFocused
      ? '#abb9e8'
      : 'white', // Selected option background color
    color: state.isSelected ? 'white' : 'black',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'white',
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 3,
  }),
};
