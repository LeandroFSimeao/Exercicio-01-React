import Article from '../Article';
import Sidebar from '../Sidebar';
import './Corpo.css'

const Corpo = () => {
    return (
        <>
            <div className='main'>
                <div className='corpo'>
                <Article />
                <Article />
                <Article />
                </div>
                
                <Sidebar />
            </div>
            
        </>
    )
}

export default Corpo;