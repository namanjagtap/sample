import React, {useState, useEffect} from "react"

export default function Husbandry(){

    const [info, setInfo] = useState([])

    const getData = () => {
        fetch('Data.json'
        ,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(myJson => setInfo(myJson))
    }
    useEffect(() => {
        getData();
    }, [])

    return(
        <>
        <table className="table" >
                    <thead>
                        <tr>
                            <th>Species_Name</th>
                            <th>Disease_Name</th>
                            <th>DiseaseSymptoms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map(item => (
                            <tr>
                                <td>{item.Species_Name}</td>
                                <td>{item.Disease_Name}</td>
                                <td>{item.DiseaseSymptoms}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
        </>
    )
}