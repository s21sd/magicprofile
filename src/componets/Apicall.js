import { useState, useEffect } from "react"
import axios from "axios"
import { useData } from "./Dataprovider";
const Apicall = ({ props }) => {

    const { setGlobalData } = useData();
    const [name, setName] = useState('');

    // For leetcode
    useEffect(() => {
        if (props) {
            axios.get(`https://leetcodestats.cyclic.app/${props}`)
                .then((res) => {
                    console.log(res);
                    setName(res.data.data);
                    setGlobalData(res.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }, [props, setGlobalData])

    return (
        <div>

        </div>
    )
}

export default Apicall