export default theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    borderRadius: 0,
    overflow: 'visible',
    marginTop: 30,
  },
  textTitle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    paddingBottom: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    top: -30,
    left: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 100,
  },
  icon: {
    color: 'white',
  },
});
