enum Responsive {
  mobile = '425px',
  tablet = '768px',
  desktop = '1366px',
  desktop_sm = '1050px',
}
const Device = {
  mobile: `(max-width: ${Responsive.mobile})`,
  tablet: `(max-width: ${Responsive.tablet})`,
  desktop: `(max-width: ${Responsive.desktop})`,
  desktop_sm: `(max-width: ${Responsive.desktop_sm})`,
};
export const zIndexes = {
  sideBar: 200,
  sideBarOpen: 202,
  loaderOverlay: 1000,
  footer: 100,
  header: 101,
  main: 102,
  modalWindow: 300,
};

const constants = { Responsive, Device };
export default constants;
