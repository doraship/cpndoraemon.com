import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const CardText = (props) => {

  const { classes, title, content, icon } = props;

  return (
    <Card classes={{
      root: classes.root,
    }}>
      <div className={classes.iconContainer}>
        <div className={classes.iconWrapper}>
          <Icon className={classes.icon}>{icon}</Icon>
        </div>
      </div>
      <CardContent>
        <Typography variant={'subheading'} className={classes.textTitle} color={'primary'}>
          {title}
        </Typography>
        <Typography component={'p'} color={'textPrimary'}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CardText);
