import React, { Component } from 'react';
import Technology from '../../Components/Technology/Technology';
import Product from '../../Components/Product/Product';
import Thongso from '../../Components/Thongso/Thongso';
import Customersandpartners from '../../Components/Customersandpartners/Customersandpartners';
class Homebody extends Component {
    render() {
        return (
            <div className='grid'>
                <Technology/>
                <Product/>
                <Thongso/>
                <Customersandpartners/>
            </div>
        );
    }
}

export default Homebody;