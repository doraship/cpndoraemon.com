export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 80,
    maxWidth: 1208,
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      padding: 20,
      paddingBottom: 40,
      marginTop: 30,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
      paddingBottom: 40,
      marginTop: 30,
    },
  },
  textWhiteTitle: {
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
    marginTop: 10,
  },
  textWhite: {
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  cardWrapper: {
    marginTop: 20,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
});
