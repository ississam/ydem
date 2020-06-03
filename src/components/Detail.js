import React from 'react';
import axios from 'axios';
import './Detail.css'

class Detail extends React.Component {
    state = {
        courses: [],
        inst:[]
    }
    componentDidMount() {
        const idu=362328
        
// console.log(idu)
        axios.get('https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses/' + idu + '/', { headers: { Authorization: 'Basic ZDRUUnpnS0pmTEtnTW16SFdMTXM5dmlFYTY0QWcySnNNOGEzOFpFbzo2UEppUUlENGdwcnJKNFZBZDRwVjV3RTVLb3Nac0NuYmQ4aGRhalFNdXRGd0xzRXh1MFlPSHk1ZzlJTDJhTkpKUHlKSEVFQjFsUU5mUFo0Z09YaFUxdEd1V1ZyOTF3eHdXYnJMVml3Q3FEVnRmWVRERDNSY0MyREpVNGpmazYzcQ==' } })
            .then(res => {
            
                this.setState({
                    courses: res.data
                })

                // console.log(this.state.courses)
                this.setState({
                    inst : res.data.visible_instructors
                })
            })
    }


    render() {


        return (
            <div>
              
            <div className="bod">
            <h2>Detail cours</h2>
                <div className="d-flex justify-content-around mb-3 cadre  p-4 ">
                    <div>
                    

                    <div class="row">
        <div >
          <div class="card">
              
          {/* {varpho=} */}
         <div class="card-img"><img src={this.state.courses.image_480x270} className="imgtaille"/></div> 
            
            <div class="card-body">
            <h6>Star Rating</h6>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
              <button type="button" class="btn btn-outline-danger btn-block btn-sm">Ajouter</button>
              <button type="button" class="btn btn-outline-danger btn-block btn-sm">Recommander</button>
            </div>
          </div>
        </div>
        </div>
                    </div>
                    <div>
                        <h3>{this.state.courses.title}</h3>
                        <h4>{this.state.courses.price}</h4>
                     < h4> crée  par: </h4>
                        <h5>{this.state.inst.map(item =><p key={item.id} >{item.title} -{item.job_title}</p>)} </h5>
                    </div>
                </div>
            </div>
</div>
        )
    }
}

export default Detail