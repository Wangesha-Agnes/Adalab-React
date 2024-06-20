import './index.css'

const About = () => {
   return(
    <div>
    <ul id="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <a href='Login'><li><button id='button' >Login</button></li></a>
        </ul>
  
    {/* <p className="about-text">We are learning about ReactJs</p> */}
    </div>
   );
};

export default About;