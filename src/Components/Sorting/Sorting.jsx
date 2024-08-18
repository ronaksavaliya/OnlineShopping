import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { useDispatch} from "react-redux";
// import { priceHighToLow, priceLowToHigh } from "../../Store/actions/forSort";

export default function Sorting({productsSort}) {
  const [sort, setSort] = React.useState("");
//   const dispatch = useDispatch();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  function handleSortLow() {
    // dispatch(priceLowToHigh(products));

    productsSort('lowToHigh');
    
  }

  function handleSortHigh() {
    // dispatch(priceHighToLow(products));

    productsSort('highToLow');
  }

  function handleNone(){
    productsSort('none')
  }

  return (
    <>
      <div>
        <FormControl sx={{ m: 0, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label" sx={{position:'relative', top:'16px'}}>Sort</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={sort}
            onChange={handleChange}
            autoWidth
            label="Sort"
            variant="outlined"
            sx={{height:'42px'}}
            
          >
            <MenuItem onClick={handleNone} value="">
              <em>None</em>
            </MenuItem>
            <MenuItem onClick={handleSortLow} value="Price: Low To High">
              Price: Low To High
            </MenuItem>
            <MenuItem onClick={handleSortHigh} value="Price: High To Low">
              Price: High To Low
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
