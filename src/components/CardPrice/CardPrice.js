import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const CardPrice = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      {/*<CardActionArea>*/}
        <CardContent className={classes.cardContent}>
          <Typography className={classes.subTitle} color="textSecondary">
            {props.location || ''}
          </Typography>
          <div className={classes.textAlignCenter}>
            <Typography gutterBottom variant="headline" component="h2">
              {props.name || ''}
            </Typography>
            <Typography variant="title" color={'secondary'} component="h3">
              {props.price || ''}
            </Typography>
          </div>
          {/*<Typography component="p">*/}
          {/*Chiết khấu từ 5% đến 10℅ trên tháng.*/}
          {/*</Typography>*/}
        </CardContent>
      {/*</CardActionArea>*/}
      <CardActions className={classes.center}>
      <Button variant={'outlined'}
              size="small"
              color="primary"
              component={Link}
              to={props.createOrderHref}
      >
      Tạo đơn hàng
      </Button>
      <Button size="small"
              color="primary"
              component={Link}
              to={props.moreInfoHref}>
      Tìm hiểu thêm
      </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(CardPrice);
