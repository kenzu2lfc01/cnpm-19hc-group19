import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../assert/styles/style.scss'

export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSelect: 0,
        }
    }
    render() {
        var { items } = this.props;
        var { onSelect } = this.state;

        return (
            <>
                <div class="sidebar">
                    {this.showItems(items)}
                </div>
                {this.renderByItem(onSelect)}
            </>
        )
    }

    showItems = (items) => {
        var { onSelect } = this.state;
        var elements = [];
        for (var i = 0; i < items.length; i++) {
            let index = i;
            if (onSelect == i) {
                elements.push(
                    <a className="active">{items[i]}</a>
                )
                continue;
            }
            elements.push(
                <a onClick={() => this.onSelectItem(index)}>{items[i]}</a>
            )
        }
        return elements;
    }

    renderByItem = (index) => {
        var { ManageStaff } = this.props;
        switch (index) {
            case 0:
                return <div style={{ marginLeft: "20%" }}>Thống kê doanh thu </div>
            case 1:
                return <ManageStaff />
        }
    }

    onSelectItem = (index) => {
        this.setState(
            { onSelect: index }
        )
    }
}