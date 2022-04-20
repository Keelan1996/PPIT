import Footer from "./Footer"
import Navbar from "./Navbar"

// gives layout to pages, with the navbar and footer components present
const Layout = ({children}) => {
        return(
         
         <>
             <Navbar/>
             {children}
             <Footer/>
         </>
       

    );

};

export default Layout