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
  },
  textTitle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    color: 'white',
  },
  procedureWrapper: {
    marginTop: 20,
  },
  procedureCard: {
    [theme.breakpoints.down('md')]: {
      marginBottom: 15,
    }
  }
});
