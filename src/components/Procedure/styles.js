export default theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 80,
    [theme.breakpoints.down('md')]: {
      padding: 20,
      paddingBottom: 60,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
      paddingTop: 20,
    },
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
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  procedureCard: {

  },
});
