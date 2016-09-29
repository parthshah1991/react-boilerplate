import React, { Component } from 'react';
import Test from '../Test/Test';
import styles from './App.scss';

export default class App extends Component {
    render() {
    	const name = 'parth'
        return (
        	<div className={styles.app}>
        		<div className="something">Some test</div>
                <Test
                    name={name}
                ></Test>
        	</div>
        );
    }
}

