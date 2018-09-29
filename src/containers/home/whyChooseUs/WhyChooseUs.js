import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const reasons = [
  {
    title: 'Giảm chi phí',
    content: 'CPN Doraemon đã cung cấp dịch vụ vượt trội cho hơn 3000 doanh nghiệp với phương châm UY TÍN TIẾT KIỆM',
    icon: 'description',
    cols: 1,
  },
  {
    title: 'Tiết kiệm thời gian',
    content: 'CPN Doraemon đã cung cấp dịch vụ vượt trội cho hơn 3000 doanh nghiệp với phương châm UY TÍN TIẾT KIỆM',
    icon: 'place',
    cols: 1,
  },
  {
    title: 'Miễn phí thu hộ (COD)',
    content: 'CPN Doraemon đã cung cấp dịch vụ vượt trội cho hơn 3000 doanh nghiệp với phương châm UY TÍN TIẾT KIỆM',
    icon: 'local_shipping',
    cols: 1,
  },
  {
    title: 'Giao hàng trong 2h',
    content: 'CPN Doraemon đã cung cấp dịch vụ vượt trội cho hơn 3000 doanh nghiệp với phương châm UY TÍN TIẾT KIỆM',
    icon: 'payment',
    cols: 1,
  },
  {
    title: 'đảm bảo an toàn nếu có sự cố',
    content: 'CPN Doraemon đã cung cấp dịch vụ vượt trội cho hơn 3000 doanh nghiệp với phương châm UY TÍN TIẾT KIỆM',
    icon: 'payment',
    cols: 1,
  },
  {
    title: 'Tiền CoD được trả nhanh chóng',
    content: 'CPN Doraemon đã cung cấp dịch vụ vượt trội cho hơn 3000 doanh nghiệp với phương châm UY TÍN TIẾT KIỆM',
    icon: 'payment',
    cols: 1,
  },
];

const Reason = (props) => {
  const { title, content, icon, classes } = props;
  return (
    <div className={classes.reasonRoot}>
      <Grid container className={classes.reasonContent}>
        <Grid item xs={2} alignItems={'center'}>
          <Icon color={'primary'} fontSize={'large'}>{icon}</Icon>
        </Grid>
        <Grid item xs={10}>
          <Typography variant={'subheading'} className={classes.textReasonTitle} color={'primary'}>
            {title}
          </Typography>
          <Typography component={'p'} color={'textPrimary'}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const WhyChooseUs = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.textCenter}>
          <Typography variant={'title'} className={classes.textTitle} color={'primary'}>
            Vì sao bạn nên chọn CPN Doraemon
          </Typography>
        </div>
        <div className={classes.reasonWrapper}>
          <Grid container spacing={40}>
            {reasons.map(reason => (
              <Grid item xs={4} alignItems={'center'}>
                <Reason {...reason} classes={classes} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(WhyChooseUs);
