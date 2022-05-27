// Import Global Style
import StyledHero from "styled-components";

/**
 * Membuat Global Style.
 * Global Style: CSS Reset, Font.
 * Pindahkan isi index.css ke GlobalStyle
 */
const HeroStyle = StyledHero.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
    /* Small Screen */
    margin: 5rem auto;
    padding: 1rem;
    section{
        display: flex;
        flex-direction: column;
        text-align: center;
        div{
            margin-bottom: 1rem;
            h2{
                color: #4361ee;
                margin-bottom: 1rem;
                font-size: 2.44rem;
            }
            h3{
                color: #b5179e;
                margin-bottom: 1rem;
                font-size: 1.59rem;
            }
            p{
                color: #64748b;
                margin-bottom: 1rem;
            }
        }
        div{
            img{
                max-width: 100%;
                height: auto;
                border-radius: 25px;
            }
        }
    }
    
    /* Medium Screen */
    @media (min-width: 768px) {
    /*
    * Nothing TODO Here.
    * We dont change style Hero. 
    */
    }
    
    /* Large Screen */
    @media (min-width: 992px) {
    
    max-width: 1200px;
        section{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            div{
                flex-basis: 40%;
            }
            div{
                flex-basis: 60%;
            }
        }
    }
`;

export default HeroStyle;
