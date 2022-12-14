import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
    return (
         <div className="contact">
            <div className="contactwrapper">
                <div className='beintouch'><h1>BEINTOUCHWITHUS</h1></div>
                <div className='joinus'> <input type="text" placeholder='Enter your email' /> <button>Joinus</button></div>
                <div className='socials'>
                    <FacebookOutlinedIcon className='facebook'/>
                    <TwitterIcon/>
                    <InstagramIcon />
                    <WhatsAppIcon/>

                </div>
                 </div>
             </div>
          );
}
 
export default Contact;