import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';
import { Projects } from 'components/Projects';

/* actions */
import * as actionCreators from 'actions/infoGame';

@connect(
  state => state.infoGame,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage {...this.props} />
        <Tools {...this.props} />
      </section>
    );
  }
}
