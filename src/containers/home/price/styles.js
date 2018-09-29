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
  },
  textWhiteTitle: {
    color: 'white',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  textWhite: {
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
    paddingBottom: 30,
  },
  cardWrapper: {
    marginTop: 10,
  },
  card: {
    width: '100%',
  },
  media: {
    height: 60,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});
