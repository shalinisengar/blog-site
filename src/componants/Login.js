import { useState } from "react"
import { Box, Button, styled, TextField, Typography } from "@mui/material"

const Component = styled(Box)`
width:400px;

margin:auto;
// margin-top:10px;
box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width: 160,
    margin: 'auto',
    display: 'flex',
    padding: '10px 0 0'
})
const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
&> div,& button, & p {
margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#fd641b;
// height:44px;
border-redius:2px;

`
const Signupbtn = styled(Button)`
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);`

const Login = () => {
    const [account,setAccount] = useState('login');
    const toggleSignup =()=>{
      account === 'signup'?setAccount('login'):setAccount('signup')
    }
    // const toggleSignin =()=>{
    //     setAccount('login');
    // }
    return (
        <Component>
            <Image src="https://t4.ftcdn.net/jpg/03/00/93/43/360_F_300934341_fbvmel94eNcgU7FqyhfkdficuDAKLLNq.jpg" alt="login" />
            {account === 'login' ?
                <Wrapper>
                    <TextField variant="standard" label="Enter Username" />
                    <TextField variant="standard" label="Enter Password" />
                    <LoginButton variant="contained">Login</LoginButton>
                    <Typography>OR</Typography>
                    <Signupbtn onClick={()=>toggleSignup()}>Create an account</Signupbtn>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" label="Enter Name" />
                    <TextField variant="standard" label="Enter Email Id" />

                    <TextField variant="standard" label="Enter Password" />
                    <Signupbtn >SignUp</Signupbtn>
                    <Typography>OR</Typography>
                    <LoginButton variant="contained" onClick={()=>toggleSignup()}>Already have an account</LoginButton>
                </Wrapper>
            }
        </Component>
    )
}
export default Login