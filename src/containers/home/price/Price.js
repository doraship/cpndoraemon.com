import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Price extends Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.content}>
          <div className={classes.textCenter}>
            <Typography variant={'title'} className={classes.textWhiteTitle}>
              Bảng giá vận chuyển
            </Typography>
          </div>
          <Grid container spacing={32} justify={'center'} className={classes.cardWrapper}>
            <Grid item xs={2} md={4}>
              <Card className={classes.card}>
                <CardActionArea className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                      Nội thành Hà Nội
                    </Typography>
                    <div className={classes.textAlignCenter}>
                      <Typography gutterBottom variant="headline" component="h2">
                        GIAO HÀNG TIẾT KIỆM
                      </Typography>
                      <Typography variant="title" color={'secondary'} component="h3">
                        20.000 VNĐ
                      </Typography>
                    </div>
                    {/*<Typography component="p">*/}
                    {/*Chiết khấu từ 5% đến 10℅ trên tháng.*/}
                    {/*</Typography>*/}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Tạo đơn hàng
                  </Button>
                  <Button size="small" color="primary">
                    Tìm hiểu thêm
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={2} md={4}>
              <Card className={classes.card}>
                <CardActionArea className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                      Nội thành Hà Nội
                    </Typography>
                    <div className={classes.textAlignCenter}>
                      <Typography gutterBottom variant="headline" component="h2">
                        GIAO HÀNG NHANH
                      </Typography>
                      <Typography variant="title" color={'secondary'} component="h3">
                        30.000 VNĐ
                      </Typography>
                    </div>
                    {/*<Typography component="p">*/}
                    {/*Chiết khấu từ 5% đến 10℅ trên tháng.*/}
                    {/*</Typography>*/}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Tạo đơn hàng
                  </Button>
                  <Button size="small" color="primary">
                    Tìm hiểu thêm
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Price);
