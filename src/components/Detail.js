import React from 'react';
import axios from 'axios'

class Detail extends React.Component {
    state = {
        courses: [],
        inst:[]
    }
  
    componentDidMount() {
        const idu=874012
console.log(idu)
        axios.get('https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses/' + idu + '/', { headers: { Authorization: 'Basic ZDRUUnpnS0pmTEtnTW16SFdMTXM5dmlFYTY0QWcySnNNOGEzOFpFbzo2UEppUUlENGdwcnJKNFZBZDRwVjV3RTVLb3Nac0NuYmQ4aGRhalFNdXRGd0xzRXh1MFlPSHk1ZzlJTDJhTkpKUHlKSEVFQjFsUU5mUFo0Z09YaFUxdEd1V1ZyOTF3eHdXYnJMVml3Q3FEVnRmWVRERDNSY0MyREpVNGpmazYzcQ==' } })
            .then(res => {
                console.log(res)
                // console.log(res.data.visible_instructors[1].title)
                this.setState({
                    courses: res.data
                
                })
                this.setState({
                    inst : res.data.visible_instructors
                })

            })


    }


    render() {
console.log(this.state.courses.length)
// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// const average = euros.reduce((total, amount, index, array) => {
//     total += amount;
//     if( index === array.length-1) { 
//       return total/array.length;
//     }else { 
//       return total;
//     }
//   });
        return (

            <div>
              
            <div className="bod">
            <h2>Detail cours</h2>
                <div className="d-flex justify-content-around mb3  cadre">
                    <div>
                        <img src={this.state.courses.image_480x270} alt="" />
                    </div>
                    <div>
                        {/* <h5>ID:{this.state.courses.id}</h5> */}

                        <h5>{this.state.courses.title}</h5>
                        <h5>{this.state.courses.price}</h5>
                        {/* <h5>Titre:{this.state.courses.price}</h5>
                        <h5>Titre:{this.state.courses.price}</h5>
                        <h5>Titre:{this.state.courses.price}</h5> */}

                        {/* <h5>Lien:<a href={this.state.courses.url} >Cliquer ici </a> </h5> */}
                        
                     < h5> Ecrit par: </h5>
                        <h6>{this.state.inst.map(item =><p key={item.id} >{item.title}</p>)} </h6>
                      
                        {/* <h5>  {this.state.courses.visible_instructor[0].title} </h5> */}
                    </div>
                </div>
               
            </div>
           
            
</div>


        )
    }
}

export default Detail