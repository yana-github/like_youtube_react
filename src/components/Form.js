import React from "react";
import styles from "./styles/form.module.css";


class Form extends React.Component {
  state = {
    search: "",
    showVideo: false,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  submitForm = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ showVideo: true });
    this.props.request(this.state.search);
  };

  render() {
    const { search, showVideo } = this.state;
    console.log(search);
    

    return (
      <>
        <form onSubmit={this.submitForm}>
          <input className={styles.formInput}
            type="text"
            name="search"
            placeholder="введите текст"
            onChange={this.handleChange}
          />
          <button className={styles.formButton}>Search</button>
        </form>
      </>
    );
  }
}

export default Form;
