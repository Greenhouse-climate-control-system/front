import React, { Component } from 'react'
import {JSON_temp,JSON_earth,JSON_wat} from './api'
import {} from './data'
import { Input } from 'InputComponent'
export default class Parent extends React.Component {


    constructor (props) {
        super(props)
        this.state = { 
            fastdata: data, 
            Tcurrent: Td1+Td2+Td3,Tprecurrent: 0,Wcurrent: 0,Wprecurrent: 0,Ecurrent: 0,Eprecurrent: 0,
    }   }

    microblocks = (_mdata) => {

    datatemp = (Tcurrent) => {
        let fastdata = this.state.fastblock
        if (data(Tcurrent) === JSON_temp ) return
        if (data(Tcurrent)!=Tprecurrent === Tcurrent ) return
    
        this.setState({fastblock: fastdata, Tcurrent: this.state.Tcurrent})
        datas(Tprecurrent)
    }
    
    datawat = (Wcurrent) => {
        let fastdata = this.state.fastblock
        if (data(Wcurrent) === JSON_wat ) return
        if (data(Wcurrent)!=Wprecurrent === Wcurrent ) return
    
        this.setState({fastblock: fastdata, Tcurrent: this.state.Wcurrent})
        datas(Wprecurrent)
    }

    datatemp = (Ecurrent) => {
        let fastdata = this.state.fastblock
        if (data(Ecurrent) === JSON_earth ) return
        if (data(Ecurrent)!=Eprecurrent === Ecurrent ) return
    
        this.setState({fastblock: fastdata, Ecurrent: this.state.Ecurrent})
        datas(Eprecurrent)
    }

}



bigtempblocks = (_btbdata) => {

    Td1 = (index) => {

        let fastdata = this.state.fastblock
        let Tcurrent = this.state.current
        (Td1(JSON_temp)) 
        if (JSON_temp[index] === "overload") return
        if (data(Tcurrent)!=Tprecurrent === Tcurrent ) return
        this.setState({fastblock: fastdata, Tcurrent: this.state.Tcurrent})
        datas(Tprecurrent)
        this.setState({fastblock: fastdata, current: this.state.current})
        overload(fastdata)
    }
    
    Td2 = (index) => {

        let fastdata = this.state.fastblock
        let Tcurrent = this.state.current
        (Td2(JSON_temp)) 
        if (JSON_temp[index] === "overload") return
        if (data(Tcurrent)!=Tprecurrent === Tcurrent ) return
        this.setState({fastblock: fastdata, Tcurrent: this.state.Tcurrent})
        datas(Tprecurrent)
        this.setState({fastblock: fastdata, current: this.state.current})
        overload(fastdata)
    }
    
    Td3 = (index) => {

        let fastdata = this.state.fastblock
        let Tcurrent = this.state.current
        (Td3(JSON_temp)) 
        if (JSON_temp[index] === "overload") return
        if (data(Tcurrent)!=Tprecurrent === Tcurrent ) return
        this.setState({fastblock: fastdata, Tcurrent: this.state.Tcurrent})
        datas(Tprecurrent)
        this.setState({fastblock: fastdata, current: this.state.current})
        overload(fastdata)
    }

   
 


  state = {
    InputCallState: false
  }

  inputStateHandler = () => {
    this.setState({
      inputCallState: true
    })
  }
  render() 
    return (
      <div>
        <button onClick={this.inputStateHandler}></button>
        {this.state.inputCallState ? <Input /> : null}
      </div>
    )
  }
}

