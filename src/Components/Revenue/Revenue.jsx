import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './Revenue.css';

const Revenue = (props) => {
  return (
    <div className="card">
                    <img src={props.image}/>
                    <div className="infos">
                      <div className="price">
                        <h2>{props.price}</h2>
                        <ArrowDropUpIcon/>
                        <p>{props.level}</p>
                      </div>
                      <p>{props.desc}</p>
                    </div>
     </div>
  )
}

export default Revenue