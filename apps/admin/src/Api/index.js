import axios from "axios";
const Api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTFjMGFiOTUxMGU2ZmFmN2I2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQwODU5MiwiZXhwIjoxNjQxMDEzMzkyfQ.yFXYoQcURw_y6jofBNysNQEQL-rgX5fTL1FHZbbfa50"
    }
});


export default Api;