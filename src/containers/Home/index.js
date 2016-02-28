import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';
import { Projects } from 'components/Projects';

/* actions */
import * as actionCreators from 'actions/infoGame';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

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
