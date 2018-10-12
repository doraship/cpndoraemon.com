export default theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 40,
    paddingBottom: 60,
    [theme.breakpoints.down('md')]: {
      padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  wrapperTextField: {
    position: 'relative',
  },
  buttonTextField: {
    position: 'absolute',
    right: 0,
    top: 16,
    color: 'white',
    maxWidth: 150,
    width: '100%',
    padding: 18,
  },
  title: {
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  buttonName: {
    color: 'white',
    fontWeight: 600,
  },
  buttonDescription: {
    color: 'white',
  },
  wrapperButtons: {
    marginTop: 8,
  },
  hotline: {
    border: 'solid 1px blue',
    height: '100%',
  },
  wrapperFunction: {
    marginTop: 40,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  linkButton: {
    textDecoration: 'none',
  },
})
