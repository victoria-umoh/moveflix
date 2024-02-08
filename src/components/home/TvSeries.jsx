import React, { useState, useEffect } from 'react';
import AppURL from '../../api/AppURL';
import axios from 'axios';

// const TvSeries = () => {
//     const [seriesList, setSeriesList] = useState([]);

//     useEffect(() => {
//         const fetchSeries = async () => {
//             try {
//                 const response = await axios.get(AppURL.GetSeries);
//                 seriesList(response?.data?.results);
//             } catch (error) {
//                 console.error('Error fetching tv series:', error);
//             }
//         };

//         fetchSeries();
//     }, []);
//     console.log(seriesList);

//     const series = async ()={}
//     return (
//         <div>
//             <h2>Netflix Original Series</h2>
//             <ul>
//                 {seriesList && seriesList.map(series (
//                     <li key={series?.id}>
//                         <h3>{series?.key1}</h3>
//                         <h3>{series?.key2}</h3>
//                         <h3>{series?.seriesId}</h3>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TvSeries;

const TvSeries = () => {
    const [seriesList, setSeriesList] = useState([]);

    // const [seriesList, setSeriesList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/tvseries')
            .then(response => response.json())
            .then(data => setSeriesList(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Netflix Original Series</h2>
            <ul>
                {seriesList && seriesList.map(series => (
                    <li key={series.id}>
                        <h3>{series.key1}</h3>
                        <h3>{series.key2}</h3>
                        <h3>{series.seriesId}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
    // useEffect(() => {
    //     const fetchSeries = async () => {
    //         try {
    //             const response = await axios.get(AppURL.GetSeries);
    //             setSeriesList(response.data.results);
    //             console.log(AppURL.GetSeries);
    //         } catch (error) {
    //             console.error('Error fetching tv series:', error);
    //         }
    //     };

    //     fetchSeries();
    // }, []);

    // console.log(response.data.results);

    // return (
    //     <div>
    //         <h2>Netflix Original Series</h2>
    //         <ul>
    //             {seriesList && seriesList.map(series => (
    //                 <li key={series.id}>
    //                     <h3>{series.key1}</h3>
    //                     <h3>{series.key2}</h3>
    //                     <h3>{series.seriesId}</h3>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default TvSeries;
