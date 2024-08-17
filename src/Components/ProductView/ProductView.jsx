import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import {Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import ReorderIcon from "@mui/icons-material/Reorder";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ProductView({ changeView }) {
  const [view, setView] = React.useState("grid");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  function handleGrid() {
    changeView("grid");
  }

  function handleList() {
    changeView("list");
  }

  return (
    <>
      {/* <Tooltip
          title="Grid View"
          disableInteractive
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <IconButton onClick={handleGrid}>
            <GridViewRoundedIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip
          title="List View"
          disableInteractive
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <IconButton onClick={handleList}>
            <ReorderIcon />
          </IconButton>
        </Tooltip> */}

      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChange}
        sx={{ height: "40px" }}
      >
        <ToggleButton sx={{ width: "40px" }} value="grid" aria-label="list">
          <Tooltip
            title="Grid View"
            disableInteractive
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <GridViewRoundedIcon onClick={handleGrid} />
          </Tooltip>
        </ToggleButton>

        <ToggleButton sx={{ width: "40px" }} value="list" aria-label="module">
          <Tooltip
            title="List View"
            disableInteractive
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <ReorderIcon onClick={handleList} />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
