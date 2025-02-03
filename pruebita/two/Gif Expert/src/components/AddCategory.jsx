import React, { useState } from 'react';

//"Recuperamos" el estado que seteamos en el componente principal
const AddCategory = ({ setCategory }) => {
    //Estado que actualiza el valor del input
    const [value, setValue] = useState("");

    //Estado para actualizar el error de un campo vacio
    const [error, setError] = useState(false);

    const searchGif = e => {
        e.preventDefault();

        if (value === "") {

            setError(true); //Mostramos el error

            return; //Le decimos que pare de ejecutar la funcion
        }
        setError(false);
        setCategory(value); // Actualizar la categoría en el estado principal
        setValue(""); // Limpiar el input
    }

    return ( 
        <>
            {/* Creamos una funcion para el form, el cual detiene la recarga de la pagina y verifica si el value esta vacio */}
            <form onSubmit={ searchGif }>
                {/* seteamos el estado de setvalue para actualizar el dato ingresado */}
                {/* Seteamos el valor de "value" para que limpie el input */}
                <input type="text" placeholder="Buscar..." onChange={e => setValue(e.target.value)}  value={value}/>
            </form>
            {/* verificamos si el error existe, si es asi le decimos que nos muestre el siguiente mensaje */}
            {error ? <p className="error">El campo no puede estar vacio</p> : ""}
        </>
     );
}
 
export default AddCategory;