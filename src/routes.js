import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header/index.js';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Routes = ()=>{
    return(
        <BrowserRouter>
         <Header/>
         <Switch>
           <Route path="/" exact component={Home}/>     
           <Route path="/filme/:id" exact component={Filme}/>     
           <Route path="/favoritos" exact component={Favoritos}/> 
           <Route path="*" exact component={Erro}/> 
         </Switch>
        </BrowserRouter>
    )
}
export default Routes;