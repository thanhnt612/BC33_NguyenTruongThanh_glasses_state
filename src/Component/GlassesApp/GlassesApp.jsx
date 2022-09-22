import React, { Component } from 'react'
const glass = [
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

export default class GlassesApp extends Component {
    state = {
        glassDetail: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    changeGlasses = (click) => {
        this.setState({
            glassDetail: click
        })
    }
    renderProduct = () => {
        return glass.map((prod, index) => {
            return <div className="col item p-4 text-center" key={index}>
                <img src={prod.url} alt="" width={180} height={80}
                    onClick={() => { this.changeGlasses(prod) }} />
            </div>
        })
    }
    render() {
        let { name, url, desc } = this.state.glassDetail
        return (
            <div className='container'>
                <h3 className='title'>TRY GLASSES APP ONLINE</h3>
                <div className="row">
                    <div className="col-5 model">
                        <div className="thumbnail">
                            <img src="./img/model.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="glass">
                                <img src="./img/v1.png" alt="" width={250} height={70} />
                            </div>
                            <div className="detail">
                                <h3>FENDI F8750</h3>
                                <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 model">
                        <div className="thumbnail">
                            <img src="./img/model.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="glass">
                                <img src={url} alt="glasses" width={250} height={70} />
                            </div>
                            <div className="detail">
                                <h3>{name}</h3>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="glasses">
                    <div className="row">
                        {this.renderProduct()}
                    </div>
                </div>
            </div>
        )
    }
}
