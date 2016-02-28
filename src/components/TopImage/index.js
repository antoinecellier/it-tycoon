import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class TopImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
        const { company } = this.props;
    return (
      <section className={`${styles}`} ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h1 className="title">
                  {company.name}
                </h1>
                <p>
                  {company.creationDate}
                </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
