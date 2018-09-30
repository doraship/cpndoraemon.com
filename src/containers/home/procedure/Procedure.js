import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardText from '../../../components/cardText';

const procedures = [
  {
    title: 'GỬI YÊU CẦU GIAO HÀNG',
    content: 'Đăng nhập vào hệ thống của Giaohangmienbac.com để đặt hàng và kiểm tra tình trạng của đơn hàng',
    icon: 'description',
    id: 0,
  },
  {
    title: 'Nhận hàng tận nơi gửi',
    content: 'Nhân viên của Giaohangmienbac.com sẽ đến tận nơi khách hàng yêu cầu để tiếp nhận và đóng gói hàng hóa',
    icon: 'place',
    id: 1,
  },
  {
    title: 'Giao hàng & Thu hộ',
    content: 'Tiến hành giao và thu hộ tiền hàng giúp khách hàng. Đi kèm dịch vụ hỗ trợ giao lại 1 lần.',
    icon: 'local_shipping',
    id: 2,
  },
  {
    title: 'Chuyển khoản tiền thu hộ',
    content: 'Chúng tôi sẽ chuyển tiền thu hộ vào tài khoản ngân hàng của quý khách đã đăng ký với Giaohangmienbac.com',
    icon: 'payment',
    id: 3,
  },
];

const Procedure = (props) => {

  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <div className={classes.textCenter}>
          <Typography variant={'title'} className={classes.textTitle} color={'primary'}>
            Quy trình vận chuyển
          </Typography>
          <Typography component={'p'} color={'textSecondary'}>
            Bạn có thể hài lòng bởi quy trình giao nhận hàng hóa của chúng tôi rất nhanh chóng
            nhưng vẫn đảm bảo được sự chuyên nghiệp và an toàn cho hàng hóa
          </Typography>
        </div>
        <Grid container spacing={32} justify={'center'} className={classes.procedureWrapper}>
          {
            procedures.map(procedure => (
              <Grid item md xs={6} key={procedure.id} className={classes.procedureCard}>
                <CardText {...procedure} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </section>
  );
};

export default withStyles(styles)(Procedure);
