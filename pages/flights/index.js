import Axios from "axios";

const secret = 'S5PGlKbSQfFjizHa';
const key = 'bGOuaUMr96iiVJXmsIA3j5wmd1aJEG6c';

const tokenOutput = ({token}) => {
    // console.log("the token: " + token);
    return (
        <div>
            {token.map((thing) => {
                return (
                    <div>
                        <h1>{thing}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export const getServerSideProps = async() => {
    const data = await Axios.get("https://test.api.amadeus.com/v1/security/oauth2/token/Content-Type=application/x-www-form-urlencoded/grant_type=client_credentials&client_id=bGOuaUMr96iiVJXmsIA3j5wmd1aJEG6c&client_secret=S5PGlKbSQfFjizHa");
    // console.log("res: " +  data);
    
    return {
        props: {
            token: data.data,
        },
    }
}

export default tokenOutput;