import '../styles/index.scss';
import Recipes from './Recipes';


const App = () => {
    return (
        <>
            <section className='hero'>
                <main>
                    <section>
                        <h1>Hi from react</h1>
                    </section>
                </main>
            <Recipes />
            </section>
        </>
    );
};

export default App;