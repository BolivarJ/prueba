import { useEffect, useState } from "react";

const useApi = (url) => {

    const [data, setData] = useState(null);  // Estado para almacenar los datos recibidos de la API
    const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga

     // Función que realiza la solicitud a la API
    const fetchApi = () => {
        fetch(url) // Realiza la solicitud GET a la URL proporcionada
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                setLoading(true); // Cambia el estado de 'loading' a true (datos listos)
                setData(respuestaJson.data); // Guarda los datos de la API en el estado
                console.log(respuestaJson);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi(); // Llama a la función para obtener los datos        
    }, [url]) // El efecto se ejecuta cada vez que cambia la URL

    // Retorna los estados 'loading' y 'data' para ser utilizados en el componente que lo llame
    return { loading, data }
}
 
export default useApi;