import 'bulma/css/bulma.css'
import Card from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

export default function App(){
    const heading =    "Personal Digital Assistants "
    const amazon = "Alex is created by amazon"
    const micro = "createad by microsoft"
    const apple = "created by apple "

return(
<div>
    <section className='hero is-medium is-link'>
        <div className='hero-body'>
            <p className='title'>{heading}</p>
        </div>
    </section>
    <div className="container">
        <section className="section">
            <div className='columns'>
                <div className="column is-4">
                    <Card 
                    title="Alexa" 
                    handle="@Alexa99" 
                    image={AlexaImage}
                    desc={amazon}/>
                </div>
                <div className="column is-4" >
                    <Card 
                    title="cronota" 
                    handle="@cronta@22" 
                    image={CortanaImage}
                    desc={micro}/>
                </div>
                <div className="column is-4">
                        <Card 
                        title="Siri" 
                        handle="@siri@0" 
                        image={SiriImage}
                        desc={apple}/>
                </div>
            </div>
        </section>

    </div>
    
</div>


);
}