import styled from "styled-components";

export const Navigation = styled.nav`
    border-bottom: 20px solid #c0886a;
    background: linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%);
    padding: 8px;
    position: fixed;
    width: 100%;

    .wrap{
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .rightnav__side{
        width: 50%;
        // border: 2px solid;
        display flex;
        justify-content: space-between;
    }
    
    .rightnav__side h1{
        color: #753d21;
        background: #fff;
        border-radius: 100%;
        text-decoration: none;
    }

    .search{
        display: flex;
        border-bottom: 3px solid #a9643c;
        width: 60%;
    }

    label {
      display: none;
      font-weight: 900;
      font-size: 3rem;
    }
    input {
      display: none;
    }

    .leftnav__side{
        // border: 2px solid;
        width: 50%;
        display: flex;
        justify-content: end;
       
    }
    .nav-items{
        margin-top: .4rem;
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
    button{
        padding: .7em 2rem;
        color: #fff;
        font-weight: 500;
        background: #753d21;
        border: none;
        border-radius: 1rem 3rem;
        cursor: pointer;
    }
    .shop{
      // border: 2px solid;
      display: flex;
      position: relative;
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
      // height: 30vh;
      margin: 2.5rem 2rem 0 0;
      width: 200px;
      position: absolute;
      right: 0;
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

    .buttonPara{
      color: red;
      margin-top: 10px;
    }

    .btn_btn button{
      width: 100%;
      border-radius: 3rem;
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
        width: 500px;
        margin-top: 70px;
        z-index: 1;
        // background-color: #c0886a;
        background-color: #000;
        opacity: .8;
        color: white;
        border-bottom: 4px solid #c0886a;
        transition: left 0.3s ease-out;
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
       padding: 1.3rem;
       margin: 1.5rem 0;
       font-size: 20px;
       letter-spacing: 2px;
        width: 30%;
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

// products and product card styles
export const ProductsWrapper = styled.section`
  // border: 2px solid;
  background: linear-gradient(90deg, #f0d2bf 57.7%, #c0886a 57.7%);

  h1 {
    text-align: center;
    padding: 5rem 0;
  }

  .card__container {
    // border: 2px solid;
    width: 100%;
    max-width: 1200px;
    margin: auto;
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
  //   border:1px solid red;
  width: 100%;
  max-width: 800px;
  margin: auto;
  color: white;
  padding: 5px;

  h4 {
    font-size: 45px;
    font-weight: 800;
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
      font-size: 35px;
    }

    p {
      margin-top: 7px;
      font-size: 23px;
    }

    .btn > button {
      padding: 15px 20px;
      font-size: 18px;
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
      padding: .8rem;
      font-size: 22px;
      letter-spacing: 3px;
      word-spacing: 5px;
    }
  }
`;

// styling for productdetails page
export const AboutWrapper = styled.div`
  // border: 2px solid black;
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
  // border: 2px solid red;
  width: 100%;
  max-width: 950px;
  margin: auto;
  display: flex;
  // justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  // border: 2px solid black;
  width: 40%;
  height: 80vh;
  border img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }

  @media (max-width: 950px) {
    width: 85%;
    height: 300px;
    margin: auto;
    // border: 2px solid blue;
  }
`;

export const LeftSideContent = styled.div`
  // border: 2px solid blue;
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
    // border: 2px solid green;
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
  position: sticky;
  top: 4rem;

  .menu {
    border: 2px solid #753d21;
    width: 20%;
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
    .menu {
      width: 55%;
      padding: 1.1rem;
      font-size: 21px;
    }
  }
`;
