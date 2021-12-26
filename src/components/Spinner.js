import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-3'>
                <img src={loading} alt="loading" />
                {/* <div class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-success" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-danger" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-warning" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-info" role="status">
                    <span class="sr-only"></span>
                </div>
                <div class="spinner-border text-dark" role="status">
                    <span class="sr-only"></span>
                </div> */}
            </div>
        )
    }
}
