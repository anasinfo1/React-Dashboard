import './App.css'

import LeftMenu from './Components/LeftMenu/LeftMenu'
import TopInfo from './Components/TopInfo/TopInfo'
import NavBar from './Components/NavBar/NavBar'
import Money from './assets/images/money.png'
import Transaction from './assets/images/transaction.png'
import Product from './assets/images/product.png'
import Revenue from './Components/Revenue/Revenue'
import Customer from './assets/images/customer.png'
import RevenuChart from './Components/RevenuChart/RevenuChart'
import SalesChart from './Components/SalesChart/SalesChart'



function App() {
  

  return (
    <>
    <div className="container">
        <LeftMenu/>

        <div className="mainsections">
           <TopInfo/>
           <NavBar/>
           <div className="revenu">
               
               <Revenue image={Money} price="$513" level="12%" desc="Total Revenue"/>
               <Revenue image={Transaction} price="321" level="09%" desc="Total Transaction"/>
               <Revenue image={Product} price="564" level="13%" desc="Total Products"/>
               <Revenue image={Customer} price="254" level="04%" desc="Total Customer"/>

           </div>

           <div className="charts">
              <RevenuChart/>
              <SalesChart/>
           </div>
        </div>
        
    
    
    </div>
     
    </>
  )
}

export default App
