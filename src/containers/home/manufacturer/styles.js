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
  },
  textWhiteTitle: {
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  textCenter: {
    textAlign: 'center',
    paddingBottom: 60,
  },
  logoWrapper: {
    backgroundColor: '#f1f3f4',
    height: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
