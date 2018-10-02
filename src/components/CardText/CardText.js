import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Hidden from '@material-ui/core/Hidden';

const CardText = (props) => {

  const { classes, name, description, icon } = props;

  return (
    <Card classes={{
      root: classes.root,
    }}>
      <Hidden xsDown>
        <div className={classes.iconContainer}>
          <div className={classes.iconWrapper}>
            <Icon className={classes.icon}>{icon}</Icon>
          </div>
        </div>
      </Hidden>
      <CardContent>
        <Typography variant={'subheading'} className={classes.textTitle} color={'primary'}>
          {name}
        </Typography>
        <Typography component={'p'} color={'textPrimary'}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CardText);
