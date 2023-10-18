import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { BsArrowUpShort } from "react-icons/bs";
const ScrollArrowButton = () => {
  const [ShowTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const handleclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box display="flex" justifyContent="flex-end">
      {ShowTopBtn && (
        <Box
          style={{
            width: "100%",
            maxWidth: "60px",
            borderRadius: "4px",
            position: "fixed",
            bottom: "66px",
            right: "3px",
            zIndex: "11111",
          }}
        >
          <Button onClick={handleclick}>
            <BsArrowUpShort
              style={{
                color: "#fff",
                fontSize: "40px",
              }}
            />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ScrollArrowButton;
