import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { play } from './../../pages/redux/actions/cources_act';

export default function Video ({vdetails}) {
    // console.log(vdetails);
    let icon;
    if(vdetails.is_Preview){
        icon = (<i className="fa fa-play"></i>)
        
    }
    else{
        icon = (<i className="fa fa-lock"></i>)
    }

    const v_link_data = useSelector(state => state.course.cliked)
    const dispatch = useDispatch();
    const clickedLink = (e) => {
        let clicked_link = e.target.getAttribute('url');
        dispatch({
            type:"PLAY_VIDEO",
            value:{clickedLink},
        });
        console.log("clicked component ", clicked_link);
        }
    

    return (
        <li>
            {icon}
            <span>
                <a onClick={clickedLink}><p url={vdetails.Video_URL}>{vdetails.Video_Title}</p></a>
            <span>1m 24s</span></span>
        </li>
    )
}