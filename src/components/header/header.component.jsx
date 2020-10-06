import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import{auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import Carticon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser}from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink} from './header.component.styles';


const Header = ({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoContainer>
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                currentUser?
                < OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                :<OptionLink className="option" to="/signin">SIGN IN</OptionLink>
            }
            <Carticon/>
        </OptionsContainer>
        {hidden?null:<CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,

    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);