import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import styles from "./Header.module.css"
import logo from "../../Icons/Nike.jpg"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} />

            <div class={styles.line} />     
                <Typography className={styles.titulos} gutterBottom>Nike</Typography>
                <Typography className={styles.titulos} gutterBottom>Adidas</Typography>
                <Typography className={styles.titulos} gutterBottom>Jordan</Typography>
         
            <div class={styles.line} />
                <Button class={styles.botaoIcone} aria-label="search" color="primary">
                    <SearchIcon class={styles.Icones}  />
                </Button>
            <div class={styles.line} />
                <Button class={styles.botaoIcone} aria-label="search" color="primary">
                    <FavoriteBorderIcon class={styles.Icones}  />
                </Button>
            <div class={styles.line} />
                <Button class={styles.botaoIcone} aria-label="search" color="primary">
                    <ShoppingCartOutlinedIcon class={styles.Icones} />
                </Button>
            <div class={styles.line} />
        </header>

    );
}

export default Header;