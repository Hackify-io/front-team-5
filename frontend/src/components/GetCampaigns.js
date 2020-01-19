import React, { Component, Switch } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import adsSdk from 'facebook-nodejs-business-sdk';
const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'EAACUVcv1q9QBALXB5IqMNoEDS3ZCfP4rTYZAqAcoh6xDI4PSlo3ZCegGKj5ZBZA3KDFBzFrCsHsphWGvg9uzIj9ZAykzbA3cM07tdfFsALprxZAHAkcK28fqavUfil3xDLvv1qSQxPWUmS6ZCv27Ef2eZAFzXQoiMduaqw1yZBMjaTevlFyQrq5FZCGYvKjdLCa00nSF0rLLveB8xleheQdId2Q';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const account = new AdAccount('act_290660258559648');


export default class GetCampaigns extends Component {

    state = {
        campaigns: [],
        idcamp: ""
    }



    componentDidMount = async () => {
        this.getCampaigns();
    }

    getCampaigns = async () => {
        const res = await axios.get("http://localhost:4000/api/campaign");
        this.setState({ campaigns: res.data });
    }

    deleteCampaign = async (idc) => {
        console.log(idc);
        await axios.delete("http://localhost:4000/api/campaign/" + idc);
        this.getCampaigns();
        await this.navigateDeleted();
    }

    navigateDeleted = async () => {
        this.props.history.push("/");
    }



    render() {
        return (
            <div className="row">

                {
                    this.state.campaigns.map((camp, i) =>
                        <div className="col-md-4" key={camp.id}>
                            <div className="card">

                                <img className="card-img-top" src="https://www.mindalatech.com/wp-content/uploads/2017/01/campaign_700x500_icon_340x340.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{camp.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Objetivo : {camp.objective}</li>
                                    <li className="list-group-item">Categoria : {camp.special_ad_category}</li>
                                    <li className="list-group-item">Presupuesto diario : {camp.dailty_budget}</li>
                                    <li className="list-group-item">Fecha de inicio : {camp.start_time} </li>
                                </ul>
                                <div className="card-body card-buttons-container">
                                    <Link to={"/edit/" + camp.id} className="btn btn-primary btn-cool col-5">Editar</Link>
                                    <button to="/" onClick={() => this.deleteCampaign(camp.id)} className="btn btn-danger btn-cool col-5">Eliminar</button>
                                </div>

                            </div>

                        </div>)}

            </div>
        )
    }
}
