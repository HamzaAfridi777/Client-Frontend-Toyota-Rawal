import React,{useState} from 'react';
import ContactUs from '../../layouts/partials/ContactUs';
import Footer from '../../layouts/partials/footer';
import Header from '../../layouts/partials/header';

const Accessories = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
       setExpandedIndex(index === expandedIndex ? null : index);
     };
  return (
    <div>
    <Header/>
    <section className="accessoriesSection">
       <div className="container">
          <div className="row">
             <div className="col-md-3">
                <div className="accessories-aside">
                   <h6>Search Product</h6>

                   <form>
                      <div className="access-feild">
                         <input type="text" placeholder="Keyword"/>
                         <button><i className="fas fa-search"></i></button>
                      </div>
                   </form>


                   <h6>product category</h6>

                   <ul className="accessories-product-navBar">
                      <li><a href="#">Toyota Accessories</a> <span><i className="fas fa-sort-down"
                      onClick={() => toggleExpand(0)} style={{ cursor: "pointer" }}
                      ></i></span>

                         <ul className="accessories-product-itms-navBar"
                         style={{ display: expandedIndex === 0 ? "block" : "none" }}
                         >
                            <li><a href="#">Floor Mats</a> </li>

                            <li>
                               <a href="#">Perfumes</a> <span><i className="fas fa-sort-down"
                               onClick={() => toggleExpand(0)} style={{ cursor: "pointer" }}
                               ></i></span>
                               
                               <ol className="accessories-product-itms-sub-navBar"
                               style={{ display: expandedIndex === 0 ? "block" : "none" }}
                               >
                                  <li><a href="#">Herman Chair</a></li>

                                  <li><a href="#">Wishbone Chair</a></li>

                                  <li><a href="#">J107 Chair</a></li>

                                  <li><a href="#">Wishbone Chair</a></li>
                                  <li><a href="#">J107 Chair</a></li>
                               </ol>
                            </li>

                            <li><a href="#">Alloys</a> </li>
                            <li><a href="#">Tyres </a> </li>
                            <li><a href="#">Body Kit</a> </li>
                            <li><a href="#">Air Press</a> </li>
                            <li><a href="#">Seat Cover</a> </li>
                            <li><a href="#">Emblem</a> </li>
                            <li><a href="#">Sun Shade</a> </li>
                         </ul>
                      </li>

                      <li><a href="#">Spare Parts</a></li>
                      <li><a href="#">Lubricants</a></li>
                      <li><a href="#">Chemicals</a></li>
                   </ul>

                   
                </div>
             </div>

             
          </div>
       </div>   
    </section>
<ContactUs/>
<Footer/>
    </div>
  );
}

export default Accessories;
