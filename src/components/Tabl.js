import React from 'react'
import './Tabl.css'
import axios from 'axios'

class Tabl extends React.Component {
  state = {
    details: []
}
componentDidMount() {
    // const idu=874012

    axios.get('https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses/362328/public-curriculum-items/' , { headers: { Authorization: 'Basic ZDRUUnpnS0pmTEtnTW16SFdMTXM5dmlFYTY0QWcySnNNOGEzOFpFbzo2UEppUUlENGdwcnJKNFZBZDRwVjV3RTVLb3Nac0NuYmQ4aGRhalFNdXRGd0xzRXh1MFlPSHk1ZzlJTDJhTkpKUHlKSEVFQjFsUU5mUFo0Z09YaFUxdEd1V1ZyOTF3eHdXYnJMVml3Q3FEVnRmWVRERDNSY0MyREpVNGpmazYzcQ==' } })
        .then(res => {
            console.log(res.data.results)
            // [1]._class
            this.setState({
                details: res.data.results
            })
            
        })
}

render(){
    return (
      <div className="container  marge">
        <div class="row d-flex justify-content-center">
        <table class="table col-sm-8 ">
        <thead class="thead-light">
          <tr>
            <th scope="col">Contenu de cours</th>
          </tr>
        </thead>
        <tbody>
        {this.state.details.map(item =>
          <tr>
            <th  key={item.id}scope="row">
            {item._class=="chapter" ? <p>-{item.title} </p> : <p style={{color:"#b3d6de"}}>{item.title}</p>  }
            </th>

          </tr>
          )}
        </tbody>
      </table>
      </div>
      </div>
    )
}

}
    export default Tabl

