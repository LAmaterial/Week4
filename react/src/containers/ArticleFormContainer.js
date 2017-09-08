import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTitleChange(event) {
    this.setState({ articleTitle: event.target.value })
    console.log(this.state.articleTitle)
  }

  handleBodyChange(event) {
    this.setState({ articleBody: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      title: this.state.articleTitle,
      body: this.state.articleBody,
    }
    this.props.addNewArticle(formPayload)
  }


  render() {
    return(
      <form className="new-article-form callout" onSubmit={this.handleSubmit}>
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          handleChange={this.handleTitleChange}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          handleChange={this.handleBodyChange}
        />

        <div className="button-group">
          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit"  />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
