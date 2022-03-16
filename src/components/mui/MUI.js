import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Box, Grid, Button, ButtonGroup,Checkbox, Radio, Slider, Select, MenuItem, TextField, Switch } from '@material-ui/core';
import {Delete, Favorite, FavoriteBorder} from '@material-ui/icons';
import BasicTable from './BasicTable';

const ulStyle = {
    fontSize: '15px',
    color: 'blue',
    fontFamily: "Sofia"
};
const greenColor = {
    color: 'green',
};
const tabsArray = [
    {index: 0, data: ['React js', 'Angular js', 'Vue js', 'Next js']},
    {index: 1, data: ['Node js', 'ROR', 'Python', 'JAVA']},
    {index: 2, data: ['HTML, CSS', 'PHP', 'Bootstrap', 'Reactstrap']},
    {index: 3, data: ['Jest', 'Enzyme', 'Testing Library', 'Jasmine']},
];
export const MUI = () => {
    const [color, setcolor] = useState('primary');
    const [radio, setRadio] = useState('female');
    const [val, setVal] = useState([40, 80]);
    const [select, setSelect] = useState(10);
    const [tab, setTab] = useState(0);
    const mark = [{value: 10, label: 'start'}, {value: 180, label: 'end'}];

  const handleClick = () => {
      setcolor('secodary');
  }
 
  const handleCheckbox = (ev) => {
      console.log('Val  ', ev.target.value);
  }

  const handleRadio = (ev) => {
      setRadio(ev.target.value);
  }

  const setRange = (ev, value) => {
      setVal(value);
  }

  const handleSelect = (ev) => {
      console.log(ev.target.value);
      setSelect(ev.target.value);
  }

  const getInput = (ev) => {
      console.warn(ev.target.value);
  }

  const handleSwitch = (ev, val) => {
      console.log(val);
  }

  const handleTab = (ev, val) => {
      console.log(val);
    setTab(val);
  }

  return (
    <div style={{marginLeft: '30px'}}>

        <AppBar position='static'>
            <Tabs value={tab} onChange={handleTab}>
                <Tab label="Frontend"/>
                <Tab label="Backend"/>
                <Tab label="UI"/>
                <Tab label="Testing"/>
            </Tabs>
        </AppBar>
        {
            tabsArray.map((item) => {
                return (
                    <TabPanel value={tab} index={item.index}>
                        {
                            item.data.map((list) => {
                                return (
                                    <ul style={ulStyle }>
                                        <li>{list}</li>
                                    </ul>
                                )
                            })
                        }
                    </TabPanel>
                )
            })
        }
        {/* <TabPanel value={tab} index={0}>
            <ul style={ulStyle }>
                <li>React js</li>
                <li>Angular js</li>
                <li>Vue js</li>
                <li>Next js</li>
            </ul>
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <ul style={ulStyle}>
                <li>Node js</li>
                <li>ROR</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </TabPanel>
        <TabPanel value={tab} index={2}>
            <ul style={ulStyle}>
                <li>HTML, CSS</li>
                <li>PHP</li>
                <li>Bootstrap</li>
                <li>Reactstrap</li>
            </ul>
        </TabPanel>
        <TabPanel value={tab} index={3}>
            <ul style={ulStyle}>
                <li>Jest</li>
                <li>Enzyme</li>
                <li>Testing Library</li>
                <li>Jasmine</li>
            </ul>
        </TabPanel> */}
        <br /> 

        <span style={greenColor}>Table</span>
        <BasicTable />
        <br /> 

        <span style={greenColor}>Checkbox(Normal and heart shape)</span>
        <div style={{border: '2px solid green', width: '50px'}}>
            <Checkbox checkedIcon={<Favorite/>} icon={<FavoriteBorder/>} value="anil" color='primary' onChange={handleCheckbox}/>
            <Checkbox value="anil" color='primary' onChange={handleCheckbox}/>
        </div><br />
        
        <span style={greenColor}>Button with icon</span>
        <div>
            <Button startIcon={<Delete />} color={color} variant="contained" size="small" onClick={handleClick}>
                Click
            </Button>
        </div><br />
       
        <span style={greenColor}>Button Groups</span>
        <div>
           <ButtonGroup aria-label="contained primary button group" orientation='vertical' variant='outlined' color="primary">
               <Button>
                    One
                </Button>
                <Button>
                    Two
                </Button>
                <Button>
                    Three
                </Button>
            </ButtonGroup>
       </div><br />
        
       <span style={greenColor}>Radio buttons(Gender)</span>
        <div>
            <Radio color="primary" checked={radio === 'male'} value="male" onChange={handleRadio}/>
            <span>Male</span>
        </div>
        
        <div>
            <Radio color="primary" checked={radio === 'female'} value="female" onChange={handleRadio}/>
            <span>Female</span>
        </div>
        
        <div>
            <Radio color="primary" checked={radio === 'other'} value="other" onChange={handleRadio}/>
            <span>other</span>
        </div><br />

        <div style={{width: '50%'}}>
            <span style={greenColor}>Slider</span>
            <Slider valueLabelDisplay='auto' marks={mark} step={50} defaultValue={70} color='secondary' max={200}/>
        </div><br />

        <div style={{width: '50%'}}>
            <span style={greenColor}>Slider with Range</span>
            <Slider value={val} onChange={setRange} color='secondary' max={250}/>
        </div><br />

        <div>
            <span style={greenColor}>Select Box</span>
            <Select value={select} displayEmpty onChange={handleSelect}>
                <MenuItem value="10">Node js</MenuItem>
                <MenuItem value="20">React js</MenuItem>
                <MenuItem value="30">React ts</MenuItem>
                <MenuItem value="40">Next js</MenuItem>
                <MenuItem value="50">Vue js</MenuItem>
            </Select>
        </div><br />

        <div>
            <span style={greenColor}>TextField</span>
            <TextField onChange={getInput} type="text" label="Enter Name" color="secondary" variant="outlined" />
        </div><br />

        <div>
            <span style={greenColor}>Switch</span>
            <Switch color='primary' size="small" onChange={handleSwitch}/>
        </div><br />

        <div>
            <span style={greenColor}>Box (just like a wrapper and  easy to give margin, padding it)</span>
            <Box style={{color: 'red'}} ml={20} clone>
                <Button>Box Button</Button>
            </Box>
        </div><br />

        <span style={greenColor}>Grid</span>
        <Grid item lg={12} container spacing={2}>
            <Grid item lg={3}>
                <h1 style={{backgroundColor: 'pink'}}>Block 1</h1>
            </Grid>
            <Grid item lg={3}>
                <h1 style={{backgroundColor: 'pink'}}>Block 2px</h1>
            </Grid>
            <Grid item lg={3}>
                <h1 style={{backgroundColor: 'pink'}}>Block 3</h1>
            </Grid>
            <Grid item lg={3}>
                <h1 style={{backgroundColor: 'pink'}}>Block 4cpx</h1>
            </Grid>
        </Grid>
        <br />
    </div>
  )
}

const TabPanel = (props) => {
    const {children, value, index} = props;
    return (
        <div>
            {
                value === index && <h1>{children}</h1>
            }
            
        </div>
    )
}