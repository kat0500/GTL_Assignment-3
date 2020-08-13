import React, {Component} from 'react';

class Navi extends React.Component{
  render(){
        return(
            <div>
            
            <nav class="navbar">
              <div class="container">
                <a href="#">Hulk</a>
                {/* <!-- Currently Active --> */} 
                <a href="#" class="logo is-active">Mavel</a>
                <a href="#">Venom</a>
              </div>
            </nav>
            </div>
        );
    }
}
export default Navi