import React, {Component} from 'react'
import { connect } from 'react-redux';
import './SearchBox.css'

class SearchBox extends React.Component{

	listingCard = {}; 
	constructor(props){
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) =>{
		console.log(event.target.name);

		this.setState({[event.target.name] : event.target.value});
	}

	HandleSubmit = (event) =>{
		event.preventDefault();
		this.props.onSubmitSearch();
	}

	

	render () {
		return (
			<div className="search-wrap">
				<form className="advance_search" onSubmit={this.props.onSubmitSearch} onClick={this.HandleSubmit}>
					<div className="search-filter">
						<select name="Purpose" className="comboBox" name="purpose" onChange={this.handleChange}>
                            <option value="">Select Purpose</option>
							<option value = "1">For Sale</option>
							<option value = "2">To Rent</option>
						</select>
						<input type = "text" className="textInput mleft15" onChange={this.handleChange} name ="Location" placeholder ="Location"/>
						<select className="comboBox propertyType mleft15" name="propType" onChange={this.handleChange}>
                            <option value="">Select Property Type</option>
                            <option data-parent="Residential" data-name="مسکونی" data-prop="Residential" value="1">Residential</option>
                            <option data-parent="Residential" data-name="آپارتمان" data-prop="Apartments" value="4">Apartment</option>
                            <option data-parent="Residential" data-name="ویلا" data-prop="Villas" value="3">Villa</option>
                            <option data-parent="Residential" data-name="زمین" data-prop="Residential Plots" value="14">Residential Plot</option>
                            <option data-parent="Residential" data-name="ویلایی" data-prop="Houses" value="9">House</option>
                            <option data-parent="Residential" data-name="پنت هاوس" data-prop="Penthouses" value="18">Penthouse</option>
                            <option data-parent="Residential" data-name="مشارکتی" data-prop="Participatory Lands" value="27">Participatory Land</option>
                            <option data-parent="Residential" data-name="کلنگی" data-prop="Old Houses" value="28">Old House</option>
                            <option data-parent="Residential" data-name="مستغلات" data-prop="Real Estates" value="29">Real Estate</option>
                            <option data-parent="Residential" data-name="برج باغ" data-prop="Garden Towers" value="37">Garden Tower</option>
                            <option data-parent="Residential" data-name="برج" data-prop="Towers" value="38">Tower</option>
                            <option data-parent="Residential" data-name="سوئیت" data-prop="Suites" value="39">Suite</option>
                                                                                            
                        </select>

                        <input type = "text" className="textInput mleft15" onChange={this.handleChange} name ="price" placeholder ="Price"/>
                        <nav className="right">
					        <ul>
						        <li className="left m0">
						        	<button type='submit' className="button searchButton">Search</button>
						        </li>
					        </ul>
			        	</nav>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSearch: () => dispatch({type: 'SEARCH'})
    };
};

export default connect(null,mapDispatchToProps)(SearchBox);

// export default SearchBox;