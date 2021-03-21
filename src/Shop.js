import React from 'react'
import Footer from './Footer'
import Container from '@material-ui/core/Container';
import Navbar from './Navbar'




const Shop = () => {
    return(
        <>
       <div>
          <Navbar />
            <Container>
                <h3>Welcome from About page</h3>
            </Container>
           <Footer />
       </div>
       </>
    );
}
export default Shop;
  