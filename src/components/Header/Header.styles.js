import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  logo: {
    // height: '5rem',
    // width: '5rem',
  },
  logoBox: {
    padding: '0.75rem',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.palette.grey[800],

    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },

    '&:not(:last-child)': {
      marginRight: '3rem',
    },
  },
  nav_checkbox: {
    display: 'none',
  },
  nav_button: {
    backgroundColor: theme.palette.common.white,
    zIndex: 2000,
    cursor: 'pointer',
  },
}));

/*

&__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-grey-dark-3;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }


  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }

  &__checkbox {
    display: none;
  }

  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;

    @include respond(tab-port) {
      top: 4rem;
      right: 4rem;
    }

    @include respond(phone) {
      top: 3rem;
      right: 3rem;
    }
  }

  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient($color-primary-light, $color-primary-dark);
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    @include respond(tab-port) {
      top: 4.5rem;
      right: 4.5rem;
    }

    @include respond(phone) {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

          <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Natous</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benfits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book now</a></li>
                    </ul>
            </nav>
        </div>
*/
