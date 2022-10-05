import React from 'react'
import "./Account.css";

export default function Account() {
    return (
        <div className="account-container">
            <h1>Choose a subscription model</h1>
            <div className="scooteq-subscription-container">
                <ul>
                    <li>
                        <div className="scooteq-subscription-card-gold">
                            <ul>
                                <li><h2>ScooTeq Gold</h2></li>
                                <li><p>100 min free per month</p></li>
                                <li className="price-tag"><p>49.99€</p></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="scooteq-subscription-card-silver">
                            <ul>
                                <li><h2>ScooTeq Silver</h2></li>
                                <li><p>70 min free per month</p></li>
                                <li className='price-tag'><p>29.99€</p></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="scooteq-subscription-card-bronze">
                            <ul>
                                <li><h2>ScooTeq Bronze</h2></li>
                                <li><p>30 min free per month</p></li>
                                <li className="price-tag"><p>19.99€</p></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="scooteq-subscription-card-free">
                            <ul>
                                <li><h2>ScooTeq Free</h2></li>
                                <li><p>No benefits</p></li>
                                <li className="price-tag"><p>Free</p></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
