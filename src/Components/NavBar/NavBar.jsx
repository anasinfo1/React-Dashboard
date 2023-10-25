import Filter from '@mui/icons-material/ArrowDropDownSharp';
import './NavBar.css';


const NavBar = () => {
  return (
    <section className='NavBar'>
              <div className="date">
                  <a href="#Today">Today</a>
                  <a href="#Week">Last Week</a>
                  <a href="#Month">Last Month</a>
              </div>

              <div className="filters">
                      <button className='filter'>
                        Filter 
                        <Filter/>
                      </button>
                      <button className='clear'>
                        Clear
                      </button>
              </div>
            </section>
  )
}

export default NavBar