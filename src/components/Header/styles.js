import { fade } from '@material-ui/core/styles/colorManipulator';

export default theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: '0 2px 2px -2px rgba(0,0,0,.15)',
  },
  content: {
    maxWidth: 1208,
    width: '100%',
    margin: 'auto',
    // padding: 8,
  },
  brand: {
    position: 'relative',
  },
  logo: {
    height: 30,
    marginRight: 8,
  },
  title: {
    fontFamily: '"Helvetica Neue",sans-serif!important',
    letterSpacing: '0!important',
    fontStyle: 'normal!important',
    fontSize: 22,
    fontWeight: 800,
    textAlign: 'center',
    // marginBottom: 10,
    textTransform: 'uppercase',
    // textShadow: '0 1px 2px gray',
    color: theme.palette.primary.main,

    // position: 'absolute',
    // top: 12,
    // left: 85,
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'black',
    width: '90%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: 120,
    //   '&:focus': {
    //     width: 200,
    //   },
    // },
  },
  searchButton: {
    position: 'absolute',
    color: 'black',
    right: 0,
    top: 0,
    // pointerEvents: 'none',
    margin: theme.spacing.unit,
  },
  searchIcon: {
    position: 'absolute',
    fontSize: 22,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.text,
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
})
