import React from "react";
import styles from "./components/styles/form.module.css";
import VideoplayerApp from "./components/VideoplayerApp";


class Form extends React.Component{
  state = {
/*     search: "", */
    showVideo: false,
  }

handleChange = (e) => {
  const {name, value} = e.target;
  this.setState({[name]: value});

}
submitForm = (e) => {
  e.preventDefault();
  e.target.reset();
  this.setState({showVideo: true})
}
  render() {
    const {search, showVideo} = this.state ;

    return(
      <>
      <form className={styles.form} onSubmit={this.submitForm}>
        <input
        type="text"
        name="search"
        placeholder="введите текст"
        onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
      <br/>
      {showVideo && (
        <VideoplayerApp search={search}/>
      )}
      </>
    )
  }
}

export default Form;