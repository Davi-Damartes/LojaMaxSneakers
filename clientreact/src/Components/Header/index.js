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
                 
            <nav>
                <ul className={styles.navlinks}>
                    <li className={styles.li}>
                        <a href="/">Nike</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/">Adidas</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/">Jordan</a>
                    </li>

                </ul>
            </nav>  

            <div className={styles.iconButtons}>
                <Button className={styles.botaoIcones} aria-label="search" >
                    <SearchIcon />
                </Button>
                <Button className={styles.botaoIcones} aria-label="search" >
                    <FavoriteBorderIcon />
                </Button>
                <Button className={styles.botaoIcones} aria-label="search" >
                    <ShoppingCartOutlinedIcon />
                </Button>
            </div>
        </header>

    );
}

export default Header;