import React from 'react'
import './card.css'
import axios from 'axios'

class Card extends React.Component {
    state = {
        instruct: []
    }
    componentDidMount() {
        const idu = 362328
        // console.log(idu)
        axios.get('https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses/' + idu + '/', { headers: { Authorization: 'Basic ZDRUUnpnS0pmTEtnTW16SFdMTXM5dmlFYTY0QWcySnNNOGEzOFpFbzo2UEppUUlENGdwcnJKNFZBZDRwVjV3RTVLb3Nac0NuYmQ4aGRhalFNdXRGd0xzRXh1MFlPSHk1ZzlJTDJhTkpKUHlKSEVFQjFsUU5mUFo0Z09YaFUxdEd1V1ZyOTF3eHdXYnJMVml3Q3FEVnRmWVRERDNSY0MyREpVNGpmazYzcQ==' } })
            .then(res => {
                console.log(res.data)
                // console.log(res.data.visible_instructors[1].title)
                this.setState({
                    instruct: res.data.visible_instructors

                })
            })
    }
render(){

    return (
      /////card
   
      
      <div className="container" >
          <h2>Créateurs de cours</h2>
                
             <div className="row">
            {/* <!-- Team member --> */}
            {this.state.instruct.map(item =>
            <div key={item.id} className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={item.image_100x100} alt={this.state.instruct.title} /></p>
                                    <h4 className="card-title">{item.display_name}</h4>
                                    <p className="card-text">{item.job_title}</p>
                                                             </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">{this.state.job_title}</h4>
                                    <p className="card-text">Ses publications is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              )}
    
        </div>
     
    </div>
    
    )
}


                
                 

}
    export default Card

