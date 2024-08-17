import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch} from "react-redux";
import { setProductsBwPriceRange } from "../../Store/actions/forPriceRange";
import { store } from '../../Store/store';

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceRange({products,setProductsBwRange}) {
  const [range, setRange] = React.useState([0, 200000]);
  const dispatch = useDispatch();
//   const newProducts = useSelector((state)=>{return state.priceRangeReducer})

  const handleChange = (event) => {
    setRange(event.target.value);
    dispatch(setProductsBwPriceRange(products,range));

    const currentstate= store.getState();
    const newProducts=currentstate.priceRangeReducer;
    setProductsBwRange(newProducts);
  };  

  return (
    <>
      
      <Box sx={{ width: 200, display:'flex',flexDirection:'column', alignItems:'center' }}>
      <span style={{color:'gray'}}>Price - Range </span>
        <Slider
          getAriaLabel={() => "Temperature range"}
          max={200000}
          size='small'
          value={range}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{color:'gray'}}
        />
      </Box>
    </>
  );
}
