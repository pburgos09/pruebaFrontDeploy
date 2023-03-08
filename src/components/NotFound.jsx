import {useNavigate} from "react-router-dom";

const NotFound = () => {

// const navigate = useNavigate()

  return (
    <div>
        <p> 404 - Not Found </p>
        <button class={"button is-primary"} onClick={()=> navigate("/")}>Back to Home</button>
    </div>
  )
}

export default NotFound