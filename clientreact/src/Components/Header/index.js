import { Button } from "@mui/material";
import styles from "./Header.module.css"
import logo from "../../LogoNike/Nike.jpg"
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <header className={styles.header}>
            
            <a href="/"><img className={styles.image} alt="logo" src={logo} /></a>             
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
                    <li className={styles.li}>
                        <a href="/">Puma</a>
                    </li>
                    
                </ul>
            </nav>  

            <div className={styles.Icones}>
                <Button className={styles.botaoIcones} aria-label="search" >
                    <SearchIcon className={styles.icones}  />
                </Button>
                <Button className={styles.botaoIcones} aria-label="search" >
                    <FavoriteBorderIcon className={styles.icones} />
                </Button>
                <Button className={styles.botaoIcones} aria-label="search" >
                    <ShoppingCartOutlinedIcon className={styles.icones} />
                </Button>
            </div>
        </header>

    );
}

export default Header;