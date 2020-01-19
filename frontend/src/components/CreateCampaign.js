import React, { Component } from 'react'
import Axios from 'axios'

export default class CreateCampaign extends Component {

    state = {
        name: "",
        objective: "",
        special_ad_category: "",
        daily_budget: "",
        start_time: "",
        status: ""

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

    onStatusChangecc = (e) => {
        console.log(e.target.value)
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await Axios.post("http://localhost:4000/api/campaign", {
            name: this.state.name,
            objective: this.state.objective,
            special_ad_category: this.state.special_ad_category,
            daily_budget: this.state.daily_budget,
            start_time: this.state.start_time,
            status: this.state.status
        });
        this.props.history.push("/");

    }

    render() {
        return (
            <div className="row">

                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card card-body">
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <input type="text" placeholder="Nombre de la campaña :" className="form-control input-cool" onChange={this.onNameChange} />
                                <input type="text" placeholder="Monto diario para la campaña" className="form-control input-cool" onChange={this.onBudgetChange} />
                                <input type="text" placeholder="Tiempo de inicio (dd - mm- aaaa)" className="form-control input-cool" onChange={this.onTimeChange} />
                                <input type="text" placeholder="Estado" className="form-control input-cool" onChange={this.onStatusChange} />
                                <select name="objetivos" className="form-control input-cool" onChange={this.onObjectiveChange}>
                                    <option value="PAGE_LIKES">---</option>
                                    <option value="PAGE_LIKES">Likes para la página</option>
                                    <option value="PAGE_LIKES">Likes para la página</option>
                                    <option value="PAGE_LIKES">Likes para la página</option>
                                </select>
                                <select name="objetivos" className="form-control input-cool" onChange={this.onCategoryChange}>
                                    <option value="EMPLOYMENT">---</option>
                                    <option value="EMPLOYMENT">EMPLOYMENT</option>
                                    <option value="EMPLOYMENT">EMPLOYMENT</option>
                                    <option value="EMPLOYMENT">EMPLOYMENT</option>
                                </select>
                            </div>

                            <div className="card-buttons-container">
                                <button className="btn btn-primary btn-cool-large">
                                    Guardar
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
