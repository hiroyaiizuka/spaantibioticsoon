import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Qsofa from './Qsofa';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';


class CapSevererity extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      open2: false,
      open3: false,
      value: 0 
  　}
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleClickOpen2 = () => {
    this.setState({ open2: true });
  };
  handleClickOpen3 = () => {
    this.setState({ open3: true});
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };
  handleClose3 = () => {
    this.setState({ open3: false });
  };


　
  render() {
    const array = ['A: 年齢　　男性 ≧ 70歳、女性 ≧ 75歳', 'D: 脱水　　BUN ≧ 21　or　脱水あり', 'R: 呼吸　　SpO2 ≦ 90%', ' O: 意識　　意識障害あり', 'P: 血圧　　sBP ≦ 90mmHg']
    const arraysofa = ['sBP ≦ 100mmHg', '呼吸数 ≧ 22回/分', '意識状態の変化']
    const arrayatypical = [' 1) 年齢　< 60 歳', '2) 基礎疾患がない、あるいは軽微', '3) 頑固な咳がある', ' 4) 聴診所見に乏しい', '5) 痰(-) or 迅速診断法で原因菌が証明されない', ' 6) 白血球数 < 10000/μl']
    
    return (
      <div >
           <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'relative', top: 10
            }}>

              <Button size = "large" color="primary" label = "40"component = {Link} to = "/captreat" >
                      治療へ
              </Button>
            </div>
         
          <div style={{
                backgroundColor: '#E10050',
                width: 150,
                margin: "auto",
                marginTop: 60,
                borderRadius: 1,
                borderColor: "black",
                boxShadow: "1px 0px 2px 0px #000",
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 0.5},
            }}>
            <Typography onClick={this.handleClickOpen} style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>A-DROP</Typography>
          </div>

                
      

             <Dialog
                 open={this.state.open}
                 onClose={this.handleClose}
                 aria-labelledby="scroll-dialog-title"
                 >
                 <DialogTitle id="scroll-dialog-title"></DialogTitle>
                 <DialogContent>
                     <DialogContentText style={{ fontWeight: 'bold'}}>1-2 項目: </DialogContentText>
                     <DialogContentText style = {{marginBottom: 25}}>中等症</DialogContentText>
                     <DialogContentText style={{ fontWeight: 'bold' }}>３項目以上:</DialogContentText>
                     <DialogContentText >重症 </DialogContentText>
                  
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={this.handleClose} color="primary"  >
                     Cancel
                     </Button>
                 </DialogActions>
             </Dialog>

          <Card style = {{ maxWidth: 500, margin: "auto", marginTop: 30}}>
                <CardContent>
                  {array.map((a, index) =><Qsofa name = {a} key ={index} />)}
                </CardContent>
          </Card>

          <div style={{
                backgroundColor: '#E10050',
                width: 150,
                margin: "auto",
                marginTop: 80,
                borderRadius: 1,
                borderColor: "black",
                boxShadow: "1px 0px 2px 0px #000",
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 0.5},
            }}>
            <Typography  onClick={this.handleClickOpen2} style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>q SOFA</Typography>
          </div>
          <Card style = {{ maxWidth: 500, margin: "auto", marginTop: 30}}>
            <CardContent>
               { arraysofa.map( (a, index) => <Qsofa  name = {a} key = {index}/>)}
            </CardContent>
          </Card>


            <Dialog
                 open={this.state.open2}
                 onClose={this.handleClose2}
                 aria-labelledby="scroll-dialog-title2"
                 >
                 <DialogTitle id="scroll-dialog-title2"></DialogTitle>
                 <DialogContent>
                     <DialogContentText style={{ fontWeight: 'bold' }}>３項目以上:</DialogContentText>
                     <DialogContentText >敗血症疑い </DialogContentText>
                     <DialogContentText style = {{marginTop: 25, color: 'red'}}>ADROP ≧３項目　qSOFA ≧２項目<br/>➡︎ 超重症 (ICU 検討)</DialogContentText>
                  
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={this.handleClose2} color="primary"  >
                     Cancel
                     </Button>
                 </DialogActions>
            </Dialog>

          <div style={{
                backgroundColor: '#E10050',
                width: 170,
                margin: "auto",
                marginTop: 80,
                borderRadius: 1,
                borderColor: "black",
                boxShadow: "1px 0px 2px 0px #000",
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 0.5},
            }}>
            <Typography  onClick={this.handleClickOpen3} style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>非定形肺炎との鑑別</Typography>
          </div>
          <Card style = {{ maxWidth: 500, margin: "auto", marginTop: 30, marginBottom: 30}}>
                <CardContent>
                  {arrayatypical.map((a, index) => <Qsofa name = {a} key = {index}/>)}
                </CardContent>
          </Card>
        
             <Dialog
                 open={this.state.open3}
                 onClose={this.handleClose3}
                 aria-labelledby="scroll-dialog-title3"
                 >
                 <DialogTitle id="scroll-dialog-title3"></DialogTitle>
                 <DialogContent>
                     <DialogContentText style={{ fontWeight: 'bold'}}>1 〜 6 のうち:</DialogContentText>
                     <DialogContentText style = {{marginBottom: 25}}>4項目以上で、非定型肺炎疑い<br/>(感度78%、特異度93%)</DialogContentText>
                     <DialogContentText style={{ fontWeight: 'bold' }}>1 〜 5 のうち:</DialogContentText>
                     <DialogContentText >3項目以上で、非定型肺炎疑い<br/>(感度84%、特異度87%)</DialogContentText>
                  
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={this.handleClose3} color="primary"  >
                     Cancel
                     </Button>
                 </DialogActions>
             </Dialog>
        </div>
       )
  }
}

export default CapSevererity;