import { Box, Button, styled, TextField} from "@mui/material"

const Component = styled(Box)`
width:400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width: 160, 
    margin:'auto',
    display:'flex',
    padding:'10px 0 0'
})
const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
&> div,& button {
margin-top:20px;
}
`
const Login=()=>{
     
    return(
        <Component>
            <Image src="https://t4.ftcdn.net/jpg/03/00/93/43/360_F_300934341_fbvmel94eNcgU7FqyhfkdficuDAKLLNq.jpg" alt="login"/>
            <Wrapper>
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <Button variant="contained">Login</Button>
            <Button>Create an account</Button>
            
</Wrapper>
        </Component>
    )
}
export default Login