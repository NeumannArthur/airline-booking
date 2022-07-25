import Axios from "axios";

const flightOutput = ({tripData}) => {
    console.log(tripData);
    return (
        <div>
            {tripData.suggestions.map((item) => {
                return (
                    <div>
                        <h1>{item.text}</h1>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await Axios.get("https://api.flightapi.io/place/62dee429ddfd5999cc5569f3/london");
    console.log(typeof data);
    // api Key: 62dee429ddfd5999cc5569f3
    
    return {
        props: {
            tripData: res.data,
        },
    };
}

export default flightOutput;