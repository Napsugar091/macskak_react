import {useEffect, useState} from "react";

function Macskak() {
    const [macskak, setMacskak] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:9000/macskak')
        .then(response => response.json())
        .then(data => setMacskak(data))
    }, [])
    return (
        macskak.map((macska, index) => (
            <div key={index}>
                <h1>
                    {macska.id}
                </h1>
                <h2>
                    {macska.name}
                </h2>
                <h2>
                    {macska.country}
                </h2>
                <img className="kep" src={macska.kepUrl} alt={macska.id}/>
                <p>
                    {macska.description}
                </p>
            </div>
        ))
    );
}
export default Macskak;