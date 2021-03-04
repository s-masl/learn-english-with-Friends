import React from "react";
import {Link} from "react-router-dom";
import {slide as Menu} from "react-burger-menu";
import {IconContext} from "react-icons";
import {GoBook, GoListUnordered, GoGraph, GoGear} from "react-icons/go";
import Button from "@material-ui/core/Button";
import styles from "./Sidebar.module.css";
import "./Sidebar.css"


class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu() {
        this.setState({menuOpen: false})
    }

    render() {
        return <Menu isOpen={this.state.menuOpen}
                     onStateChange={(state) => this.handleStateChange(state)}>
            <IconContext.Provider value={{color: "#b8b7ad", size: "2vw"}}>
                <div className={styles.footer}>
                    <Button onClick={() => {
                        this.closeMenu()
                    }}>
                        <Link to="/" className={styles.footerItems}>
                            <GoBook/>
                            <div className={styles.linkInfo}>Learn</div>
                        </Link>
                    </Button>

                    <Button onClick={() => {
                        this.closeMenu()
                    }}>
                        <Link to="/select/seasons" className={styles.footerItems}>
                            <GoListUnordered/>
                            <div className={styles.linkInfo}>Select</div>
                        </Link>
                    </Button>

                    <Button onClick={() => {
                        this.closeMenu()
                    }}>
                        <Link to="/statistics" className={styles.footerItems}>
                            <GoGraph/>
                            <div className={styles.linkInfo}>Statistics</div>
                        </Link>
                    </Button>

                    <Button onClick={() => {
                        this.closeMenu()
                    }}>
                        <Link to="/settings" className={styles.footerItems}>
                            <GoGear/>
                            <div className={styles.linkInfo}>Settings</div>
                        </Link>
                    </Button>
                </div>
            </IconContext.Provider>
        </Menu>
    }
}

export default Sidebar;
