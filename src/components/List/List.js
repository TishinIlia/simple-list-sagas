import React, { Component } from "react";
import { listRequest } from "../../modules/List";
import { connect } from "react-redux";
import styles from './List.module.scss'
const ListDispatchToProps = { listRequest };

class List extends Component {
  componentDidMount() {
    this.props.listRequest();
  }
  render() {
    const {isLoading, result, listRequest} = this.props;
    return (
      <section className={`container grid-xl ${styles.main}`}>
        <header className="navbar">
          <section className="navbar-section">
            <a href="https://www.linkedin.com/in/tishin/" className="btn btn-link">LinkedIn</a>
            <a href="https://www.facebook.com/" className="btn btn-link">Facebook</a>
          </section>
          <section className="navbar-center">
            <h1>Tishin Ilya</h1>
          </section>
          <section className="navbar-section">
            <a href="https://github.com/TishinIlia" className="btn btn-link">GitHub</a>
          </section>
        </header>
        <main className={`${styles.main}`}>
          <h2 className={`text-center`}>List example</h2>
          {
            isLoading
              ?
              <div>
                <div className="loading loading-lg"/>
              </div>
              :
              <div>
                {
                  result != null &&
                  <ul className={`${styles.list}`}>
                    {
                      (result.data.length)
                        ?
                        result.data.map((item) => <li key={item.id}><b>{item.name}</b></li>)
                        :
                        <h3 className={`text-gray`}>List is empty</h3>
                    }
                  </ul>
                }
                <button className={`btn btn-primary`} onClick={listRequest}>Reload <i className="icon icon-refresh"/></button>
              </div>
          }
        </main>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.list.isLoading,
  result: state.list.result
});

export default connect(
  mapStateToProps,
  ListDispatchToProps
)(List);
