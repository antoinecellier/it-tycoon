import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

/* component styles */
import { styles } from './styles.scss';

export class Tools extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { name, creationDate } = this.props.company;
    this.props.initializeForm({
      name,
      creationDate
    })
  }

  onUpdate = (event) => {
    this.props.updateCompanyInfo(this.props.fields);
    event.preventDefault();
  }

  render() {
    const {
      fields: { name, creationDate }
    } = this.props;
    return (
      <section className={`${styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <form className={styles} onSubmit={this.onUpdate}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company name"
                    {...name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Company creation date"
                    {...creationDate}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-default" onClick={this.onUpdate}>
                    Update company info
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

Tools = reduxForm({
  form: 'updateCompanyInfo',
  fields: ['name', 'creationDate'],
  destroyOnUnmount: false
})(Tools)

export default Tools;
