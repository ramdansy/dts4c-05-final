import React from "react";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { View, Image } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'left',
//   color: theme.palette.text.secondary,
// }));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function HomePage() {
  return (
    <>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#FFF', color: '#000' }}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            paddingLeft={3}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NEWS PORTAL
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
     <Grid container spacing={0} padding = {1} paddingRight = {4}>
      <Grid item xs={8} paddingLeft = {4}>
      <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            HOT TOPIK
          </Typography>
      <img src={require('./gambar1.png')} style={{width:"100%", height:"100%px", borderRadius:"10px"}}/>
      </Grid>
      <Grid item xs={4} paddingRight = {4} paddingLeft = {2} paddingTop={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris odio, elementum id est eu, ultricies hendrerit erat. Aliquam erat volutpat. Duis nisi enim, varius sed orci at, iaculis luctus nisl. Morbi lacus tortor, convallis sit amet nisi vitae, ornare laoreet diam. Read More...
      </Grid>
      <Grid item xs={3} paddingLeft={4} paddingTop={2}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="1"
        height="140"
        image="./gambar1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3} paddingLeft={4} paddingTop={2}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="1"
        height="140"
        image="./gambar1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3} paddingLeft={4} paddingTop={2}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="1"
        height="140"
        image="./gambar1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3} paddingLeft={4} paddingTop={2}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        alt="1"
        height="140"
        image="./gambar1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>

    </Box>

     
    </>
  );
}
