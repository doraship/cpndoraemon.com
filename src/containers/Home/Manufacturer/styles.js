export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 60,
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
  textWhiteTitle: {
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  textCenter: {
    textAlign: 'center',
    paddingBottom: 40,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 20,
    },
  },
  logoWrapper: {
    backgroundColor: '#f1f3f4',
    height: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 60,
    },
  },
  manufacturerWrapper: {
    width: '100%',
  },
});
