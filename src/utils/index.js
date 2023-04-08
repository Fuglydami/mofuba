let width;

width = window.innerWidth;

export const inputStyle = {
  border: '1px solid #E2E8F0',
  borderRadius: '12px',
  backgroundColor: 'white',
  color: 'black',
  width: width >= 575 ? '60px' : '45px',
  height: width >= 575 ? '60px' : '45px',
  margin: '0 8px',

  // background: value ? "#FFF1E7" : "transparent",
};

export const containerStyle = {
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 30px',
};
export const focusStyle = {
  outline: '1px solid #008DD0',
};
