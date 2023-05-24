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
    .spa{
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #753d21;
        color: #fff;
        border-radius: 100%;
        font-size: 14px;
        font-weight: 900;
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
  border-bottom-rightt-radius: 0;
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
