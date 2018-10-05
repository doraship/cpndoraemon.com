export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f1f3f4',
  },
  content: {
    maxWidth: 1208,
    width: '100%',
    margin: 'auto',
    paddingTop: 60,
    paddingBottom: 30,
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.black,
      display: 'inline',
      fontSize: 14,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 10,
      paddingBottom: 15,
      paddingTop: 30,
    },
  },
  copyright: {
    paddingTop: 20,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 10,
    },
  },
  vdivider: {
    marginLeft: 15,
    marginRight: 15,
    display: 'inline',
    fontSize: 18,
  },
  information: {
    marginLeft: 40,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  link: {
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
  infomationWrapper: {
    marginBottom: 40,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
  addressWrapper: {
    borderLeft: 'solid 2px gray',
    paddingLeft: 8,
    marginTop: 4,
  }
});
