import './App.css'
import { useState } from 'react'

//Exportar la funcion


//Cual es la diferencia entre componente y elemento:
//un componenete es una factoria de elementos, una funcion que te devuelve un elemento
//el elemento es lo que renderiza react

//Las props deben ser inmutables 
//se puede utilizar children que seria el hijo del contenido que lo envuelve 

//Si una vez que tienes props y no las informas, pero quieres un valor por defectos Ej: userName=''

//renderizado condicional

//utilizar una prop para inicializar el estado del elemento debe ir siempre con el initial-nombre
export function TwitterFollowCard({ children, userName }) {
    //Como creamos un estado, hacer que el componente decida hay que importar un hooks llamado {useState}
    //Los Hooks te permite añadir cierta funcionalidad a los componentes de react o poder ejecutar codigo
    //Arbitrario cuando ocurre ciertas cosas en tus componentes o una funcionalidad para mejorar tus componentes

    //
    const [isFollowing, setIsFollowing] = useState(false)


    //renderizado condicional
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt="Avatar IO KIKOBEAST" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClasName} onClick={handleClick}>
                 
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )

}