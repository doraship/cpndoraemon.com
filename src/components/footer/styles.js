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
  },
  copyright: {
    paddingTop: 20,
  },
  vdivider: {
    marginLeft: 15,
    marginRight: 15,
    display: 'inline',
    fontSize: 18,
  },
  information: {
    marginLeft: 40,
  },
  link: {
    marginTop: 20,
  },
  infomationWrapper: {
    marginBottom: 40,
  },
});
