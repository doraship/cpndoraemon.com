export default theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    maxWidth: 1208,
    width: '100%',
    margin: 'auto',
  },
});

export const navLinkStyles = theme => ({
  label: {
    color: 'white',
    fontWeight: 400,
  },
  root: {
    borderRadius: 0,
  },
});
