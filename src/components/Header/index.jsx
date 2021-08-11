import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
    padding: 10px;
    color: #8186a0;
    padding-left:20px;
    padding-right:20px;
    text-decoration: none;
    font-size: 18px;   
    margin-left:10px;
    ${({$isFullLink} ) =>
        $isFullLink &&
        `color: white; border-radius: 3px; background-color: ${colors.secondary};`}
`
 
function Header() {
    return (
        <nav style={{paddingBottom:"20px",paddingTop:"20px"}}>
            <StyledLink  to="/" $isFullLink = {true}>Accueil</StyledLink>
            <StyledLink  to="/survey/2" $isFullLink = {false}>Questionnaire</StyledLink>
            <StyledLink  to="/freelances" $isFullLink = {false}>Freelances</StyledLink>
        </nav>
    )
}

export default Header