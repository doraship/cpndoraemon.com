export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 40,
    maxWidth: 1208,
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: 20,
      paddingBottom: 20,
      marginTop: 20,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
      paddingBottom: 20,
      paddingTop: 20,
    },
  },
  textTitle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'white',
  },
  linkButton: {
    textDecoration: 'none',
  },
  boxWhite1px: {
    border: 'solid 1px white',
    padding: 15,
  },
});
