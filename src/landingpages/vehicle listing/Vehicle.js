import React from 'react'
import { Vehicle1 } from './style'
import Navbar from '../../component/navbar/Index'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Index from '../footer/Index'
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from 'react-router-dom';
function valuetext(value) {
    return `${value}°C`;
}

const Vehicle = () => {
    const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
    const menuitem = [
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car.svg", image5: './image/profile-2user.svg', name: "swift", petrol: "90L", price: "4000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car2.svg", image5: './image/profile-2user.svg', name: "Wagon-R", petrol: "80L", price: "3500/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car3.svg", image5: './image/profile-2user.svg', name: "Rolls-Royce", petrol: "70L", price: "3000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car4.svg", image5: './image/profile-2user.svg', name: "NissanGT-R", petrol: "80L", price: "3000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car.svg", image5: './image/profile-2user.svg', name: "swift", petrol: "90L", price: "4000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car2.svg", image5: './image/profile-2user.svg', name: "Wagon-R", petrol: "80L", price: "3500/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car3.svg", image5: './image/profile-2user.svg', name: "Rolls-Royce", petrol: "70L", price: "3000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car4.svg", image5: './image/profile-2user.svg', name: "NissanGT-R", petrol: "80L", price: "3000/" },
        { Images: './image/Like.svg', Image3: './image/car5.svg', Image4: "./image/gas-station.svg", Image2: "./image/car4.svg", image5: './image/profile-2user.svg', name: "NissanGT-R", petrol: "80L", price: "3000/" },


    ];
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const Vehcile1 = useNavigate();
      const Vehcile4 = (state) => {
        Vehcile1('/Vehicle3', { state })
     };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <Vehicle1 style={{ backgroundColor: "#F6F7F9", width: "" }}>

                <div  className='flex-1'>
                    <div style={{ width: "20%", marginInline: "2%" ,marginTop:"2%",marginBottom:"8%"}}>
                        <div style={{ marginInline: "" }}>
                            <label className='make-1'>
                                Make
                            </label>
                            <div>
                                <select name="select Maker" className='select-maker'>
                                    <option value="apple">Select Maker</option>
                                    <option value="apple">Audi</option>
                                    <option value="banana">Civic</option>
                                    <option value="orange">Grandee</option>
                                </select>
                            </div>

                        </div>
                        <div style={{ marginInline: "", marginTop: "9%" }}>
                            <label className='make-1'>
                                Model
                            </label>
                            <div>
                                <select name="select Maker" className='select-maker'>
                                    <option value="apple">Select Model</option>
                                    <option value="apple">2020</option>
                                    <option value="banana">2021</option>
                                    <option value="orange">2022</option>
                                </select>
                            </div>

                        </div>
                        <div className='price-1'>
                            <p className='price-2'>Price Range per Day (pkr)
                            </p>
                            <div className='price-3'>
                                <p className='para_1'>2,500</p>
                                <p className='para_1'>15000</p>
                            </div>
                            <div style={{ marginTop: "-4%" }}>
                                <Box sx={{ width: 290 }} >
                                    <Slider className='main-slider'
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </div>
                            <div className='range-1'>
                                <p>Minimum range 50,000 Rs</p>
                                <p>Maximium range 500M Rs</p>
                            </div>
                            <div style={{ marginInline: "", marginTop: "9%" }}>
                                <label className='make-1'>
                                    Registration City
                                </label>
                                <div>
                                    <select name="select Maker" className='select-maker'>
                                        <option value="apple">All</option>
                                        <option value="apple">Lahore</option>
                                        <option value="banana">Karachi</option>
                                        <option value="orange">DGK</option>
                                    </select>
                                </div>

                            </div>
                            <div style={{ marginInline: "", marginTop: "9%" }}>
                                <label className='make-1'>
                                    Car Document
                                </label>
                                <div>
                                    <select name="select Maker" className='select-maker'>
                                        <option value="apple">All</option>
                                        <option value="apple">Lahore</option>
                                        <option value="banana">Karachi</option>
                                        <option value="orange">DGK</option>
                                    </select>
                                </div>

                            </div>
                            <div style={{ marginInline: "", marginTop: "9%" }}>
                                <label className='make-1'>
                                    Transmission
                                </label>
                                <div>
                                    <select name="select Maker" className='select-maker'>
                                        <option value="apple">All</option>
                                        <option value="apple">Lahore</option>
                                        <option value="banana">Karachi</option>
                                        <option value="orange">DGK</option>
                                    </select>
                                </div>

                            </div>
                            <div style={{ marginInline: "", marginTop: "9%" }}>
                                <label className='make-1'>
                                    Condition
                                </label>
                            </div>
                            <div style={{ marginTop: "2%" }}>
                                <button className='btn-1'>New</button>
                                <button className='btn-2'>Used</button>
                            </div>
                            <div style={{ marginInline: "", marginTop: "9%" }}>
                                <label className='make-1'>
                                    Fuel
                                </label>
                            </div>
                            <div style={{ marginTop: "2%" }}>
                                <button className='btn-1'>Petrol</button>
                                <button className='btn-3'>Diesel</button>
                                <button className='btn-1'>LPG</button>
                                <button className='btn-3'>CNG</button>
                                <button className='btn-3'>Electric</button>
                                <br />
                                <button className='btn-4'>Hybrid</button>
                            </div>
                            <div>
                                <button className='main-button'>Apply</button>
                            </div>

                        </div>

                    </div>
                    <div style={{ width: "80%" }}>
                    <div style={{ display: "flex", gap: "12px",flexWrap:"wrap",width:"100%",marginTop:"5%" }}>
                            {menuitem.map((item) => (
                                <div className='main-card'>
                                    <div className='card--9'>
                                        <p className='swift' >{item.name} <br /> <span style={{ color: "#90A3BF", fontSize: "13px" }}>Sport</span> </p>
                                        <img src={item.Images} style={{ height: "41%", marginTop: "8%" }} />

                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={item.Image2} />
                                    </div>
                                    <div className='card--10'>
                                        <div className='gasoline'>
                                            <img src={item.Image3} />
                                            <p className='color'>{item.petrol}</p>
                                        </div>
                                        <div className='gasoline'>
                                            <img src={item.Image4} />
                                            <p className='color'>Manual</p>
                                        </div>
                                        <div className='gasoline'>
                                            <img src={item.image5} />
                                            <p className='color'>4 People</p>
                                        </div>

                                    </div>


                                    <div className="pakistani">
                                        <p className='pkr'>pkr. <span className='price-2'>{item.price} <span className='day-1'>day</span></span></p>
                                        <button className='btn2'  onClick={() => Vehcile4()}>Rent Now</button>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                        <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
                        </div>
                    </div>
                </div>

            </Vehicle1>
            <div>
                <Index />
            </div>
        </>
    )
}

export default Vehicle
