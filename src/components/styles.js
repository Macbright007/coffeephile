import styled from "styled-components";

export const Navigation = styled.nav`   
    border-bottom: 20px solid #c0886a;
    background: linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%);
    padding: 8px;
    position: fixed;
    width: 100%;
    z-index: 1;

    .wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .rightnav__side{
        width: 50%;
        // border: 2px solid;
        display flex;
        justify-content: space-between;
    }
    
    // .rightnav__side h1{
    //     color: #753d21;
    //     background: #fff;
    //     border-radius: 100%;
    //     text-decoration: none;
    // }

    .search{
        display: flex;
        border-bottom: 3px solid #a9643c;
        width: 60%;
        // cursor: pointer;
    }

    label {
      display: none;
      font-weight: 900;
      font-size: 2rem;
    }
    .menu_icon {
      display: none;
    }

    .leftnav__side{
        // border: 2px solid;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: end;
        transition: left 8s ease-out;
    }

    .nav-items a{
        padding-right: 6rem;
        color: #a9643c;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
    }
    .nav-items a:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    button, .btn_btn>a{
        padding: .7em 2rem;
        color: #fff;
        font-weight: 500;
        background: #753d21;
        border: none;
        border-radius: 1rem 3rem;
        cursor: pointer;
    }
    .shop{
      display: flex;
      float: left;
    }
    .shop_icon{
      color: #753d21;
      font-size: 25px;
      margin-top: 7px;
      margin-left: 1em;
      cursor: pointer;
    }
    .spa{
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #753d21;
        color: #fff;
        border-radius: 100%;
        font-size: 10px;
        font-weight: 900;
        cursor: pointer;
    }
    .menu{
      display: none;
      border: 3px outset #753d21;
      top: 2.8rem;
      // margin: 2.5rem 2rem 0 0;
      width: 200px;
      position: absolute;
      right: 1rem;
      background-color: #f9f9f9;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      padding: 1rem;
    }
    
    .shop:hover .menu{
      display: block;
    }

    .empty-cart {
      text-align: center;
      padding-bottom: .5rem; 
    }
  
    .img-fluid {
      width: 80%;
    }
  
    .empty-cart h3{
      color: #753d21;
      font-size: 18px;
      text-transform: capitalize;
      margin: 1rem 0;
    }
    .empty-cart p {
      color: grey;
      font-size: 15px;
      margin-bottom: 1rem;
    }

    .checkOut{
      // border: 2px solid;
      margin: 1rem 0; 
      display: flex;
      justify-content: space-between;
    }
    .checkOut>p{
      font-size: 18px;
    }
    .checkOut h3{
      margin-top: 3px;
      font-size: 15px;
    }

    .menuFooter{
      display: flex;
      justify-content: space-between;
    }
    .buttonPara{
      color: red;
      margin-top: 10px;
      cursor: pointer;
    }
    .menuFooter a{
      color: #753d21;
      font-weight: 900;
      text-decoration: none;
    }

    .btn_btn{
      width: 170px;
      margin: auto;
    }

    .btn_btn>a{
      text-align: center;
      display: block;
      // width: 100%;
      border-radius: 3rem;
      text-decoration: none;
    }

    @media (max-width: 648px) {
      .rightnav__side h1{
        font-size: 2rem;
        margin-top: .9rem;
      }
      .search {
        // border: 2px solid;
        width: 50%;
        display: none; 
      }
      
      .leftnav__side {
        display: none;
        // width: 100%;
        height: 30vh;
        padding: 20px;
        position: absolute;
        top: 20px;
        right: -250px;
        // left: -250px;
        width: 300px;
        margin-top: 70px;
        z-index: 1;
        // background-color: #c0886a;
        background-color: #000;
        opacity: .8;
        color: white;
        border-bottom: 4px solid #c0886a;
       
      }
        
      label {
        display: block;
        cursor: pointer;
        color: #753d21;
        margin-right: 30px;
        transition: transform 0.3s ease;
      }

      .nav-items{
        display: flex;
        flex-direction: column;
      }
      .nav-items a{
        color: white;
        font-size: 22px;
        padding-top: 2rem;
        text-align: center;
        border-bottom: 4px solid #c0886a;
      }

      .nav-items a:hover {
        background-color: white;
        color: #00474b;
        cursor: pointer;
      }
    
      button{
       padding: 1rem;
       margin: 1.5rem 0;
       font-size: 20px;
       letter-spacing: 2px;
        width: 4  0%;
      }
      .shop{
        position: absolute; 
        top: 11.4rem;
        right: 3rem;
      }
      .shop_icon{
        color: white;
        font-size: 42px;
      }
      .spa{
        background-color: white;
        color: #753d21;
        height: 30px;
        width: 30px;
        font-size: 15px;
      }
     #toggle:checked + .leftnav__side {
        display: block;
        right: 0;
        // left: 0;
      }
      #toggle:checked + label {
        transform: translateX(250px);
      }
    }
`;

// styling for cart dropdown
export const CartWrapper = styled.div`
  border: 2px inset #753d21;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.1em;

  .image__cont {
    border-radius: 100%;
    width: 45px;
    height: 45px;
  }
  .image__cont img {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
  .increValue {
    background: #fff;
    border: 2px groove;
    width: 80%;
    margin: auto;
    display: flex;
  }
  .increValue span {
    color: #753d21;
    cursor: pointer;
    border: 1px solid;
    width: 100%;
    text-align: center;
    font-weight: 800;
  }
  .increValue span:nth-child(odd) {
    background: #753d21;
    color: #fff;
  }

  .content__side h2 {
    color: #753d21;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
  }

  .delIcon {
    color: red;
    font-size: 22px;
    cursor: pointer;
  }
`;

export const SearchContainer = styled.form`
  width: 100%;

  input[type="text"] {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: #a9643c;
    // background: transparent;
  }
  input[type="text"]::placeholder {
    color: #a9643c;
    font-size: 15px;
    padding-left: 0.2rem;
  }
`;

// styling for About page
export const AboutContainer = styled.div`
  border: 2px solid red;
  height: 100vh;
  background: linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%);
  padding-top: 7rem;

  .about-details {
    margin-top: 3rem;
    border: 2px solid;

    max-width: 950px;
    margin: auto;
    display: flex;
    // justify-content: space-between;
  }

  .image__container {
    // width: 50%;
    height: 65vh;
  }

  .image__container img {
    height: 100%;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

// products and product card styles
export const ProductsWrapper = styled.section`
  padding-bottom: 5rem;
  background: linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%);

  h1 {
    font-size: 2rem;
    text-align: center;
    padding: 5rem 0;
  }

  .card__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  // responsive code
  @media (max-width: 648px) {
    .card__container {
      max-width: 648px;
      grid-template-columns: 1fr;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 4rem auto;
  color: white;
  padding: 5px;

  h4 {
    font-size: 3.8rem;
    font-weight: 400;
    text-align: center;
  }

  p {
    font-size: 20px;
    font-weight: 100;
    text-align: center;
  }

  .btn {
    width: 100%;
    max-width: 150px;
    margin: 40px auto;
  }
  .btn > button {
    width: 100%;
    // background: #794e21;
    background: #753d21;
    padding: 10px 16px;
    color: white;
    font-weight: 900;
    border: none;
  }

  @media (max-width: 950px) {
    h4 {
      font-size: 2rem;
    }

    p {
      margin-top: 7px;
      font-size: 18px;
    }

    .btn > button {
      padding: 15px 20px;
      font-size: 14px;
    }

    .btn {
      max-width: 200px;
    }
  }
`;
export const Card = styled.div`
  border-top: 2px solid #753d21;
  border-bottom: 2px solid #753d21;
  border-radius: 25px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 1px 1px 3px 1px #753d21;
  width: 100%;

  .img__container {
    width: 100%;
  }
  .img__container img {
    border-radius: 25px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 100%;
    width: 100%;
    object-fit: fit;
  }

  .content {
    padding: 1rem;
    // border: 2px solid red;
  }
  .content h2 {
    font-size: 15px;
    font-weight: 700;
  }
  .inner__content {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
  }
  .inner__content p {
    font-size: 22px;
    font-weight: 500;
  }

  .inner__content button {
    padding: 0.4rem;
    width: 40%;
    color: #fff;
    font-weight: 500;
    background: #753d21;
    border: none;
    border-radius: 3rem 1rem;
    cursor: pointer;
  }

  // responsive code
  @media (max-width: 648px) {
    width: 85%;
    margin: auto;

    .content h2 {
      font-size: 25px;
    }

    .inner__content p {
      font-size: 23px;
    }

    .inner__content button {
      padding: 0.6rem;
      width: 60%;
      font-size: 18px;
      letter-spacing: 3px;
    }
  }
`;

// styling for productdetails page
export const AboutWrapper = styled.div`
  margin-top: 5rem;

  h3 {
    text-align: center;
    border: 2px solid black;
    width: 10%;
    margin: 5rem auto;
    padding: 8px 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    line-height: 42px;
  }

  @media (max-width: 950px) {
    h3 {
      width: 50%;
      font-size: 25px;
    }
  }
`;
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  margin: auto;
  display: flex;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  height: 80vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }

  @media (max-width: 950px) {
    width: 85%;
    height: 300px;
    margin: auto;
  }
`;

export const LeftSideContent = styled.div`
  width: 40%;
  height: 40vh;
  margin: 3rem 0;

  p {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #333;
  }

  h1 {
    font-weight: 600;
    font-size: 3rem;
    color: #794e21;
    text-align: right;
  }

  .new_p {
    font-weight: 500;
    font-size: 21px;
    color: #a9643c;
    margin: 0.5rem 0 2rem;
  }

  span {
    border: 2px solid #333;
    font-weight: 600;
    font-size: 16px;
    padding: 7px;
    color: #333;
  }

  .inner_content {
    width: 100%;
    margin: 2rem 0px;
    display: flex;
    justify-content: space-between;
  }

  .inner_content h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 27px;
    color: #794e21;
    margin-top: 7px;
  }
  .inner_content > button {
    padding: 0.7em 2rem;
    color: #fff;
    font-weight: 500;
    background: #753d21;
    border: none;
    border-radius: 3rem 1rem;
    text-transform: uppercase;
  }

  @media (max-width: 950px) {
    width: 300px;
    // border: 2px solid blue;
    margin: 30px auto;
    text-align: left;

    p {
      font-size: 20px;
      // color: green;
    }
  }
`;

export const SelectWrapper = styled.div`
  width: 30%;
  position: sticky;
  top: 4rem;

  .menu {
    border: 2px solid #753d21;
    width: 50%;
    padding: 0.5rem;
    margin: 1rem 2rem;
    // background-color: #753d21;
    color: #fff;
    background-color: #c0886a;
    outline: none;
    cursor: pointer;
  }

  select option:hover {
    background-color: red; /* Replace "red" with the desired color */
  }
  option:checked {
    background-color: #753d21;
  }

  // responsive code
  @media (max-width: 648px) {
    width: 100%;
    margin: auto;
    max-width: 350px;

    .menu {
      width: 80%;
      padding: 0.8rem;
      font-size: 18px;
    }
    .menu option {
      font-size: 16px;
    }
  }
`;

// styling for footer
export const FooterWrapper = styled.footer`
  background-color: #f0d2bf;
  border-top: 5px double #753d21;
  padding-top: 2rem;
  // background: linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%);

  .inner__footer__wrapper {
    // border: 2px solid blue;
    color: #753d21;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 14px;
        font-weight: 300;

        span {
          text-transform: uppercase;
          font-weight: 700;
          margin-right: 7px;
        }
      }

      .footer__icon {
        font-size: 1.3rem;
        color: #000;
      }

      form {
        border-bottom: 2px solid #753d21;
        padding: 0.4rem 1rem;
        width: 350px;
        display: flex;
        justify-content: space-between;
        color: #753d21;

        input {
          width: 50%;
          border: none;
          outline: none;

          ::placeholder {
            color: #753d21;
          }
        }

        button {
          text-transform: uppercase;
          padding: 0.2rem 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 7px;
          border: none;
          color: #753d21;
        }
      }
    }

    .middle {
      margin-block: 2rem;

      .inner__body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        p {
          width: 50%;
        }

        .icons {
          width: 200px;
          display: flex;
          gap: 7px;

          span {
            // background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            // border: 1px solid #753d21;
            padding: 0.4rem 0.6rem;
            border-radius: 5px;
            background: #753d21;
            color: #fff;

            :hover {
              background: #753d21;
              cursor: pointer;
              color: #fff;
            }
          }
        }
      }
    }

    .bottom {
      border-top: 2px solid;
      display: flex;
      justify-content: space-between;
      padding-block: 1rem;

      .footerLink {
        display: flex;
        gap: 17px;

        a {
          color: #753d21;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
  }

  @media (max-width: 950px) {
    .top{
      margin-inline: .8rem;
      gap: 20px;
      flex-wrap: wrap;

      h1{
        font-size: 18px!important;
      }
    }

    .middle{
      a>h1{
        margin-inline: .8rem;
      }

    .inner__body{
      gap: 20px;
      flex-wrap: wrap;

      p{
        margin-inline: .8rem;
        width: 100%!important;
        line-height: 1.5rem;
        font-size: 18px;
        text-align: justify;
      }

      .icons{
        margin-inline: .8rem;
      }
    }
  }

  .bottom{
    margin-inline: .8rem;
    // align-items: center;

    .footerLink {
      font-size: 13px;
    }
  }
  }
`;

// styling for cartpage
export const CartPageWrapper = styled.div`
  .cartBoard {
    padding-block: 5rem;
    width: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
  }
  .empty-cart {
    text-align: center;
    padding-block: 5rem;
  }

  .img-fluid {
    width: 30%;
  }

  .empty-cart p {
    margin-bottom: 30px;
  }
  .empty-cart a {
    text-decoration: none;
    background: #794e21;
    padding: 10px;
    color: #fff;
    font-weight: 500;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  .empty-cart a:hover {
    background-color: black;
    color: #fff;
  }
  .total {
    width: 100%;
    max-width: 600px;
    margin: auto;
    flex: 1;
    // border: 2px solid #794e21;

    h1 {
      text-align: center;
      font-size: 1.3rem;
      margin-bottom: 7px;
      text-transform: capitalize;
    }
  }
  .ending {
    display: flex;
    justify-content: space-between;
    background: #e4cfc4;
    color: #000;
    padding: .8rem 1rem;
  }
  .ending p,
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
  .btn__btn {
    margin-top: 2rem;
    background: #c7a17a;
    max-width: 250px;
    margin: 2rem auto;
    border-radius: 7px;
  }

  .btn__btn button {
    width: 100%;
    color: white;
    // background: #794e21;
    padding: 1rem 1.2rem;
    cursor: pointer;
    border: none;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 13px;
    text-transform: uppercase;
  }

  .btn__btn button:hover {
    background-color: #794e21;
    color: white;
    border-radius: 7px;
  }

  @media (max-width: 950px) {
    overflow: hidden;

    .total{
      max-width: 350px;
    }

    .scroll__bar {
      width: 380px;
      overflow: auto;
    }

    .img-fluid {
      width: 50%;
    }
  }
`;

export const CartBody = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
  border: 1px solid #ddd;
  text-align: left;

  th {
    padding: 15px;
    border-bottom: 2px solid #794e21;
  }
  td {
    padding: 15px;
    border-bottom: 2px solid #794e21;
  }
  .del {
    color: red;
    font-size: 30px;
    margin-right: 2.7rem;
    cursor: pointer;
  }

  .left {
    background: red;
    padding: 7px 20px;
    border-radius: 5px;
    color: white;
    margin-right: 1rem;
  }
  .right {
    background: green;
    padding: 7px 20px;
    border-radius: 5px;
    color: white;
    margin-left: 1rem;
  }

  @media (max-width: 950px) {
    .left {
      padding: 4px 16px;
      margin-bottom: 10rem;
    }
    .right {
      padding: 4px 16px;
      margin-top: 10rem;
    }
  }
`;

export const CartImgCont = styled.div`
  // border: 2px solid black;
  width: 80px;
  height: 80px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 950px) {
    width: 80px;
    height: 80px;
  }
`;
