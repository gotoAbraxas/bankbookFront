import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import NavButtonChips from "../../common/NavButtonChips";

const MyHeader = () => {


    const isLogin = false;

    return <AppBar position="static" color="primary">
        <Toolbar>
            <Grid container>
                <Grid item xs={6}>
                    BankBook
                </Grid>
                <Grid item xs={6} >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Button color="info" size="medium" >
                                <Link to="/story">STORY</Link>
                            </Button>
                            <NavButtonChips text="로그인" color="info" to="test" />
                        </Box>
                        <Box>

                            {isLogin ? (
                                <>

                                </>
                            ) : (
                                <>
                                    <Button color="text" size="large">
                                        <Link to="/login">로그인</Link>
                                    </Button>

                                    <Button color="primary" size="large">
                                        <Link to="/signup">signup</Link>
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Toolbar>
    </AppBar >
}


export default MyHeader