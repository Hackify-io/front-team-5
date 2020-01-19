import React, { Component } from 'react';
import Axios from 'axios';


export default class CreateCampaign extends Component {

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
        await this.setState({id:idc});
        this.getCampaignData();
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
        })
    }



    navigateUpdated = async () => {
        await this.props.history.push("/updated/"+ this.state.id)
    }

    

    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    onObjectiveChange = (e) => {
        this.setState({ objective: e.target.value })
    }

    onCategoryChange = (e) => {
        this.setState({ special_ad_category: e.target.value })
    }

    onBudgetChange = (e) => {
        this.setState({ daily_budget: e.target.value })
    }

    onTimeChange = (e) => {
        this.setState({ time: e.target.value })
    }

    onStatusChange = (e) => {
        this.setState({ status: e.target.value })
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await Axios.put("http://localhost:4000/api/campaign/" + this.state.id , {
            name: this.state.name,
            objective: this.state.objective,
            special_ad_category: this.state.special_ad_category,
            daily_budget: this.state.daily_budget,
            start_time: this.state.start_time,
            status: this.state.status
        });
        const timer = setTimeout(() => {
            this.navigateUpdated();
          }, 1000);
        

    }


    render() {
        return (
            <div className="row">

                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card card-body">
                    Actualizar campaña
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <input type="text" placeholder="Nombre de la campaña :" value={this.state.name}  className="form-control input-cool" onChange={this.onNameChange} />
                                <input type="text" placeholder="Monto diario para la campaña" value={this.state.daily_budget} className="form-control input-cool" onChange={this.onBudgetChange} />
                                <input type="text" placeholder="Tiempo de inicio (dd - mm- aaaa)" value={this.state.start_time} className="form-control input-cool" onChange={this.onTimeChange} />
                                <input type="text" placeholder="Estado" className="form-control input-cool" value={this.state.status} onChange={this.onStatusChange} />
                                <select name="objetivos" value={this.state.objective} className="form-control input-cool" onChange={this.onObjectiveChange}>
                                    <option value="PAGE_LIKES">---</option>
                                    <option value="PAGE_LIKES">Likes para la página</option>
                                    <option value="PAGE_LIKES">Likes para la página</option>
                                    <option value="PAGE_LIKES">Likes para la página</option>
                                </select>
                                <select name="objetivos" value={this.state.special_ad_category} className="form-control input-cool" onChange={this.onCategoryChange}>
                                    <option value="EMPLOYMENT">---</option>
                                    <option value="EMPLOYMENT">EMPLOYMENT</option>
                                    <option value="EMPLOYMENT">EMPLOYMENT</option>
                                    <option value="EMPLOYMENT">EMPLOYMENT</option>
                                </select>
                            </div>

                            <div className="card-buttons-container">
                                <button className="btn btn-primary btn-cool-large">
                                    Actualizar
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
                <div className="col-md-4"></div>

            </div>
        )
    }
}
