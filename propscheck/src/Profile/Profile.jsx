import PropTypes from "prop-types";
const Profile = ({fullName,Bio,Profession,children}) => {

    const handleName=()=>alert(fullName)

    return ( 
        <div>
            <span>{children}</span>
           <h1>Name: {fullName}</h1> 
            <span style={{textAlign:"block", fontWeight:"bold", color:"black"}}>Bio: {Bio}</span> <br></br>
             <span style={{textAlign:"center", color:"black"}}>Profession: {Profession}</span>
             {handleName()}
            
        </div>
     );
}

Profile.defaultProps = {
    fullName:"input your name",
    Bio:"input your Bio",
    Profession:"input your "
}

Profile.propTypes= {
    fullName:PropTypes.string,
    Bio:PropTypes.string,
    Profession: PropTypes.string
}
 
export default Profile;