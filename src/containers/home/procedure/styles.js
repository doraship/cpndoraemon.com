export default theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 80,
  },
  textCenter: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  textTitle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    paddingBottom: 10,
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
