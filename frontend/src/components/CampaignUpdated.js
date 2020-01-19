import React, { Component } from 'react';
import Axios from 'axios';


export default class CampaignUpdated extends Component {

    state = {
        id: "",
        name: "",
        objective: "",
        special_ad_category: "",
        daily_budget: "",
        start_time: "",
        status: ""

    }

    componentDidMount = async () => {
        const idc = this.props.match.params.id
        await this.setState({ id: idc });
        await this.getCampaignData();
        console.log(this.state.name);
    }

    getCampaignData = async () => {
        const res = await Axios.get("http://localhost:4000/api/campaign/" + this.state.id);
        this.setState({
            name: res.data.name,
            objective: res.data.objective,
            special_ad_category: res.data.special_ad_category,
            daily_budget: res.data.daily_budget,
            start_time: res.data.start_time,
            status: res.data.status
        });
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card">

                        <img className="card-img-top" src="https://www.mindalatech.com/wp-content/uploads/2017/01/campaign_700x500_icon_340x340.png" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Campaña actualizada</h5>
                            <h5 className="card-title">{this.state.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Objetivo : {this.state.objective}</li>
                            <li className="list-group-item">Categoria : {this.state.special_ad_category}</li>
                            <li className="list-group-item">Presupuesto diario : {this.state.dailty_budget}</li>
                            <li className="list-group-item">Fecha de inicio : {this.state.start_time} </li>
                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}
