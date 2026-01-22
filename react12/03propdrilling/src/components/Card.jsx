import { Bookmark } from 'lucide-react';
import '../App.css';

const Card = (props) => {
  return (
    <div className='container'>
      <div className="top">
        <img src={props.img} alt="" />
        <button>save <Bookmark size={10} /></button>
      </div>

      <div className="middle">
        <p className='cmp-name'>{props.name}<span>{props.dateposted}</span></p>
        <p className='role'>{props.role}</p>
        <button>{props.tag1}</button>
        <button>{props.tag2}</button>
      </div>

      <div className="bottom">
        <div className="left">
          <p className='pay'>{props.pay}</p>
          <p className='place'>{props.place}</p>
        </div>
        <div className="right">
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
