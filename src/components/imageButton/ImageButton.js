import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

function ButtonBases(props) {
  const { classes, image, children } = props;

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: image.width || '100%',
        }}>
          <span
            className={classes.imageSrc}
            style={image.url ? {
              backgroundImage: `url(${image.url})`,
            } : {
              backgroundColor: image.color || 'white',
            }}
          />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          {
            children ?
                children
               :
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title || ''}
                {/*<span className={classes.imageMarked} />*/}
              </Typography>
          }
          </span>
      </ButtonBase>
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default withStyles(styles)(ButtonBases);
