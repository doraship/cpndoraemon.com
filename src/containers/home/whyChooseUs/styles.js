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
  },
  textReasonTitle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    paddingBottom: 5,
    fontSize: 16,
  },
  reasonWrapper: {
    marginTop: 30,
  },
  reasonRoot: {
    border: 'solid 1px ' + theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    height: '100%',
    flexGrow: 1,
  },
  reasonContent: {
    padding: 15,
  }
});
