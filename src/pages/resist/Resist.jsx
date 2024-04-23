import { ThemeProvider } from "@emotion/react";
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Resist = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = new FormData(e.currentTarget);

    const member = {
      email: result.get("email"),
      password: result.get("password"),
      name: result.get("name"),
      nickname: result.get("nickname"),
      profileImageUrl: "default",
    };

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if (pattern.test(member.email) === false) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }
    if (member.name.length > 10) {
      alert("이름은 10글자 이내로 작성 바랍니다.");
      return;
    }
    if (member.nickname.length > 10) {
      alert("별명은 10글자 이내로 작성 바랍니다.");
      return;
    }
    if (member.password.length < 8) {
      alert("비밀번호는은 8글자 이상 작성 바랍니다.");
      return;
    }

    if (
      member.email.includes(" ") ||
      member.password.includes(" ") ||
      member.name.includes(" ") ||
      member.nickname.includes(" ")
    ) {
      alert(" 빈 공백은 포함될 수 없습니다.");
      return;
    }

    // 에러 처리 필요, 이메일 중복처리를 아예 별개로 할지 고민중.
  }

  return <>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <AccountBalanceIcon />
          <Typography component="h1" variant="h5" sx={{ fontWeight: "bold", ml: 1 }}>
            계좌 관리
          </Typography>
        </Box>
        <Typography>Sign Up to Get Started</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, alignItems: "center" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Name"
                name="name"
                required
                fullWidth
                id="name"
                label="name"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="nickname"
                label="nickname"
                name="nickname"
                autoComplete="nickname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button>
                dd
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container></>;
};
export default Resist;
