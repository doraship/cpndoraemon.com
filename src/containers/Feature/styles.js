export default theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingTop: 0,
    paddingBottom: 60,
    [theme.breakpoints.down('md')]: {
      padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  title: {
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  description: {
    color: 'white',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0 !important',
      paddingBottom: '5px !important',
    },
  },
});
