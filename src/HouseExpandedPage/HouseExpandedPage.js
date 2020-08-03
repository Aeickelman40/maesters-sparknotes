import React, { Component} from 'react';
import './HouseExpandedPage.css';
import CommentForm from '../CommentForm/CommentForm';
import { getBaratheonData, getLannisterData, getStarkData, getTargaryenData, getTullyData } from '../apiCalls';


class HouseExpandedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houseData: {}
        }
    }

    componentDidMount = async () => {
        if (this.props.houseId === '7') {
           let baratheonData = await getBaratheonData(); 
            this.setState({
                houseData: baratheonData
            })
        }
        else if (this.props.houseId === '9') {
            let lannisterData = await getLannisterData();
            this.setState({
                houseData: lannisterData
            })
        }
        else if (this.props.houseId === '2') {
            let starkData = await getStarkData();
            this.setState({
                houseData: starkData
            })
        }   
        else if (this.props.houseId === '8') {
            let targaryenData = await getTargaryenData();
            this.setState({
                houseData: targaryenData
            })
        }
        else if (this.props.houseId === '5') {
            let tullyData = await getTullyData();
            this.setState({
                houseData: tullyData
            })
        }
    }

    render() {
        // console.log(this.state)
        return (
            <section className= "expanded-main">
                <h1>House Name: {this.state.houseData.name}</h1>
                <h1>Region: {this.state.houseData.region}</h1>
                <h1>House Titles: {this.state.houseData.titles}</h1>
                <h1>House Motto: {this.state.houseData.words}</h1>
                <h1>Current Locations of Power: {this.state.houseData.seats}</h1>
                <CommentForm />
            </section>
        )
    }
}


export default HouseExpandedPage;