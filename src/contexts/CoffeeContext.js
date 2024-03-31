import { createContext, useState, useEffect } from "react";
import { CoffeeDetails } from "../ProductsData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoffeeContext = createContext({});

const getCoffeesFromStorage = () => {
  const selectedCoffees = localStorage.getItem("selectedCoffees");
  const parsedCoffees = selectedCoffees
    ? JSON.parse(selectedCoffees)
    : selectedCoffees;
  return Array.isArray(parsedCoffees) ? parsedCoffees : [];
};

export const CoffeeProvider = ({ children }) => {
  const [addedCoffee, setAddedCoffee] = useState(getCoffeesFromStorage());
  const [searchValue, setSearchValue] = useState("");

  // function to handle search input
  const handleSearchChange = (val) => {
    setSearchValue(val);
  };

  // function to add coffee to cart page
  const addToCart = (coffee) => {
    const exist = addedCoffee.find((x) => x.id === coffee.id);
    if (exist) {
      setAddedCoffee(
        addedCoffee.map((x) =>
          x.id === coffee.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      toast.warning("Product already added!", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      setAddedCoffee([...addedCoffee, { ...coffee, qty: 1 }]);
      toast.success("Product Added successfully!", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedCoffees", JSON.stringify(addedCoffee));
  }, [addedCoffee]);


  // function to remove item from cart
  const removeFromCart = (coffeeId) => {
    const exist = addedCoffee.find((x) => x.id === coffeeId);
    if (exist.qty === 1) {
      setAddedCoffee(addedCoffee.filter((x) => x.id !== coffeeId));
    } else {
      setAddedCoffee(
        addedCoffee.map((x) =>
          x.id === coffeeId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <CoffeeContext.Provider
      value={{
        addedCoffee,
        addToCart,
        removeFromCart,
        CoffeeDetails,
        handleSearchChange,
        searchValue
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
