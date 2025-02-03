import React from 'react';
import useApi from '../hooks/useApi';
import ImageItem from './ImageItem';

const DisplayGifs = ({ category }) => {

    const url = ` https://api.giphy.com/v1/gifs/search?api_key=W7RdwRzxucLXygGiYqRDnQ4aib1yKVCn&q=${category}&limit=15`;

    // Devuelve dos valores: 'loading' ( solicitud en curso) y 'data' (la respuesta).
    const { loading, data } = useApi(url);

    return ( 
        <div className='container-gifs'>
            {
                 // Si 'loading' es true (datos cargados), mapea sobre 'data' y crea un componente ImageItem por cada GIF.
                 loading ?
                 data.map(img => (
                     // Se pasa una key única (img.id), el título y la URL del GIF a cada componente.
                     <ImageItem 
                         key={img.id} 
                         title={img.title} 
                         url={img.images.downsized_medium.url} 
                     />
                 ))
             :
                 // Si 'loading' es false, no muestra nada.
                 ''
         }
        </div>

     );
}
 
export default DisplayGifs;