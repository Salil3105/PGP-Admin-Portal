import React from 'react';
import '../components/Template.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import UnfoldmoreIcon from '@material-ui/icons/UnfoldMore';
import uuid from 'react-uuid';
import {useHistory} from 'react-router-dom';

// import {Link} from 'react-router-dom';

function Template() {

        const history = useHistory();
        const createForm = ()=>{
            console.log('Inside the Create Survey function');
            const id_ = uuid();
            console.log(id_);
            history.push("/form/"+ id_);
        }

        const history1 = useHistory();
        const dailySurvey = ()=>{
            console.log('Inside the Daily Survey function');
            const id1_= uuid();
            console.log(id1_);
            history1.push("/dailySurvey/"+ id1_);
        }

        const history2 = useHistory();
        const weeklySurvey = ()=>{
            console.log('Inside the Weekly Survey function');
            const id2_= uuid();
            console.log(id2_);
            history2.push("/weeklySurvey/"+ id2_);
        }

        const history3 = useHistory();
        const monthlySurvey = ()=>{
            console.log('Inside the Monthly Survey');
            const id3_ = uuid();
            console.log(id3_);
            history3.push("/monthlySurvey/"+ id3_);
        }

    return(
        // Top Section 
        <div className='template-section'>
            <div className='template_top'>
                <div className='template-left'>
                    <span style={{fontSize:'16px',color:'#202124'}}><b>Start a new form</b></span>
                </div>

                <div className='template-right'>
                    <div className='gallery_button'>
                        <b>Template Gallery</b>
                        <UnfoldmoreIcon />
                        <IconButton>
                            <MoreVertIcon fontSize='small'/>
                        </IconButton>
                    </div>
                </div>

            </div>

         {/* Body Section */}
            <div className='template_body'>

                <div className='card' onClick={createForm} >
                    <img className='card_image' src='https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png' alt='No image'/>
                    <p className='card_title'>Blank</p>
                </div>

                <div className='card' onClick={dailySurvey}>
                    <img className='card_image' src='https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400.png' alt='No image'/>
                    <p className='card_title'>Daily Survey</p>
                </div> 

                <div className='card' onClick={weeklySurvey} >
                    <img className='card_image' src='https://ssl.gstatic.com/docs/templates/thumbnails/1pM0fD5FWTXCGw4h0g1WSP8Nj3mS56l1EaCZAec-p2uc_400.png' alt='No image'/>
                    <p className='card_title'>Weekly Survey</p>
                </div>

                <div className='card' onClick={monthlySurvey} >
                    <img className='card_image' src='https://ssl.gstatic.com/docs/templates/thumbnails/1pM0fD5FWTXCGw4h0g1WSP8Nj3mS56l1EaCZAec-p2uc_400.png' alt='No image'/>
                    <p className='card_title'>Monthly Survey</p>
                </div>

            </div>
        </div>
    )
}

export default Template;