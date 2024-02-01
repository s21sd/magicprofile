import { useState, useEffect } from "react"
import axios from "axios"
import { useData } from "./Dataprovider";
const Apicall = ({ leetCode, codeChef }) => {

    const { setGlobalData } = useData();
    // const [name, setName] = useState('');

    // For leetcode
    useEffect(() => {
        if (leetCode) {
            axios.get(`https://leetcodestats.cyclic.app/${leetCode}`)
                .then((res) => {
                    console.log(res);
                    // setName(res.data.data);
                    setGlobalData(res.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        if (codeChef) {
            axios.get(`https://codechef-api.vercel.app/${codeChef}`)
                .then((res) => {
                    console.log(res.data.data)
                }).catch((err) => {
                    console.log(err);
                })
        }

    }, [leetCode, codeChef, setGlobalData])

    return (
        <div>

        </div>
    )
}

export default Apicall