import "./home.css"
import Logo from "../filosofia-ubuntu.jpg"

const Home = ()=>{
    return(
        <>
            <header>
                <h2 className="title">UBUNTU</h2>
            </header>
            <div className="wrapper">
                <h1>A filosofia Ubuntu</h1>
                <img src={Logo} alt="" />
                <p>A filosofia Ubuntu é originária do continente africano e, embora não haja uma tradução perfeita em língua portuguesa para a palavra, podemos entender como “minha existência está conectada à do outro”. A filosofia, em nossa sociedade, se manifesta de diversas formas.
Respeito, solidariedade e empatia. Colocar-se no lugar do outro e saber que ambos estão conectados, fazem parte de algo maior e dependem da cooperação para existir.</p>
            </div>
        </>
    )
} 

export default Home