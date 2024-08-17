import React from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function SliderImg({ product }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const images = [...product.images];
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 190,
                        display: "block",
                        //   maxWidth: 400,
                        overflow: "hidden",
                        // boxShadow: "0px 0px 5px gray",
                      }}
                      src={step}
                    />
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Box>
    </>
  );
}
