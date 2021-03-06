import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHitten} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo> 
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                SHOP
            </Link>
            <Link className='options' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
                 SIGN OUT
            </div>
             ) : (
            <Link className='option' to='/signin'>
                 SIGN IN
             </Link>
      )}
      <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden :selectCartHitten
  });
  
export default connect(mapStateToProps)(Header);