import StyleFooter from "styled-components";

const FooterStyle = StyleFooter.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
  /* Small Screen */

  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;
  footer{
    h2{
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 1rem;
    }
  }
  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
  }
`;

export default FooterStyle;
