import React, { Component } from 'react'

const dataGlasses = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
export default class Glass extends Component {
    
    state ={
        spChiTiet:{
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlasses = ()=>{
        return dataGlasses.map((glass,index)=>{
            return   <div className='col-3' key={index}>
                <img onClick={()=>
                    this.infoGlass(glass)
                } height={100} className="w-100" src={glass.url} alt="..." />
            </div> 
        })
    }
infoGlass = (glassClick)=>{
console.log(glassClick)
this.setState({
    spChiTiet:glassClick
})
}

  render() {
    let{id,price,name,url,desc}=this.state.spChiTiet;
    return (
       <div className='container'>
        <h3 className='text-center'>TRY GLASSES APP ONLINE</h3>
            <div className='row'>
                <div className='col-6'>
                    <img src="./img/model.jpg" alt="" srcset="" />
                </div>
                <div className='col-6 card w-100' style={{ 
      backgroundImage: `url(./img/model.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover'
    }}>
                    <div className='model'>
                    <img src={url} alt="..." style={{position:'absolute',top:'32%',left:'29%',width:'230px',opacity:0.8}} />
                    </div>
                    <div className='info' style={{
                        position:'absolute',left:0 , bottom:0, width:'100%',backgroundColor:'orange',opacity:0.5,paddingLeft:'10px'
                    }}>
                        <p className='text-info' style={{fontSize:"30px"}}>{name}</p>
                        <p className='text-info' style={{fontSize:"30px"}}>{price}</p>
                        <p style={{color:"white",fontSize:'20px'}}>{desc}</p>
                    </div>
                </div>
                
            </div>
            <div className='row'>
            {this.renderGlasses()}
                
                
            </div>
       </div>
    )
  }
}
