import React, { Component } from 'react';
import RisottoCard from '../../../components/RisottoCard';

class ShowTable extends Component {
    constructor(props) {
        super(props);
    }

    imagesRender = () => {
        var indents = [];
        for (var i = 0; i < 20; i++) {
            if (i % 2 == 0) {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status="busy" />
                );
            }
            else {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status="free" />
                );
            }
        }
        return indents;
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                {this.imagesRender()}
            </div>
        );
    }
}

export default ShowTable;
