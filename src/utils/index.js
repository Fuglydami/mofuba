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
export const toastData = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};
export const tableStyles = {
  rows: {
    style: {
      minHeight: '60px', // override the row height
      fontWeight: '600',
      fontSize: '16px',
    },
  },
  title: {
    style: {
      fontWeight: '700',
      fontSize: '16px',
    },
  },
  headCells: {
    style: {
      minHeight: '51px', // override the row height
      color: '#718096',
      fontWeight: '800',
      fontSize: '16px',
    },
  },
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
