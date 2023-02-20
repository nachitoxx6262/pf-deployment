
import { Typography,Box,Button} from "@mui/material";
import AboutCards from "../blueprints/AboutCards/AboutCards";
import Link from "react-router-dom";
const About = () => {
  return (
    <Box bgcolor="#D5DBDB" padding="5rem" height="100%" minHeight="100vh" sx={{backgroundAttachment: 'fixed', backgroundSize: 'cover'}}>
       <div >
        <Link to="/" style={{"textDecoration":"none"}}>
        <Button color="success" variant="outlined" sx={{fontWeight:"bold"}}>Volver al Home</Button>
        </Link>
      </div>
      <Box>
        <Typography
          variant="h1"
          color="#1E8449"
          fontFamily={"Sen"}
          align="center"
          fontWeight="bold"
        >
          Sobre Nosotros
        </Typography>
        <Typography
          variant="body1"
          color="black"
          fontFamily={"Sen"}
          align="center"
          marginBottom="20px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      <AboutCards />
    </Box>
  );
};

export default About;
