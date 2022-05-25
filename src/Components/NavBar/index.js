import { Button } from "../Button";
import { StyledInput } from "../Input";
import Logo from "../Logo";
import { Row, Div, RowWrapper } from "./NavBarStyled";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../constants";
import { useNavigate } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { Grid } from "@mui/material";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart= JSON.parse(localStorage.getItem("cart"));

  const admin = JSON.parse(localStorage.getItem("profile"));

  console.log(admin);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: LOG_OUT });
    navigate("/login");
    // window.location.reload()
  };

  return (
    <Row className="navbar">
      <RowWrapper className="Row">
        
        <Grid container alignItems='center'>
        <Logo/>
        <div className="adminText">
          Admin
        </div>
        </Grid>

       
      
          
          {admin ? (
            <div style={{display:'flex', alignItems:'center'}}>
              {/* <Link to={`/admin/${admin?.admin?._id}`}>
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faUserAlt}
                ></FontAwesomeIcon>
              </Link> */}
              <Button
                as="a"
                href="/logout"
                bg="white"
                log="logout"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button as="a" href="/login" bg="white">
              Login
            </Button>
          )}
         
        
      </RowWrapper>
    </Row>
  );
};

export default NavBar;
