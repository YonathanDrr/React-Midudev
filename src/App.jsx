import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

//Exportar la funcion

//a los componentes no se le debe dar el margin si no a su contenedor para que no afecte la visualizacion
//individual de este si lo queremos usar solo en una parte,

//Puedes ustilizar el resOperaitor como objeto a una props
// const midudev = {:true,userName:'midu'}
// <TwitterFollowCard {...midudev} /> no es buena practica , pero se puede utilizar ya que el elemnto es grande

//Al cambiar el estado desde un nivel superior este propaga los cambios a sus children

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]




export function App() {
    //const formatUsername = (userName) => `@${userName}` -> Funcion pasada como props

    //Si utilizas una props para inicializar el estado, se inicializa una vez ,
    // no se reinicializa cada vez que la prop cambia, pero no es buena practica

    //forma de renderizar un array con sus propiedades 
    //utilizar la propiedad key para identificar el elemento debe ser unico, no utilizar index
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name} 
                    </TwitterFollowCard>
                ))
            }
        </section>
    )

}