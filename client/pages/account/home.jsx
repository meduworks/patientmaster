'use strict';
const Moment = require('moment');
const React = require('react');



class HomePage extends React.Component {
    constructor(props) {

        super(props);

        this.state = this.getThisMoment();
    }

    componentDidMount() {

        this.interval = setInterval(this.refreshTime.bind(this), 1000);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    refreshTime() {

        this.setState(this.getThisMoment());
    }

    getThisMoment() {

        const thisMoment = Moment();

        return {
            second: thisMoment.format('ss'),
            minute: thisMoment.format('mm'),
            hour: thisMoment.format('HH'),
            day: thisMoment.format('DD'),
            month: thisMoment.format('MM'),
            year: thisMoment.format('YYYY')
        };
    }

    render() {

        return (
                <section className="section-home container">
                <div className="col-xs-12 col-sm-12">    
                    <h2>Basic Information</h2>
                    <br/>
                    <br/>
                        <form  className='form-horizontal'>
                            <div className="form-group">
                                 <div className="col-xs-1 col-md-1 text-right">
                                    <label htmlFor="usr" >Name:</label>
                                </div>
                                <div className="col-sm-8 col-md-8">
                                    <input type="text" className="form-control" id="usr"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-1 col-md-1 text-right">
                                    <label htmlFor="occupation">Occupation:</label>
                                </div>
                                <div className="col-sm-8 col-md-8">
                                    <input type="text" className="form-control" id="occupation"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-2 col-md-1 text-right">
                                    <label htmlFor="usr">Sex:</label>
                                </div>
                            <div className="col-sm-8 col-md-8">
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Male
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Female
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> Others
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-1 col-md-1 text-right">
                                        <label htmlFor="occupation">Allergies:</label>
                                    </div>
                                <div className="col-sm-4 col-md-2">
                                    <select className="form-control">
                                        <option>Drug</option>
                                        <option>Food</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                  <div className="col-sm-4 col-md-2 text-left">
                                     <label htmlFor="usr">Existing conditions:</label>
                                </div>
                                
                                <div className="col-sm-6 col-md-6">
                                    <ol>
                                    <li><textarea className="form-control" rows="1"></textarea></li>
                                    <li><textarea className="form-control" rows="1"></textarea></li>
                                    <li><textarea className="form-control" rows="1"></textarea></li>
                                    <li><textarea className="form-control" rows="1"></textarea></li> 
                                    </ol>
                                </div>
                            </div>
                            <div className="form-group">
                                    <div className="col-sm-4 col-md-2 text-left">
                                            <label htmlFor="usr">Major Health  Events:</label>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <ol>
                                        <li><textarea className="form-control" rows="1"></textarea></li>
                                        <li><textarea className="form-control" rows="1"></textarea></li>
                                        <li><textarea className="form-control" rows="1"></textarea></li>
                                        <li><textarea className="form-control" rows="1"></textarea></li> 
                                        </ol>
                                    </div>
                            </div>
                    </form>
                </div>
            </section>
        );
    }
}


module.exports = HomePage;
